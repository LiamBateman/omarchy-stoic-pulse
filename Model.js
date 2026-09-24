var QUOTES = [
  { text: "Let no act be done without a purpose, nor otherwise than according to the perfect principles of art.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 2" },
  { text: "Take away thy opinion, and then there is taken away the complaint, “I have been harmed.” Take away the complaint, “I have been harmed,” and the harm is taken away.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 8" },
  { text: "Do not have such an opinion of things as he has who does thee wrong, or such as he wishes thee to have, but look at them as they are in truth.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 12" },
  { text: "Many grains of frankincense on the same altar: one falls before, another falls after; but it makes no difference.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 16" },
  { text: "Do not act as if thou wert going to live ten thousand years. Death hangs over thee. While thou livest, while it is in thy power, be good.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 18" },
  { text: "Everything is only for a day, both that which remembers and that which is remembered.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 37" },
  { text: "It is no evil for things to undergo change, and no good for things to subsist in consequence of change.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 44" },
  { text: "Time is like a river made up of the events which happen, and a violent stream; for as soon as a thing has been seen, it is carried away, and another comes in its place, and this will be carried away too.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 45" },
  { text: "Be like the promontory against which the waves continually break, but it stands firm and tames the fury of the water around it.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 51" },
  { text: "How easy it is to repel and to wipe away every impression which is troublesome or unsuitable, and immediately to be in all tranquility.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 5, paragraph 2" },
  { text: "To seek what is impossible is madness: and it is impossible that the bad should not do something of this kind.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 5, paragraph 17" },
  { text: "Look within. Let neither the peculiar quality of anything nor its value escape thee.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 3" },
  { text: "The best way of avenging thyself is not to become like the wrong doer.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 6" },
  { text: "If a thing is difficult to be accomplished by thyself, do not think that it is impossible for man: but if anything is possible for man and conformable to his nature, think that this can be attained by thyself too.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 19" },
  { text: "If any man is able to convince me and show me that I do not think or act right, I will gladly change; for I seek the truth by which no man was ever injured.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 21" },
  { text: "It is a shame for the soul to be first to give way in this life, when thy body does not give way.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 29" },
  { text: "Adapt thyself to the things with which thy lot has been cast: and the men among whom thou hast received thy portion, love them, but do it truly, sincerely.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 39" },
  { text: "It is in our power to have no opinion about a thing, and not to be disturbed in our soul; for things themselves have no natural power to form our judgements.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 51" },
  { text: "Accustom thyself to attend carefully to what is said by another, and as much as it is possible, be in the speaker’s mind.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 52" },
  { text: "That which is not good for the swarm, neither is it good for the bee.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 53" },
  { text: "How many after being celebrated by fame have been given up to oblivion; and how many who have celebrated the fame of others have long been dead.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 6" },
  { text: "Let not future things disturb thee, for thou wilt come to them, if it shall be necessary, having with thee the same reason which now thou usest for present things.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 8" },
  { text: "Near is thy forgetfulness of all things; and near the forgetfulness of thee by all.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 21" },
  { text: "Retire into thyself. The rational principle which rules has this nature, that it is content with itself when it does what is just, and so secures tranquility.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 28" },
  { text: "Think of the country mouse and of the town mouse, and of the alarm and trepidation of the town mouse.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 11, paragraph 37" },
  { text: "The art of life is more like the wrestler’s art than the dancer’s, in respect of this, that it should stand ready and firm to meet onsets which are sudden and unexpected.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 57" },
  { text: "Take care not to feel towards the inhuman, as they feel towards men.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 61" },
  { text: "Attend to the matter which is before thee, whether it is an opinion or an act or a word.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, paragraph 23" },
  { text: "Thou sufferest this justly: for thou choosest rather to become good tomorrow than to be good today.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, paragraph 24" },
  { text: "Receive wealth or prosperity without arrogance; and be ready to let it go.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, paragraph 35" },
  { text: "Men exist for the sake of one another. Teach them then or bear with them.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 8, paragraph 62" },
  { text: "He who does wrong does wrong against himself. He who acts unjustly acts unjustly to himself, because he makes himself bad.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, paragraph 4" },
  { text: "Wipe out imagination; check desire; extinguish appetite; keep the ruling faculty in its own power.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, paragraph 7" },
  { text: "Today I have got out of all trouble, or rather I have cast out all trouble, for it was not outside, but within and in my opinions.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, paragraph 13" },
  { text: "It is thy duty to leave another man’s wrongful act there where it is.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 9, paragraph 20" },
  { text: "If a man is mistaken, instruct him kindly and show him his error. But if thou art not able, blame thyself, or blame not even thyself.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 10, paragraph 5" },
  { text: "No longer talk at all about the kind of man that a good man ought to be, but be such.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 10, paragraph 18" },
  { text: "Have I done something for the general interest? Well then I have had my reward. Let this always be present to thy mind, and never stop doing such good.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 11, paragraph 4" },
  { text: "Neither in writing nor in reading wilt thou be able to lay down rules for others before thou shalt have first learned to obey rules thyself. Much more is this so in life.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 11, paragraph 44" },
  { text: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life.", author: "Epictetus", work: "The Enchiridion", locator: "Section 8" },
  { text: "As a mark is not set up for the purpose of missing the aim, so neither does the nature of evil exist in the world.", author: "Epictetus", work: "The Enchiridion", locator: "Section 27" },
  { text: "If you have assumed a character above your strength, you have both acted in this matter in an unbecoming way, and you have neglected that which you might have fulfilled.", author: "Epictetus", work: "The Enchiridion", locator: "Section 37" },
  { text: "In walking about as you take care not to step on a nail or to sprain your foot, so take care not to damage your own ruling faculty: and if we observe this rule in every act, we shall undertake the act with more security.", author: "Epictetus", work: "The Enchiridion", locator: "Section 38" },
  { text: "See how tragedy is made when common things happen to silly men.", author: "Epictetus", work: "Discourses", locator: "Book 2, chapter 16, paragraph 5" },
  { text: "From my grandfather Verus I learned good morals and the government of my temper.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 1, paragraph 1" },
  { text: "From the reputation and remembrance of my father, modesty and a manly character.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 1, paragraph 2" },
  { text: "Through not observing what is in the mind of another a man has seldom been seen to be unhappy; but those who do not observe the movements of their own minds must of necessity be unhappy.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 2, paragraph 8" },
  { text: "That which does not make a man worse than he was, also does not make his life worse, nor does it harm him either from without or from within.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 9" },
  { text: "Hast thou reason? I have.⁠—Why then dost not thou use it? For if this does its own work, what else dost thou wish?", author: "Marcus Aurelius", work: "Meditations", locator: "Book 4, paragraph 14" },
  { text: "No man will hinder thee from living according to the reason of thy own nature: nothing will happen to thee contrary to the reason of the universal nature.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 6, paragraph 57" },
  { text: "Love that only which happens to thee and is spun with the thread of thy destiny. For what is more suitable?", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 53" },
  { text: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 55" },
  { text: "The perfection of moral character consists in this, in passing every day as the last, and in being neither violently excited nor torpid nor playing the hypocrite.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 7, paragraph 65" },
  { text: "Severally on the occasion of everything that thou doest, pause and ask thyself, if death is a dreadful thing because it deprives thee of this.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 10, paragraph 32" },
  { text: "Eighth, consider how much more pain is brought on us by the anger and vexation caused by such acts than by the acts themselves, at which we are angry and vexed.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 11, paragraph 30" },
  { text: "See what things are in themselves, dividing them into matter, form and purpose.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 12, paragraph 12" },
  { text: "How ridiculous and what a stranger he is who is surprised at anything which happens in life.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 12, paragraph 15" },
  { text: "First, do nothing inconsiderately, nor without a purpose. Second, make thy acts refer to nothing else than to a social end.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 12, paragraph 22" },
  { text: "Cast away opinion: thou art saved. Who then hinders thee from casting it away?", author: "Marcus Aurelius", work: "Meditations", locator: "Book 12, paragraph 27" },
  { text: "This reflection is most adapted to move us to contempt of death, that even those who think pleasure to be a good and pain an evil still have despised it.", author: "Marcus Aurelius", work: "Meditations", locator: "Book 12, paragraph 36" },
  { text: "Disease is an impediment to the body, but not to the will, unless the will itself chooses. Lameness is an impediment to the leg, but not to the will. And add this reflection on the occasion of everything that happens; for you will find it an impediment to something else, but not to yourself.", author: "Epictetus", work: "The Enchiridion", locator: "Section 9" },
  { text: "Let death and exile and every other thing which appears dreadful be daily before your eyes; but most of all death: and you will never think of anything mean nor will you desire anything extravagantly.", author: "Epictetus", work: "The Enchiridion", locator: "Section 21" },
  { text: "If any person was intending to put your body in the power of any man whom you fell in with on the way, you would be vexed: but that you put your understanding in the power of any man whom you meet, so that if he should revile you, it is disturbed and troubled, are you not ashamed at this?", author: "Epictetus", work: "The Enchiridion", locator: "Section 28" },
  { text: "When you have decided that a thing ought to be done and are doing it, never avoid being seen doing it, though the many shall form an unfavourable opinion about it. For if it is not right to do it, avoid doing the thing; but if it is right, why are you afraid of those who shall find fault wrongly?", author: "Epictetus", work: "The Enchiridion", locator: "Section 35" },
  { text: "It is a mark of a mean capacity to spend much time on the things which concern the body, such as much exercise, much eating, much drinking, much easing of the body, much copulation. But these things should be done as subordinate things: and let all your care be directed to the mind.", author: "Epictetus", work: "The Enchiridion", locator: "Section 41" },
  { text: "Whatever things (rules) are proposed to you [for the conduct of life] abide by them, as if they were laws, as if you would be guilty of impiety if you transgressed any of them. And whatever any man shall say about you, do not attend to it: for this is no affair of yours.", author: "Epictetus", work: "The Enchiridion", locator: "Section 50" },
  { text: "You may fetter my leg, but my will not even Zeus himself can overpower.", author: "Epictetus", work: "Discourses", locator: "Book 1, chapter 1, paragraph 6" },
  { text: "Do not admire your clothes, and then you will not be angry with the thief.", author: "Epictetus", work: "Discourses", locator: "Book 1, chapter 18, paragraph 2" },
  { text: "Keep by every means what is your own; do not desire what belongs to others.", author: "Epictetus", work: "Discourses", locator: "Book 1, chapter 25, paragraph 2" },
  { text: "Things themselves (materials) are indifferent; but the use of them is not indifferent.", author: "Epictetus", work: "Discourses", locator: "Book 2, chapter 5, paragraph 1" },
  { text: "Always remember what is your own, and what belongs to another; and you will not be disturbed.", author: "Epictetus", work: "Discourses", locator: "Book 2, chapter 6, paragraph 2" },
  { text: "No man is bad without suffering some loss and damage.", author: "Epictetus", work: "Discourses", locator: "Book 2, chapter 10, paragraph 3" },
  { text: "No man shall compel you any more than he shall compel Zeus.", author: "Epictetus", work: "Discourses", locator: "Book 2, chapter 17, paragraph 4" },
  { text: "If you would be a good reader, read; if a writer, write.", author: "Epictetus", work: "Discourses", locator: "Book 2, chapter 18, paragraph 1" },
  { text: "In the first place, know who you are and then adorn yourself appropriately.", author: "Epictetus", work: "Discourses", locator: "Book 3, chapter 1, paragraph 4" },
  { text: "The good man is invincible, for he does not enter the contest where he is not stronger.", author: "Epictetus", work: "Discourses", locator: "Book 3, chapter 6, paragraph 2" },
  { text: "Examine a little at last, look around, stir yourself up, that you may know who you are.", author: "Epictetus", work: "Discourses", locator: "Book 3, chapter 14, paragraph 1" },
  { text: "If you remember this, you will always maintain your character such as it ought to be.", author: "Epictetus", work: "Discourses", locator: "Book 4, chapter 3, paragraph 1" },
  { text: "Fight with yourself, restore yourself to decency, to modesty, to liberty.", author: "Epictetus", work: "Discourses", locator: "Book 4, chapter 9, paragraph 3" },
  { text: "Neither can any man deprive me of the good, nor involve me in the bad against my will.", author: "Epictetus", work: "Discourses", locator: "Book 4, chapter 10, paragraph 3" },
  { text: "Thus it is: we do not receive a short life, but we make it a short one, and we are not poor in days, but wasteful of them.", author: "Seneca", work: "On the Shortness of Life", locator: "Chapter 1" },
  { text: "Life is long enough, if you know how to use it.", author: "Seneca", work: "On the Shortness of Life", locator: "Chapter 2" },
  { text: "You fear everything, like mortals as you are, and yet you desire everything as if you were immortals.", author: "Seneca", work: "On the Shortness of Life", locator: "Chapter 3" },
  { text: "You dispose of that which is in the hand of Fortune, and you let go that which is in your own.", author: "Seneca", work: "On the Shortness of Life", locator: "Chapter 9" },
  { text: "None of these men will force you to die, but all of them will teach you how to die: none of these will waste your time, but will add his own to it.", author: "Seneca", work: "On the Shortness of Life", locator: "Chapter 15" },
  { text: "To live happily, then, is the same thing as to live according to Nature: what this may be, I will explain.", author: "Seneca", work: "On a Happy Life", locator: "Chapter 8" },
  { text: "Luxury, however, is not satisfied with what is enough for nature.", author: "Seneca", work: "On a Happy Life", locator: "Chapter 13" },
  { text: "Too much pleasure is hurtful: but with virtue we need fear no excess of any kind, because moderation is contained in virtue herself.", author: "Seneca", work: "On a Happy Life", locator: "Chapter 13" },
  { text: "I despise the whole dominion of Fortune, but still, if I were given my choice, I would choose its better parts.", author: "Seneca", work: "On a Happy Life", locator: "Chapter 25" },
  { text: "No condition can be so wretched that an impartial mind can find no compensations in it.", author: "Seneca", work: "On Peace of Mind", locator: "Chapter 10" },
  { text: "I shall never be ashamed to quote a good saying because it comes from a bad author.", author: "Seneca", work: "On Peace of Mind", locator: "Chapter 11" },
  { text: "You may be sure that the same thing occurs with us: we often die because we are afraid of death.", author: "Seneca", work: "On Peace of Mind", locator: "Chapter 11" },
  { text: "We must humour our minds and grant them rest from time to time, which acts upon them like food, and restores their strength.", author: "Seneca", work: "On Peace of Mind", locator: "Chapter 17" },
  { text: "Why, no evil can befall a good man; contraries cannot combine.", author: "Seneca", work: "On Providence", locator: "Chapter 2" },
  { text: "Do not, I beg you, dread those things which the immortal gods apply to our minds like spurs: misfortune is virtue’s opportunity.", author: "Seneca", work: "On Providence", locator: "Chapter 4" },
  { text: "Fortune lashes and mangles us: well, let us endure it: it is not cruelty, it is a struggle, in which the oftener we engage the braver we shall become.", author: "Seneca", work: "On Providence", locator: "Chapter 4" },
  { text: "I have placed every good thing within your own breasts: it is your good fortune not to need any good fortune.", author: "Seneca", work: "On Providence", locator: "Chapter 6" },
  { text: "The wise man is safe, and no injury or insult can touch him.", author: "Seneca", work: "On the Firmness of the Wise Person", locator: "Chapter 2" },
  { text: "Virtue is free, inviolable, not to be moved, not to be shaken, and so hardened against misfortunes that she cannot be bent, let alone overcome by them.", author: "Seneca", work: "On the Firmness of the Wise Person", locator: "Chapter 5" },
  { text: "Even though you be hard pressed and violently attacked by the enemy, still it is base to give way; hold the post assigned to you by nature.", author: "Seneca", work: "On the Firmness of the Wise Person", locator: "Chapter 19" }
]

function quoteCount() {
  return QUOTES.length
}

function quoteSource(quote) {
  var translator = quote.author === "Seneca" ? "Aubrey Stewart" : "George Long"
  return quote.work + " · " + quote.locator + " · " + translator + " translation"
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
