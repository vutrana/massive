$(window).scroll(function(){
  if($(document).scrollTop() > 0) {
      $('header nav').addClass('small');
  } else {
      $('header nav').removeClass('small');
  }
});