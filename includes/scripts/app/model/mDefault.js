define(['./Base', 'countdown'], function (Base, Countdown) {
    var mDefault = new Base('This is the data for Page Default');

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
		var heightFull = $element.css({height: 'auto'}).height() + $element.find('.read-more').outerHeight();
		
		if (action === 'show') {
			$element.css('height', "330px");
			$element.animate({ height: heightFull }, 100);
		} else if (action === 'hide') {
			$element.css('height', heightFull);
			$element.animate({ height: "330px" }, 100);
		}
	}

	 /* Start countdown
	 * @param el: String Element where countdown will be placed
	 * @param date: String Determine when countdown will be finnished
	 */
	function startCountdown(el, date) {
		$('.'+el).countdown({
			date: date,
			render: function (data) {
				var el = $(this.el);
				el.empty()
					.append("<div>" + this.leadingZeros(data.days, 2) + "<span>días</span>")
					.append("<div>" + this.leadingZeros(data.hours, 2) + "<span>horas</span>")
					.append("<div>" + this.leadingZeros(data.min, 2) + "<span>min.</span>")
					.append("<div>" + this.leadingZeros(data.sec, 2) + "<span>seg.</span>")
			}
		});
	}

	/**
	 * =================
	 * EVENTS
	 * =================
	 */
	 $('.toggleHeight').on('click', function() {
	 	toggleHeight($(this).attr('data-element'), $(this).attr('data-action'));
		$(this).parent().find('.hide').toggleClass('hide');
		$(this).toggleClass('hide');
	 });

	//Hide lateral contact form
	$('#SubscribeNewsletterCloseButton, .dark-layer, #alreadySubscribedButton').on('click', function() {
		$('#subscribeNewsletter').removeClass('show');
		$('body').removeClass('block-content');
	});


	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		toggleHeight('disenadores', 'hide');
		toggleHeight('estilos', 'hide');
		toggleHeight('colecciones', 'hide');
		startCountdown('countdown1', 'June 30, 2016 15:03:26');
		startCountdown('countdown2', 'June 24, 2016 00:00:00');
		startCountdown('countdown3', 'November 13, 2016 04:30:00');
    });

    return mDefault;
});