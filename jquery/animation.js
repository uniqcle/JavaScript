$(document).ready(function(){

	//animate({css properties}, milisec);

	//***************************************************
	//Базовая анимация. delay() - задержка
	//***************************************************
	$('h2').delay(1000).hide(2000).delay(1000).show(1000);
	$('input').animate({'width': '200px'}, 2000);
	$('input:last').slideUp(2000).slideDown(2000);

	//***************************************************
	//Взаимодействие с аттрибутами
	//***************************************************
	alert( $('input:first').attr('type') );
	alert( $('span').attr('id') );

	//Изменение аттрибута src у картинки (т.е смена картинки)
	$('img').click(function(){
		$(this).fadeOut(2000, function(){
			$(this).attr('src', '2.jpg').fadeIn(500);
		})
	});

	//***************************************************
	//Взаимодействие с классами
	//***************************************************
	$('p').addClass('nameClass'); //Добавление класса

	$('p').click(function(){  //Удаление класса
		$(this).removeClass('nameClass');
	});

	$('p').click(function(){   //Замена класса
		$(this).toggleClass('nameClass renameClass');
	});

	//***************************************************
	//Клонирование, добавление, перемещение элементов
	//***************************************************
	$('.box').click(function(){

		$(this).text('Свой собственный текст');
		$(this).html();
		$(this).append();
		$(this).prepend();
		$(this).after();
		$(this).wrap();
		$(this).unwrap();
		$(this).empty();
		$(this).remove();
		$().append( '<br/>' + $(this).text() );


	});

	
	

});