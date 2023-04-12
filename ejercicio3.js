//function that accept and array and a number. and return a new array with all the elements of the array plus the number
const addNumberToArray = (array, number) => array.map(element => element + number);
console.log(addNumberToArray([1, 2, 3, 4, 5], 5));