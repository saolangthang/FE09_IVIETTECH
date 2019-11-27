$(document).ready(function () {

    $('.start').click(function (e) { 
       // e.preventDefault();
        console.log('start');
        $('.cell').animate({top:447 },2000)
                .animate({left:447},2000)
                .animate({top:0},2000)
                .animate({left:0},2000)
    });
    $('.stop').click(function (e) { 
        e.preventDefault();
        $('.cell').stop(true);
    });
    
});