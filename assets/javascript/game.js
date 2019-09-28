let wins = 0; //test
let guessesRemaining = 10; //test
let lettersGuessed = ['apple', 'grape', 'pear']; //test
let currentWordVisual = 'start';

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix',
    'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']

let word = {
    generate: wordBank [Math.floor(Math.random()*wordBank.length)],
    exchange: function(letter, x) {
        for (let i=0; i < letter.length; i++){
            
            for (let j=0; j < letter[i].length; j++){
                if(letter[i][j].toLowerCase() === x) {
                    currentWordVisual = currentWordVisual + letter[i][j] + ' ';
                } else {
                    currentWordVisual = currentWordVisual + '_ ';
                }
            }
        }
    
    }
    

}



document.onkeyup = function(event) {

    let keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    if (letters.indexOf(keyPress) > -1) {
        console.log(keyPress); //test
        console.log(word.generate); //test

        if (word.generate.includes(keyPress)) {
            word.exchange(word.generate,keyPress);
            
            console.log('yes') //test
            
        } else {
            console.log('no') //test
        };


    } else {
        alert('Invalid Input');
    };
}




document.getElementById('wins').innerHTML= wins;
document.getElementById('currentWord').innerHTML = currentWordVisual;
document.getElementById('guessesRemaining').innerHTML= guessesRemaining;
document.getElementById('lettersGuessed').innerHTML = lettersGuessed;

