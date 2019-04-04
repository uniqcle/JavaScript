 
 window.onload = function() {
 
 
	 var modal = document.getElementById("myModal"); 
	 var mybtn = document.getElementById("mybtn"); 
	 var close = document.getElementsByClassName("close")[0]; 
 
 
	 mybtn.onclick = function(){
	 	modal.style.display = "block"; 
	 	//modal.style.display = "block"; 
	 }

	 close.onclick = function(){
	 	modal.style.display = "none"; 
	 }
 
 }