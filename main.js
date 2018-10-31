const letters = {
    a : [' ████' , ' █  █' , ' ████' , ' █  █' , ' █  █'],
    b : ['  ████ ' , '  █  ██' , '  ████ ' , '  █  ██' , '  ████ '],
    c : ['  ████' , '  █  █' , '  █   ' , '  █  █' , '  ████'],
    d : ['  ████ ' , '  █  ██' , '  █  ██' , '  █  ██' , '  ████ '],
    e : ['  ███' , '  █  ' , '  ███' ,  '  █  ' , '  ███'],
    f : ['  ███' , '  █  ' , '  ███' , '  █  ' , '  █  '],
    g : ['  ████' , '  █   ', '  █ ██', '  █  █' , '  ████'],
    h : [],
    i : [],
    j : [],
    k : [],
    l : [],
    m : [' █   ██', ' ██ ███' , ' █ █ ██' , ' █   ██' , ' █   ██'],
    n : [],
    o : [],
    p : [' ████', ' █  █' , ' ████' , ' █   ', ' █   '],
    q : [],
    r : [],
    s : [],
    t : [' ███', '  █ ', '  █ ' , '  █ ' ,'  █ '],
    u : [],
    v : [],
    w : [],
    x : [],
    z : ['  ████' , '    ██' , ' █ ██' , ' ██   ' , '  ████'],
    space : ['  ', '  ', '  ', '  ', '  '],
}

module.exports = function main ( text ) {

    function render ( letter , line ) {
        
        // console.log(letter);
        if (letter === ' ') {
            nletter = letters.space;
        } else { 
            nletter = letters[letter];
        }

        result[line] += nletter[line];
    }

    function print () {
        for (let i = 0; i < 5; i++) {
            console.log(result[i]);
        }
    }

    let result = [ '', '', '', '', ''];
    text = text.toLowerCase();

    for ( let a = 0; a < text.length; a++) {
        for ( let i = 0; i <5; i++ ) {
            render ( text[a] , i );
        }
    }

    print();
    
}