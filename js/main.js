$(document).ready(function(){


/*[ Play video 01]
===========================================================*/
var srcOld = $('.video-mo-01').children('iframe').attr('src');

$('[data-target="#modal-video-01"]').on('click', function () {
    $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

    setTimeout(function () {
        $('.video-mo-01').css('opacity', '1');
    }, 300);
});

$('[data-dismiss="modal"]').on('click', function () {
    $('.video-mo-01').children('iframe')[0].src = srcOld;
    $('.video-mo-01').css('opacity', '0');
});

 $("#owl-example").owlCarousel({
    // Most important owl features
    items : 4,
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    navigationText : ["","<i class='fa fa-angle-right'></i>"],
    slideSpeed : 800,
 });

	$("#navigation").sticky({
		topSpacing : 75,
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 15000,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

     $('#top-nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });
//Initiat WOW JS
    new WOW().init();

});
