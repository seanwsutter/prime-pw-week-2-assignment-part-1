// REQUIRED FEATURES:

// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Sean';

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Sutter';

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName+' '+lastName;
/* NOTE: Not sure if this is really important, but I added the space for
correct formatting with how it appears in the console log */

// 4 - Console log the value of `fullName`
console.log('My full name is', fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 2;

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
console.log('My name is', fullName + ', and I think ' + luckyNumber + ' is a winner!');
console.log(`My name is ${fullName}. and I think ${luckyNumber} is a winner!`);

// String interpolation

// Refer back to the videos if you need help with this one.

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
let empty = luckyNumber - 3;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let favBreakfastFood = 'Eggs';
console.log('In the morning, I like to eat', favBreakfastFood);
let favLunchFood = 'Chicken Caeser Salad';
console.log('For lunch, I will get a', favLunchFood);
let favDinnerFood = 'Chicken Alfredo';
console.log('In the evening, I might have', favDinnerFood);
let food = favBreakfastFood + ', ' + favLunchFood + ', ' + favDinnerFood;
console.log('These are some of my favorite foods:', food);

/* NOTE: Not sure if the formatting is important for how things appear in the console, I probably could have
answered #8 with less console logs but I thought I'd mess around a bit. Ill ask for feedback next class about
formatting and if its something worth spending time on. */

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 2;
console.log('Number of pets I have:', pets);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
console.log('Number of pets my friend has:', friendsPets);

// 11 - Add two pets to your `pets` variable
pets += 2;
console.log('I gaianed two more pets, I now have:', pets);

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;
console.log('I am allowed to have this many pets:', allowedPets);

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous) {
  console.log('Adventures are great!')
} else {
  console.log('How about we stay home?')
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (adventurous && luckyNumber == 2) {
  console.log('Roll the dice!')
}

// 15 - Write a conditional that console logs "I can have more pets!"
// if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets) {
  console.log('I can have more pets!');
} else if (pets == allowedPets) {
  console.log('I have enough pets.');
} else {
  console.log('Oh no, I have too many pets!');
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.
console.log('Number of pets I have:', pets)
console.log('Number of pets my friend has:', friendsPets);
let mostPets = 0
if (pets < friendsPets) {
  mostPets = friendsPets
} else if (pets > friendsPets) {
  mostPets = pets
}
console.log('I have the most pets at:', mostPets)

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
switch (mostPets) {
  case friendsPets:
  console.log('My friend has the most pets at:', mostPets);
    break;
  case pets:
  console.log('I have the most pets at:', mostPets);
    break;
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
let morePets = (pets > friendsPets) ? pets : friendsPets
console.log('I have the most pets at:', morePets);

// mostPets = pets >= friendsPets ? pets : friendsPets;
