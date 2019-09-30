//global var
let wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix', 'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']
let selectedWord = '';
let arrayForSelectedWord = [];
let selectedWordVisual = [];
let incorrectLetters = [];
let currentWordVisual = [];
let unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let wins = 0;
let guessesRemaining = 10;

function reset() {
    //reset values for new word (made it into an array / make new array of _ to fill in for word in visual)
    selectedWord = wordBank [Math.floor(Math.random()*wordBank.length)];
    arrayForSelectedWord = selectedWord.split('');

    console.log (selectedWord) //test
    console.log (arrayForSelectedWord) //test

    guessesRemaining = 10;
    incorrectLetters = [];
    selectedWordVisual = [];

    //made 
    for (let i = 0; i < arrayForSelectedWord.length; i++){
        selectedWordVisual.push('_')
    }

    console.log (selectedWordVisual) //test
}

function displayValues () {
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('currentWord').innerHTML = currentWordVisual;
    document.getElementById('guessesRemaining').innerHTML =  guessesRemaining;
    document.getElementById('lettersGuessed').innerHTML = incorrectLetters;

}

displayValues();
reset();

document.onkeyup (event) {
    displayValues();

    let keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (unguessedLetters.indexOf(keyPress) > -1) {
        //if they keyed in a number




        
    } else {
        //if they keyed in a non-letter or a guessed letter
        alert('Input Error!!!')
    } 


}
