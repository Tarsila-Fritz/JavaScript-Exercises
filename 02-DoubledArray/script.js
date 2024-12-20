// Given an array of integers, return a new array with each value doubled.

function maps(x){
    let doubledArray = x.map(num => num * 2);  // map = creates a new array | num = a parameter that represents each individual element of the array
    return doubledArray
}
  
console.log(maps([4, 7, 18]))