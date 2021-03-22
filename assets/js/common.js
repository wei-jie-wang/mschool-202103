(function($) {
  // Toasts
  $(document).ready(function(){
    $('.toasts .icon-close').bind('click', function(event) {
      $('.toasts').fadeOut(200);
      return false;
    });

    //Nav scroll to ID
    $('.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - 40}, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    // Alerts
    $('.alerts__content #icon-close, .alerts__content .btn-cancel').bind('click', function(event) {
      $('.alerts').fadeOut();
      return false;
    });
  });


  // 新書快讀首頁與文章頁廣告 addClass
  $(document).ready(function() {
  var url = location.pathname;
    if ("url:contains('quick-read')") {
      $(".video-adBox").addClass("video-adBox--index");
    }
    
    else if ("url:contains('video-article')") {
      $(".video-adBox").addClass("video-adBox--article");
    }
  });
})(jQuery);