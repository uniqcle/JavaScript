const a = 3, 
      b = 5
      c = 10; 

function sumMulti(a, b, c){
    var sum = 0; 

    for(var i = 0; i < c; i++){
        if(i % a == 0 || i % b == 0){
            sum += i;
        }
    }
    
return sum;
}

console.log(sumMulti(a, b, c));