$(document).ready(function(){
	$('.burg-btn').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('burg-btn-active');
	});

	$('.mi-1').hover(function(e){
		e.preventDefault;
		$('.disc-1').animate({
			top: '62%',
	 		opacity: '1.0'
	 	}, 200);
	},
	function(e){
		e.preventDefault;
		$('.disc-1').animate({
			top: '100%',
	 		opacity: '0'
	 	}, 200);
	});

	$('.mi-2').hover(function(e){
		e.preventDefault;
		$('.disc-2').animate({
			top: '62%',
	 		opacity: 1.0
	 	}, 200);
	},
	function(e){
		e.preventDefault;
		$('.disc-2').animate({
			top: '100%',
	 		opacity: 0
	 	}, 200);
	});

	$('.mi-3').hover(function(e){
		e.preventDefault;
		$('.disc-3').animate({
			top: '62%',
	 		opacity: 1.0
	 	}, 200);
	},
	function(e){
		e.preventDefault;
		$('.disc-3').animate({
			top: '100%',
	 		opacity: 0
	 	}, 200);
	});

	$('.mi-4').hover(function(e){
		e.preventDefault;
		$('.disc-4').animate({
			top: '62%',
	 		opacity: 1.0
	 	}, 200);
	},
	function(e){
		e.preventDefault;
		$('.disc-4').animate({
			top: '100%',
	 		opacity: 0
	 	}, 200);
	});

	$('.mi-5').hover(function(e){
		e.preventDefault;
		$('.disc-5').animate({
			top: '62%',
	 		opacity: 1.0
	 	}, 200);
	},
	function(e){
		e.preventDefault;
		$('.disc-5').animate({
			top: '100%',
	 		opacity: 0
	 	}, 200);
	});

	$('.mi-6').hover(function(e){
		e.preventDefault;
		$('.disc-6').animate({
			top: '62%',
	 		opacity: 1.0
	 	}, 200);
	},
	function(e){
		e.preventDefault;
		$('.disc-6').animate({
			top: '100%',
	 		opacity: 0
	 	}, 200);
	});

	$('.mi-7').hover(function(e){
		e.preventDefault;
		$('.disc-7').animate({
			top: '62%',
	 		opacity: 1.0
	 	}, 200);
	},
	function(e){
		e.preventDefault;
		$('.disc-7').animate({
			top: '100%',
	 		opacity: 0
	 	}, 200);
	});

	$('.main-menu > button').on('click', function(){
		$('.burg-menu').toggleClass('burg-menu-act');
	});
});