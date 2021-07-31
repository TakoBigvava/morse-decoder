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

function decode(expr) {
    let newArr = [];
	let morseArr = [];

	for (let i = 0; i < expr.length; i++) {
		if (expr[i] == " ") {
			newArr.push("@");
		}

		for (const letter in MORSE_TABLE) {
			if (MORSE_TABLE[letter] === expr[i]) {
				newArr.push(letter);
			}
		}
	}

	for (let i = 0; i < newArr.length; i++) {
		let morseLetter = "";
		for (let k = 0; k < newArr[i].length; k++) {
			if (newArr[i][k] === ".") {
				morseLetter = morseLetter + '10';
			} else if (newArr[i][k] === "-") {
				morseLetter = morseLetter + '11';
			} else if (newArr[i][k] === "@") {
				morseLetter = morseLetter + "**********";
			}
		}

		morseArr.push(morseLetter.padStart(10, '0'));
	}

	const result = morseArr.join('');
    return result;
}

module.exports = {
    decode
}