let message = 'Hello JavaScript';
alert(message);
message = "Nice to see you";
alert(message);
let youserAge=parseInt(prompt('Enter your age'));
// alert('your age is ' + youserAge);
let nextAge=addOne(youserAge);
alert('next year your age is ' + nextAge);
if (youserAge>=18){
    alert("You can drink");
}
else {
alert("you cant drink");
};

function addOne (value){
    const newValue=value+1;
    return newValue;
}