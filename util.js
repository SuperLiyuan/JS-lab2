
// First Function: Welcome Message
function welcome(firstName, lastName) {
    return `Welcome ${firstName} ${lastName} to G@I College`;
  }
  
  // Second Function: Convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Third Function: Calculate Factorial
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Fourth Function: Generate Fibonacci Sequence
  function fibSequence(n) {
    // The first two numbers in the Fibonacci sequence
    const sequence = [0, 1];
  
    // Generate the sequence up to n numbers
    for (let i = 2; i < n; i++) {
      // Add the sum of the last two numbers to the sequence
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    // Return the first n numbers of the Fibonacci sequence
    return sequence.slice(0, n);
  }
  
  //commonJS 
  module.exports = {
    welcome,
    celsiusToFahrenheit,
    factorial,
    fibSequence
  };
  
