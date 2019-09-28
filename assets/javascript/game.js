let wins = 0; //test
let guessesRemaining = 10; //test
let correctLetters = []; //fix - need a bank of only correct letters.  
//banks need to be cleared and word reset after win
//word needs to be generated and blanks displayed before guessing
let incorrectLetters = []; //fix
let lettersGuessed = ''; //test
let currentWord = 'start';

let unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix',
    'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']

let word = {
    generate: wordBank [Math.floor(Math.random()*wordBank.length)],
    delete: function(x) {
        unguessedLetters.splice(unguessedLetters.indexOf(x),1)
        },
    exchange: function(currentGuess, x) {

        let currentWordVisual = '';

        for (let i=0; i < currentGuess.length; i++){
            
            if(currentGuess[i].toLowerCase() === x || correctLetters.indexOf(word.generate[i]) > -1 ) {
                currentWordVisual = currentWordVisual + currentGuess[i] + ' ';
                
            } else {
                currentWordVisual = currentWordVisual + '_ ';
            }
        
        }

        this.delete(x);
        correctLetters.push(x);
        currentWord = currentWordVisual;
        
        console.log(currentWordVisual); //test
    
    }
    

}


document.onkeyup = function(event) {

    let keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    if (unguessedLetters.indexOf(keyPress) > -1) {
        console.log(keyPress); //test
        console.log(word.generate); //test

        if (word.generate.includes(keyPress)) {
            word.exchange(word.generate,keyPress);
            
            
        } else {
            word.delete(keyPress);
            incorrectLetters.push(keyPress);
            
        };


    } else {
        alert('Invalid Input');
    };

    document.getElementById('wins').innerHTML= wins;
    document.getElementById('currentWord').innerHTML = currentWord;
    document.getElementById('guessesRemaining').innerHTML= guessesRemaining;
    document.getElementById('lettersGuessed').innerHTML = correctLetters + ',' + incorrectLetters;
}




document.getElementById('wins').innerHTML= wins;
document.getElementById('currentWord').innerHTML = currentWord;
document.getElementById('guessesRemaining').innerHTML= guessesRemaining;
document.getElementById('lettersGuessed').innerHTML = lettersGuessed;

