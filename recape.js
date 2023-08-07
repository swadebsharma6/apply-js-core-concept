var myName = 'Swadeb Sharma';


// math operation: +, -, *, /
// shorthand: +-, --, +-, /-;

// Array
var friends = ['abul', 'kabul', 'Sabul', 'Tabul'];

var thirdFriend = friends[2];
friends[3]= 'Bagher baccha Tabu'
console.log(thirdFriend);

// condition
//  <, >, <==, >==, !==, 
if(friends.length > 2){
    console.log('I have lot of friends')
}
else{
    console.log('i  have no friends')
}


// loop
var num = 0;
while(num <= 10){
    console.log(num);
    num++;
}

// for loop
for(var i = 0; i <= 10; i++){
    console.log(i)
}

// function
function isMoonUp(time){
    if(time > 7){
        return time;
    }
}
isMoonUp();

// object
var jantus ={
    name: 'sakila',
    height: 5,
    baperTaka: 100000,
    
}