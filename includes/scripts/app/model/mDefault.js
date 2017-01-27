define(['./Base.js', 'countdown'], function (Base, Countdown) {
    var mDefault = new Base('data for Page Default loaded');

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		setTimeout(function(){
			$('#designers').attr('data-height',$('#designers').outerHeight() + 50);
			$('#styles').attr('data-height',$('#styles').outerHeight() + 50);
			$('#colections').attr('data-height',$('#colections').outerHeight() + 50);
		toggleHeight('designers', 'hide');
		toggleHeight('styles', 'hide');
		toggleHeight('colections', 'hide');
		}, 1000);

		// Init countdowns from every promo
		var timers = $('.countdown').length;
		for (j = 0; j < timers; j++) {
			startCountdown('countdown'+(j+1));
		}

		/**
		 * =================
		 * EVENTS
		 * =================
		 */
		 
		 $('.toggle-height').on('click', function() {
		 	toggleHeight($(this).attr('data-element'), $(this).attr('data-action'));
			$(this).parent().find('.hide').toggleClass('hide');
			$(this).toggleClass('hide');
		 });

		/**
		 * =================
		 * FUNCTIONS
		 * =================
		 */
		/**

		 * Funcionalidad 'ver más' y 'ver menos'
		 * @param el:String Elemento que mostraremos y ocultaremos
		 * @param action:String Indica si muestra u oculta
		 */
		function toggleHeight(el, action) {
			var $element = $('#' + el);
			var heightFull = parseInt($element.attr('data-height'));
			if (action === 'show') {
				$element.animate({ height: heightFull }, 100);
			} else if (action === 'hide') {
				$element.animate({ height: "330px" }, 100);
			}
		}

		 /* Start countdown
		 * @param el: String Element where countdown will be placed
		 * @param date: String Determine when countdown will be finnished
		 */
		function startCountdown(el) {
			var time = $('#'+el).attr('data-time');
			var daysTxt = $('#'+el).find('.days span').text(),
				hoursTxt = $('#'+el).find('.hours span').text();			
				minutesTxt = $('#'+el).find('.minutes span').text();
				secondsTxt = $('#'+el).find('.seconds span').text();
			$('#'+el).countdown({
				date: time,
				render: function (data) {
					var el = $(this.el);
					el.empty()
						.append("<div>" + this.leadingZeros(data.days, 2) + "<span>"+ daysTxt +"</span>")
						.append("<div>" + this.leadingZeros(data.hours, 2) + "<span>"+ hoursTxt +"</span>")
						.append("<div>" + this.leadingZeros(data.min, 2) + "<span>"+ minutesTxt +"</span>")
						.append("<div>" + this.leadingZeros(data.sec, 2) + "<span>"+ secondsTxt +"</span>")
				}
			});
		}
    });

    return mDefault;
});