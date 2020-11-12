// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Codewars Link


function square(numbers){
  return numbers.reduce((accumulativeTotal, currentValue) => accumulativeTotal + Math.pow(currentValue, 2), 0)
}

console.log(square([1, 2, 2]))