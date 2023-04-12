//function that, given an array of numbers, delete the number that is different from the others
function deleteDifferentNumber(array) {
    let newArray = [];
    let number = array[0];
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            newArray.push(number);
        }
    }
    return newArray;
}

console.log(deleteDifferentNumber([1, 1, 1, 2, 1, 1]));