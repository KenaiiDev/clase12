//We have a group of 🐑 that are threatened by a 🐺 and we need to know which one is about to be eaten
//considerin that we have the 🐑s and the 🐺 in an array, and in this array we consider that the first element is the last one
//The 🐺 only can eat the 🐑 that is in his right side
//If one of the 🐑 can be eaten, return a message of warning with the index of the 🐑 that is about to be eaten
//if no one of the 🐑 can be eaten, return a message of safety

const warnTheSheep = array => {
    array.reverse();
    if (array[0] === "🐺" ){
        return "No sigas comiendo ovejas";
    }
    for(let i = 1; i < array.length; i++){
        if(array[i] === "🐺"){
            return `La 🐑 número ${i} va a ser comida`;
        }
    }
}

console.log(["🐑", "🐑", "🐑", "🐑", "🐑", "🐑", "🐑", "🐺"])
console.log(warnTheSheep(["🐑", "🐑", "🐑", "🐑", "🐑", "🐑", "🐑", "🐺"]));
console.log(["🐑", "🐑", "🐑", "🐑", "🐑", "🐑", "🐺", "🐑"])
console.log(warnTheSheep(["🐑", "🐑", "🐑", "🐑", "🐑", "🐑", "🐺", "🐑"]));
console.log(["🐑", "🐑", "🐑", "🐑", "🐑", "🐺", "🐑", "🐑"])
console.log(warnTheSheep(["🐑", "🐑", "🐑", "🐑", "🐑", "🐺", "🐑", "🐑"]));