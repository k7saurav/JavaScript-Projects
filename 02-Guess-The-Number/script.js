let number = Math.floor((Math.random()*100) + 1);  // +1 because 0 should not be inlcuded.
// console.log(number)
let guess = prompt("Enter a number between 1 to 100 to guess the random number: ");
guess = parseInt(guess);

let chance = 1;  // First chance in given above

while(guess != number) {
  if(guess < number) {
    console.log("Entered Number is Smaller.\n");
    guess = prompt("Enter number again: ");
    chance++;
    continue;
  }
  else if(guess > number) {
    console.log("Entered Number is Greater.\n");
    guess = prompt("Enter number again: ");
    chance++;
    continue;
  }
}

let score = 100 - chance;

console.log("\nCongratulations!! \nThe number generated was", number + " and you guessed it right. \nYour Score is", score);