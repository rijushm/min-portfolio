$(window).on('load', function(){
	const el = document.querySelector('img');
	const observer = lozad(el);
	observer.observe();

	lozad('img', {
	    loaded: function(el) {
	        // Custom implementation on a loaded element
	        el.classList.add('loaded');
	    }
	});
})