//undefined
//null
//''
//false 
//0
//NaN
 

var arr = ['', 1, 2, null, 3]; 

function countTruthy(arr){

    var count = 0; 

    arr.forEach(function(item){
        if(item) count++; 
    }); 

return count; 
}
 

console.log(countTruthy(arr)); 