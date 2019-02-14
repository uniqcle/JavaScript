//урок 2. СОБЫТИЯ
$(document).ready(function(){

	//***************************************************
	//Клик мышью (click, dbclick)
	//***************************************************
	$('h2').click(function(){
		alert('Ты кликнул по заголовку'); 
	}); 

	$('h3').dblclick(function(){
		alert('Ты кликнул по другому заголовку');
	}); 

	//***************************************************
	//Полеты над элементом (mouseenter, mouseleave и т.д)
	//***************************************************
	$('h4').mouseenter(function(){  //При наведении курсора
		$(this).css('color', 'blue');
	});

	$('h4').mouseleave(function(){  //При убирании курсора  
		$(this).css('color', 'green');
	});

	//***************************************************
	//Формы (focus, change и т.д)
	//***************************************************
	$('input').focus(function(){ //Поместили курсор в область поля
		$(this).css('background-color', 'red');
	});

	$('input').on('blur', function(){ //Размытие "убирание" фокуса
		$(this).removeClass('orangeBg');
	});

	$('input').change(function(){ //При изменении поля
		$('#userName').text(' ' + $(this).val());
	});

	//Клавиатура (keypress - нажали клавишу, keydown - нажали клавишу, но не отпустили, keyup - отпустили клавишу)
	$('input#secondInput').keyup(function(){
		$('#secondName').text($(this).val());
	});

	//При нажатии клавиши ESC 
	$("input").on('keyup', function(e){

		if( event.which == 27 ){
			alert('It was Escape key');
		}
		
	});


}); 