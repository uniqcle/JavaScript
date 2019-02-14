const marks = [80, 80, 50]; 

/********************************************************************
* Calculating Grade Student
*********************************************************************/
function calculateGrade(marks){

    var average = calculateAverage(marks); 

    if(average < 60) return 'F'; 
    if(average < 70) return 'D'; 
    if(average < 80) return 'C'; 
    if(average < 90) return 'B'; 

return 'A';
}

/********************************************************************
* Calculating Average Number
*********************************************************************/
function calculateAverage(array){
    var sum = 0;

    for(var value of  marks){
        sum += value;
    }

return sum / marks.length; 
}


console.log(calculateGrade(marks));