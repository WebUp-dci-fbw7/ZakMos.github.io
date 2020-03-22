$(function() {
    let topBar = $(".top");
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= 1040) {
            topBar.removeClass('top').addClass("top-bar");
        } else  {
            topBar.removeClass("top-bar").addClass('top');
        }
    });

});



$(document).ready(function(){
  $(".nav").addClass("animated bounceInRight");
  $(".home-img").addClass("animated zoomIn");



  	// $(".list-inline-item").hover(function(){
  	// 	$(this).addClass("animated pulse");
  	// });


  $(".personal-img").waypoint(function(){
    $(".personal-img").addClass("animated bounceInRight");
  },
{
  offset: '80%'
});

$(".personal-description").waypoint(function(){
  $(".personal-description").addClass("animated bounceInLeft");
},
{
offset: '80%'
});

$(".experience-icons").waypoint(function(){
  $(".experience-icons").addClass("animated rubberBand slow");
},
{
offset: '50%'
});






});
