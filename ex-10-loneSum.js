
// Part 10: loneSum()

// Given 3 integer values as arguments, return their sum.
// However, if one of the values is the same as another of the values,
// it does not count towards the sum.

var loneSum = function(num1, num2, num3){
  if ((num1 == num2) && (num1 == num3) && (num2 == num3)){
    var solution = 0
    return solution
  }else if (num2 == num3){
    var solution = num1
    return solution
  }else if (num1 == num3){
    var solution = num2
    return solution
  }else {
    var solution = (num1 + num2 + num3)
    return solution
  }
}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( loneSum(1,2,3) === 6)
console.assert( loneSum(11,9,5) === 25)
console.assert( loneSum(4,2,4) === 2)
console.assert( loneSum(13,8,8) === 13)
console.assert( loneSum(10,10,10) === 0)
