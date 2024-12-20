// Your goal is to create a function that removes the first and last characters of a string.

function removeChar(str){
    return str.slice(1, -1)
};
  
console.log(removeChar("country"))