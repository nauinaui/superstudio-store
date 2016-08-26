define(['./Base', '../libCommon', 'bootstrap'], function (Base, LibCommon, Bootstrap) {
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

    function showNif() {
    	$('#inputGroupPassport').collapse('hide');
    	$('#alertPassport').collapse('hide');
    }

	// Show tables with products on document ready (other maintain collapsed)
    function showTablesWithProducts() {
    	$('#productsPanel table').each(function() {
    		var time = $(this).attr('data-time-id');
    		if ( $(this).find('tr.item').length > 0 ) {
    			$(this).parent().collapse('show');
    			$('#productsPanel .table-header[data-time-id="'+time+'"]').collapse('show');
    		} else {
    			$(this).parent().collapse('hide');
    			$('#productsPanel .table-header[data-time-id="'+time+'"]').collapse('hide');
    		}
    	})
    	var count = 1;
    	$('#productsPanel .table-header[aria-expanded="true"').each(function() {
    		$(this).find('.subtitle span').html(count); // give shipment number for every table
    		count++;
    	})
    }

    // Change from partial delivery to a unique delivery
    function makeUniqueDelivery() {
		$('#productsPanel table tbody tr:not(.item)').remove(); //delete alerts
		$('#productsPanel table.main tbody').append($('#productsPanel table:not(main) tbody tr.item')); // move products from other tables to first table
		$('#productsPanel .table-header.main .delivery-time').removeClass('partial');
		$('#productsPanel .table-header.main .delivery-time em.unique').html( $('#productsPanel .table-header[aria-expanded="true"]:last .delivery-time em' ).html() ); // change delivery time getting time from last table
		$('#productsPanel table:not(.main)').parent().collapse('hide'); // hide all tables and table headers except main table
		$('#productsPanel .table-header:not(.main)').collapse('hide'); 
		$('#productsPanel .table-header.main .subtitle').hide(); // hide subtitle for main table
		$('#productsPanel table.main').parent().collapse('show');
		$('#productsPanel .table-header.main').collapse('show');
	}

	// Change from unique delivery to a partial delivery
	function makePartialDelivery() {
		$('#productsPanel table tbody tr:not(.item)').remove(); //delete alerts
		$('#productsPanel table tbody tr.item').each(function() {
			var time = $(this).find('option:selected').parent().attr('data-time-id'), // get time-id from every item
				currentTable = $('#productsPanel table[data-time-id="'+time+'"]'),
				currentHeader = $('#productsPanel .table-header[data-time-id="'+time+'"]');

			currentTable.append( $(this) ); // move element inside table with same time
		})
		$('#productsPanel .table-header.main .delivery-time').addClass('partial'); // show correct delivery time for main table
		$('#productsPanel .table-header.main .subtitle').show(); // show shipment number for main table
		showTablesWithProducts();
	}

	// Refresh product total price
	function refreshProductTotal() {
		var total = 0,
			isPound = false;
		
		$('#productsPanel .product-total').each(function() {
			var productTotal = $(this).text();
			if ( productTotal.charAt(0) === '&' ) {
				productTotal = productTotal.replace('&pound;','');
				isPound = true;
			} else {
				productTotal = productTotal.replace('€','');
			}
			productTotal = productTotal.replace('.','');
			productTotal = parseFloat(productTotal.replace(',', '.'));
			productTotal = parseFloat(productTotal.toFixed(2));
			total = parseFloat(total + productTotal);
		})
		total = total.toFixed(2);
		total = total.toString();
		total = total.replace('.',',');
		if ( isPound == true ) {
			$('#productsStepTotal').html('&pound;'+total);
		} else {
			$('#productsStepTotal').html(total+'€');
		}
		refreshCheckoutTotal();
	}

	// Refresh total price
	function refreshCheckoutTotal() {
		var productsTotal = $('#productsStepTotal').text(),
			paymentTotal = $('#paymentStepTotal').text(),
			isPound = false,
			total = 0;
		if ( productsTotal.charAt(0) === '&' ) {
			productsTotal = productsTotal.replace('&pound;','');
			paymentTotal = paymentTotal.replace('&pound;','');
			isPound = true;
		} else {
			productsTotal = productsTotal.replace('€','');
			paymentTotal = paymentTotal.replace('€','');
		}
		productsTotal = productsTotal.replace('.','');
		productsTotal = parseFloat(productsTotal.replace(',', '.'));
		productsTotal = parseFloat(productsTotal.toFixed(2));
		paymentTotal = paymentTotal.replace('.','');
		paymentTotal = parseFloat(paymentTotal.replace(',', '.'));
		paymentTotal = parseFloat(paymentTotal.toFixed(2));
		total = productsTotal + paymentTotal;
		total.toFixed(2);
		checkShowNif(total);
		total = total.toString();
		total = total.replace('.',',');
		if ( isPound == true ) {
			$('#lastStep .total strong').html('&pound;'+total);
			$('.resume tr.total td strong').html('&pound;'+total);
		} else {
			$('#lastStep .total strong').html(total+'€');
			$('.resume tr.total td strong').html(total+'€');
		}
	}

	//Check show nif
	function checkShowNif(total) {
		if ( total>400 ) {
			$('#inputGroupPassport').collapse('show');
		} else {
			$('#inputGroupPassport').collapse('hide');
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

	/**
	 * =================
	 * EVENTS
	 * =================
	 */

	// Change from partial delivery to a unique delivery
	$('input[name="deliveryType"]').on('change', function() {
		if ( $('#deliveryType2').is(':checked') ) {
			makeUniqueDelivery();
		} else if ( $('#deliveryType1').is(':checked') ) {
			makePartialDelivery();
		}
	});

	// Refresh product tables when a finish is changed
	$('#productsPanel tr.item select[name="finish"]').on('change', function() {
		var time = $(this).find('option:selected').parent().attr('data-time-id'),
			tableTime = $('#productsPanel .table-header.main').attr('data-time-id');

		if ( $('#deliveryType2').is(':checked') ) {
			makeUniqueDelivery();
			$('#productsPanel tr.item').each(function() {
				if ( $(this).find('select[name="finish"] option:selected').parent().attr('data-time-id') > tableTime ) {
					tableTime = $(this).find('select[name="finish"] option:selected').parent().attr('data-time-id');
				}
			})
			$('#productsPanel .table-header.main .delivery-time em.unique').html( $('#productsPanel .table-header[data-time-id="'+tableTime+'"] .delivery-time em' ).html() );
		} else if ( $('#deliveryType1').is(':checked') ) {
			makePartialDelivery();
		}
	})

	// Change price when a product quantity changes
	$('#productsPanel tr.item select[name="quantity"]').on('change', function() {
		var qty = $(this).val(),
			pricePerUnit = $(this).parent().parent().find('.last-price').text();
			total = 0,
			isPound = false;

		if ( pricePerUnit.charAt(0) === '&' ) {
			pricePerUnit = pricePerUnit.replace('&pound;','');
			isPound = true;
		} else {
			pricePerUnit = pricePerUnit.replace('€','');
		}
		pricePerUnit = parseFloat(pricePerUnit.replace(',', '.'));
		total = (pricePerUnit * qty).toFixed(2);
		total = total.replace('.',',');

		if ( isPound == true ) {
			$(this).parent().parent().find('.product-total').html('&pound;'+total);
		} else {
			$(this).parent().parent().find('.product-total').html(total+'€');
		}

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
		checkregistered();
	});

	// Open login tab if email is already registered from delivery details form
	$('#loginLink').click(function() {
		$('#loginTab').tab('show');
		$('#shippingDetailsContent').removeClass('active');
		$('#loginContent').addClass('active');
		$('#inputEmailLogin').val($('#inputEmail').val());
		$('#inputPasswordLogin').focus();
	})

	// Print cities related to zipcode given
	$('#inputPostcode').focusout(function() {
		var zipcode = $(this).val(),
			country = $('#inputCountry option:selected').attr('value'); // TO DO: ajax to get zipcodes from any database
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
				if (data !== '') {
					$('#wrongPassLoginMsg').collapse('show');
					$('#inputPasswordLogin').focus();

					if (data == 'login-ok') {
						$('#wrongPassLoginMsg').collapse('hide');
						$('#deliveryDetailsTab').tab('show');
						$('#logincontent').removeClass('active');
						$('#shippingDetailsContent').addClass('active');
					}
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
		// Show tables with products
		showTablesWithProducts();

		// Check if nif field has to be shown through calculating total value
		refreshCheckoutTotal();

		// Init popover
		$('[data-toggle="popover"]').popover({
			trigger: 'hover',
			html: true
		});

		var common = new LibCommon();
		common.detectMobile();
    });

    return mCheckout;
});