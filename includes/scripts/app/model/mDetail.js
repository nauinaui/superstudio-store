define(['./Base', 'bootstrap', 'countdown', '../lib', 'zoom', 'recaptcha'], function (Base, Bootstrap, Countdown, Lib, Zoom, Recaptcha) {
    var mDefault = new Base('This is the data for Page Detail');

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */

	/**
	 * Detail page - Create a countdown for limited promotion time
	 */
	function startCountdown() {
		$('.countdown1').countdown({
			date: "July 30, 2016 15:03:26",
			render: function (data) {
				var el = $(this.el);
				el.empty()
					.append(" <div>" + this.leadingZeros(data.days, 2) + "<span>D</span> :")
					.append(" <div>" + this.leadingZeros(data.hours, 2) + "<span>H</span> :")
					.append(" <div>" + this.leadingZeros(data.min, 2) + "<span>M</span> :")
					.append(" <div>" + this.leadingZeros(data.sec, 2) + "<span>S</span>")
			}
		});
	}

	/**
	 * Detail page - Refresh selected item in cross selling slider
	 * @param selected:Object Selected item to add for cross selling
	 */
	function refreshProductToAdd(selected) {
		$('.carousel .item img').removeClass('active');
		selected.addClass('active');
		var src = selected.attr('src');
		console.log(src);
		$('.product-to-add img').attr( 'src', src );
	}

	/**
	 * Detail page - Show alert for 3 seconds and hide again
	 */
	function showFeedback() {
		$('#addedProductAlert').show();
		setTimeout(function(){
			$('#addedProductAlert').hide();
			$('html, body').animate({
		        scrollTop: $("#crossSellingSection").offset().top - 50
		    }, 1000);
		}, 2000);
	}

	/**
	 * Detail page - Collapse other information and show cross selling section with a scrolling effect
	 */
	function showCrossSelling() {
		if ( $('#otherInfoContentTabs').is(':visible') ) {
			$('#otherInfoContentTabs').collapse('hide');
		}
		if ( $('#crossSellingSection').is(':hidden') ) {
			$('#crossSellingSection').collapse('show');
		}
	}

	/**
	 * Detail page - Hide upselling section
	 */
	function hideUpSelling() {
		if ( $('#upSellingSection').is(':visible') ) {
			$('#upSellingSection').collapse('hide');
		}
	}

	/**
	 * Detail page - Show correct delivery time for selected finish and show products with better delivery time advice and module
	 * @param this:object Selected product finish
	 */
	function changeDeliveryTime(selection) {
		$('#deliveryTimeText').text(selection.attr('data-diasnacional'));0
		if ( selection.attr('data-diasnacional').indexOf('semanas')!= -1 ) {
			$('#deliveryTimeText').closest('.square.time').addClass('too-late');
			$('#betterDeliveryTip').collapse('show');
			$('#betterTimeSection').collapse('show');
		} else if ( selection.attr('data-diasnacional').indexOf('días')!= -1 ) {
			$('#deliveryTimeText').closest('.square.time').removeClass('too-late');
			$('#betterDeliveryTip').collapse('hide');
			$('#betterTimeSection').collapse('hide');
		}
	}

	/**
	 * Detail page - Show correct delivery time for selected finish and show products with better delivery time advice and module
	 * @param this:object Selected product finish
	 */
	function calculatePriceUnits(tipo) {
		var price = $('#productPrice').text();
		price = Number(price.replace(/[^0-9\.]+/g,""));
		price = price / 100;
		price = $('#unitsSelect').val() * price;
		price = price.toFixed(2);

		if (tipo === 'uk') { // Es UK
			$('#unitsPrice').text( '&pound; '+price);
		} else if (tipo === 'nl') { // Es NL
			$('#unitsPrice').text( '&pound;'+price);
		} else { // Son €
			$('#unitsPrice').text( price + '€');
		}
	}

	/**
	 * Detail page - zoom effect in main image
	 */
	function zoomInit() {
		if (window.innerWidth > 529) {
			$('.zoom').zoom({magnifys: 2});
		} else {
			$('.zoom').trigger('zoom.destroy');
		}
	}

	/**
	 * Detail page - Receive correct price for product and finish selected
	 */
	function calculatePrice() {
		var nameID = "id_producto",
		valueID = $('body').data('product-id'),
		porcenDesc = $('#discount'),
		moreprice = $('#productPrice'),
		tachaprice = $('#oldPrice'),
		nuevoPrecio = $('#unitsPrice'),
		activos = $('#finishesList input:checked'),
		price = $('.price'),
		normalprice = $('.normalprice'),
		colorID = '',
		acabadoID = '',
		opcionID = '',
		cantidadInput = $('#unitsSelect').val();

		$.each(activos, function (i, e) {
			var tipo = $(e).parent().data('type');
			if (tipo === 'color') {
				colorID = $(this).data('idacabado');
			}
			if (tipo === 'acabados') {
				acabadoID = $(this).data('idacabado');
			}
			if (tipo === 'opciones') {
				opcionID = $(this).data('idacabado');
			}
		});

		$.ajax({
			url: '/includes/web/plugin_precio_detalle.asp?' + nameID + '=' + valueID + '&color=' + colorID + '&acabado=' + acabadoID + '&opcion=' + opcionID,
			success: function (data) {
				console.log('received prices!');
				var precio = data.split("|"),
						precioPrint,
						precioPrintOld,
						precioPrintEuro,
						precioPrintOldEuro,
						porcentaje = precio[4],
						tipo;

				if (precio[0].charAt(0) === "&") { // Es UK o NL (con euro delante)
					if (precio[0].indexOf('euro') !== -1) { // NL
						// Replacing
						precioPrint = precio[1].replace('&euro;', '');
						precioPrintOld = precio[0].replace('&euro;', '');
						// Printing
						moreprice.html('&euro;' + precioPrint);
						tachaprice.html('&euro;' + precioPrintOld);
						nuevoPrecio.html('&euro;' + precioPrint);
						precioPrint = precioPrint.replace(',', '.'); // Volvemos a poner INT
						tipo = 'nl';
					} else { // UK
						// Reemplazamos
						precioPrint = precio[1].replace('&pound;', '');
						precioPrintOld = precio[0].replace('&pound;', '');
						precioPrintEuro = precio[3].replace('&nbsp;&euro;', '');
						precioPrintEuro = precioPrintEuro.replace(',', '.');
						precioPrintOldEuro = precio[2].replace('&nbsp;&euro;', '');
						precioPrintOldEuro = precioPrintOldEuro.replace(',', '.');
						// Pintamos
						moreprice.html('&pound;' + precioPrint + '<span class="priceMin">' + precioPrintEuro + '&euro;</span>');
						tachaprice.html('&pound;' + precioPrintOld + '<span class="tachaprice priceMin">' + precioPrintOldEuro + '&euro;</span>');
						nuevoPrecio.html('&pound;' + precioPrint);
						tipo = 'uk';
					}
				} else { // Son €
					// Reemplazamos
					precioPrint = precio[1].replace('&nbsp;&euro;', '');
					precioPrintOld = precio[0].replace('&nbsp;&euro;', '');
					
					// Printing
					var precioPrintSeparated = precioPrint.split(',');
					var precioPrintOldSeparated = precioPrintOld.split(',');

					moreprice.html(precioPrintSeparated[0]+',<span class="cents">'+precioPrintSeparated[1]+'&euro;</span>');
					tachaprice.html(precioPrintOldSeparated[0]+',<span class="cents">'+precioPrintOldSeparated[1]+'&euro;</span>');
					nuevoPrecio.html(precioPrint + ' &euro;');
					precioPrint = precioPrint.replace(',', '.'); // Volvemos a poner INT
					tipo = 'normal';
				}

				porcenDesc.html(porcentaje);
				calculatePriceUnits(tipo);
			}
		});
	}

	/**
	 * =================
	 * EVENTS
	 * =================
	 */

	// Detail page - Show large image when clicking on secundary images thummbnails
	$('.more-images img[data-target="#largeImageModal"]').on('click', function(e) {
		//if (isMobile == false) {
			var source = $(this).attr('src');
			$('#largeImageModal .modal-content img').attr('src',source);
		//} else {
		//	e.preventDefault();
		//	e.stopPropagation();
		//	$('#largeImageModal').modal({
		//		show: false
		//	});
		//}
	});

	// Detail page - Show secundary image in main image content when hover in a thumbnail
	$('.more-images img').mouseover(function() {
		$('.zoom').trigger('zoom.destroy');
		$('#mainImage').attr('src',$(this).attr('src'));
		zoomInit();
	});

	// Show delivery time and stock after selecting a finish
	$('input[name="finishesRadioInput"]').change(function() {
		changeDeliveryTime($(this));
		$('#unitsSelect').empty();
		for (var i=0; i<$(this).attr('data-stock'); i++) {
		    $('#unitsSelect').append('<option>'+(i+1)+'</option>');
		}
	});

	// Show products with better delivery and scroll
	$('#showBetterDelivery').on('click', function() {
		$('html, body').animate({
	        scrollTop: $("#betterTimeSection").offset().top - 50
	    }, 1000);
	});

	// Detail page - Select product in cross selling
	$('.carousel .item img').on('click', function(e) {
		refreshProductToAdd($(this));
	});

	// Detail page - Show price after submitting shipment form and collapse this form
	$('#calculateShipmentForm').submit(function() {
		$('#calculateShipment').collapse('hide');
		$('#showShipmentBtn').addClass('active');
		return false;
	});

	// Detail page - Update price when product units select changes
	$('#unitsSelect').on('change', function() {
		calculatePriceUnits();
	});

	// Detail page - Collapse other information and show cross selling when a product is added to the cart
	$('#addMainProductForm').submit(function (e) {
		e.preventDefault();
		showFeedback();
		hideUpSelling();
		showCrossSelling();
		refreshCartNumber();
	});

	//Detail page - Move shipment form to correct position when is shown
	$('#showShipmentBtn').on('click', function() {
		$('#calculateShipment').insertAfter('#infoDiv');
	});

	//Detail page - Show tab content if is collapsed
	$('.other-info-title-tabs li.title').on('click', function() {
		if ( $('#otherInfoContentTabs').is(':hidden') ) {
			$('#otherInfoContentTabs').collapse('show');
		}
	});

	//Detail page - Show lateral contact form if is hidden
	$('#showContactFormButton').on('click', function() {
		if ( !$('#contactFormContent').is('.show') ) {
			$('#contactFormContent').addClass('show');
		}
	});

	//Detail page - Hide lateral contact form
	$('#cancelOutletContactForm, #outletContactFormCloseButton').on('click', function() {
		$('#contactFormContent').removeClass('show');
	});
	

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		// Init countdown
		startCountdown();
		// Get price of product
		calculatePrice();
		// Zoom effect
		window.addEventListener("resize", zoomInit);
		zoomInit();

		// Stop auto play carousel
		$('.carousel').carousel({
		  interval: false
		})

		var verifyCallback = function(response) {
			alert(response);
		};
		var widgetId1;
		var widgetId2;
		var onloadCallback = function() {
			// Renders the HTML element with id 'example1' as a reCAPTCHA widget.
			// The id of the reCAPTCHA widget is assigned to 'widgetId1'.
			widgetId1 = grecaptcha.render('example1', {
			  'sitekey' : 'your_site_key',
			  'theme' : 'light'
			});
			widgetId2 = grecaptcha.render(document.getElementById('example2'), {
			  'sitekey' : 'your_site_key'
			});
			grecaptcha.render('example3', {
			  'sitekey' : 'your_site_key',
			  'callback' : verifyCallback,
			  'theme' : 'dark'
			});
		};
    });

    return mDefault;
});