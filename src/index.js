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
    '**********': ' ',
};

function decode(expr) {
    let arr = []
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }
    let morseArr = []
    for (let el of arr) {
        let str = ''
        if (el === '**********') str = '**********'
        for (let j = 0; j < el.length; j += 2) {
            let substr = el[j] + el[j+1]
            if (substr === '00') str = str + ''
            if (substr === '10') str = str + '.'
            if (substr === '11') str = str + '-'
        }
        morseArr.push(str)
    }
    let result = ''
    for (let el of morseArr) {
        result = result + MORSE_TABLE[el]
    }
    return result
}
module.exports = {
    decode
}