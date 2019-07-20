$( document ).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal({
        dismissible:false,
        opacity:.7,
        inDuration:500,
        outDuration:500,
        startingTop: '70%',
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        noWrap: true
    });

});
