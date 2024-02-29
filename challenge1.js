/* 
1. Create a boolean variable called 'myBoolean' and set it to 'true'.
2. Create a string variable called 'myStrtng& and set it to 'hello world'.
3. Create a number variable called 'firstNumber' and set it equal to '20'.
4. Create another number variable called 'secondNumber' and set it equal to '40'.
5. Re-assign 'secondNumber' and set it equal to '80'.
6. Create an array called 'myArray' and put 'myBoolean' at index 0, and 'myString' at index 1.
7.Create an object called 'myObject' and assign 'myArray' to a property called 'firstProperty' , and
the sum of 'firstNumber' and 'secondNumber' to a property called 'sumProperty'
8.Print 'myObject' to the console.
9.Print the 'sumProperty' of 'myObject' to the console.
10.Print the value at index 1 of 'firstProperty' .
*/

// 1
const myBoolean = true;

// 2
const myString = 'hello world';

// 3
const firstNumber = 20;

// 4 used `let` to re-assign the value 
let secondNumber = 40;

// 5
secondNumber = 80;

// 6
const myArray = [myBoolean, myString];

// 7
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

// 8
console.log(myObject);

// 9
const sumProp = myObject.sumProperty;
console.log(sumProp);

// 9 - Alternate solution
console.log(myObject.sumProperty);

// 10
const firstProp = myObject.firstProperty;
const arrayValue = firstProp[1];
console.log(arrayValue);

// 10 - Alternate solution
console.log(myObject.firstProperty[1]);
