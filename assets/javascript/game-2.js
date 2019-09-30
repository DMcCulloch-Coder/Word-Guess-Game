//global var
let wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix', 'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']
let selectedWord = '';
let arrayForSelectedWord = [];
let selectedWordVisual = [];
let incorrectLetters = [];
let unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let wins = 0;
let guessesRemaining = 10;

//functions
function reset() {
    //reset values for new word (made it into an array / make new array of _ to fill in for word in visual)
    selectedWord = wordBank [Math.floor(Math.random()*wordBank.length)];
    arrayForSelectedWord = selectedWord.split('');

    console.log (selectedWord) //test
    console.log (arrayForSelectedWord) //test

    guessesRemaining = 10;
    incorrectLetters = [];
    selectedWordVisual = [];
    unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    //made 
    for (let i = 0; i < arrayForSelectedWord.length; i++){
        selectedWordVisual.push('_')
    }

    console.log (selectedWordVisual) //test
}

function displayValues() {
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('currentWord').innerHTML = selectedWordVisual;
    document.getElementById('guessesRemaining').innerHTML =  guessesRemaining;
    document.getElementById('lettersGuessed').innerHTML = incorrectLetters;

}

function checkLose() {
    if(guessesRemaining == 0) {
        alert ('You lose!')
        displayValues();
        reset();
    }
}

function checkWin() {
    console.log(JSON.stringify(selectedWordVisual))
    console.log(JSON.stringify(arrayForSelectedWord))
    

    if(JSON.stringify(selectedWordVisual) == JSON.stringify(arrayForSelectedWord)) {
        alert ('You Won!')
        wins++;
        displayValues();
        reset();
    } else {
        console.log('error')
    }
}

//game running
displayValues();
reset();

document.onkeyup =  function(event) {

    displayValues();
    //set key pressed to var keyPress
    let keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (unguessedLetters.indexOf(keyPress) > -1) {
        //if they keyed is a letter and unguessed

        
        //if the key is in the word
        if(arrayForSelectedWord.indexOf(keyPress) > -1) {
            console.log('correct letter') //test
            for(i=0; i<arrayForSelectedWord.length; i++) {
                //loop through array
                if(arrayForSelectedWord[i] == keyPress) {
                    selectedWordVisual[i] = arrayForSelectedWord[i];
                    console.log(arrayForSelectedWord);
                    console.log(selectedWordVisual);
                    
                    checkWin();
                }
                
            }

            displayValues();
        } else {
            //if the key is a letter, but not in word
            guessesRemaining--;
            checkLose ();
            displayValues();

        }



    } else {
        //if they keyed in a non-letter or a guessed letter
        alert('Input Error!!!')
    } 


}
