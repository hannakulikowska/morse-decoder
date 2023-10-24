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
  // convertation to morse
  const array = [];
  const subarrays = expr.split("**********");

  for (let subarray of subarrays) {
    let nested = [];
    for (let i = 0; i < subarray.length; i += 10) {
      nested.push(subarray.slice(i, i + 10).replace(/^0+/, "").replaceAll(10, ".").replaceAll(11, "-"));
    }
    array.push(nested);
  }

  // convertation to alphabet
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (MORSE_TABLE[array[i][j]]) {
        array[i][j] = MORSE_TABLE[array[i][j]];
      }
    }
  }

  const decodedArray = array.map((word) => {
    return word.join('');
  });

  const decodedString = decodedArray.join(' ');

  return decodedString;
}

module.exports = {
    decode
}