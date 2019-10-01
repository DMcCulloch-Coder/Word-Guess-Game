# Word-Guess-Game

game.js = almost completed version, missing functionality on win condition.
game-2.js = completed verson, with help from video.

Instructions:
-press any letter key to start
-You can't press any letter key more than once (if you do,
it will see it as an invalid response)
-as you guess correct answers the computer adds it to the word.
-as you guess incorrect answers the computer adds it to the incorrect
word bank, docks you a point and you get ever closer to losing.
-have 0 guesses remaining and you lose and you get a new word.


Game programming structure:
-take word bank, randomly select a word.
-take that word into an array.
-make another array with blanks the same lenghth.
-as they guess letters, compare it to the random word.
-as they find letters that match, it copies those letters into the blank array.
-once those two arrays match, they get a win.
-if they take too many wrong guesses they lose and it resets.