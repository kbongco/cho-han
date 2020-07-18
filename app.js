//Step 1: Building dice
//Use a function to create build dice 
//Inside create two arrays, dice1 and dice 2 
//create an empty array combined dice 
//use a for loop to append both dices into the combined ones. (Should come out as nested array)


function dice() {
  dice1 = Math.floor(Math.random() * 6) + 1
  dice2 = Math.floor(Math.random() * 6) + 1
  return dice1 + dice2
}


//Step 2: Check if odd or even 
check = () => {
  if (dice() % 2 == 0) {
    return Even 
  } else {
    return Odd 
  }
}

//Step 3: 
//Get input from user, how much they are going to bet, and guess if they have
//odd(han) or even(cho)

function input() {
  let betamt = 10000
  let bet = getInput('How much are you betting?')
  betamt - bet
}

//Respond to whether or not its cho or han 