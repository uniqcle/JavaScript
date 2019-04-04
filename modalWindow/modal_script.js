 
 window.onload = function() {
 
 
	 var modal = document.getElementById("myModal"); 
	 var mybtn = document.getElementById("mybtn"); 
	 var close = document.getElementsByClassName("close")[0]; 
 
 
	 mybtn.onclick = function(){
	 	console.log('test');  
	 	//modal.style.display = "block"; 
	 }

	 close.onclick = function(){
	 	console.log( close ); 

	 	modal.hide();
	 }
 
 }