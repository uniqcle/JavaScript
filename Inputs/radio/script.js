
function rad(){
	var rad = document.getElementsByName('radioName'); 
	
	for(var i = 0; i < rad.length; i++){
		if( rad[i].checked ){
			console.log( rad[i]); 
		}
	}
}