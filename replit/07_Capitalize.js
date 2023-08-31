function capitalize(someWord) {
  firstLetter = someWord[0].toUpperCase();
  restOfWord = someWord.slice(1).toLowerCase();
  fullWord = firstLetter + restOfWord;
  return fullWord
}

console.log(capitalize('tomato'));     // should print 'Tomato'
console.log(capitalize('BACON'));      // should print 'Bacon'
console.log(capitalize('LeTTuCe'));    // should print 'Lettuce'
console.log(capitalize('mayonnAISE')); // should print 'Mayonnaise'



/*
function capitalize(someWord) {
  let fullWord = "";
  for (let letter in someWord) {
    if (letter == 0) {
      fullWord += someWord[letter].toUpperCase();
    } else {
      fullWord += someWord[letter].toLowerCase();
    }
  }
  return fullWord;
}
*/