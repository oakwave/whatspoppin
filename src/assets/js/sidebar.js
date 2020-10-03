$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
    $(".sidebar").toggleClass("active");
  }
  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

  $(window).on("scroll", function(e) {
console.log('first line');
    if ($(this).scrollTop()>0)
     {
        $('.waves').fadeOut();
     }
    else
     {
      $('.waves').fadeIn();
     }
  });
});


