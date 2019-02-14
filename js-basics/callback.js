// function first(){
//    setTimeout(function(){
//        console.log("1"); 
//    }, 1);  
// }

// function second(){
//     console.log(2); 
// }

// first(); 
// second();

function learnJs(lang, callback){
    console.log("Я учу " + lang); 
    callback();
}

// function done(){
//    console.log("Я прошел 3-й урок"); 
// }

learnJs("Javascript", function(){
    console.log("Я прошел 3-й урок"); 
}); 