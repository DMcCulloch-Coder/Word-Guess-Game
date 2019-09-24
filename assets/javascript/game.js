let wins = 0;
let currentWord = 'none';
let guessesRemaining = 10;
let lettersGuessed = ['apple', 'grape', 'pear']

document.getElementById('wins').innerHTML= wins;
document.getElementById('currentWord').innerHTML = currentWord;
document.getElementById('guessesRemaining').innerHTML= guessesRemaining;
document.getElementById('lettersGuessed').innerHTML= lettersGuessed;

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix', 'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']

let word = {




}


document.onkeyup = function(event) {
    let keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    if (letters.indexOf(keyPress) > 1) {
        console.log(keyPress);



    } else {
        alert('Invalid Input')
    }
}







