// PART 03 : getAverage()

// Write a function called getAverage that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside
// of your average function.
function getAverage(num1, num2){
  var sumSolution = simpleSum(num1, num2)
  var averageSolution = (sumSolution / 2)
  return averageSolution
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getAverage(18,22) === 20 )
console.assert( getAverage(100,200) === 150 )
