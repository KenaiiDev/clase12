const minSum = arr => {
    arr.sort((a, b) => a - b);
    return arr[0] + arr[1]
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([7,4,8,1]));