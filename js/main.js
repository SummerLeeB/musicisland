	$(function(){
		
	//top btn 클릭시 모니터 top로 이동
		$('.top_btn').click(function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop : 0},500);
			  return false;
		});		
	//monitor top 에서 top_btn 숨김
		$('.top_btn').hide();
		$(window).scroll(function(){
			var top=$(this).scrollTop();
			if(top==0){
				$('.top_btn').fadeOut(300);
			}else{
				$('.top_btn').fadeIn(300);
			}
		});

	//menu click > first-child 먼저 보임
		$('.sub').hide();
		$('nav .nav_wrap>ul>li:first-child .sub').show();
		
	//menu click > nav show
		$('.menu_open').click(function(e){
			//클릭이벤트시 top으로 이동되지 않음
			e.preventDefault();
			$('nav').stop().animate({
				left:0
			},500);
			$('.top_btn').fadeOut(300);
		});			
		// close click > nav hide
		$('.menu_close').click(function(e){
			e.preventDefault();
			$('nav').stop().animate({
				left:'-100vw'
			},500);
		});	
		
	//주메뉴에 마우스 클릭 이벤트
	  $('.nav_wrap > ul > li').click(function(e){
		  e.preventDefault();
	//만약 주메뉴에 active클래스가 없다면
	//this : 마우스 클릭 이벤트가 발생한 객체를 가리킴
	//attr() 메서드 : 객체의 속성을 구함
		if($(this).attr('class')!='active'){
				//조건이 참일 때 실행
				//서브메뉴 들어감
				$('.sub').stop().hide();
				//주메뉴의 active클래스 제거
				$('.nav_wrap>ul>li').removeClass('active');
				//클릭한 li(주메뉴)에만 active클래스 설정
				$(this).addClass('active');
				//클릭한 li(주메뉴)의 서브메뉴 내려옴
				$(this).find('.sub').stop().show();
		}else{
				//조건이 거짓일 때 실행
				//클릭한 li(주메뉴)의 active클래스 제거
				$(this).removeClass('active');
				//클릭한 li(주메뉴)의 서브메뉴 들어감
				$(this).find('.sub').stop().hide();
				}     
		});
		//메인 슬라이드 Swiper
		var swiper = new Swiper('.swiper-container', {
		centeredSlides: true,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	 });
	// Music Tab menu
	var num=0;
	 $('.content > div').hide();
	 $('.m1').show();

	 $('.title ul li').click(function(e){
		e.preventDefault();
		num=$(this).index();

		$('.title div').removeClass('active');
		$(this).addClass('active');

		$('.content > div').each(function(){
			var idx=$(this).index();
			if(num == idx){
				 $('.content > div').hide();
				 $(this).show();
			}
		});
	});
	//탭메뉴 click시 색상 변경
	$('.title ul li').click(function(e){
		e.preventDefault();
		//다른 탭 클릭시 active 클래스 삭제
		$('.title ul li').removeClass('active');
		//클릭한 탭 active 클래스 추가
		$(this).addClass('active');
	});

		
		
		
});