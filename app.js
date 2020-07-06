//Step 1: Building dice
//Use a function to create build dice 
//Inside create two arrays, dice1 and dice 2 
//create an empty array combined dice 
//use a for loop to append both dices into the combined ones. (Should come out as nested array)


function dice() {
  dice_1 = [1, 2, 3, 4, 5, 6]
  dice_2 = [1, 2, 3, 4, 5, 6]
  combined = []
  for (let i = 0; i < dice_1.length; i++) {
    sliceddice = dice_1.slice()
    combined.push(sliceddice)
  } for (let j = 0; i < dice_2.length; j++) {
    slicediced2 = dice_2.slice()
    combined.push(sliceddice2)
  } return combined
}


//Step 2: Rolling the dice so its random 
//Create a function called roll
//Use the random function to roll the dice so the numbers come out randomly
//

// function roll() {
//   const rolleddice = combined;

// }

//Step 3: 
//Get input from user, how much they are going to bet, and guess if they have
//odd(han) or even(cho)

function input() {
  let betamt = 0
  let bet = getInput('How much are you betting?')
  betamt + bet
}

//Respond to whether or not its cho or han 