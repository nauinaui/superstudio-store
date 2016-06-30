define(['./Base', 'bootstrap', 'countdown', '../lib'], function (Base, Bootstrap, Countdown, Lib) {
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
			date: "June 30, 2016 15:03:26",
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
	 * =================
	 * EVENTS
	 * =================
	 */

	// Detail page - Show large image when clicking on secundary images thummbnails
	$('.more-images img[data-target="#largeImageModal"]').on('click', function(e) {
		if (isMobile == false) {
			var source = $(this).attr('src');
			$('#largeImageModal .modal-content img').attr('src',source);
		} else {
			e.preventDefault();
			e.stopPropagation();
			$('#largeImageModal').modal({show: false});
		}
	});

	// Detail page - Show secundary image in main image content when hover in a thumbnail
	$('.more-images img').mouseover(function() {
		$('#mainImage').attr('src',$(this).attr('src'));
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
		var price = $('#productPrice').text();
		console.log(price);
		price = Number(price.replace(/[^0-9\.]+/g,""));
		price = price / 100;
		$('#unitsPrice').text( $('#unitsSelect').val() * price + '€');
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
		startCountdown();

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