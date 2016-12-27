/**
 * Created by AG-MLOMMERS on 17/07/2016.
 */

$(document).ready(function () {

    var setFullHome = function () {
        var windowHeight = $(this).height(),
            windowWidth = $(this).width();

        $('.main').css({
            'height' : windowHeight - 72
        });

    };

    var setImageWidth = function () {
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


    $( window ).load(function() {
        console.log('set image width from load callback');
        setImageWidth();
    });

    setFullHome();

    $(window).on('resize', function () {
        console.log('set imge width from resize');
        setFullHome();
        setImageWidth();

    });

});