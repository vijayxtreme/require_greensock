define(function (require) {
	var $ = require('jquery')

	var logo = $("#logo");

	function runAnimation(el, callback){
		var run;

		$(window).scroll(function(){

			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(el).offset().top;
			var elemBottom = elemTop + $(el).height();

			var inView = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) ? true : false;

	 		if(!run && inView){
	 			callback();
	 			run = true;
	 		}else {

	 		}

	 		if($(this).scrollTop() <= 100){
	 			run = false;
	 			$("#logo, #logo2").css('left', '0px');
	 		}
	 	})
	}
	
	var el = $("#greensock");
	runAnimation(el, function(){
		console.log('tweening')
		var demo = $("#logo")
		TweenLite.to(demo, 2, {
			left:'530px',
			backgroundColor:'black'
		})
	});
	var el = $("#greensock2");
	runAnimation(el, function(){
		console.log('tweening')
		var demo = $("#logo2")
		TweenLite.to(demo, 2, {
			left:'530px',
			backgroundColor:'black'
		})
	});

});
