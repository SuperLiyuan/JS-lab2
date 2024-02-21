// Using CommonJS syntax for demonstration. You can switch to ES modules if required by your project setup.

// Importing the utilities file. Replace 'utilities' with the actual name of your utilities file.
const utils = require('./util');

console.log('welcome message:', utils.welcome('Liyuan', 'Luo'));
console.log('Converting Celsius to Fahrenheit:', utils.celsiusToFahrenheit(10));
console.log('Calculating factorial:', utils.factorial(10));
console.log('Generating Fibonacci sequence:', utils.fibSequence(10));


