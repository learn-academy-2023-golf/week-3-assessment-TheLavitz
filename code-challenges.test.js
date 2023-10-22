// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6;
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10;
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacciGen", () => {
  it("Takes in a number (greater than 2) and returns an array containing the Fibonacci sequence.", () => {
    expect(fibonacciGen(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacciGen(fibonacciLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});

const fibonacciGen = (input) => {
  if (input > 2) {
    let fibonacciOut = [1, 1];
    for (i = 1; i < input - 1; i++) {
      fibonacciOut.push(fibonacciOut[i - 1] + fibonacciOut[i]);
    }
    return fibonacciOut;
  }
};

// b) Create the function that makes the test pass.

// Pseudo code:
// Declare a function called fibonacciGen
// Input: a number greater than 2
// Output: an array the length of the input containing the fibonacci sequence
// Use an if() conditional to verify the input is greater than two
// Use a for() loop to continue adding values to the output array until the array is the length of the input
// Use the .push() built-in-method to take the sum of the current and previous index of the array and place it at the end of the array.

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
};
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("sortObjectValues", () => {
  it("Takes an object and returns an array of the object's values sorted from least to greatest", () => {
    expect(sortObjectValues(studyMinutesWeek1)).toEqual([
      15, 15, 20, 30, 30, 60, 90,
    ]);
    expect(sortObjectValues(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ]);
  });
});

// b) Create the function that makes the test pass.

const sortObjectValues = (object) => {
  const valuesArray = Object.values(object);
  valuesArray.sort((a, b) => a - b);
  return valuesArray;
};

// Pseudo code:
// Declare a function named sortObjectValues
// Input: Object
// Output: Array
// Use the method Object.values to return an array of the values stored in an object
// Use the .sort() method to sort the values of the returned array using a comparison function to ensure the numbers are sorted from smalles to largest