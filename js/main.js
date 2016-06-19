$(document).ready(function (){
	var margin = $('.main-container').height();
	$('.obj-container').css({"margin-top":margin});
});


$(window).resize( function(){
    
    var margin = $('.main-container').height();   
    $('.obj-container').css({"margin-top":margin});
    
});