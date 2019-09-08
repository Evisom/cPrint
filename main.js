
'use strict'

const symbols = require('./symbols.json')

const colors = {
    'Reset' : "\x1b[0m",
    'black' : "\x1b[30m",
    'red' : "\x1b[31m",
    'green' : "\x1b[32m",
    'yellow' : "\x1b[33m",
    'blue' : "\x1b[34m",
    'magenta' : "\x1b[35m",
    'cyan' : "\x1b[36m",
    'white' : "\x1b[37m",
}

let colors_name = Object.keys(colors);
colors_name.shift()

module.exports = function main(text , color) {

    if (color != undefined) {
        color = color.toLowerCase();
    }

    function render(letter, line) {
        let nletter;

        if (letter === ' ') {
            nletter = symbols.space;
        } else {
            nletter = symbols[letter];
            if (!nletter) {
                return 1;
            }
        }

        result[line] += nletter[line];
    }

    function print() {
        let ncolor;
        let random_color

        if (color == undefined || color == null || color == '') {
            ncolor = colors['white'];
        } else if (color == 'random') {
            random_color = (Math.random() * (colors_name.length - 1) ).toFixed(0);
            random_color = colors_name[random_color]
            ncolor = colors[random_color]
        } else {
            ncolor = colors[color]
        }

        for (let i = 0; i < 7; i++) {
            console.log(ncolor, result[i] , colors.Reset);
        }

    }

    let result = ['', '', '', '', '', '',''];
    text = text.toLowerCase();

    for (let a = 0; a < text.length; a++) {
        for (let i = 0; i < 7; i++) {
            if(render(text[a], i)) return console.log(colors['red'] , '[ERROR]', colors['Reset'] , 'One of the characters in your string is not supported')
        }
    }

    print();
}