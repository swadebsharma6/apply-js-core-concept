

// 02 get odd number of an Array
function getOddNumberOfAnArray (numbers){
    const oddNumbers =[];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];

        if(element % 2 !== 0){
            // console.log(element);
            oddNumbers.push(element);
        }
        // console.log(index, element)
    }
    return oddNumbers;
}

function getSumofAnArray (numbers){

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;

}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumberOfAnArray(myNumbers);
// console.log(oddNumbers)

const OddNumbersSum = getSumofAnArray(oddNumbers);
console.log('Odd Numbers Sum:', OddNumbersSum);