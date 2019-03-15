
function changeRange(){

	var rangeTopLeft = document.getElementById('rangeTopLeft'), 
		textTopLeft  = document.getElementById('textTopLeft');

	var rangeTopRight = document.getElementById('rangeTopRight'), 
		textTopRight  = document.getElementById('textTopRight'); 

	var rangeBottomLeft = document.getElementById('rangeBottomLeft'),
		textBottomLeft  = document.getElementById('textBottomLeft');

	var rangeBottomRight = document.getElementById('rangeBottomRight'),
	    textBottomRight  = document.getElementById('textBottomRight');  

	var result = document.getElementById('result');

		//Top Left
	    textTopLeft.value = rangeTopLeft.value; 
	    result.style.borderTopLeftRadius = textTopLeft.value+'px';

	    //Top Right
	    textTopRight.value = rangeTopRight.value; 
	    result.style.borderTopRightRadius = textTopRight.value+'px'; 

	    //Bottom Left
	    textBottomLeft.value = rangeBottomLeft.value; 
	    result.style.borderBottomLeftRadius = textBottomLeft.value+'px'; 

	    //Bottom right
	    textBottomRight.value = rangeBottomRight.value; 
	    result.style.borderBottomRightRadius = textBottomRight.value+'px'; 

 

}