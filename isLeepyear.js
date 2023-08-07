function isleapyear (year){
    const reminder = year % 4;
    if(reminder === 0){
        // console.log('Your year is LeapYear:', year)
        return true;
    }
    else{
        // console.log('Not a leap Year:', year)
        return false;
    }
}

const yourYear = 1995;
const LeapYear = isleapyear(yourYear);
console.log('your year is leapyear:', LeapYear)