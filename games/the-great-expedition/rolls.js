const bcRollsBase = [
  {
    title: `All is clear. My mind is at ease.`,
    description: `The werewolf feels an overwhelming sense of tranquility, their bestial nature fading away completely. The werewolf may permanently choose to ignore any roll on the Bestial Curse table. If the werewolf is already effected by this they may choose any Bestial Curse effect they desire.`,
    weight: 1
  },
  {
    title: `My body is strong... My mind, even stronger!`,
    description: `The werewolf keeps their human mind fully intact whilst in their werewolf body. They may make all rolls with advantage for the next minute.`,
    weight: 2
  },
  {
    title: `I smell everything.`,
    description: `Sticking it’s nose into the air the werewolf is able to catch the scent of everything within a 50ft radius. For the next hour the werewolf has advantage on all perception checks, and creatures within 50ft cannot take the hide action.`,
    weight: 3
  },
  {
    title: `I see everything.`,
    description: `Something clicks in the werewolf’s mind, allowing it to sense it’s surrounding with perfect clarity. For the next hour the werewolf may choose to ignore it’s initiative roll and place itself at the start of the turn order.`,
    weight: 4
  },
  {
    title: `These hands remember these motions.`,
    description: `The werewolf’s limbs recall the more subtle actions of their human form, allowing the werewolf to used ranged weapons.`,
    weight: 5
  },
  {
    title: `My mind is at ease.`,
    description: `For a brief moment the werewolf’s animal tendency abates. For the next hour the werewolf is not at disadvantage when making intelligence, perception, or wisdom saves.`,
    weight: 5
  },
  {
    title: `The hunt begins!`,
    description: `Reality blurs, the werewolf’s enemies become it’s prey. The werewolf’s movement speed is doubled for the next minute.`,
    weight: 5
  },
  {
    title: `The pack is strong.`,
    description: `The werewolf sees it’s allies as part of it’s pack, gaining advantage on any attack rolls against creatures within 5ft of an ally for the next minute.`,
    weight: 5
  },
  {
    title: `It was there... now it's gone.`,
    description: `The werewolf feels something dark clawing at the edges of it’s mind, but manages to resist, suffering no positive nor negative consequences.`,
    weight: 41
  },
  {
    title: `Who am I meant to be again?`,
    description: `The werewolf forgets their name, replacing it with another. From that moment on the werewolf responds to their new name as if they have had it their entire life, forgetting they were ever called anything else.`,
    weight: 5
  },
  {
    title: `Where am I? What is this place?`,
    description: `Senses blurring, the werewolf becomes unable to understand it’s surroundings. For the next hour the werewolf treats all terrain as difficult.`,
    weight: 4
  },
  {
    title: `*Crack!*`,
    description: `Something becomes horrifically disjointed within the werewolf’s form, causing it to collapse. The werewolf falls prone and is incapacitated for one minute. At the end of each of it’s turns the werewolf may make a constitution check. On a success the werewolf loses the incapacitate condition, though remains prone.`,
    weight: 5
  },
  {
    title: `The beast takes over.`,
    description: `Consumed by bestial instincts the werewolf forgets any notion of tactics or strategy. For the next hour the werewolf must attack any enemy within range. If no creature is in range the werewolf must move directly towards the nearest enemy that it can see until it is within range to make an attack. If the werewolf cannot see any enemies within range it may act as normal until it does see one.`,
    weight: 5
  },
  {
    title: `Who are you people?`,
    description: `The werewolf is overcome with an intense distrust for all those around them. For the
next hour the werewolf cannot take the help action. Additionally, so strong is the werewolf’s paranoia, their very flesh becomes wary of all those around them. Until the hour ends the werewolf cannot be healed by any mundane or magical effects.`,
    weight: 5
  },
  {
    title: `This bottomless hunger... it hurts!`,
    description: `From the werewolf’s stomach comes an intense pain, compelling the werewolf to eat whatever it can. For the next ten minutes the werewolf must spend it’s action for 1d4 turns eating any dead or unconscious creature that it is within 5ft of, whether they be friend or foe.<br />If no dead or unconscious creature is within range the werewolf must move directly towards one until it is within 5ft, at which point it must spend it’s turn attempting to consume it.<br />If the werewolf cannot see any dead or unconscious creatures it may act as normal until it does see one.`,
    weight: 2
  },
  {
    title: `I hunger for blood!`,
    description: `Overcome completely by blood lust, the werewolf becomes unable to distinguish between those who are supposed to be it’s allies and who it is supposed to be fighting. For the next ten minutes the werewolf must attack any creature within range, whether it be friend or foe. If no creature is in range the werewolf must move directly towards the nearest creature that it can see until it is within range to make an attack.<br />If the werewolf cannot see any creature it may act as normal until it does see one.`,
    weight: 2
  },
  {
    title: `Feral!`,
    description: `omething explodes in the werewolf’s brain. Blood drips from every orifice, eyes turn pitch black, the spine cracks like guns being fired. The werewolf drops down onto all fours, it’s human mind fading.<br />The DM takes control of the werewolf, treating it as a neutral monster, attacking former friend and foe alike. At the end of each of it’s turns the werewolf may make a constitution save. On a success the werewolf collapses, falling unconscious for the next twenty four hours. If the werewolf fails three saves in a row the vestiges of their human mind fades. The werewolf permanently gains control of the werewolf, treating it as a preternaturally aggressive animal.`,
    weight: 1
  }
];

const bcRolls = [];
bcRollsBase.forEach((d) => {
  for (let i = 0; i < d.weight; i++) {
    bcRolls.push(d);
  }
});
bcRolls.reverse()

if (bcRolls.length !== 100) {
  throw("Wrong number of bestial curse rolls!");
}

const koRolls = [
  `The attack merely knocks the target on the head, causing them to fall over, but not causing any long term effects. The target is knocked unconscious but automatically succeeds on two of their death saving throws.`,
  `Though not immediately lethal, the attack gives the target a deep scar across their face. Thetarget is knocked unconscious but automatically succeeds on one of their death saving throws.`,
  `The target takes a painful hit to the face, falling over in a brief moment of agony before falling unconscious.`,
  `<strong>Severe:</strong> One of the target’s ears is destroyed. The target is at disadvantage for all perception checks based on hearing.`,
  `<strong>Severe:</strong> One of the target’s eyes is destroyed. The target is at disadvantage for all perception checks based on sight.`,
  `<strong>Severe:</strong> Both of the target’s eyes suffer a permanent wound. The target is now blind.`,
  `<strong>Severe:</strong> Teeth fly across the combat, neither ally nor foe able to see past the gushing blood.The target automatically fails it’s first death saving throw. If the target survives they find that most of their face has been removed. They now have trouble speaking without slurringtheir words, and suffer a permanent -4 to their persuasion and performance, and a +4 to their intimidation.`,
  `<strong>Severe:</strong> A clean attack hits the target, burrowing all of the way through the skull and exiting from the other side. The target falls to the ground, automatically failing two of it’s death saving throws. If the target succeeds it’s death saving throw their <em>intelligence</em>, <em>wisdom</em>, and <em>charisma</em> are all permanently reduced by 2.`,
  `<strong>Severe:</strong> In a single moment where once there was a head, now there is nothing. The target instantly dies.`,
  `<strong>Severe:</strong> The head vanishes in an explosion of blood and skull shards. So horrific is this sight that all of the target’s allies within line of sight must make a DC10 Wisdom saving throw or be <em>frightened</em>.`,
  `The target suffers a heavy blow to the stomach, making them throw up, fall unconscious, and automatically succeed on two of their death saving throws.`,
  `The target is hit in the flank, spinning them around and fall over. They automatically succeed on one of their death saving throws.`,
  `With a thud, the target is hit square in the chest, knocking them backwards 1d10×10ft, and knocking them unconscious.`,
  `A blow to the chest opens up a long wound on the target’s torso, causing them to keel over in pain before falling unconscious.`,
  `<strong>Severe:</strong> A painful blow to the target’s side causes severe damage to a kidney. The victim fails one of their death saving throws. If the target survives they become vulnerable to poison damage.`,
  `<strong>Severe:</strong> The lung of the target is struck, knocking them unconscious and causing them to immediately fail one of their death saving throws. If the target survives they will suffer exhaustion more easily.`,
  `<strong>Severe:</strong> The heart of the target is struck, causing them to fall to the floor and immediately fail two death saving throws. If the target survives they are physically weakened from the ordeal, suffering a permanent -2 to their <em>constitution</em> stat.`,
  `<strong>Severe:</strong> A huge swathes of the target’s body is torn away, leaving a bloody hole in the victim’s torso. The target falls to the ground and automatically fails two of it’s death savingthrows. If the target survives they permanently suffer a -2 to <em>strength</em>, <em>dexterity</em>, and <em>constitution</em> stats.`,
  `<strong>Severe:</strong> A blow of incredible force smashes into the target, reducing them to nothing but a red paste. It is impossible for any mortal creature to be more dead than this, though given the force, speed, and result of the attack, it was most likely a relatively painless death.`,
  `<strong>Severe:</strong> A blow of incredible force smashes into the target, reducing them to nothing but a red paste. It is impossible for any mortal creature to be more dead than this, though given the force, speed, and result of the attack, it was most likely a relatively painless death.`,
  `<strong>Severe:</strong> A blow of incredible force smashes into the target, reducing them to nothing but a red paste. It is impossible for any mortal creature to be more dead than this, though given the force, speed, and result of the attack, it was most likely a relatively painless death.`,
  `A blow smashes into the target’s leg, knocking them onto the floor. They automatically succeed on two of their death saving throws.`,
  `The leg is struck with a deep wound, knocking the target down and knocking them unconscious. The target automatically passes one of their death saving throws.`,
  `With a gut wrenching crack a large bone in the leg breaks, knocking the victim down. The target automatically succeeds their death saving throw, though they become unable to use the wounded leg until they have completed an extended rest.`,
  `A foot is completely crushed, bones smashed into tiny fragments. The target permanently loses the use of this foot.`,
  `<strong>Severe:</strong> A severe gash appears along the target’s leg. If they survive the death saving throws, the victim’s speed is permanently decreased by 10ft.`,
  `<strong>Severe:</strong> A hefty chunk of flesh is ripped from the side of the leg, knocking the victim unconscious. They automatically fail one of their death saving throws. If the target survivestheir walking speed is permanently reduced by 10ft, and they cannot take the dash action.`,
  `<strong>Severe:</strong> The leg is removed, either cut completely off or hanging on by a few shredded sinews, causing the victim to fall over in agonizing pain. They immediately fail two of their death saving throws, and lose the use of the leg if they survive.`,
  `<strong>Severe:</strong> The leg is ripped off, leaving a spray of blood. The victim dies over the course of several painful seconds.`,
  `<strong>Severe:</strong> In a terrifying display of force, the target’s arm vanishes in an explosion of tendonsand blood. The target instantly dies, showering the surrounding the nearby area in fragments of bone. Every creature within 5ft takes 2d4 damage.`,
  `The arm is twisted around and bent, but otherwise is not harmed. The target passes out in pain but automatically succeeds on all of it’s death saving throws.`,
  `An arm is pierced, pinning the victim down, leaving them unable to stand themselves up due to the pain. The target is not knocked unconscious, and succeeds on two of it’s death saving throws.`,
  `The target suffers a large gash to their shoulder, knocking them down in agonizing pain, automatically passing one of their death saving throws. Until the target takes an extended rest they suffer a -4 to all of their attack rolls when using a weapon with that hand.`,
  `A loud crack rings and a bloody broken bone juts out of the target’s arm. If the target survives the wound they are unable to use their arm until they have completed an extended rest.`,
  `<strong>Severe:</strong> A finger comes flying off. If the target survives they lose one of their fingers.`,
  `<strong>Severe:</strong> A hand is destroyed beyond use and the target drops to the floor in agony, automatically failing one of their death saving throws.`,
  `<strong>Severe:</strong> One of the target’s arms is rendered to nothing but scraps of meat hanging from shattered bones, causing them to drop to the floor in agony. They automatically fail two of their death saving throws.`,
  `<strong>Severe:</strong> One of the target’s arms is rendered to nothing but scraps of meat hanging from shattered bones, causing them to drop to the floor in agony. They automatically fail two of their death saving throws.`,
  `<strong>Severe:</strong> The arm comes off, either being completely crushed or cleanly severed, killing the victim over the course of several agonizing seconds.`,
  `<strong>Severe:</strong> As above, the arm comes cleanly off, killing the target instantly. When the arm falls to the ground, however, the random spasms of the limb continue to twitch uncontrollably. If the victim was carrying a firearm, roll 1d20. On the result of a 1 the weapon fires randomly at any creature within 10ft, rolling to hit with no modifiers and doing normal damage.`
];
// koRolls.reverse();

if (koRolls.length !== 40) {
  throw("Wrong number of KO rolls!");
}

function bcRoll(roll) {
  if (roll < 1 || roll > 10) {
    roll = Math.floor(Math.random() * 100) + 1;
  }
  const result = bcRolls[roll];
  const el = document.querySelector('.bc-roll');
  el.querySelector('input').value = roll;
  el.querySelector('.title').innerHTML = result.title;
  el.querySelector('.description').innerHTML = result.description;
}

function koRoll(roll) {
  if (roll < 1 || roll > 40) {
    roll = Math.floor(Math.random() * 40) + 1;
  }
  const result = koRolls[roll];
  const el = document.querySelector('.ko-roll');
  el.querySelector('input').value = roll;
  el.querySelector('.description').innerHTML = result;
}
