console.log('--------------');
/*function object method*/
var str ='this is javascript';
console.log(str);
// console.log(str.join());  //did not work

var arr = [1,2,3,'abcd'];
console.log(arr.join());// with no parameter
console.log(arr.join('**'));

//function borrowing using apply method
console.log(
(arr.join.apply(str, ['--'])) // apply using array
);

//function borrowing using call method
console.log(
    (arr.join.call(str, '--')) // apply using array
    );

    //binding
    /* 
    here result() is a function NOT variable
    here you change result into function call   
    */
    var result = (arr.join.bind(str));
    console.log(result('..')); 
    
    /*
    short
    function name.join.apply(str, [''])
                      .call(str, '')
        var variable function =               .bind(str)
        variable function(' change here')
    */
    