// main.js

// 2단계 메뉴
$(function(){
  $('.depth1 > li').hover(
    function(){
      $('.depth2').stop().slideDown(200);
    },
    function(){
      $('.depth2').stop().slideUp(200);
    }
  );
})

// bxslider 
$(document).ready(function(){

  $('#visual').imagesLoaded( function() {
    // images have loaded
    $('.slider').bxSlider({
      // 효과: horizontal', 'vertical', 'fade'
      mode: 'fade',
      // 인터벌 시간
      pause: 4000,
      // 자동재생: true | false
      auto: true
    });
  });

  
  $('#pick > .pager > a').eq(0).click(function () {
    $('#pick > ul > li').css('left', 0);
    $('#pick > .pager > a').removeClass('active');
    $('#pick > .pager > a').eq(0).addClass('active');
  })
  $('#pick > .pager > a').eq(1).click(function () {
    $('#pick > ul > li').css('left', -1198);
    $('#pick > .pager > a').removeClass('active');
    $('#pick > .pager > a').eq(1).addClass('active');
  })
  $('#pick > .pager > a').eq(2).click(function () {
    $('#pick > ul > li').css('left', -2396);
    $('#pick > .pager > a').removeClass('active');
    $('#pick > .pager > a').eq(2).addClass('active');
  })  
});
