// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here

// It's done when the message "True ✅ True ✅" is logged when both expression1 and expression2 are true.
if(expression1 && expression2) {
    console.log("True ✅ True ✅")
} 

//It's done when the message "True ✅ False ❌" is logged when expression1 is true.
if(expression1) {
    console.log("True ✅ False ❌")
}

//It's done when the message "False ❌ True ✅" is logged when expression2 is true.
if (expression1 && !expression2) {
    console.log("False ❌ True ✅")
}



// FIZZ BUZZ Example

/* let number = 1

while (number < 100) {
    // if number is a multiple of 5, fizz
    // if number is a multiple of 7, buzz
    console.log(number)
    number = number + 1
  }
*/

let number = 1;

while (number < 100) {
    if (number % 5 === 0 && number % 7 === 0) {
        console.log("FIZZ BUZZ");
    } else if (number % 5 === 0) {
        console.log("FIZZ");
    } else if (number % 7 === 0) {
        console.log("BUZZ");
    } else {
        console.log(number);
    }
    number = number + 1;
}





/*  

# Supplementary problem

A chessboard has 64 squares.

On the first square, place one grain of rice.

On the second square, place two grains of rice.

On the third square, place four grains of rice.

Each square has double the number of grains of rice as the previous.

How many grains of rice are there in total on the chessboard? 

*/

let squareNumber = 1
let numberOfRiceGrains = 1
let totalNumberOfRiceGrains = 1

while (squareNumber < 64) {
  squareNumber = squareNumber + 1
  numberOfRiceGrains = 2 * numberOfRiceGrains
  totalNumberOfRiceGrains = totalNumberOfRiceGrains + numberOfRiceGrains
  console.log('Square number: ' + squareNumber)
  console.log('Number of rice grains: ' + numberOfRiceGrains)
}

console.log('Total number of rice grains: ' + totalNumberOfRiceGrains)