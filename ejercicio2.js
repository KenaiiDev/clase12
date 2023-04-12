const removeLastThreeElementsFromArray = array => {
  if (array.length > 5) {
    return array.slice(0, -3);
  }
  return "The array must have more than 5 elements";
}

console.log(removeLastThreeElementsFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeLastThreeElementsFromArray([1, 2, 3, 4]));