const wordLib = {
  gameWords: {
    setA: {
      words: [
        "stand",
        "ing",
        "ard",
        "cow",
        "hard",
        "ship",
        "yard",
        "space",
        "craft"
      ],
      solutions: ["standing", "coward", "hardship", "yard", "spacecraft"]
    },
    setB: {
      words: [
        "dom",
        "free",
        "ordinary",
        "mac",
        "extra",
        "hine",
        "bit",
        "ion",
        "exhi"
      ],
      solutions: ["freedom", "exhibition", "extraordinary", "machine"]
    },
    setC: {
      words: [
        "mature",
        "spend",
        "cry",
        "gl",
        "yph",
        "stick",
        "drum",
        "pt",
        "ing"
      ],
      solutions: ["spending", "crypt", "glyph", "drumstick", "mature"]
    },
    setD: {
      words: [
        "less",
        "ions",
        "yer",
        "elect",
        "pra",
        "ested",
        "inter",
        "irr",
        "egard"
      ],
      solutions: ["irregardless", "interested", "elections", "prayer"]
    },
    setE: {
      words: [
        "sponge",
        "creat",
        "top",
        "uency",
        "ivity",
        "lap",
        "freq",
        "at",
        "tack"
      ],
      solutions: ["frequency", "laptop", "creativity", "attack", "sponge"]
    },
    setF: {
      words: [
        "for",
        "ion",
        "high",
        "attract",
        "machine",
        "est",
        "der",
        "blad",
        "ever"
      ],
      solutions: ["forever", "attraction", "machine", "highest", "bladder"]
    }
  }
};
const wordSetArray = ["setA", "setB", "setC", "setD", "setE", "setF"];

// Code to pick a random word List
let randomSet = wordSetArray[Math.floor(Math.random() * wordSetArray.length)];

const wordsSet = wordLib.gameWords[randomSet];
export const wordLibrary = wordsSet;
