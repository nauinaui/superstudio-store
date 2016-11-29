define(['./Base.js', '../libCommon.js', 'bootstrap'], function (Base, LibCommon, Bootstrap) {
    var mCheckout = new Base('This is the data for Page Checkout');

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */
    function refreshFooterTotal(step) {
		var codAmount = $('#collapsePaymentMethod #collapseCod.collapse.in').attr('data-tax');
		$('#productsPanel .footer-price .subtitle')
		$('' + step + '.footer-price span').text();
    }

    function nextStep(currentStep) {
    	$('#collapseDeliveryDetails').collapse('hide');
    	$('#collapseProducts').collapse('hide');
    	$('#collapsePaymentMethod').collapse('hide');
    	var nextStep;
    	if ( currentStep == 1 ) {
    		nextStep = $('#collapseProducts');
    		nextStep.collapse('show');
    	} else if ( currentStep == 2 ) {
    		nextStep = $('#collapsePaymentMethod');
    		nextStep.collapse('show');
    	} else if ( currentStep == 3 ) {
    		nextStep = $('#lastStep');
    		nextStep.collapse('show');
    	}
		setTimeout(function(){
		  	$('html, body').animate({scrollTop: $('#stepsAccordion').offset().top - 70}, 500);
		}, 500);
    }

    // AJAX - Check if email is already registered
    function checkregistered() {
		$.ajax({
			url: '/includes/web/plugin_login_carrito',
			type: 'POST',
			data: 'e=' + $('#inputEmail').val() + '&p=' + $('#pass_cliente').val(),
			success: function (data) {
				if (data !== '') {
					$('input[name="envio_email"]').after(data).slideDown('fast');
					$('#pass_cliente').focus();
				}
			}
		});
    }

    // Show nif and alert
    function showNif() {
    	$('#inputGroupPassport').collapse('hide');
    	$('#alertPassport').collapse('hide');
    }
    // Hide nif and alert
    function hideNif() {
    	$('#inputGroupPassport').collapse('hide');
    	$('#alertPassport').collapse('hide');
    }

	//Check show nif
	function checkShowNif(total) {
		if ( total > 40000 ) {
			showNif();
		} else {
			hideNif();
		}
	}

	// Flip credit card to rear view and check if cvc are filled
	function flipCreditCardRear() {
		if ( !$('#inputCardCvc').val() == '' ) { // check cvc
			checkCvc();
	    }
		$('.credit-card').addClass('animated flipOutY'); // flip effect
		setTimeout(function(){
			$('.credit-card').removeClass('animated flipOutY');
			$('.credit-card .front').hide();
			$('.credit-card').addClass('animated flipInY');
			$('.credit-card .rear').show();
		}, 500);
	}

	// Flip credit card to front view and check if all inputs are filled
	function flipCreditCardFront() {
		var allFilled = true; // check credit card if all fields are filled
		$('#creditCard .front input').each(function() {
			if ( $(this).val() === '' ) {
		      allFilled = false;
		    }
		})
		if ( allFilled == true ) {
			checkCreditCard();
		}
		$('.credit-card').addClass('animated flipOutY'); // flip effect
		setTimeout(function(){
			$('.credit-card').removeClass('animated flipOutY');
			$('.credit-card .rear').hide();
			$('.credit-card').addClass('animated flipInY');
			$('.credit-card .front').show();
		}, 500);	
	}

	// Check credit card
	function checkCreditCard() {
		var	cardNumber 	= $('#inputCardNumberBox1').val()+$('#inputCardNumberBox2').val()+$('#inputCardNumberBox3').val()+$('#inputCardNumberBox4').val();
			cardMonth 	= $('#inputCardMonth').val(),
			cardYear 	= $('#inputCardYear').val(),
			regex		= new RegExp('^[0-9]*$'),
			currentYear = (new Date).getFullYear();
			validate 	= true;
		currentYear = parseInt(currentYear) % 100;

		if ( cardNumber.length == 16 && regex.test(cardNumber) ) {
			$('.card-number-group').removeClass('has-error');
		} else {
			$('.card-number-group').addClass('has-error');
			validate = false;
		}
		
		if ( cardMonth.length == 2 && regex.test(cardMonth)) {
			parseInt(cardMonth);
			if ( cardMonth<13 && cardMonth>0 ) {
				$('#inputCardMonth').parent().removeClass('has-error');
			} else {
				$('#inputCardMonth').parent().addClass('has-error');
				validate = false;
			}
		} else {
			$('#inputCardMonth').parent().addClass('has-error');
			validate = false;
		}
		
		if ( cardYear.length == 2 && regex.test(cardYear)) {
			parseInt(cardYear);
			if ( cardYear>=currentYear && cardYear>0 ) {
				$('#inputCardYear').parent().removeClass('has-error');
			} else {
				$('#inputCardYear').parent().addClass('has-error');
				validate = false;
			}
		} else {
			$('#inputCardYear').parent().addClass('has-error');
			validate = false;
		}

		if ( validate == false ) {
			$('#turnCardLabel').removeClass('valid'); // error
			$('#turnCardLabel').addClass('error');
			return false;
		} else {
			$('#turnCardLabel').removeClass('error'); // ok
			$('#turnCardLabel').addClass('valid');
			return true;
		}
	}

	function checkCvc() {
		var regex = new RegExp('^[0-9]*$');
		if ( $('#inputCardCvc').val().length == 3 && regex.test($('#inputCardCvc').val()) ) {
			$('#inputCardCvc').parent().removeClass('has-error');
			$('#turnCardLabel').removeClass('error');
			$('#turnCardLabel').addClass('valid');
			flipCreditCardFront();
			return true;
		} else {
			$('#inputCardCvc').parent().addClass('has-error');
			$('#turnCardLabel').removeClass('valid');
			$('#turnCardLabel').addClass('error');
			return false;
		}
	}

    // Check all forms
    function checkAllForms() {
		// check delivery details form
		if ( $('#deliveryDetailsForm')[0].checkValidity() ) {
			$('#collapseDeliveryDetails').collapse('hide');
			// check payment method form
			if ( $('#paymentMethodForm')[0].checkValidity() ) {
				// check if credit card payment is selected
				if ( $('#visaInput').is(':checked') ) {
					if ( checkCreditCard() == true ) { // check credit card
						checkCvc();
					}
					if ( $('#creditCard .form-group').is('.has-error') ) { // credit card error
						$('#creditCardErrorAlert').collapse('show');
						return false;
					} else {
						$('#creditCardErrorAlert').collapse('hide'); // credit card ok
						$('#collapsePaymentMethod').collapse('hide');
						$('#collapseCreditCard').collapse('show');
					}
				}
				//check invoice form
				if ( $('#invoiceCheckbox').is(':checked') ) {
					if ( $('#invoiceForm')[0].checkValidity() ) {
						return true; // confirm order
					} else {
						$('#invoiceCollapse').collapse('show'); // invoice error
						$('#invoiceForm').find(':submit').click()
					}
				} else {
					return true; // confirm order
				}
			} else { // payment method error
				$('#collapsePaymentMethod').collapse('show');
				$('#paymentMethodForm').find(':submit').click()
			}
		} else { // delivery details error
			// check if delivery details form is visible due to tab selection and make it visible
			$('#collapseDeliveryDetails').collapse('show');
			if ( !$('#deliveryDetailsTab').is('.active') ) {
				$('#deliveryDetailsTab > a').trigger('click');
			}
			$('#deliveryDetailsForm').find(':submit').click()
		}
    }

    // Disable log in tab for a logged users
    function blockLoginTab() {
    	$('#loginTab a').attr('data-toggle','');
    }

    // Get user info
	function getUserInfo(data) {
		var userName = $(data).find('nombre').text(),
			userPhone = $(data).find('telefono').text(),
			userAddress = $(data).find('direccion:first').text(),
			userPostcode = $(data).find('cp:first').text(),
			userCity = $(data).find('poblacion:first').text(),
			userCountry = $(data).find('pais:first').text(),
			userPassport = $(data).find('nif').text(),
			userEmail = $('#inputEmailLogin').val();

		// print info in correct place
		$('#inputEmail').val(userEmail);
		$('#inputName').val(userName);
		$('#inputPhone').val(userPhone);
		$('#inputAddress').val(userAddress);
		$('#inputPostcode').val(userPostcode);
		$('#inputCity').val(userCity);
		$('#inputCountry').val(userCountry);
		$('#inputPassport').val(userPassport);

		// getCities(userPostcode, userCountry);
		
		if ( !$(data).find('direcciones').text() == '' ) { 
			// User has more than one address
			$('#multipleAddressSelect').collapse('show');
			$('#inputChooseAddress').html('');
			var userPlaces = $(data).find('sitio');
			var foundFav = false;
			userPlaces.each( function() {
				var id = $(this).attr('id');
				$('#inputChooseAddress').append('<option value="'+id+'">' + $(this).find('direccion').text() + '</option>');
				$('#inputAddress').attr( 'data-id-'+id, $(this).find('direccion').text() );
				$('#inputPostcode').attr( 'data-id-'+id, $(this).find('cp').text() );
				$('#inputCity').attr( 'data-id-'+id, $(this).find('poblacion').text() );
				$('#inputCountry').attr( 'data-id-'+id, $(this).find('pais').text() );
				
				if ( $(this).attr('preferido') == '1' ) {
					chooseAddress(id);
					foundFav = true;
				}
			})
			// Select first address if there is not a favourite one
			if ( foundFav === false ) {
				chooseAddress($("#inputChooseAddress option:first").attr('value'));
			}
		} else {
			// user has only one address
			$('#multipleAddressSelect').collapse('hide');
		}
	}

	// Select address from all different saved directions
	function chooseAddress(id) {
		var cityName = $('#inputCity').attr('data-id-'+id);
		$('#inputChooseAddress').val(id);
		$('#inputAddress').val($('#inputAddress').attr('data-id-'+id));
		$('#inputCountry').val($('#inputCountry').attr('data-id-'+id));
		$('#inputPostcode').val($('#inputPostcode').attr('data-id-'+id));
		$('#inputCity').hide();
		$('#inputCityWritten').val(cityName);
		$('#inputCityWritten').show();
	}

	// Get all cities related to given info and print in selector
	function getCities(postcode, country) {
		$.ajax({
			url: '/includes/web/ajax/poblaciones',
			type: 'POST',
			data: 'zipcode=' + postcode + '&country=' + country,
			success: function (data) {
				if ( data == '' ) {
					$('#inputCity').hide();
					$('#inputCityWritten').show();
					$('#inputCityWritten').focus();
				} else {
					$('#inputCityWritten').hide();
					$('#inputCity').show();
					$('#inputCity').focus();
					var cities = data.split(',');
					$('#inputCity').html('');
					for (var i=0; i<cities.length; i++) {
						$('#inputCity').append('<option value="'+ cities[i] +'">' + cities[i] + '</option>');
					}
				}
			}
		});
	}

	function getProductInfo(triggerObj) {
		var element			= triggerObj.closest('.item'),
			productRelation = element.attr('data-relation-id'),
			quantity 		= element.find('.quantity-select').val(),
			prevQuantity	= element.find('.quantity-select').data('prev-val'),
			finish 			= triggerObj.find('option:selected').val(),
			action			= 'color';

		if ( triggerObj.is('.quantity-select') == true ) {
			action = 'cantidad';
		}

		refreshDeliveryOptions(action, productRelation, finish, quantity, prevQuantity);
	}


	// Send new delivery info to server and print new results
	function refreshDeliveryOptions(action, productRelation, finish, quantity, prevQuantity) {
		$.ajax({
			url: '/includes/web/ajax/actualizar_pedido',
			type: 'POST',
			data: 'action=' + action + '&relation=' + productRelation + '&finish=' + finish + '&quantity=' + quantity + '&prevquantity=' + prevQuantity,
			success: function (data) {
				$('#tableProductsContent').empty();
				$('#tableProductsContent').append(data);

				var otherInfo = $('#tableProductsContent #datos');
				refreshOtherInfoFromDelivery(otherInfo);
			}
		});
	}

	// Write other info in correct places affected from delivery changes
	function refreshOtherInfoFromDelivery(otherInfo) {
		var totalPrice 		= otherInfo.find('input[name="tx_precio_total"]').val(),
			shippingCosts 	= otherInfo.find('input[name="tx_gastos_envio"]').val(),
			paymentCosts	= otherInfo.find('input[name="tx_gastos_pago"]').val(),
			couponAmount	= otherInfo.find('input[name="tx_importe_cupon"]').val(),
			showNif 		= otherInfo.find('input[name="mostrar_nif"]').val();
		$('#totalText strong').text(totalPrice);
		$('#shippingTotal').text(shippingCosts);
		$('#paymentStepTotal').text(paymentCosts);
		$('#couponAmount').text(couponAmount);
		$('#couponAmount').text(couponAmount);
	}

	function validateCoupon() {
		$.ajax({
			url: '/includes/web/ajax/actualizar_cupon?cupon=' + $('#inputCoupon').val(),
			type: 'POST',
			success: function (data) {
				var info = jQuery.parseJSON(data);
				if ( info.error === 0 ) {
					$('#textAlertCouponOk').html(info.mensaje);
					$('#textAlertCouponOk').appendTo('<span id="couponAmount">'+info.total_actualizado+'</span>');
					$('#couponAlertOk').collapse('show');
					$('#couponAlertKo').collapse('hide');
				} else if ( info.error === 1 ) {
					$('#couponAlertOk').collapse('hide');
					$('#couponAlertKo').collapse('show');
				}
			}
		});
	}

	/**
	 * =================
	 * EVENTS
	 * =================
	 */

	// Refresh product tables when a finish is changed
	$('#productsPanel').on('change', '.finish-select', function() {
		getProductInfo($(this));		
	})

	$('#productsPanel').on('change', '.quantity-select', function() {
		getProductInfo($(this));
	})
	

	// get previous quantity for sendind value when a quantity changes
	$('#productsPanel').on('focusin', '.quantity-select', function() {
		$(this).data('prev-val',$(this).val());
	})

	// transform coupon input text to capital letters
	$('#inputCoupon').keyup(function(){
  		$(this).val( $(this).val().toUpperCase() );
	})

	// Validate coupon
	$('#couponForm button').on('click', function(e) {
		e.preventDefault();
		var validator = $('#couponForm').validate();
		if ( validator.form() == true ) {
			validateCoupon();
		}
	})

	//cancel coupon
	$('#cancelCoupon').on('click', function() {
		$.ajax({
			url: '/includes/web/ajax/actualizar_cupon?anular=si',
			type: 'POST',
			success: function (data) {
				if ( data.error === 0 ) {
					console.log(data);
					$('#productsStepTotal').html(data.total_actualizado);
					$('#couponAlertOk').collapse('hide');
				}
			}
		});
	})

	// Change price when a product quantity changes
	$('#productsPanel tr.item select[name="quantity"]').on('change', function() {
		refreshProductTotal();
	})

	// Show more fields if customer wants invoice
	$('#invoiceCheckbox').click(function() {
		if ( $(this).is(':checked') ) {
			$('#invoiceCollapse').collapse('show');
		} else {
			$('#invoiceCollapse').collapse('hide');
		}
	})
	
	// Show one more field if kind of customer is a company
	$('#selectCustomerKindInvoice').on('change', function() {
		if ( $(this).find('option:selected').val()=='empresa' ) {
			$('#companyNameInputGroup').collapse('show');
		} else {
			$('#companyNameInputGroup').collapse('hide');
		}
	})
	
	// Show more fields if invoice address is different than shipment address
	$('#addressCompanyCheckbox').click(function() {
		if ( $(this).is(':checked') ) {
			$('#addressCompany input, #addressCompany select').prop('required',true);
			$('#addressCompany').collapse('show');
		} else {
			$('#addressCompany input, #addressCompany select').prop('required',false);
			$('#addressCompany').collapse('hide');
		}
	})

	// Open step when click on 'edit' button
	$('.steps-accordion .panel-title .edit').click(function() {
		$('.steps-accordion .panel-collapse').collapse('hide');
		$(this).parent().parent().parent().parent().find('> .panel-collapse').collapse('show');
		setTimeout(function(){
			$('html, body').animate({scrollTop: $('#stepsAccordion').offset().top - 70}, 500);
		}, 500);
	})

	// Check if email is already registered
	$('#inputEmail').focusout(function() {
		if ( !$(this).val() == '' ) {
			checkregistered();
		}
	});

	// Open login tab if email is already registered from delivery details form
	$('#loginLink').click(function() {
		$('#loginTab').tab('show');
		$('#shippingDetailsContent').removeClass('active');
		$('#loginContent').addClass('active');
		$('#inputEmailLogin').val($('#inputEmail').val());
		$('#inputPasswordLogin').focus();
	})

	// Print cities related to postcode given
	$('#inputPostcode').focusout(function() {
		var postcode = $(this).val(),
			country = $('#inputCountry option:selected').attr('value'); // TO DO: ajax to get postcodes from any database
		getCities(postcode, country);
	})

	$('#inputChooseAddress').change(function() {
		chooseAddress($(this).val());
	})

	// Show selected payment method
	$('#paymentMethodForm input[type="radio"]').change(function() {
	  	$('#paymentMethodForm .collapse').collapse('hide');
	  	$('#paymentMethodForm input[type="radio"]').parent().parent().removeClass('active');
	  	if( this.checked ) {
	        $(this).parent().parent().find('.panel-collapse').collapse('show');
	        $(this).parent().parent().addClass('active');
	    }
	    var paymentTotal = $('#paymentStepTotal').text();
	    if ( $(this).is('#contraInput') ) {
			if ( paymentTotal.charAt(0) === '&' ) {
				$('#paymentStepTotal').html('&pound;5,00');
			} else {
				$('#paymentStepTotal').html('5,00€');
			}
	    } else {
			if ( paymentTotal.charAt(0) === '&' ) {
				$('#paymentStepTotal').html('&pound;0,00');
			} else {
				$('#paymentStepTotal').html('0,00€');
			}
	    }
	    refreshCheckoutTotal();
	})

	// Validate delivery details
	$('#deliveryDetailsForm .step-btn').on('click', function(e) {
		e.preventDefault();
		var validator = $('#deliveryDetailsForm').validate();
		if ( validator.form() == true ) {
			var currentStep = $('#deliveryDetailsPanel').find('.step-btn').attr('data-step');
			nextStep(currentStep);
		}
	})

	// Log in
	$('#loginForm').submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: '/includes/web/plugin_login_carrito',
			type: 'POST',
			data: 'e=' + $('#inputEmailLogin').val() + '&p=' + $('#inputPasswordLogin').val(),
			success: function (data) {
				// login ko
				if (data === 'login-ko') {
					$('#wrongLoginMsgCheckout').collapse('show');
				// login ok
				} else if ( !(data == 'email-ok' || data == 'email-ko') ) {
					$('#wrongLoginMsgCheckout').collapse('hide');
					$('#deliveryDetailsTab').tab('show');
					$('#loginContent').removeClass('active');
					$('#shippingDetailsContent').addClass('active');
					$('body').addClass('logged');
					blockLoginTab();
					getUserInfo(data);
				}
			}
		});
	})

	// Show or not passport input
	$('#inputPassport').focusout(function() {
		var validator = $(this).validate();
		if ( validator.form() == true ) {
			var nif = $('#inputPassport').val();
			console.log(nif);
			$('#inputNifInvoice').val(nif);
		}
	})

	// Validate products
	$('#productsPanel .step-btn').click(function(e) {
		e.preventDefault();
		var currentStep = $(this).attr('data-step');
		nextStep(currentStep);
	})

	// Validate coupon form
	$('#couponForm').submit(function(e) {
		e.preventDefault();
	})

	// Check if all forms are right to send and formalize checkout
	$('.confirm-button').click(function() {
		if ( checkAllForms() == true ) {
			window.location.href="confirmation.html"
		}
	})

	// Change card label
	$('#turnCardLabel').click(function() {
		if ( $('.credit-card .front').is(":visible") ) { // flip to rear card
			flipCreditCardRear();	
		} else { // flip to front card
			flipCreditCardFront();
		}
	})

	// Move focus between number card inputs
	$('.card-number-group input').keyup(function() {
		var value = $(this).val();
		if ( value.length > 3 ) {
			if ( $(this).is('#inputCardNumberBox4') ) {
				if ( !$('#inputCardMonth').val().length ) {
					$('#inputCardMonth').focus();
				}
			} else if ( !$(this).next($('input')).val().length ) {
				$(this).next($('input')).focus();
			}
		}
	})

	// Change focus from date inputs and decide when to check
	$('#creditCard input').keyup(function() {
		if ( $(this).parent().parent().is('.front') ) {
			if ( $(this).is('#inputCardNumberBox1') && ($(this).val().length == 2) ) { //check if is AMEX card
				if ( $(this).val()=='37' ) {
					$('#creditCard').addClass('amex');
				} else {
					$('#creditCard').removeClass('amex');
				}
			}
			if ( $(this).is('#inputCardMonth') && $(this).val().length > 1 && !$('#inputCardYear').val().length ) { // change focus to year input
				$('#inputCardYear').focus();
			}
			var filled = true; // check if everything is filled
			$.each($('#creditCard .front input'), function() {
				if ( !$(this).val().length || $(this).val().length<2 ) {
					filled = false;
				}
			});
			if ( filled === true ) { // check all front fields
				checkCreditCard();
			}
		} else {
			if ( $(this).val().length > 2 ) { // CVC check
				checkCvc();
			}
		}
	})

	$('#viewResumeButton').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.resume').offset().top - 70
		}, 500);
	})

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		// Check if user is logged to show user info
		var common = new LibCommon();
		if ( common.detectLogged() == true ) {
			blockLoginTab();
		}

		// Show nif if necessary
		var total = $('#totalText strong').text();
		total = total.replace(',','');
		total = total.replace('€','');
		total = total.replace('£','');
		total = parseInt(total);
		checkShowNif(total);

		// Init popover
		$('[data-toggle="popover"]').popover({
			trigger: 'hover',
			html: true
		});

		common.detectMobile();
    });

    return mCheckout;
});