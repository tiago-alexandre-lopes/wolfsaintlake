$(document).ready(function () {

  
  
  $('.color').on('click', function(){
      $(this).closest(".color").addClass('expanded');
      $("body").addClass("show-overlay");
  });
  
  $('.overlay').on('click', function(){
      $('.color').removeClass('expanded');
      $('body').removeClass('show-overlay');
  });

})