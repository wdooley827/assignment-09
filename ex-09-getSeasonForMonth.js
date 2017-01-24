
// Part 08: getSeasonForMonth()

// Write a function called getSeasonForMonth() that accepts
// an integer as an argument and returns the season of year.
//   e.g. getSeasonForMonth(6) => 'summer'

// The function should be built to accept integer values
// of 1-12.
//
// It should also return false if the function is given
// bad input.
function getSeasonForMonth(num1){
  if ((num1 > 12) || (num1 <= 0) || (typeof num1 !== 'number')){
    return false
  }else if ((num1 <= 1) || (num1 >= 11)){
    var season = "winter"
    return season
  }else if ((num1 >= 2) && (num1 <= 5)) {
    var season = "spring"
    return season
  }else if ((num1 >= 6) && (num1 <= 8)){
    var season = "summer"
    return season
  }else{
    var season = "fall"
    return season
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth("June") === false)
