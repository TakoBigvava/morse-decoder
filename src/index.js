const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

	function decode(expr) {
		// const reg = /^[00]$/g;
		const reg = /(..........)/g;
		const reg4 = /\*\*\*\*\*\*\*\*\*\*/g;
		const reg1 = /10/g;
		const reg2 = /11/g;
		 const reg3 = /00/g;
		let letters = []
		let decoded = []
	  
		// array of words
	  const words = expr.replace(reg4, " ").split(' ');
	  
	   //array of digits
	  for (let k=0; k<words.length; k++){
	   letters.push(words[k].split(reg).filter(i => i))
	  }
	  
	  for (let k=0; k < letters.length; k++){
		let word = []
		for(let i = 0; i < letters[k].length; i++){
		word.push( letters[k][i].replace(reg1, ".").replace(reg2, "-").replace(reg3, ""))
		 }
	  decoded.push(word.map(a => MORSE_TABLE[a]).join(''))
	  
	  }
	   
	  return decoded.join(' ')
	  
	  }


module.exports = {
	decode
};
