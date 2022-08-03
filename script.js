

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

function getOptions() {
    var length = parseInt(prompt("What would you like the length of the password to be?"), 10);


    if (Number.isNaN(length)) {
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

    if (hasLowerCasedCharacters === false &&
        hasNumericCharacters === false &&
        hasSpecialCharacters === false &&
        hasUpperCasedCharacters === false) {
        alert('Password needs to have atleast one option.');
        return null;
    }

    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
    };

    return passwordOptions;
}

    function getRandom(array) {
        randomIndex = Math.floor(Math.random() * array.length);
        indexValue = array[randomIndex];
        return indexValue;
    }

    function generatePassword() {
        var opt = getOptions();

        var result = [];
        var guaranteed = [];
        var possible = [];

        if (!opt) {
            return null;
        }

        if (opt.hasLowerCasedCharacters) {
            possible = possible.concat(lowerCasedCharacters);
            guaranteed.push(getRandom(lowerCasedCharacters));
        }

        if (opt.hasUpperCasedCharacters) {
            possible = possible.concat(upperCasedCharacters);
            guaranteed.push(getRandom(upperCasedCharacters));
        }

        if (opt.hasSpecialCharacters) {
            possible = possible.concat(specialCharacters);
            guaranteed.push(getRandom(specialCharacters));
        }
        if (opt.hasNumericCharacters) {
            possible = possible.concat(numericCharacters);
            guaranteed.push(getRandom(numericCharacters));
        }

        for (var i = 0; i < opt.length; i++) {
            var possible = getRandom(possible);

            result.push(possible);
        }

        for (var i = 0; i < guaranteed.length; i++) {
            result[i] = guaranteed[i];
        }

        return result.join('');
    }

    
    var generateBtn = document.querySelector('#generate');

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#mainpassword');

        passwordText.value = password;
    }


    generateBtn.addEventListener('click', writePassword);





