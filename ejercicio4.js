const createNewArray = num => {
    const array = [];
    for (let i = 0; i < num; i++) {
        array.push(i);
    }
    return array;
};

console.log(createNewArray(5));