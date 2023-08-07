//  1* 3 * 3 * 4* 5* 6* 7

function multiplicationOfNumber (number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationOfNumber(9);
console.log(result)