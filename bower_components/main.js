/**
 * Created by AG-MLOMMERS on 17/07/2016.
 */

var setImageSize = function () {
    	$('#wicked-cont').css({
            'width' : $('#wicked-img').width()
        });
            
        $('#psar-cont').css({
            'width' : $('#psar-img').width()            
        });

        $('#specimen-cont').css({
            'width' : $('#specimen-img').width()
         });
    };
    
$(document).ready(function () {

    var setFullHome = function () {
        var windowHeight = $(this).height(),
            windowWidth = $(this).width();

        $('.main').css({
            'height' : windowHeight - 72
        });
    };
    
    setFullHome();

    $(window).on('resize', function () {
        setFullHome();
        setImageSize();
    });

});

$(document).load(function () {
	
	setImageSize();
});