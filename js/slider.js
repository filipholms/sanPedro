$(function(){


	$(function(){
		$('header img:gt(0)').hide();
			setInterval(function(){
				$('header img:first-child').fadeOut(1000)
					.next('img').fadeIn(1000)
					.end().appendTo('header');
			},4000);
	})



});