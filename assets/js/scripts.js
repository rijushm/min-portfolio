$(window).on('load', function(){
	pageFunc();
})

function pageFunc() {
	
	const el = document.querySelector('img');
	const observer = lozad(el);
	observer.observe();

	lozad('img', {
	    loaded: function(el) {
	        // Custom implementation on a loaded element
	        el.classList.add('loaded');
	    }
	});

	Splitting({
	  target: "[data-break]",
	  by: "chars",
	  key: null
	});

}

function pageEnterAnimation(){

	gsap.registerPlugin(ScrollTrigger);

	const img_overlay_light = document.querySelectorAll('.img_overlay_light');
	const img_overlay_light_home = document.querySelectorAll('.img_overlay_light.home');
	const project_card = document.querySelectorAll('.project_card');
	var tl = new gsap.timeline({ paused: true });

	if ($('.menu_wrapper').hasClass('active')) {
		$('#menu_open .menu_icon').toggleClass('ri-menu-3-fill');
		$('#menu_open .menu_icon').toggleClass('ri-close-fill');
		$('#menu_open .menu_icon').toggleClass('active');
		$('.menu_wrapper').toggleClass('active');

		tl.to(".menu_wrapper", {
			right: '-120vw',
			skewX: -10,
			duration: 1,
			delay: 0,
			ease: Power4.easeInOut
		})
	}

	tl.from(".hero_header .char", {
		translateY: 500,
		skewX: -150,
		opacity: 0.2,
		duration: 2.5,
		stagger: 0.03,
		ease: Elastic.easeOut.config(0.4, 0.75),
		delay: 1.2
	})

	if (img_overlay_light_home) {
		tl.to(img_overlay_light_home, {
			width: 0,
			duration: 2,
			stagger: 1.2,
			ease: Power4.easeInOut
		}, '-=1')
	}

	if (project_card) {
		if(img_overlay_light){
			tl.to(img_overlay_light, {
				width: 0,
				duration: 1.5,
				stagger: 0.4,
				ease: Power4.easeInOut
			})

			gsap.from(".project_card_img img", {
				scale: 1.2,
				duration: 1.5,
				delay: 5,
				stagger: 0.4,
				ease: Power4.easeInOut
			})

			gsap.to(".project_card_caption", {
					opacity: 1,
					duration: 2,
					stagger: 0.4,
					delay: 5,
					ease: Power4.easeInOut
				})
		}
	}

	tl.from(".hero_text", {
		translateY: 60,
		opacity: 0,
		duration: 2,
		stagger: 0.4,
		ease: Power4.easeInOut
	}, '-=4.5')

	tl.play();

	let triggers = ScrollTrigger.getAll();

  triggers.forEach( trigger => {
    trigger.kill();
  });

}


function delay(n) {
  n = n || 2000
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}

function pageTransition(){
	var tlpT = new gsap.timeline({ paused: true });
	tlpT.to(".page_overlay", {
		clipPath: 'circle(115% at 50% 100%)',
		duration: 2,
		ease: Power4.easeInOut
	})
	tlpT.to(".page_overlay", {
		clipPath: 'circle(0% at 50% 100%)',
		duration: 2,
		delay: 0.1,
		ease: Power4.easeInOut
	})
	if ($('.menu_wrapper').hasClass('active')) {
		tlpT.delay(2);
	}
	tlpT.play();
}


// Barba
barba.init({
	sync: true,
	transitions: [{
		async leave({ current, next }){
			const done = this.async();
			pageTransition();
			pageFunc();
			await delay(1000);
			done();
		},
		async enter({ current, next }){
			pageFunc();
			pageEnterAnimation();
		},
		async once({ current, next }){
			pageFunc();
			pageEnterAnimation();
		},
	}]
})