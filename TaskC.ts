// 100 Days Of Coding Challenge!

/** Question 24:
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:

* Tests for equality and inequality with strings
* Tests using the lower case function
* Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
* Tests using "and" and "or" operators
* Test whether an item is in a array
* Test whether an item is not in a array*/

//--------------------------------------------------------------------------------------------------------------------------------------------

// Typescript Conditional Tests

// Tests for Equality and Inequality with Strings:
console.log("Testing equality with strings:");
let country: string = "Russia";
console.log(country === "Malaysia"); // (Inequality)
console.log(country !== "UAE"); // (Equality)

// Tests Using the Lower Case Function:
console.log("Testing with lower case:");
console.log("HELLO".toLowerCase() === "hello"); // (Converts to lowercase)
console.log("world".toLowerCase() === "World"); // (Not equal after conversion)

// Numerical Tests involving equality and inequality:
console.log("Numerical tests:");
const num1 = 10;
const num2 = 20;
console.log(num1 >= num2); // Inequality (False)
console.log(5 === 5); // Equality (True)
console.log(15 > 10); // Greater than (True)
console.log(20 < 25); // Less than (True)
console.log(30 >= 30); // Greater than or Equal to (True)
console.log(40 <= 45); // Less than or Equal to (True)

// Tests using “and” and “or” operators:
console.log("Tests using 'and' and 'or' operators:");
const condition1: boolean = true;
const condition2: boolean = false;

// Logical AND (&&) test
console.log("Logical AND (&&) test:");
if (condition1 && condition2) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one condition is false."); // Output
}

// Logical OR (||) test
console.log("Logical OR (||) test:");
if (condition1 || condition2) {
  console.log("At least one condition is true."); // Output
} else {
  console.log("Both conditions are false.");
}

// Test Whether an Item Is in an Array:
let vegetables = ["tomato", "potato", "onion"];
console.log("Is 'potato' in vegetables?");
console.log(vegetables.includes("potato")); // True
console.log("Is 'carrot' not in vegetables?");
console.log(vegetables.includes("carrot")); // False

// Test Whether an Item Is Not in an Array:
let fruitsList = ["apple", "banana", "cherry"];
console.log("Is 'cherry' in fruitsList?");
console.log(fruitsList.includes("cherry")); // True
console.log("Is 'mango' not in fruitsList?");
console.log(fruitsList.includes("mango")); // False
