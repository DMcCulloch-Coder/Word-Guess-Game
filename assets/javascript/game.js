let wins = 0; //test
let guessesRemaining = 15; //test
let correctLetters = [];  
//change reset to generate a new word
//recognize win condition
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

function updateScore() {
    document.getElementById('wins').innerHTML= wins;
    document.getElementById('currentWord').innerHTML = currentWord;
    document.getElementById('guessesRemaining').innerHTML= guessesRemaining;
    document.getElementById('lettersGuessed').innerHTML = incorrectLetters;
}

function reset () {
    guessesRemaining = 15;
    correctLetters = [];
    incorrectLetters = [];
    let unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    updateScore ();
    //need this to reset the word!!!!!****************************************************8
    word.generate = wordBank [Math.floor(Math.random()*wordBank.length)]
}

function win () {
    alert ('You Won!');
    win++;
    reset();
}

function lose(){
    alert ('You lose!');
    reset();
}

//What happens when you press a key
document.onkeyup = function(event) {

    updateScore();

    let keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    //if key is for unguessed letter
    if (unguessedLetters.indexOf(keyPress) > -1) {
        
        //if that key is in the word
        if (word.generate.includes(keyPress)) {
            word.exchange(word.generate,keyPress);
            
            
        } else {
            word.delete(keyPress);
            incorrectLetters.push(keyPress);
            guessesRemaining = guessesRemaining - 1;
            if (guessesRemaining <= 0){
                lose();
            } 
            
        };

        
    } else {
        alert('Invalid Input');
    };

    updateScore();
}

updateScore();

