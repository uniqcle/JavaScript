function dropDown(){
	var sel = document.getElementById('dropDown').selectedIndex;
	var opts = document.getElementById('dropDown').options; 

	alert('Выбрана опция ' + opts[sel].text);  
}