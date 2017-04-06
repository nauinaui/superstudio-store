define(['./Base.js', '../libCommon.js', 'bootstrap', 'countdown', 'zoom', 'recaptcha', 'aplazame'], function (Base, LibCommon, Bootstrap, Countdown, Zoom, Recaptcha, Aplazame) {
    var mDefault = new Base('data for Page Detail loaded');
    var common = new LibCommon();

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

		// Get if current product is a favourite product of user
		checkFavourite();

		// Zoom effect
		window.addEventListener("resize", zoomInit);
		zoomInit();

		// Aplazame
		aplazame.init({
			sandbox: true,
			publicKey: '4c726ea1597febeee7505410a6b6b23addcd8a21'
		});

		// Stop auto play cross selling carousel
		$('#crossSellingSection .carousel').carousel({
		  interval: false
		})

		// Enable button for adding to cart and save to favourite's list
		$('#addToCartButton, .favourite-btn, .finishes input[type="radio"]').removeAttr('disabled');

		// Init tooltip for different options price and payment methods
		$('[data-toggle="tooltip"]').tooltip({
			html: true
		});

		var verifyCallback = function(response) {
			alert(response);
		};
		var widgetId1;
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
		if ( common.detectMobile() == false ) {
			setTimeout(function(){
				if ( !$('#contactFormContent').is('.show') ) {
					showSubscribeNewsletter();
				}
			}, 10000);
		}

		/**
		 * =================
		 * FUNCTIONS
		 * =================
		 */

		/**
		 * Detail page - Create a countdown for limited promotion time
		 */
		function startCountdown() {
			var time = $('.countdown1').attr('data-time'),
				hours = $('.countdown1').attr('data-hours'),
				d = new Date(time +' '+hours);
			$('.countdown1').countdown({
				date: d,
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
			var finishID = selection.attr('data-finish'),
				productID = $('body').attr('data-product-id');

			common.blockUI();
			$.ajax({
				url: 'includes/web/plugin_tiempo_entrega?id='+productID+'&id_color='+finishID,
				success: function (data) {
					common.unblockUI();
					data = data.split('|');
					$('#deliveryTimeText #choose').hide();
					$('#deliveryTimeText .value').html(data[0]);
					$('#deliveryTimeText .value').show();
					refreshUnits(data[1]);
				}
			});
		}

		function refreshUnits(units) {
			// Refresh unit selector according to stock of finish selected
			$('#unitsSelect').empty();
			$('#unitsSelect').removeClass('disabled');
			// Limit unit selection at 50 as maximum
			var maxstock = units;
			if ( maxstock > 50 ) {
				maxstock = 50;
			}
			for (var i=0; i<maxstock; i++) {
			    $('#unitsSelect').append('<option>'+(i+1)+'</option>');
			}
		}

		/**
		 * Calculate shipping price
		 */
		function calculateShipment() {
			var country = $('#selectCountry').val(),
				zipcode = $('#inputZipcode').val(),
				units 	= $('#inputUnits').val(),
				id 		= $('body').attr('data-product-id');

			common.blockUI();
			$.ajax({
				url: '/includes/web/plugin_calcula_portes.asp?id=' + id + '&cp=' + zipcode + '&pais=' + country + '&qty=' + units,
				success: function (data) {
					common.unblockUI();
					$('#showShipmentBtn .show-price').html('x'+units+' = '+data+' <i class="glyphicon glyphicon-refresh"></i>');
					$('#calculateShipment').collapse('hide');
					$('#showShipmentBtn').addClass('active');
				}
			});
		}

		/**
		 * Show calculated price according to number of units selected
		 */
		function calculatePriceUnits() {
			var productID 	= $('body').attr('data-product-id'),
				finishID 	= $('#finishesList input[type="radio"]:checked').attr('data-finish');
				quantity 	= $('#unitsSelect').val();

			common.blockUI();
			$.ajax({
				url: '/includes/web/plugin_precio_detalle.asp?id_producto=' + productID + '&cantidad=' + quantity + '&id_color=' + finishID,
				success: function (data) {
					common.unblockUI();
					var info = data.split('|');
					$('#unitsPrice').html(info[1]);
				}
			});
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
			var cookie = common.readCookie('email-subscription');
			if ( !$('#subscribeNewsletter').is('.show') && !$('body').is('.logged') && cookie == null ) {
				$('#subscribeNewsletter').addClass('show');
				setTimeout(function(){
					$('#subscribeNewsletter .coupon-image').addClass('animated tada');
				}, 1000);
				$('body').addClass('block-content');
			}
		}

		/**
		 * Auto select finish when there is just one product option. Wait for 0.1s to detect event click to refresh delivery time
		 */	
		function autoSelectFinish() {
			if ( $('#finishesList input[name=finishesRadioInput]').length === 1 ) {
				setTimeout(function(){
					$('.finishes-list input[type="radio"]').trigger('click');
				}, 100);
			}
		}

		/*
		* Change price if finish selection has different price
		* param:finish object - Finish selected by user
		*/
		function changePrice(finish) {
			var productID 	= $('body').attr('data-product-id'),
				finishID 	= $('#finishesList input[type="radio"]:checked').attr('data-finish');
				quantity 	= 1;

			common.blockUI();
			$.ajax({
				url: '/includes/web/plugin_precio_detalle.asp?id_producto=' + productID + '&cantidad=' + quantity + '&id_color=' + finishID,
				success: function (data) {
					common.unblockUI();
					var info = data.split('|');
					// refresh new price per unit in unit price
					$('#unitsPrice').html(info[1]);
					// refresh new values to main price section
					$('#priceContainer').find('#oldPrice').html(info[0]);
					$('#priceContainer').find('#productPrice').html(info[1]);
					$('#priceContainer').find('#discount').html(info[2]);
				}
			});
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

			common.blockUI();
			$.ajax({
				url: '/includes/web/plugin_precio_detalle.asp?' + nameID + '=' + valueID + '&color=' + colorID + '&acabado=' + acabadoID + '&opcion=' + opcionID,
				success: function (data) {
					common.unblockUI();
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

		function checkFavourite() {
			var productID 	= $('body').attr('data-product-id');
			$.ajax({
				url: '/includes/web/plugin_favorito?id=' + productID,
				success: function (data) {
					if ( data == '1' ) { // it's favourite
						$('.favourite-btn').addClass('added');
					} else if (data == '0' ) { // it's not favourite
						$('.favourite-btn').removeClass('added');
					}
				}
			});
		}

	    function isCaptchaOk(form) {
	        var v = grecaptcha.getResponse();
	        if(v.length == 0) {
	            $('#verificationGroup > div').append('<label id="textareaMessage-error" class="error" for="textareaMessage">'+errorTextCaptcha+'</label>');
	            return false;
	        }
	        if(v.length != 0) {
	            $('#verificationGroup > div .error').remove();
	            return true; 
	        }
	    }
		
		function startAplazame(dataAplazame, dataVersion, dataSandbox) {
			this.dataAplazame = dataAplazame;
			this.dataVersion = dataVersion;
			this.dataSandbox = dataSandbox;
		}

		/**
		 * =================
		 * EVENTS
		 * =================
		 */

		// Show large image when clicking on main image and on secondary images thummbnails if device is not mobile
		$('.more-images img[data-target="#largeImageModal"], #mainImageLink').on('click', function(e) {
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
			var finishID 	= $(this).attr('data-finish'),
				productRef	= $(this).parent().parent().attr('data-product-ref'),
				place 		= 'detail';

			changeDeliveryTime($(this));
			common.changeFinishImage(finishID, productRef, place);
			changePrice($(this));			
		});

		// Initialize zoom effect with correct image - event triggered only by ajax request!
		$('.finishes-list input').on('click', function() {
			if ( $(this).is(':checked') ) {
				zoomInit();
			}
		})

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

		// Show finishing name in tooltip
		$('#finishesList > label').mouseover(function() {
			if ( common.detectMobile() == false ) {
				var finishName = $(this).find('input').attr('value');
				$(this).tooltip('hide')
					.attr('data-original-title', finishName)
					.tooltip('fixTitle')
					.tooltip('show');
			}
		});

		// Show 'choose a finish' alert if there isn't any selected
		$('#unitsSelect').on('mousedown', function(e) {
			if ( $(this).is('.disabled') ) {
				e.preventDefault();
				var validator = $( '#addMainProductForm' ).validate();
				validator.element( 'input[name="finishesRadioInput"]' );
				// write error in current language
				validator.showErrors({
		  			"finishesRadioInput": errorTextFinish
				});
				$('#finishesRadioInput-error').insertBefore( '#finishesList' );
			}
		});

		// Add product to cart - Collapse other information and show cross selling
		$('#addToCartButton').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();

			var validator = $(this).closest('form').validate();
			if ( validator.form() == true ) {
				var product_id 	= $('body').attr('data-product-id'),
					quantity	= $('#unitsSelect').val(),
					finish 		= $('#finishesList input[type="radio"]:checked').attr('data-finish'),
					type		= "producto";
					finishList 	= $('.finishes:not(.collapse)'),
					ok 			= true;
					isDetail	= true;

				// create query for ajax depending of product type
				if ( $('body').is('.pack') ) {
					type='pack';
					var query = '&id='+product_id+'&cantidad=' + quantity + '&color=&colores=' + finish + '&acabado=&opcion=';
				} else if ( $('body').is('.outlet') ) {
					type='outlet';
					product_id = $('body').attr('data-product-outlet-id');
					var query = '&cantidad=' + quantity + '&color=' + finish + '&acabado=&opcion=';
				} else {
					type ='product';
					var query = '&cantidad=' + quantity + '&color=' + finish + '&acabado=&opcion=';
				}

				// Send product info to cart
				common.addProductToCart(product_id, query, type, isDetail);

			} else if ( $('#finishesRadioInput-error').length ) {
				validator.showErrors({
		  			"finishesRadioInput": errorTextFinish
				});
				// Position label properly if there is an error in finishes selection
				$('#finishesRadioInput-error').insertBefore( '#finishesList' );
				$('#addedProductAlertErrorForm').collapse('show'); // Show error form alert
				setTimeout(function(){
					$('#addedProductAlertErrorForm').collapse('hide');
				}, 3000);
			}
		});

		// Add product to wishlist
		$('.favourite-btn').on('click', function() {
			var productID 	= $('body').data('product-id'),
				btn 		= $('.favourite-btn');
			
			common.blockUI();
			$.ajax({
				url: '/includes/web/plugin_listadeseos.asp?p=' + productID,
				success: function (data) {
					common.unblockUI();
					if ( data == '1' ) { // error
						$('#addedToWishlistAlertError').collapse('show');
						setTimeout(function(){
							$('#addedToWishlistAlertError').collapse('hide');
						}, 3000);
					} else if (data == '0' ) { // added/removed succesfully
						if ( $('.favourite-btn.added').length > 0 ) { // has to remove
							$('#removedFromWishlistAlert').collapse('show');
							setTimeout(function(){
								$('#removedFromWishlistAlert').collapse('hide');
							}, 3000);
							btn.removeClass('added');
						} else { // has to add
							$('#addedToWishlistAlert').collapse('show');
							setTimeout(function(){
								$('#addedToWishlistAlert').collapse('hide');
							}, 3000);
							btn.addClass('added');
						}
					}
				}
			});
		});

		// Contact form - Send information
		$('#contactFormButton').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();

			var validator = $('#contactForm').validate();
			if ( validator.form() == true ) {
				if (isCaptchaOk()==true) {
		            var productID 	= $('body').attr('data-product-id'),
		            	name 		= $('#inputName').val(),
		            	email		= $('#inputEmail').val(),
		            	phone		= $('#inputPhone').val(),
		            	message 	= $('#textareaMessage').val();

		            if ( $('body').is('outlet') ) {
		            	productID = $('body').attr('data-product-outlet-id');
		            	productID = 'id_outlet=' + productID;
		            } else {
		            	productID = 'id=' + productID;
		            }

		            common.blockUI();
		            $.ajax({
						type:'GET',
						url:'/includes/web/plugin_contacto.asp',
						data: productID + '&nombre=' + name + '&email=' + email + '&telefono=' + phone + '&mensaje=' + message,
						success: function(data){
							common.unblockUI();
							if (data == 'true') {
								$('#sentContactInfoAlert').collapse('show');							
							} else {
								$('#sentContactInfoAlertError').collapse('show');
							}
							setTimeout(function(){
								$('#sentContactInfoAlert').collapse('hide');
								$('#sentContactInfoAlertError').collapse('hide');
							}, 5000);
						}
				   	});
	            }
			}
		});

		// Contact form for outlet products - Send information
		$('#submitOutletContactForm').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();

			var validator = $('#formulario').validate();
			if ( validator.form() == true ) {
				if (isCaptchaOk()==true) {
		            var productID 	= $('body').attr('data-product-outlet-id'),
		            	name 		= $('#inputNameContact').val(),
		            	email		= $('#inputEmailContact').val(),
		            	phone		= $('#inputPhoneContact').val(),
		            	day 		= $('#inputDateContact').val(),
		            	time 		= $('#inputTimeContact').val(),
		            	message 	= $('#inputMessageContact').val();

	            	productID = 'id_outlet=' + productID;

		            common.blockUI();
		            $.ajax({
						type:'GET',
						url:'/includes/web/plugin_contacto.asp',
						data: productID + '&nombre=' + name + '&email=' + email + '&telefono=' + phone + '&dia=' + day + '&hora=' + time + '&mensaje=' + message,
						success: function(data){
							common.unblockUI();
							console.log(data);
							if (data == 'true') {
								$('#sentOutletContactAlert').collapse('show');							
							} else {
								$('#sentOutletContactAlertError').collapse('show');
							}
							setTimeout(function(){
								$('#sentOutletContactAlert').collapse('hide');
								$('#sentOutletContactAlertError').collapse('hide');
							}, 5000);
						}
				   	});
	            }
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
				// move recaptcha to this form
				$('form#formulario').find('.form-group').last().after( $('#verificationGroup') );
				$('#verificationGroup label').removeClass('col-sm-4 hidden-md hidden-lg control-label');
				$('#verificationGroup > div').removeClass('col-sm-8 col-lg-11 col-lg-offset-1');
			}
		});

		// Hide lateral contact form -outlet-
		$('#cancelOutletContactForm, #outletContactFormCloseButton, .dark-layer').on('click', function() {
			$('#contactFormContent').removeClass('show');
			$('body').removeClass('block-content');
			// move back recaptcha to contact form
			$('#verificationGroup').prependTo($('form#contactForm').find('.col-md-4').last());
			$('#verificationGroup label').addClass('col-sm-4 hidden-md hidden-lg control-label');
			$('#verificationGroup > div').addClass('col-sm-8 col-lg-11 col-lg-offset-1');
		});
    });

    return mDefault;
});