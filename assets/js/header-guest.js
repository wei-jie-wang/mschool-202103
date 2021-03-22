//header shadow
$(window).scroll(function() {
  var TOPOUT = $(".main-header").outerHeight();
  var scrollVal = $(this).scrollTop();
  if ( scrollVal > TOPOUT){
      $(".main-header").stop().addClass("main-header--active");
      return false;
  } else {
      $(".main-header").stop().removeClass("main-header--active");
      return false;
  }
});

// Sub menu
$(document).ready(function(){
  var allDESKTOP = window.matchMedia('(min-width: 769px)');
  var allLAPTOP = window.matchMedia("(max-width: 970px)");

  if (allDESKTOP.matches) {
      // Course
      $('#submenu-course .icon-arrow-down').bind('click', function(event) {
        $('#submenu-book .more__submenu').hide();
        $('#submenu-book .icon-arrow-down').removeClass('active');
        $('#submenu-course .more__submenu').fadeToggle('slow');
        $(this).toggleClass('active');
        return false;
      });
      
      // Book
      $('#submenu-book .icon-arrow-down').bind('click', function(event) {
        $('#submenu-course .more__submenu').hide();
        $('#submenu-course .icon-arrow-down').removeClass('active');
        $('#submenu-book .more__submenu').fadeToggle('slow');
        $(this).toggleClass('active');
        return false;
      });

      $(document).click(function(event){
        var _con = $('.main-header__nav .more__submenu');
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
          $('.main-header__nav .more__submenu').fadeOut(300);
          $('.main-header__nav .icon-arrow-down').removeClass('active');
        }
      });

      // Member
      $('.main-header__member--signed .member-data').bind('click', function(event) {
          $('.main-header__member--signed .member-submenu').fadeToggle('slow');
          return false;
      });

      $(document).click(function(event){
          var _con = $('.main-header__member--signed .member-submenu');
          if(!_con.is(event.target) && _con.has(event.target).length === 0){
              $('.main-header__member--signed .member-submenu').fadeOut(300);
          }
      });
  }

  if (allLAPTOP.matches) {
      $('.main-header .icon-burger').bind('click', function(event) {
          $('.main-header .nav-box').toggleClass('nav-box--active');
          $('.main-header .icon-burger').toggleClass('icon-burger--close');
          return false;
      });

      // Member
      $('.main-header__member--signed .member-data').bind('click', function(event) {
          $('.main-header__member--signed .member-submenu').fadeToggle('slow');
          $('.main-header__member--signed .icon-arrow-down').toggleClass('active');
          return false;
      });

      // Course
      $('#submenu-course .icon-arrow-down').bind('click', function(event) {
        $('#submenu-course .more__submenu').fadeToggle();
        $(this).toggleClass('active');
        return false;
      });

      // Book
      $('#submenu-book .icon-arrow-down').bind('click', function(event) {
        $('#submenu-book .more__submenu').fadeToggle();
        $(this).toggleClass('active');
        return false;
      });
  }
});

// Search
$(document).ready(function(){
  // event.stopPropagation();
  $('.main-header .icon-search').bind('click', function(event) {
      $('.main-header .search-box').fadeIn(200);
      return false;
  });

  $(document).click(function(event){
      var _con = $('.main-header .search-box');
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
          $('.main-header .search-box').fadeOut(300);
      }
  });
});