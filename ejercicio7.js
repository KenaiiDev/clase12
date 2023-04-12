//given an array of numbers, return the biggest product between two adjacent elements
const adjacentElementsProduct = array => {
    let max = array[0] * array[1];
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] * array[i + 1] > max) {
            max = array[i] * array[i + 1];
        }
    }
    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
console.log(adjacentElementsProduct([1, 2, 3, 0]));