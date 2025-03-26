alert("Shall we play a game?");

alert(
  "Read my mind! \n I'll give you a clue and you try to guess what word I'm thinking of. \n You have 3 guesses and 3 clues. \n Submit answers in all lowercase.\n Ready?"
);

alert("Rose");
let guess1 = prompt("What's your guess?");
if (guess1 == "titanic") {
  alert("You read my mind!!!");
} else {
  let guess2 = prompt(`Not even close. Here's another clue: Colossal`);
  if (guess2 == "titanic") {
    alert("You read my mind!!!");
  } else {
    let guess3 = prompt(`Close but no cigar. This is your last clue: Iceburg`);
    if (guess3 == "titanic") {
      alert("You read my mind!!!");
    } else {
      alert("Loser! Another Loser!");
    }
  }
}
