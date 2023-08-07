// function multiplicationOfNumber (number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }

// const result = multiplicationOfNumber(9);
// // console.log(result)

function factorial(number){
    let result2 = 1;

    for(let i = number; i >= 1; i--){
        result2 = result2 * i;
        console.log(i)
    }
    return result2;
}

const number = 10
const fact = factorial(number);
console.log('factorial of', number, fact)


// factorial-while
function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= 7){
        result = result * num;
        num++;
    }
    return result;
}

let num = 10;

const result = factorial(num);
console.log(result)

function print(a, b, c){
    return a+2;
    return a*b;
    return b*c+a;
   }
   console.log(print(1,2,3));