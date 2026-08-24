var QUOTES = [
  { text: "Let no act be done without a purpose, nor otherwise than according to the perfect principles of art.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 2" },
  { text: "Take away thy opinion, and then there is taken away the complaint, ‘I have been harmed.’ Take away the complaint, ‘I have been harmed,’ and the harm is taken away.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 8" },
  { text: "Do not have such an opinion of things as he has who does thee wrong, or such as he wishes thee to have, but look at them as they are in truth.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 12" },
  { text: "Many grains of frankincense on the same altar: one falls before, another falls after; but it makes no difference.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 16" },
  { text: "Do not act as if thou wert going to live ten thousand years. Death hangs over thee. While thou livest, while it is in thy power, be good.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 18" },
  { text: "Everything is only for a day, both that which remembers and that which is remembered.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 37" },
  { text: "It is no evil for things to undergo change, and no good for things to subsist in consequence of change.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 44" },
  { text: "Time is like a river made up of the events which happen, and a violent stream; for as soon as a thing has been seen, it is carried away, and another comes in its place.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 45" },
  { text: "Be like the promontory against which the waves continually break, but it stands firm and tames the fury of the water around it.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, section 51" },
  { text: "How easy it is to repel and to wipe away every impression which is troublesome or unsuitable, and immediately to be in all tranquility.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 5, section 2" },
  { text: "To seek what is impossible is madness: and it is impossible that the bad should not do something of this kind.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 5, section 17" },
  { text: "Look within. Let neither the peculiar quality of anything nor its value escape thee.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 3" },
  { text: "The best way of avenging thyself is not to become like the wrong doer.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 6" },
  { text: "If a thing is difficult to be accomplished by thyself, do not think that it is impossible for man.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 19" },
  { text: "If any man is able to convince me and show me that I do not think or act right, I will gladly change; for I seek the truth by which no man was ever injured.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 21" },
  { text: "It is a shame for the soul to be first to give way in this life, when thy body does not give way.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 29" },
  { text: "Adapt thyself to the things with which thy lot has been cast: and the men among whom thou hast received thy portion, love them, but do it truly, sincerely.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 39" },
  { text: "It is in our power to have no opinion about a thing, and not to be disturbed in our soul; for things themselves have no natural power to form our judgements.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 51" },
  { text: "Accustom thyself to attend carefully to what is said by another, and as much as it is possible, be in the speaker’s mind.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 52" },
  { text: "That which is not good for the swarm, neither is it good for the bee.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, section 53" },
  { text: "How many after being celebrated by fame have been given up to oblivion; and how many who have celebrated the fame of others have long been dead.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, section 6" },
  { text: "Let not future things disturb thee, for thou wilt come to them, if it shall be necessary, having with thee the same reason which now thou usest for present things.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, section 8" },
  { text: "Near is thy forgetfulness of all things; and near the forgetfulness of thee by all.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, section 21" },
  { text: "Retire into thyself. The rational principle which rules has this nature, that it is content with itself when it does what is just, and so secures tranquility.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, section 28" },
  { text: "Think of the country mouse and of the town mouse, and of the alarm and trepidation of the town mouse.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 11, section 37" },
  { text: "The art of life is more like the wrestler’s art than the dancer’s, in respect of this, that it should stand ready and firm to meet onsets which are sudden and unexpected.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, section 57" },
  { text: "Take care not to feel towards the inhuman, as they feel towards men.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, section 61" },
  { text: "Attend to the matter which is before thee, whether it is an opinion or an act or a word.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, section 23" },
  { text: "Thou sufferest this justly: for thou choosest rather to become good tomorrow than to be good today.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, section 24" },
  { text: "Receive wealth or prosperity without arrogance; and be ready to let it go.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, section 35" },
  { text: "Men exist for the sake of one another. Teach them then or bear with them.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, section 62" },
  { text: "He who does wrong does wrong against himself. He who acts unjustly acts unjustly to himself, because he makes himself bad.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, section 4" },
  { text: "Wipe out imagination; check desire; extinguish appetite; keep the ruling faculty in its own power.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, section 7" },
  { text: "Today I have got out of all trouble, or rather I have cast out all trouble, for it was not outside, but within and in my opinions.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, section 13" },
  { text: "It is thy duty to leave another man’s wrongful act there where it is.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, section 20" },
  { text: "If a man is mistaken, instruct him kindly and show him his error. But if thou art not able, blame thyself, or blame not even thyself.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 10, section 5" },
  { text: "No longer talk at all about the kind of man that a good man ought to be, but be such.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 10, section 18" },
  { text: "Have I done something for the general interest? Well then I have had my reward. Let this always be present to thy mind, and never stop doing such good.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 11, section 4" },
  { text: "Neither in writing nor in reading wilt thou be able to lay down rules for others before thou shalt have first learned to obey rules thyself. Much more is this so in life.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 11, section 44" },
  { text: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life.", author: "Epictetus", work: "The Enchiridion", locator: "Section 8" },
  { text: "As a mark is not set up for the purpose of missing the aim, so neither does the nature of evil exist in the world.", author: "Epictetus", work: "The Enchiridion", locator: "Section 27" },
  { text: "If you have assumed a character above your strength, you have neglected that which you might have fulfilled.", author: "Epictetus", work: "The Enchiridion", locator: "Section 37" },
  { text: "In walking about as you take care not to step on a nail or to sprain your foot, so take care not to damage your own ruling faculty.", author: "Epictetus", work: "The Enchiridion", locator: "Section 38" },
  { text: "See how tragedy is made when common things happen to silly men.", author: "Epictetus", work: "Discourses", locator: "Book 2, chapter 16, paragraph 5" }
]

function quoteCount() {
  return QUOTES.length
}

function quoteAt(index) {
  var value = Number(index)
  if (!isFinite(value) || value < 0 || value >= QUOTES.length) return null
  return QUOTES[Math.floor(value)]
}

function intervalMinutes(value) {
  var parsed = parseInt(String(value), 10)
  if (!isFinite(parsed)) parsed = 60
  return Math.max(5, Math.min(1440, parsed))
}

function boolSetting(value, fallback) {
  if (value === undefined || value === null) return fallback
  return value === true || value === 1 || String(value).toLowerCase() === "true"
}

function shuffledIndices(lastIndex) {
  var values = []
  for (var i = 0; i < QUOTES.length; i++) values.push(i)
  for (var j = values.length - 1; j > 0; j--) {
    var swapIndex = Math.floor(Math.random() * (j + 1))
    var temporary = values[j]
    values[j] = values[swapIndex]
    values[swapIndex] = temporary
  }
  if (values.length > 1 && values[0] === lastIndex) {
    var first = values[0]
    values[0] = values[1]
    values[1] = first
  }
  return values
}

function intervalLabel(minutes) {
  var value = intervalMinutes(minutes)
  if (value === 1440) return "Every day"
  if (value % 60 === 0) {
    var hours = value / 60
    return "Every " + hours + (hours === 1 ? " hour" : " hours")
  }
  return "Every " + value + " minutes"
}
