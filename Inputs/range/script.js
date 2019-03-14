
function changeRange(){

	var rng = document.getElementById('rng');
	var page = document.getElementById('page'); 

	page.innerHTML = rng.value; 


	console.log(); 
}

function changeRange1(){
	var rng1 = document.getElementById('rng1');
	var out = document.getElementById('out');

	out.value = rng1.value;  
}

function changeRange2(){
	var rng2 = document.getElementById('rng2');
	var block = document.getElementById('block');

	block.style.width = rng2.value+'px'; 
}