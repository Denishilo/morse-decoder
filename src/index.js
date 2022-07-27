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
    let resultSTR = '';
    let resultArray=[];
    for(let i=10,k=0;i<=expr.length;i=i+10,k=k+10){
        let count = expr.slice(k,i)
        let str = '';
        for(let i=0;i<count.length;i++){
            if(count[i]=='1' && count[i+1]=='1') {
                str+='-'
                i++
            }
            if(count[i]=='1' && count[i+1]=='0') {
                str+='.'
                i++
            }

            if(count[i]=='*'){
                str+=' ';
                break
            }
        }
        resultArray.push(str)
    }

    resultArray.forEach(elem=>{
        for(let key in MORSE_TABLE) {
            if(elem === key){
                resultSTR+=MORSE_TABLE[key]
            }
            if(elem === ' '){
                resultSTR+=' '
                break
            }
        }
    })
    return resultSTR
    }
    
module.exports = {
    decode
}