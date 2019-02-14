
console.log(checkSpeed(74)); 

function checkSpeed(speed){ 

    const speedLimit = 70;
    const kmPerPoint = 5; 

    if(speed < speedLimit + kmPerPoint){
        return 'OK'; 
    }  
        points = Math.floor((speed - speedLimit) / kmPerPoint); 

        if( points > 12 ){
            return 'License suspended'; 
        }

        return points; 
}