"""Verify every pulse against local copies of the pinned Standard Ebooks editions.

Usage: python tests/verify-sources.py /path/to/editions
Each edition directory is named after its GitHub repository and contains either
src/epub/text/*.xhtml (a checkout) or *.xhtml (extracted text files).
"""
import json
from pathlib import Path
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

NS = {"x": "http://www.w3.org/1999/xhtml"}
REPO = Path(__file__).resolve().parent.parent
SOURCE_ROOT = Path(sys.argv[1])
quotes = json.loads(subprocess.check_output([
    "node", "-e",
    "const fs=require('node:fs'),vm=require('node:vm'),c=vm.createContext({});"
    "vm.runInContext(fs.readFileSync('Model.js','utf8'),c);"
    "console.log(JSON.stringify(c.QUOTES))"
], cwd=REPO, text=True))


def normalize(text):
    return " ".join(text.replace("\u2060", "").split())


def load(edition, filename):
    directory = SOURCE_ROOT / edition
    if (directory / "src/epub/text").exists():
        directory /= "src/epub/text"
    tree = ET.parse(directory / filename)
    # Endnote markers are editorial navigation, not part of the quotation.
    for parent in tree.iter():
        for child in list(parent):
            if child.get("{http://www.idpf.org/2007/ops}type") == "noteref":
                previous = list(parent).index(child) - 1
                if previous >= 0:
                    parent[previous].tail = (parent[previous].tail or "") + (child.tail or "")
                else:
                    parent.text = (parent.text or "") + (child.tail or "")
                parent.remove(child)
    return tree


for quote in quotes:
    numbers = [int(n) for n in re.findall(r"\d+", quote["locator"])]
    if quote["author"] == "Marcus Aurelius":
        book, paragraph = numbers
        tree = load("marcus-aurelius_meditations_george-long", f"book-{book}.xhtml")
        passage = tree.findall(".//x:body/x:section/x:p", NS)[paragraph - 1]
    elif quote["work"] == "The Enchiridion":
        tree = load("epictetus_short-works_george-long", "the-enchiridion.xhtml")
        passage = tree.find(f".//*[@id='the-enchiridion-{numbers[0]}']")
    elif quote["work"] == "Discourses":
        book, chapter, paragraph = numbers
        tree = load("epictetus_discourses_george-long", f"book-{book}.xhtml")
        section = tree.find(f".//*[@id='chapter-{book}-{chapter}']")
        passage = section.findall("x:p", NS)[paragraph - 1]
    else:
        slug = quote["work"].lower().replace(" ", "-")
        tree = load("seneca_dialogues_aubrey-stewart", slug + ".xhtml")
        passage = tree.find(f".//*[@id='{slug}-chapter-{numbers[0]}']")
    assert passage is not None, quote
    assert normalize(quote["text"]) in normalize("".join(passage.itertext())), quote

print(f"Verified all {len(quotes)} quotations and locators against pinned editions.")
