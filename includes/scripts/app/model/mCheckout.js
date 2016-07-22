define(['./Base', 'bootstrap', 'skeuocard'], function (Base, Bootstrap, Skeuocard) {
    var mCheckout = new Base('This is the data for Page Checkout');

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */
	function getCityState(results) {
        var a = results[0].address_components;
        var city, state;
        for(i = 0; i <  a.length; ++i)
        {
           var t = a[i].types;
           if(compIsType(t, 'administrative_area_level_1'))
              state = a[i].long_name; //store the state
           else if(compIsType(t, 'locality'))
              city = a[i].long_name; //store the city
        }
        return (city + ', ' + state)
    }

	function compIsType(t, s) { 
       for(z = 0; z < t.length; ++z) 
          if(t[z] == s)
             return true;
       return false;
    }

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
		  	$('html, body').animate({scrollTop: nextStep.offset().top - 130}, 500);
		}, 500);
    }

    // AJAX - Check if email is already registered
    function checkregistered() {
		$.ajax({
			url: '/includes/web/plugin_login_carrito',
			type: 'POST',
			data: 'e=' + $('#envio_email').val() + '&p=' + $('#pass_cliente').val(),
			success: function (data) {
				if (data !== '') {
					$('input[name="envio_email"]').after(data).slideDown('fast');
					$('#pass_cliente').focus();
				}
			}
		});
    }

    // Check all forms
    function checkAllForms() {
		//check delivery details form
		if ( $('#deliveryDetailsForm')[0].checkValidity() ) {
			$('#collapseDeliveryDetails').collapse('hide');
			//check payment method form
			if ( $('#paymentMethodForm')[0].checkValidity() ) {
				$('#collapsePaymentMethod').collapse('hide');
				//check invoice form
				if ( $('#invoiceCheckbox').is(':checked') ) {
					if ( $('#invoiceForm')[0].checkValidity() ) {
						return true; // confirm order
					} else {
						$('#invoiceCollapse').collapse('show');
						$('#invoiceForm').find(':submit').click()
					}
				} else {
					return true; // confirm order
				}
			} else {
				$('#collapsePaymentMethod').collapse('show');
				$('#paymentMethodForm').find(':submit').click()
			}
		} else {
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
	
	// // Payment method - Give value to hidden input when a payment option is selected
	// $('#collapsePaymentMethod').on('shown.bs.collapse', function () {
	// 	var value = $('#collapsePaymentMethod .panel-collapse.collapse.in').attr('data-value');
	// 	$('#paymentMethodInput').val(value);	
	// 	console.log($('#paymentMethodInput').val());
	// 	if ( $('#collapsePaymentMethod #collapseCod.collapse.in').length > 0 ) {
	// 		refreshFooterTotal('paymentMethod');
	// 	}
	// })
	// // Payment method - Delete value to hidden input when a payment option is diselected
	// $('#collapsePaymentMethod').on('hidden.bs.collapse', function () {
	// 	$('#paymentMethodInput').val('');
	// 	console.log($('#paymentMethodInput').val());
	// })

	// Show more fields if customer wants invoice
	$('#invoiceCheckbox').click(function() {
		if ( $(this).is(':checked') ) {
			$('#invoiceCollapse').collapse('show');
		} else {
			$('#invoiceCollapse').collapse('hide');
		}
	})
	
	// Show one more field if kind of customer is a company
	$('#customerKindSelect').on('change', function() {
		if ( $(this).find('option:selected').val()=='empresa' ) {
			$('#companyNameInput').collapse('show');
		} else {
			$('#companyNameInput').collapse('hide');
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
		var toScroll = $(this).closest('.panel-heading');
		$('.steps-accordion .panel-collapse').collapse('hide');
		$(this).parent().parent().parent().parent().find('> .panel-collapse').collapse('show');
		setTimeout(function(){
			$('html, body').animate({scrollTop: toScroll.offset().top - 75}, 500);
		}, 500);
	})

	// Check if email is already registered
	$('#inputEmail').focusout(function() {
		checkregistered();
	})

	// Simulate click to submit button of delivery details or login form when click on next button
	$('#deliveryDetailsPanel .step-btn').click(function() {
		if ( $('#deliveryDetailsTab').is('.active') ) {
			$('#deliveryDetailsForm button[type="submit"]').trigger('click');
		} else {
			$('#loginForm button[type="submit"]').trigger('click');
		}
	})

	$('#productsPanel .step-btn').click(function(e) {
		e.preventDefault();
		var currentStep = $(this).attr('data-step');
		nextStep(currentStep);
	})

	$('#paymentMethodPanel .step-btn').click(function() {
		$('#paymentMethodForm button[type="submit"]').trigger('click');
	})

	$('#paymentMethodForm input[type="radio"]').change(function() {
	  	$('#paymentMethodForm .collapse').collapse('hide');
	  	if(this.checked) {
	        $(this).parent().parent().find('.collapse').collapse('show');
	    }
	})

	// Validate
	$('#deliveryDetailsForm').submit(function(e) {
		e.preventDefault();
		var currentStep = $('#deliveryDetailsPanel').find('.step-btn').attr('data-step');
		nextStep(currentStep);
	})

	$('#paymentMethodForm').submit(function(e) {
		e.preventDefault();
		var currentStep = $('#paymentMethodPanel').find('.step-btn').attr('data-step');
		nextStep(currentStep);
	})

	$('#couponForm').submit(function(e) {
		e.preventDefault();

	})

	// Check if all forms are right to send and formalize checkout
	$('.confirm-button').click(function() {
		if ( checkAllForms() == true ) {
			window.location.href="confirmation.html"
		}
	})

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		// Init popover
		$('[data-toggle="popover"]').popover({
			trigger: 'hover',
			html: true
		});
    });

    return mCheckout;
});