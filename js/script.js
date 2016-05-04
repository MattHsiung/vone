$(document).ready(function() {
 //    var controller = new ScrollMagic.Controller({
 //    	addIndicators: true,
 //    	container: '.wrap'
 //    });

	// var scene = new ScrollMagic.Scene({
 //        triggerElement: '#team',
 //    })
 //    .setClassToggle('.hidden', 'show')
 //    // .on('start', function(){controller.scrollTo('#contact')})
 //    .addTo(controller);
 	$('#nav').click(function(){
 		$(this).toggleClass('close')
 	})
    var $people = $('#people');
    $('#right').click(right);
    $('#left').click(left);
    var start = 0;
    function right(){
    	(start < $('.person').length-1)? ++start : start=0
    	$people.css({transform: 'translateX('+ -100*start +'vw)'})
    	console.log(start, $('.person'));
    }
    function left(){
    	(start ===0)? start= $('.person').length-1 : --start
    	$people.css({transform: 'translateX('+ -100*start +'vw)'})
    	console.log(start, $('.person'));
    }

});