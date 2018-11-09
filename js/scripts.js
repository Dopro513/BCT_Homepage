$(document).ready(function () {

	$(".owl-brands").owlCarousel({
		responsive: {
			0: {
				items: 3,
			},
			576: {
				items: 4,
			},
			768: {
				items: 5,
			},
			992: {
				items: 6,
			},
			1200: {
				items: 7,
			},
			1350: {
				items: 9,
			},
		},
		autoplay: true,
		loop: true,
		dots: false,
	});

	var owl2 = $(".owl-2");
	var owl2AutoPlayed = false;
	owl2.owlCarousel({
		items: 1,
		startPosition: 0,
		nav: true,
		navText: ["", ""],
		//autoplay:true,
		loop:true,
		autoplayTimeout: 3500,
	});

	$(window).on("scroll", function (e) {
		if(window.pageYOffset + 500 > $('.section-9').offset().top){
			if (!owl2AutoPlayed){
				owl2.trigger('play.owl.autoplay', [3500]);
				owl2AutoPlayed = true;
			}
		}
	});

	$(".owl-3").owlCarousel({
		responsive: {
			0: {
				items: 1,
			}, 
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			},
			1350: {
				items: 4,
			},
		},
		margin: 10,
		dots: false,
		nav: true,
		navText: ["", ""],
	});

	$(".owl-4").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: true,
		navText: ["", ""],
		dotsContainer: ".owl-header .owl-dots",
	});

	$(".owl-5").owlCarousel({
		responsive: {
			0: {
				items: 1,
			}, 
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				margin: 80,
			},
		},
		margin: 10,
		autoHeight: true,
		dots: false,
		nav: true,
		navText: ["", ""],
	});

	$('.scroll-id').mPageScroll2id({
		scrollSpeed: 900,
		offset: 64,
	});

	$('[data-toggle="tooltip"]').tooltip();




	$('.video-modal').click(function (e) {
		var videoId = $(this).attr('data-id');
		var player = new YT.Player('player', {
			height: '780',
			width: '1280',
			videoId: videoId,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});

		function onPlayerReady(event) {
			event.target.playVideo();
		}

		function onPlayerStateChange(event) {
			if (event.data === 0) {
				$('#overlay').trigger('click');
			}
		}
			
		$('#overlay,#youtubeModal').addClass('open');
	});
	
	$('#overlay').click(function () {
		$(this).removeClass('open');
		$('#youtubeModal').removeClass('open');
		$('#youtubeModal').html('<div id="player"></div>');
	});
	
	$('#checkbox-toggle').change(function () {
		$('.card-form').toggleClass('active');
	});
	$('#checkbox-form').change(function () {
		$('.form-checked').toggleClass('hidden');
	});


	var select_html = '';
	for (var i = 1; i <= 60; i++) {
		select_html += `
			<option>Qty: ` + i + `</option>
		`;
	}
	$(".one_to_60").html(select_html);
	$('.cart select').selectize();
	$('select').selectize();

	// ---------- //

	$('.cc-number').mask('0000 0000 0000 0000');
	$('.cc-date').mask('00 / 00');
	$('.cc-cvc').mask('0000');

	$('.payment-method input[type=radio]').change(function () {
		$('.pay-form').toggleClass('hidden');
	});

	$('.requestTerminal').click(function (e) {
		e.preventDefault();
		$('.requestTerminalForm').removeClass('d-none');
	});

});

