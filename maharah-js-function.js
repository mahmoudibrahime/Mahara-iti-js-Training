var x = parseInt(prompt("Please enter your number", ''));
x += parseInt(prompt("please enter another number to sum", ''));

if (isNaN(x)) alert("Please enter a valid number");

function addNumbers(x, y = parseInt(prompt("Enter Enter Ya Hamada", ''))){
return x + y;
}

document.write(addNumbers(x,y));