var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];

var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

var numericCharacters = ['0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];

function getOptions(){
      var length = parseInt(prompt("What would you like the length of the password to be?"),10);
     

      if (Number.isNaN(length)){
        alert('Enter only a number');
        return null;
      }

      if (length < 8) {
        alert('Password length must be at least 8 characters');
        return null;
      }
    
     
      if (length > 128) {
        alert('Password length must less than 129 characters');
        return null;
      }

      var hasSpecialCharacters = confirm('Do you wish to have special Characters?');
      var hasLowerCasedCharacters = confirm('Do you wish to have lower case letters?');
      var hasUpperCasedCharacters = confirm('Do you wish to have upper case letters?');
      var hasNumericCharacters = confirm('Do you wish to have numbers?');

      
}

getOptions();