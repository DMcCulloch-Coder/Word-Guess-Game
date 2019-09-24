let wins = 0; //test
let currentWord = 'none'; //test
let guessesRemaining = 10; //test
let lettersGuessed = ['apple', 'grape', 'pear'] //test

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix', 'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']

/*let word = {
    generate: wordBank [Math.floor(Math.random()*wordBank.length)],
    


}*/
let word = wordBank [Math.floor(Math.random()*wordBank.length)];



document.onkeyup = function(event) {
    let keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    if (letters.indexOf(keyPress) > -1) {
        console.log(keyPress); //test
        console.log(word.generate); //test

        //test to compare to key pressed to see if it is in the word
        if (word.includes(keyPress) > -1) {
            console.log('yes')
        } else {
            console.log('no')
        }


    } else {
        alert('Invalid Input')
    }
}




document.getElementById('wins').innerHTML= wins;
document.getElementById('currentWord').innerHTML = currentWord;
document.getElementById('guessesRemaining').innerHTML= guessesRemaining;
document.getElementById('lettersGuessed').innerHTML= lettersGuessed;




