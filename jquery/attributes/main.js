$(document).ready(function(){


	var srcValue = $('#img_main img').attr('src');
	

	$('.img_short').on('click', function(){
		var imgPath;

		imgPath = $(this).attr('data-img');

		$('#img_main img').fadeOut(1000, function(){
			$('#img_main img').attr('src', imgPath).fadeIn(1000);
		});
	});

	 
});