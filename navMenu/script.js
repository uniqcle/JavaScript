document.getElementById('nav').onmouseover = function (e){
	var target = e.target; 

	if( target.className == 'menu-item'){
		var sub = target.getElementsByClassName('sub-menu'); 

		closeMenu(); 
		sub[0].style.display = 'inline-block'; 
	}
 
}

document.onmouseover = function(event){
	var target = event.target; 
	if(target.className != 'menu-item' && target.className != 'sub-menu'){
		closeMenu();
	}
}

function closeMenu(){
	var menu = document.getElementById('nav');
	var subm = document.getElementsByClassName('sub-menu');

	for(var i = 0; i < subm.length; i++){
		subm[i].style.display = "none"; 
	} 
}