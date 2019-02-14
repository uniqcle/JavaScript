$(document).ready( function(){

	$('#myform').on('submit', function( event ){
		event.preventDefault();

		var numberOne,
			numberTwo, 
			result; 

		numberOne = parseInt( $('#numberOne').val() );
		numberTwo = parseInt( $('#numberTwo').val() );

		if ( isNaN(numberOne) ){
			numberOne = 0;
		}

		if( isNaN(numberTwo) ){
			numberTwo = 0;
		}

		result =  numberOne +   numberTwo ;
 
		 
		$('#result').text( result );
 

	}); 

});