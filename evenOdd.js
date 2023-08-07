// Even number
// console.log(4/2)
// console.log(42/2)
// console.log(144/2)
// console.log(1240/2)

// Odd number
// console.log(7/2)
// console.log(83/2)
// console.log(143/2)
// console.log(1249/2)


// console.log(4%2)
// console.log(42%2)
// console.log(144%2)
// console.log(1240%2)

// console.log(7%2)
// console.log(83%2)
// console.log(143%2)
// console.log(1249%2)

function isEven(number){
    const reminder = number % 2;
    // console.log(reminder);
    if(reminder === 0){
        // console.log('Number is even');
        return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }
}

const myNumber = 302;
const myNumberIsEven = isEven(myNumber);
console.log(myNumberIsEven);