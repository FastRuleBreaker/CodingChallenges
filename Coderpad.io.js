/*

  Write a function that accepts an array of integers and returns the second highest integer in the array.
  
  Example Input: [ 4, 1, 5, 3, 6, 6 ]
  Example Output: 5
  
  Example Input: [ -1, -6, -4, -1, -5, -3, -5, -3, -6 ]
  Example Output: -3

*/

const findSecondHighest = (array) => {
  let highest = null;
  let secondHighest = null;
  array.forEach((number)=>{
    if(highest == null){
      highest = number
    } 
    else {
      if(number > highest){
        secondHighest = highest
        highest = number
      } 
      else {
        if(secondHighest == null  && number!==highest){
          secondHighest = number
        }
        else {
          if(number>secondHighest && number!==highest){
            secondHighest = number
          }
        }
      }
    }
  })
  // console.log(highest, secondHighest)
  if(secondHighest == null){
    throw new Error("Not enough unique numbers in the array")
  }
  return secondHighest
}

const input1 =  [ 4, 1, 5, 3, 6, 6 ]
const input2 =  [ -1, -6, -4, -1, -5, -3, -5, -3, -6 ]
console.log('first input:', findSecondHighest(input1))
console.log('second input:', findSecondHighest(input2))

const test1 = []
const test2 = [ null ]
const test3 = [ -3, -3 ]
console.log(findSecondHighest(test3))
