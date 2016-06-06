$(document).ready(function() {
  console.log("Script included!");
  
  $('.ingredients > li').click(function(){
    $(this).toggleClass('bought');
  });

  $('.directions > li').click(function(){
    $(this).siblings().removeClass('current');
    $(this).toggleClass('current');
  });

  $('#hide').click(function() {
    $('img').hide();
  });
  $('#show').click(function() {
    $('img').show();
  });
});
