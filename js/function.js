$(function(){

	// header - 네비게이션 
	const $logo = $('header > .header_inner > .gnb_left > .logo');
	const $logo2 = $('header > .header_inner > .gnb_left > .logo');
	$(window).on('scroll', function() {
		let scrollTop = $(this).scrollTop();
		if (scrollTop > 0) {
			$('header').addClass('white');
			$logo.removeClass('move');
			$logo2.addClass('move2');
		} else {
			$('header').removeClass('white');
			$logo.addClass('move');
			$logo2.removeClass('move2');
		}
	});

	// 모바일 햄버거 메뉴
	$('.mobile-mnu>a').on('click', function(){
		$('.hamburger').show();
		$('.hamburger-bg').show();
	});
	$('.hamburger-bg>a').on('click', function(){
		$('.hamburger').hide();
		$('.hamburger-bg').hide();
	});
    // promise section (swiper slider)
    var swiper = new Swiper('.swiper-container', {
		loop: true,
		speed: 500,
		autoplay: true,
		autoplay:{
			disableOnInteraction: false,
		},
		autoplaySpeed: 500,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		// Navigation arrows
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
	});

	// review section
	const $indicator = $('.review > .review-indicator > a ');
	const $slide = $('.review > .review_slider > .review_slider_inner');


	$indicator.on('click', function(e){
		const nowIdx = $indicator.index(this);

		$slide.stop().animate({

			left: -1000*nowIdx
		},
		500);
		e.preventDefault();
		$indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
	});
	

	// 상위페이지 고정버튼

	$(window).on('scroll', function() {
		let scrollTop = $(this).scrollTop();
		if (scrollTop > 0) {
			$('.btn-up').show();
		} else {
			
			$('.btn-up').hide();
		}
	});
	$('.bottom-btn > .btn-up > a').on('click', function(){
		$('html, body').animate({
			scrollTop:'0'
		})
	});

	// 모바일 리뷰

	$(window).resize(function() { 
		if($(window).width() <1024) {
			 $('.mobile-review').attr({
				 style:'display:block'
			 })
		} else{
			$('.mobile-review').attr({
				style:'display:none'
			})
		}
	});
	if($(window).width() <1024) { 
		$('.mobile-review').attr({
			style:'display:block'
		});
	 }



});