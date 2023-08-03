const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const MORSE_CHAR_LENGTH = 10;
const SPLITTER = "*".repeat(MORSE_CHAR_LENGTH);
const BIN_DOT = '10';
const BIN_DASH = '11';
const HUMAN_DOT  = '.';
const HUMAN_DASH  = '-';

function decode(expr) {
    const CHUNK_SIZE = 2;
    let morseWords = expr.split(SPLITTER);
    let resultWords = [];

    morseWords.forEach(function (morseWord) {
        let humanChars = [];
        let morseChars = splitString(morseWord, MORSE_CHAR_LENGTH);

        morseChars.forEach(function (morseChar) {
            let humanMorseCode = "";
            let index = morseChar.indexOf('1');
            let binChars = splitString(morseChar.substring(index), CHUNK_SIZE);

            binChars.forEach(function (chr) {
                switch (chr) {
                    case BIN_DOT:
                        humanMorseCode += HUMAN_DOT;
                        break;
                    case BIN_DASH:
                        humanMorseCode += HUMAN_DASH;
                        break;
                }
            })

            humanChars.push(MORSE_TABLE[humanMorseCode]);
        })

        resultWords.push(humanChars.join(''));
    })

    return resultWords.join(' ');
}

function splitString(str, chunkSize) {
    const result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.substring(i, i + chunkSize));
    }
    return result;
}

module.exports = {
    decode
}