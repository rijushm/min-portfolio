$('nav ul li').on('mouseover', function(){
	$('nav ul li').css('opacity', '0.5');
	$(this).css('opacity', '1');
})

$('nav ul li').on('mouseleave', function(){
	$('nav ul li').css('opacity', '1');
})

$('#menu_open').click(function(e){
	e.preventDefault();
	$('#menu_open .menu_icon').toggleClass('ri-menu-3-fill');
	$('#menu_open .menu_icon').toggleClass('ri-close-fill');
	$('#menu_open .menu_icon').toggleClass('active');
	$('.menu_wrapper').toggleClass('active');
	if ($('.menu_wrapper').hasClass('active')) {
		gsap.to(".menu_wrapper", {
			right: 0,
			skewX: 0,
			duration: 1,
			ease: Power4.easeInOut
		})
		gsap.to(".menu_wrapper h2 .char", {
			translateY: 0,
			skewX: 0,
			opacity: 1,
			duration: 1.6,
			stagger: 0.03,
			delay: 0.5,
			ease: Elastic.easeOut.config(0.6, 0.75)
		})
		gsap.to(".menu_wrapper nav li a", {
			translateY: 0,
			opacity: 1,
			duration: 2,
			stagger: 0.2,
			delay: 0.6,
			ease: Power4.easeInOut
		})
	}else{
		gsap.to(".menu_wrapper", {
			right: '-120vw',
			skewX: -10,
			duration: 1,
			delay: 1.2,
			ease: Power4.easeInOut
		})
		gsap.to(".menu_wrapper h2 .char", {
			translateY: 50,
			skewX: -30,
			opacity: 0.2,
			duration: 1,
			stagger: 0.03,
			ease: Elastic.easeIn.config(0.6, 0.75)
		})
		gsap.to(".menu_wrapper nav li a", {
			translateY: 60,
			opacity: 0,
			duration: 1.6,
			stagger: 0.05,
			delay: 0.2,
			ease: Power4.easeInOut
		})
	}
})