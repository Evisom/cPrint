'use strict'

const letters = {
    a: [
        '     ',
        ' ████', 
        ' █  █', 
        ' ████', 
        ' █  █', 
        ' █  █',
        '     ',
    ],
    b: [
        '       ',
        '  ████ ', 
        '  █  ██', 
        '  ████ ', 
        '  █  ██', 
        '  ████ ',
        '       ',
    ],
    c: [
        '      ',
        '  ████', 
        '  █  █', 
        '  █   ', 
        '  █  █', 
        '  ████',
        '      ',
    ],
    d: [
        '       ',
        '  ████ ', 
        '  █  ██', 
        '  █  ██', 
        '  █  ██', 
        '  ████ ',
        '       ',
    ],
    e: [
        '     ',
        '  ███', 
        '  █  ', 
        '  ███', 
        '  █  ', 
        '  ███',
        '     ',
    ],
    f: [
        '     ',
        '  ███', 
        '  █  ', 
        '  ███', 
        '  █  ', 
        '  █  ',
        '     ',
    ],
    g: [
        '      ',
        '  ████', 
        '  █   ', 
        '  █ ██', 
        '  █  █', 
        '  ████',
        '      ',
    ],
    h: [
        '      ',
        '  █  █', 
        '  █  █', 
        '  ████', 
        '  █  █', 
        '  █  █',
        '      ',
    ],
    i: [
        '    ',
        ' ███', 
        '  █ ', 
        '  █ ', 
        '  █ ', 
        ' ███',
        '     ',
    ],
    j: [
        '     ',
        '   ██', 
        '    █', 
        '    █', 
        ' █  █', 
        ' ████',
        '     ',
    ],
    k: [
        '     ',
        ' █  █', 
        ' █ █ ', 
        ' ██  ', 
        ' █ █ ', 
        ' █  █',
        '     ',
    ],
    l: [
        '    ',
        ' █  ', 
        ' █  ', 
        ' █  ', 
        ' █  ', 
        ' ███',
        '    ',
    ],
    m: [
        '       ',
        ' █   ██', 
        ' ██ ███', 
        ' █ █ ██', 
        ' █   ██', 
        ' █   ██',
        '       ',
    ],
    n: [
        '     ',
        ' █  █',
        ' ██ █',
        ' █ ██',
        ' █  █', 
        ' █  █',
        '     ',
    ],
    o: [
        '     ',
        ' ████', 
        ' █  █', 
        ' █  █', 
        ' █  █', 
        ' ████',
        '     ',
    ],
    p: [
        '     ',
        ' ████',
        ' █  █',
        ' ████', 
        ' █   ', 
        ' █   ',
        '     ',
    ],
    q: [
        '      ',
        ' ████  ',
        ' █  █  ',
        ' █ ██  ',
        ' █  █  ',
        ' █████ ',
        '     ██',
    ],
    r: [
        '     ',
        ' ████',
        ' █  █',
        ' ████',
        ' █ █ ',
        ' █ █ ',
        '     ',
    ],
    s: [
        '    ',
        ' ███',
        ' █  ',
        ' ███',
        '   █',
        ' ███',
        '    ',
    ],
    t: [
        '    ',
        ' ███', 
        '  █ ', 
        '  █ ', 
        '  █ ', 
        '  █ ',
        '    ',
    ],
    u: [
        '    ',
        ' █ █',
        ' █ █',
        ' █ █',
        ' █ █',
        ' ███',
        '    ',
    ],
    v: [
        '    ',
        ' █ █',
        ' █ █',
        ' █ █',
        ' ███',
        '  █ ',
        '    ',
    ],
    w: [
        '      ',
        ' █   █',
        ' █   █',
        ' █ █ █',
        ' █████',
        '  █ █ ',
        '      ',
    ],
    x: [
        '      ',
        ' ██ ██',
        '  ███ ',
        '   █  ',
        '  ███ ',
        ' ██ ██',
        '       ',
    ],

    y: [
        '      ',
        ' ██ ██',
        '  ███ ',
        '   █  ',
        '   █  ',
        '   █  ',
        '      ',
    ],
    
    z: [
        '      ',
        '  ████',
        '    ██',
        '   ██ ',
        '  ██  ',
        ' ████ ',
        '      ',
        ],
    space: ['  ', '  ', '  ', '  ', '  ','  ','  '],
}

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
    color = color.toLowerCase();
    function render(letter, line) {
        let nletter;
        // console.log(letter);
        if (letter === ' ') {
            nletter = letters.space;
        } else {
            nletter = letters[letter];
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
            render(text[a], i);
        }
    }

    print();
}

main ('erwrwer' , 'bLaCK');
