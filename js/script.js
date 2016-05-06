$(document).ready(function() {
	var height= $('.bg').height()
  	$( window ).resize(function() {
  		height= $('.bg').height()
  	});

 	$('.wrap').scroll(function(){
		var pos = $(this).scrollTop();
		if(pos>5&&pos<height/2){
			$('#wingl').css({
				transform: 'translateY('+pos+'px) rotate(-45deg)',
				opacity: 1 - (pos/height)*3
			});
		}
		if(pos>height/2){
			$('#wingl').css({
				transform: 'translateY('+(height-pos)+'px) rotate(-45deg)',
				opacity: (pos/height)*3
			});
			
		}
 	});

 	$('#nav').click(function(){
 		$(this).toggleClass('close')
 	});

    var $people = $('#people');
    $('#right').click(right);
    $('#left').click(left);
    var start = 0;
    function right(){
    	(start < $('.person').length-1)? ++start : start=0
    	$people.css({transform: 'translateX('+ -100*start +'vw)'})
    }
    function left(){
    	(start ===0)? start= $('.person').length-1 : --start
    	$people.css({transform: 'translateX('+ -100*start +'vw)'})
    }
    $('#map').addClass('noscroll');
    // $('#map').click(function(){
    // 	$('#map').removeClass('noscroll')
    // })

});