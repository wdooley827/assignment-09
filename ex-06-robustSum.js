
/**
 * PART 06: robustSum()
 *
 * Modify your simpleSum function so that if either of its
 * inputs is not a number, it will return the boolean `false`
 */

 function robustSum(num1, num2){
   var sumSolution = (num1 + num2)
   if (typeof num1 !== 'number'){
     return false
   }else if (typeof num2 !== 'number'){
     return false
   }else{
     return sumSolution
   }
 }

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( robustSum(867, 5309)   === 6176);
console.assert( robustSum('867', 5309) === false);
console.assert( robustSum(5, true)     === false);
