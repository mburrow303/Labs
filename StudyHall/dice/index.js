let score = 0; // default for the start of the turn
let dieRoll; // hold our roll value
let stateOfDie = 'not rolled'; // current state of the die
let numRolls = 0; // starting count for our rolls allowed (1-3)


const scoring = {
  '1': 100,
  '2': 20,
  '3': 30,
  '4': 40,
  '5': 50,
  '6': 60,
}

let dieState = {
  'not rolled': ['roll'], // base state only allows roll
  roll: ['score', 'roll'],
  score: ['not rolled'] // finalize the score
}

function scoreDice(dict, dieValue) {
  // this will update our score and provide us feedback
  score += dict[dieValue];
  console.log(`your score is ${score}`)
}

function rollDie() {
  // generate a random number and increase our roll count
  dieRoll = Math.floor((Math.random() * 6) + 1)
  numRolls++
}

function playState(command) {
  // pulling in our command and running our conditionals
  let valid = dieState[stateOfDie] 

  if(valid.includes(command)) {
   stateOfDie = command; //
   if(stateOfDie === 'roll') {
    if(numRolls === 3) {
      console.log(`You rolled ${numRolls} times! This roll doesn't count!`)
    } else {
      rollDie();
      console.log(`You rolled a ${dieRoll}. Would you like to roll or get the points?`)
      scoreDice(scoring, dieRoll)
      console.log(`number of rolls: ${numRolls}`)
    }
   }
   if(stateOfDie === 'score') {
    dieRoll = 'not rolled';
    numRolls = 0;
    console.log(`your final score is ${score}`)
    score = 0
   }
  } else {
    console.log(`Invalid state for the die: ${stateOfDie} to ${command}`)
  }
}

//playState('roll')
//playState('score')
playState('roll')
playState('roll')
playState('roll')
playState('score')