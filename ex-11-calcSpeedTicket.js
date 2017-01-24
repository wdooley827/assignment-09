
// Part 11: calcSpeedTicket()

// Write a function that calculates a speeding ticket:
// The function should take 3 arguments:
//    (1) the speedLimit
//    (2) the user's clocked speed
//    (3) a boolean value for whether the user was in
//        a school-zone or work-zone

// fine schedule:
//   less than speed limit + 5mph : $0
//   less than 20 mph             : $150
//   20 mph or more               : $250
//

// Examples:
//  calcSpeedTicket(20, 30, true)
//  => 300

//  calcSpeedTicket(20, 30, false)
//  => 150

function calcSpeedTicket(input1, input2, input3){
  var speed = (input2 - input1)
  if (speed <= 5){
    var fine = 0
    return fine
  }else if ((speed < 20) && (input3 == true)){
    var fine = (150 * 2)
    return fine
  }else if ((speed < 20) && (input3 == false)){
    var fine = 150
    return fine
  }else if ((speed >= 20) && (input3 == true)){
    var fine = (250 * 2)
    return fine
  }else if ((speed >= 20) && (input3 == false)){
    var fine = 250
    return fine
  }
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( calcSpeedTicket(25, 40, false) === 150  )
console.assert( calcSpeedTicket(65, 72, true) === 300  )
console.assert( calcSpeedTicket(75, 97, false) === 250 )
console.assert( calcSpeedTicket(55, 83, true) === 500  )

console.assert( calcSpeedTicket(25, 29, true) === 0  )
