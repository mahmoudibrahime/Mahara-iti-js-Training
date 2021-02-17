var myErr = new Error("custom error");
console.log(myErr.name);// error name.
console.log(myErr.message);//error message you stored.

try{
var result = parseInt(prompt("write number between 10 & 20", "15"));
if (result < 10)
throw "Less than Expected";
else if (result > 20)
throw new RangeError("Out of range");
else

alert("value within accepted range");

console.log("inside thr block");
}catch (e) {
if (e instanceof RangeError){

console.log("this is range error");
console.log(e.name);
console.log(e.message);
}
else if(e == "Less than Expected"){
console.log("low value");
}
console.log("catch block after error caught");
}
finally{
console.log('done');
}
console.log('after finally code');