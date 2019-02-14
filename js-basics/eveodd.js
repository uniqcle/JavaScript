
calcNumbers(10);

function calcNumbers(limitNum){
    
    for(var i = 0; i <= limitNum; i++){
        var result =  ( i % 2 == 0) ? 'EVEN' : 'ODD'; 
        console.log(i + ' ' + result); 
    }
}