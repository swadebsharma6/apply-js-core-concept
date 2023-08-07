// const myInches = 12;
// const myFeet = myInches /12;
// console.log(myFeet)

// const dadaInchs = 144;
// const dadaFeet = dadaInchs / 12;
// console.log('Dada feet', dadaFeet)

// const dadiInch = 60;
// const dadiFeet = 60 / 12;
// console.log('dadi feet:', dadiFeet);


function inchToFeet (inches){
    const feet = inches/12;
    return feet;
}

const dadaInchs = 144;
const dadaFeet = inchToFeet(dadaInchs);
console.log(dadaFeet)