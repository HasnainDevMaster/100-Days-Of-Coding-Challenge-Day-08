// 100 Days Of Coding Challenge!

/** Question 22:
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/

//-------------------------------------------------------------------------------------------------------------------------------

// An array of fruits
let fruits: string[] = ["Apple", "Banana", "Orange"];
console.log(fruits[3]); // This will produce an index error because arrays are zero-indexed

// Correcting the error
console.log(fruits[2]); // This will correctly log "Orange" to the console
