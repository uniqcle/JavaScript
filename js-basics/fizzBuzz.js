//3 - fizz
//5 - buzz
//15 - fizzbuzz
//not 15 or 3 or 5 - just a number
//NaN Not a number


var output = fizzBuzz(5); 
console.log(output);

function fizzBuzz(input){

    if (typeof input != 'number'){
        return 'Not a number'; 
    }

    if (( input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';
    } else if( input % 3 == 0){
        return 'fizz';
    } else if ( input % 5 == 0){
        return 'buzz'; 
    } 
}