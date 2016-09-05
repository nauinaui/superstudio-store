define(['./Base', '../libCommon', 'bootstrap', 'countdown', '../lib', 'zoom', 'recaptcha'], function (Base, LibCommon, Bootstrap, Countdown, Lib, Zoom, Recaptcha) {
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
			date: "October 30, 2016 15:03:26",
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
		$('.product-to-add img').attr( 'src', src );
	}

	/**
	 * Show alert for 3 seconds and hide again
	 */
	function showFeedback(ok) {
		if ( ok == true ) {
			$('#addedProductAlert').show();
		} else {
			$('#addedProductAlertError').show();
		}
		setTimeout(function(){
			$('#addedProductAlert').hide();
			$('#addedProductAlertError').hide();
		}, 3000);
	}

	/**
	 * Collapse other information and show cross selling section with a scrolling effect
	 */
	function showCrossSelling() {
		if ( $('#otherInfoContentTabs').is(':visible') ) {
			$('#otherInfoContentTabs').collapse('hide');
		}
		if ( $('#crossSellingSection').is(':hidden') ) {
			$('#crossSellingSection').collapse('show');
		}
		$('html, body').animate({
	        scrollTop: $("#crossSellingSection").offset().top - 50
	    }, 1000);
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
	 * Show correct delivery time for selected finish and show products with better delivery time advice and module
	 * @param this:object Selected product finish
	 */
	function changeDeliveryTime(selection) {
		$('#deliveryTimeText #choose').hide();
		$('#deliveryTimeText .value').hide();
		var longestTime;
		
		if ( $('body').is('.pack') ) { // It's a pack product - check all options to get the largest time
			var times = [],
			i = 0;
			$( ".finishes-list input:checked" ).each(function() {
				times[i++] = $(this).attr('data-diasnacional');
			});
			longestTime = Math.max.apply(Math,times);
		} else { // it's a normal product - get time delivery
			longestTime = selection.attr('data-diasnacional');
		}
		$('#deliveryTimeText .value#time-'+longestTime).show();

		// Show tip: more products with shorter time
		if ( longestTime > 2 ) { // It's too late when delivery time exceeds 5-8 days
			$('#deliveryTimeText').closest('.square.time').addClass('too-late');
			$('#betterDeliveryTip').collapse('show');
			$('#betterTimeSection').collapse('show');
		} else {
			$('#deliveryTimeText').closest('.square.time').removeClass('too-late');
			$('#betterDeliveryTip').collapse('hide');
			$('#betterTimeSection').collapse('hide');
		}
	}

	/**
	 * Calculate shipping price
	 */
	function calculateShipment() {
		var country = $('#selectCountry').val(),
			zipcode = $('#inputZipcode').val(),
			units 	= $('#inputUnits').val(), // To implement when added units in backend
			id 		= $('body').attr('data-product-id');

		$.ajax({
			url: '/includes/web/plugin_calcula_portes.asp?id=' + id + '&cp=' + zipcode + '&pais=' + country,
			success: function (data) {
				$('#showShipmentBtn .show-price').html('x'+units+' = '+data+' <i class="glyphicon glyphicon-refresh"></i>');
				$('#calculateShipment').collapse('hide');
				$('#showShipmentBtn').addClass('active');
			}
		});
	}

	/**
	 * Show correct delivery time for selected finish and show products with better delivery time advice and module
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
	 * zoom effect in main image
	 */
	function zoomInit() {
		if (window.innerWidth > 529) {
			$('.zoom').zoom({magnifys: 2});
		} else {
			$('.zoom').trigger('zoom.destroy');
		}
	}

	/**
	 * Show subscribing newsletter in lateral content
	 */
	function showSubscribeNewsletter() {
		if ( !$('#subscribeNewsletter').is('.show') ) {
			$('#subscribeNewsletter').addClass('show');
			setTimeout(function(){
				$('#subscribeNewsletter .coupon-image').addClass('animated tada');
			}, 1000);
			$('body').addClass('block-content');
		}
	}

	/**
	 * Auto select finish when there is just one product option
	 */	
	function autoSelectFinish() {
		if ( $('#finishesList input[name=finishesRadioInput]').length === 1 ) {
			$('#finishesList input[name=finishesRadioInput]').attr('checked', 'checked');
		}
	}

	/**
	 * Get image of finish selected
	 */	
	function changeFinishImage(finish) {
		var finish_id 	= finish.attr('data-finish'),
			ref			= finish.parent().parent().attr('data-product-ref');

		$.ajax({
			url: '/includes/web/plugin_fotos_color.asp?ref='+ref+'&id_color='+finish_id,
			success: function (data) {
				if ( $('body').is('.pack') ) {
					var product_id = finish.parent().parent().attr('data-product-id');
					$('.product-pack-item[data-product-id="' + product_id + '"] img').attr('src',data);
				} else {
					$('#mainImage').attr('src',data);
					zoomInit();
				}
			}
		});
	}

	/*
	* Change price if finish selection has different price
	* param:finish object - Finish selected by user
	*/
	function changePrice(finish) {
		var difference 		= finish.parent().find('.option-price').attr('data-price'),
			originalPrice 	= $('#priceContainer').attr('data-product-price');
		if ( difference === undefined ) {
			var total = originalPrice.replace(',','.');
			if ( total.charAt(0) === '&' ) {
				total = total.replace('&pound;','');
			} else {
				total = total.replace('€','');
			}
		} else {
			difference 		= difference.replace('€', '');
			originalPrice	= originalPrice.replace('€', '');
			// add or substract
			if ( difference.charAt(0) === '+' ) {
				difference = difference.replace('+', '');
				difference = parseFloat(difference.replace(',', '.'));
				originalPrice = parseFloat(originalPrice.replace(',', '.'));
				var total = originalPrice+difference;
			} else {
				difference = difference.replace('-', '');
				difference = parseFloat(difference.replace(',', '.'));
				originalPrice = parseFloat(originalPrice.replace(',', '.'));
				var total = originalPrice-difference;
			}
		}
		//print final price
		total = total.toString();
		$('#unitsPrice').text(total+'€');
		total = total.split('.');
		$('#productPrice').html(total[0]+',<span class="cents">'+total[1]+'</span><span class="currency">€</span>');
	}

	/**
	 * Receive correct price for product and finish selected
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
			cantidadInput = $('#unitsSelect').val(),
			originalPrice = $('#priceContainer');

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
						originalPrice.attr('data-product-price','&euro;' + precioPrint);
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
						originalPrice.attr('data-product-price','&pound;' + precioPrint + precioPrintEuro + '&euro;');
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

					originalPrice.attr('data-product-price',precioPrintSeparated[0] +','+ precioPrintSeparated[1] + '€');
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

	// Show large image when clicking on main image and on secondary images thummbnails if device is not mobile
	$('.more-images img[data-target="#largeImageModal"], #mainImageLink').on('click', function(e) {
		var common = new LibCommon();
		if ( common.detectMobile() == false ) {
			if ( $(this).is('#mainImageLink') == true ) {
				var source = $(this).find('#mainImage').attr('src');
			} else {
				var source = $(this).attr('src');
			}
			$('#largeImageModal .modal-content img').attr('src',source);
		} else {
			e.preventDefault();
			e.stopPropagation();
			$('#largeImageModal').modal({
				show: false
			});
		}
	});

	// Show secondary image in main image content when hover in a thumbnail
	$('.more-images img').mouseover(function() {
		$('.zoom').trigger('zoom.destroy');
		$('#mainImage').attr('src',$(this).attr('src'));
		zoomInit();
	});

	// Show delivery time and stock after selecting a finish and show finish image in main image place
	$('.finishes-list input[type="radio"]').change(function() {
		changeDeliveryTime($(this));
		changeFinishImage($(this));
		changePrice($(this));
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

	// Select product in cross selling
	$('.carousel .item img').on('click', function(e) {
		refreshProductToAdd($(this));
	});

	// Move shipment form to correct position when is shown
	$('#showShipmentBtn').on('click', function() {
		$('#calculateShipment').insertAfter('#infoDiv');
	});

	// Show price after submitting shipment form and collapse this form
	$('#calculateShipmentBtn').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var validator = $(this).closest('form').validate();
		if ( validator.form() == true ) {
			calculateShipment();
		}
	});

	// Update price when product units select changes
	$('#unitsSelect').on('change', function() {
		calculatePriceUnits();
	});

	// Collapse other information and show cross selling when a product is added to the cart
	$('#addToCartButton').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var validator = $(this).closest('form').validate();
		if ( validator.form() == true ) {
			var common 		= new LibCommon(),
				product_id 	= $('body').attr('data-product-id'),
				quantity	= $('#unitsSelect').val(),
				finish 		= $('#finishesList input[type="radio"]:checked').attr('data-finish'),
				type		= "producto";
				finishList 	= $('.finishes:not(.collapse)'),
				ok 			= true;

			if ( !$('body').is('.pack') ) { // normal product
				var query = '&cantidad=' + quantity + '&color=' + finish + '&acabado=&opcion=';
			} else if ( $('body').is('.pack') ) { // product pack
				var query = '&id='+product_id+'&cantidad=' + quantity + '&color=&colores=' + finish + '&acabado=&opcion=';
			}
			// Enviamos la info al carrito
			$.ajax({
				url: '/includes/web/carrito?accion=anadir' + query,
				success: function (data) {
					showFeedback(ok);
					if ( !$('body').is('.pack') ) {
						hideUpSelling();
						setTimeout(function(){
							showCrossSelling();
						}, 3000);
					}
					// Cargamos carrito
					common.addProductToCart(product_id, query, type);
					// topbar.find('#carrito').html(data).slideDown(250);
					// cargamos carrito linia
					// topbar.find('.carritoText').load('/includes/web/carrito_linea.asp');
				},
				error: function() {
					console.log('error');
					var ok = false;
					showFeedback(ok);
				}
			});
		}
	});

	// Show tab content if is collapsed
	$('.other-info-title-tabs li.title').on('click', function() {
		if ( $('#otherInfoContentTabs').is(':hidden') ) {
			$('#otherInfoContentTabs').collapse('show');
		}
	});

	// Show lateral contact form if is hidden -outlet-
	$('#showContactFormButton').on('click', function() {
		if ( !$('#contactFormContent').is('.show') ) {
			$('#contactFormContent').addClass('show');
			$('body').addClass('block-content');
		}
	});

	// Hide lateral contact form -outlet-
	$('#cancelOutletContactForm, #outletContactFormCloseButton, .dark-layer').on('click', function() {
		$('#contactFormContent').removeClass('show');
		$('body').removeClass('block-content');
	});

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		// Init countdown
		startCountdown();
		
		// Auto select finish if there is just one option
		autoSelectFinish();

		// Zoom effect
		window.addEventListener("resize", zoomInit);
		zoomInit();

		// Stop auto play carousel
		$('.carousel').carousel({
		  interval: false
		})

		// Init tooltip for different options price and payment methods
		$('[data-toggle="tooltip"]').tooltip({
			html: true
		});

		var verifyCallback = function(response) {
			alert(response);
		};
		var widgetId1;
		var widgetId2;
		var onloadCallback = function() {
			// Renders the HTML element with id 'example1' as a reCAPTCHA widget.
			// The id of the reCAPTCHA widget is assigned to 'widgetId1'.
			widgetId1 = grecaptcha.render('example1', {
			  'sitekey' : '6LccYR4TAAAAAGH2j14AkvUCYzzb2EZrgx2A6Y5G',
			  'callback' : verifyCallback,
			  'theme' : 'clean'
			});
			widgetId2 = grecaptcha.render('example2', {
			  'sitekey' : '6LccYR4TAAAAAGH2j14AkvUCYzzb2EZrgx2A6Y5G',
			  'callback' : verifyCallback,
			  'theme' : 'clean'
			});
		};

		// Show subscribe newsletter - only if not mobile
		var common = new LibCommon;
		if ( common.detectMobile() == false ) {
			setTimeout(function(){
				showSubscribeNewsletter();
			}, 10000);
		}
    });

    return mDefault;
});