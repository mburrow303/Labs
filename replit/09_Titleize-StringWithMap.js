function capitalize (someWord) {
  return someWord[0].toUpperCase() + someWord.slice(1).toLowerCase(); 
};

let myString = 'the rain in spain falls MAINLY on the PLAIN';

function titleize(myString) {
  let myArray = myString.split(" ");
  //console.log(myArray);

  let newArray = myArray.map(capitalize);

  console.log(newArray.join(" "));
};

titleize(myString);
// Should print: 'The Rain In Spain Falls Mainly On The Plain'