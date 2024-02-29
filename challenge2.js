/* 

Why doesn't this code work?  Try to make it work and guess what the result will be 
(hint: this is a little bit of a review from last lesson).

*/
const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);


/* 
This code will not work because we are using `const`. you need to use the 
`let` keyword to declare the variable.  Once we change it to `let`, the code works 
*/
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable); // 3


// We could have also written this code like so:


let numberVariable = 0;

numberVariable = numberVariable + 1;
numberVariable = numberVariable + 1;
numberVariable = numberVariable + 1;

console.log(numberVariable); 

//--------------------------------------------------------------------------------------------//

/*Do the following two blocks of code result in the same answer? 
If not, which one would you recommend using and why?*/

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);


const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);

/* No, they do not result in the same answer. The first code block will evaluate to false 
while the second code block will evaluate to true.

Which one is better? there is no reason why secondNumber should be a string data type */

const firstNumber = 20;
const secondNumber = 20;

const result = firstNumber === secondNumber;

console.log(result);

//--------------------------------------------------------------------------------------------//


/*What does expression5 evaluate to? How could you write this in a single line of code 
 (for exercise purposes only; you would never want to combine all this in one line)?*/


const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

//answer 
const result = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);

console.log(result);

//--------------------------------------------------------------------------------------------//


//What does result evaluate to? 

const myObj = {
  prop1: 'first value',
  prop2: 20
};

// Index         0   1   2
const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

//answer 

const result = 20 === (40 / 2); // true

//--------------------------------------------------------------------------------------------//

/*What does result evaluate to?*/

const myObj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 

//answer
//we can combine "dot notation" and "bracket notation" into a single expression
//So really, our expression is simply 100 * 5 > 150 * 2, which can be further simplified to 500 > 300, which equals true.

//--------------------------------------------------------------------------------------------//


//Ternary Operator
// the following are the same
const result = 20 20 ? 'values match' : 'values do not match' ;



if (20 === 20) {
    resultVariab1e = 'values match' ;
    } else {
    resultVariab1e = 'values do not match' ;}