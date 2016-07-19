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

	/**
	 * =================
	 * EVENTS
	 * =================
	 */
	
	// Payment method - Give value to hidden input when a payment option is selected
	$('#collapsePaymentMethod').on('shown.bs.collapse', function () {
		var value = $('#collapsePaymentMethod .panel-collapse.collapse.in').attr('data-value');
		$('#paymentMethodInput').val(value);	
		console.log($('#paymentMethodInput').val());
		if ( $('#collapsePaymentMethod #collapseCod.collapse.in').length > 0 ) {
			refreshFooterTotal('paymentMethod');
		}
	})
	// Payment method - Delete value to hidden input when a payment option is diselected
	$('#collapsePaymentMethod').on('hidden.bs.collapse', function () {
		$('#paymentMethodInput').val('');
		console.log($('#paymentMethodInput').val());
	})

	// Show more fields if customer wants invoice
	$('#invoiceCheckobox').click(function() {
		if ( $(this).is(':checked') ) {
			$('#invoiceCollapse').collapse('show');
		} else {
			$('#invoiceCollapse').collapse('hide');
		}
	})
	
	$('#customerKindSelect').on('change', function() {
		if ( $(this).find('option:selected').val()=='empresa' ) {
			$('#companyNameInput').collapse('show');
		} else {
			$('#companyNameInput').collapse('hide');
		}
	})
	
	$('#addressCompanyCheckbox').click(function() {
		if ( $(this).is(':checked') ) {
			$('#addressCompany').collapse('show');
		} else {
			$('#addressCompany').collapse('hide');
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