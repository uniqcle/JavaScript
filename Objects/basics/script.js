let radius = 1; 
let x = 1; 
let y = 1; 

///////////////////////

const object = {}; 


//////////////////////

const circle = {

	radius: 1, 
	location: {
		x: 1, 
		y: 1
	}, 
	isVisible: true, 


}; 

function draw(){}
function move(){}

///////////////////////

// Object-oriented Programming

const circle = {

	radius: 1, 
	location: {
		x: 1, 
		y: 1
	}, 
	isVisible: true, 

	draw: function(){ console.log('draw') }, 
	move: function(){ console.log('move') }

};


circle.draw(); 