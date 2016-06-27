define(['./Base', 'bootstrap', 'countdown'], function (Base, Bootstrap, Countdown) {
    var mDefault = new Base('This is the data for Page Detail');
    var isMobile = false;

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

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		startCountdown();

		// Device detection
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

		console.log('is mobile: '+isMobile);

		// Stop auto play carousel
		$('.carousel').carousel({
		  interval: false
		})
    });

    return mDefault;
});