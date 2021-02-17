// console.warn("%c error_message", color = red ;  background-color=yellow; );
console.info('You must study hard, Mahmoud');

var response = prompt("Please enter your name", "Example: Ali");

if (response){
    document.write('Welcome '+ response + ":)");
}
else{
    alert("You have not entered any name yet :(");
}

var favColor = prompt("Enter your favorite color", 
                      'Red, Violet, White, Green or Pink');
if(!favColor){
    alert('You have not chosen any color yet :(');
}
else{
    var color;
    var flag = 1;
switch(favColor)
{
    case "1":
    case 'red':
    case 'Red':
        color = "Red";
        break;

    case "2":
        color = "Violet";
        break;

    case "3":
        color = "White";
        break;

    case "4":
        color = "Green";
        break;

    case "5":
    case "Pink":
        color = "Pink";
        break;

    default :
        flag = 0;
        alert('your choice is not in the list');
}

if(flag){
document.write("Your favorite color is " + color);
}
}

var x = 10;
alert("value of x is: " + x);

var x = prompt('put your secret number', '******');
var action = confirm('do you really want to continue?');
if (action){document.write('you entered ' + x);}

// var action = confirm("Really, Do you want to continue?");