alert('Shall we play a game?')

alert("Read my mind! \n I'll give you one word and you try to guess what word I'm thinking of. \n You have 3 guesses and 3 words. \n Submit answers in all lowercase.\n Ready?")

alert('Rose')


for (let i = 0; i < 3; i++) {
    let i = prompt("What's your guess?");
    if (i == 'titanic') {
        alert('You read my mind!!!');
        break;
    } else {
        i+=1
        let i = prompt(`Not even close. Here's another word: Colossal`)
    }
}
