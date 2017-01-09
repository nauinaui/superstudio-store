//generic JS for all views

// Get current language
var domain = document.domain;
var lang = '';
domain = domain.split('.');

switch(domain[2]) {
    case 'com':
        lang = 'ES';
        break;
    case 'co':
    	lang = 'EN';
    	break;
    case 'de':
    	lang = 'DE';
    	break;
    case 'fr':
        lang = 'FR';
        break;
    case 'pt':
        lang = 'PT';
        break;
    case 'nl':
        lang = 'NL';
        break;
    case 'it':
        lang = 'IT';
        break;
    case 'pl':
        lang = 'PL';
        break;
    default:
        lang = 'ES';
}

define(['jquery', 'bootstrap', './libCommon.js', 'modernizr', 'placeholder', 'validate', 'validate'+lang], function ($, Bootstrap, LibCommon, Modernizr, Placeholder, Validate, ValidateLang) {
	
	var common = new LibCommon();
	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */
	$( document ).ready(function() {
		console.log('initialized all common events');

		// Load images (Lazy loading)
		common.loadImages();

		// Page view always starting from top
		$(this).scrollTop(0);

		// Fixed header	 
		var stickyNavTop = $('.topmenu').offset().top;
		common.fixedNav(stickyNavTop);
		$(window).scroll(function() {
		    common.fixedNav(stickyNavTop);
		});

		// Refresh products number in cart
		common.loadCart();

		// Show cookies alert if user has not close cookies alert before
		if ( !common.readCookie('cookies-accepted') == true ) {
			$('#cookiesAlert').collapse('show');
		}
		
		// Hide super promo alert if user has closed cookies alert before
		if ( common.readCookie('cookies-superpromo-closed') == 'true' ) {
			$('#superPromosAlert').addClass('unshow');
		}

		// If device is mobile, show product grid in hover position
		if ( common.detectMobile() == true ) {
			$('.producto-box:not(.promo) .item').addClass('show mobile');
		}

		// product's grid - auto select finish when there is only one
		common.autoSelectFinish();

		// Change 'CAS' to 'ES' language in topbar language selection
		if ( $('#languageDropdown').text()=='CAS ' ) {
			$('#languageDropdown').html('ES <span class="caret"></span>');
		}
		
		// Placeholder effect for IE9 and older
	    var ua 	= window.navigator.userAgent,
    		msie= ua.indexOf("MSIE ");
	    if ( msie > 0 && msie < 10 ) { // If Internet Explorer, and if IE is 9 or older
	        $('input, textarea').placeholder();
	    }

	    // Detect current url to write value to origin parameter for login redirect
	    var path = window.location.pathname;
	    $('#loginForm #origen').val(path);

		// Form validation for non HTML5 browsers
		$( "form" ).each( function() {
			$(this).validate();
		});
	});

	/**
	 * =================
	 * DOM EVENTS
	 * =================
	 */

	// Header - Reposicionar el submenú según el espacio en pantalla
	$('.menu-subcategorias li').hover(function() {
		var position = $(this).position();
		var spaceDerecha = $(window).width() - position.left;
		var spaceIzquierda = position.left;
		var submenu = $(this).find('.submenu');
		var ancho = submenu.width();

		if ( spaceDerecha > ancho ) {
			submenu.css('left','0');
			submenu.css('right','auto');
		} else if ( spaceIzquierda > ancho ) {
			submenu.css('left','auto');
			submenu.css('right','0');
		} else {
			submenu.css('left', '-'+spaceIzquierda+'px');
			submenu.css('right','auto');
		};
	});

	// Header - Abrir submenú al hacer click en versión movil
	$('#menuSubcategorias > li a .text').on('click', function(e) {
		if ( $(window).width() < 768 ) {
			e.preventDefault();
			e.stopPropagation();
			$(this).parent().parent().find('.submenu').toggle();
		}
	});

	// Header - Show featured product for each subcategory when hover
	$('.submenu a.item').mouseenter(function() {
		var genericTitle = $(this).parent().parent().find('.promo-menu .promo-title').text();
		var genericDesc = $(this).parent().parent().find('.promo-menu .promo-description').text();
		var genericImage = $(this).parent().parent().find('.promo-menu .promo-image img').attr('src');
		var genericLink = $(this).parent().parent().find('.promo-menu').attr('href');
		var featureTitle = $(this).attr('data-feature-title');
		var featureDesc = $(this).attr('data-feature-desc');
		var featureImage = $(this).attr('data-feature-img');
		var featureLink = $(this).attr('data-feature-link');
		$(this).parent().parent().find('.promo-menu').attr('href', featureLink);
		$(this).parent().parent().find('.promo-menu .promo-title').text(featureTitle);
		$(this).parent().parent().find('.promo-menu .promo-description').text(featureDesc);
		$(this).parent().parent().find('.promo-menu .promo-image img').attr('src', featureImage);
		$(this).parent().parent().find('.promo-menu').css( 'opacity', '1' );
	});

	// Search form - Validate before sending request
	$('#searchSubmitBtn').on('click', function() {
		$('#searchForm').validate();	
	})

	// Product's grid - Show more info in product box's bottom while mouseover
	$('.products-list').on('mouseenter', '.producto-box:not(.promo) > .content', function() {
		if ( common.detectMobile() == false ) {
			$(this).find('.item').addClass('show');
		}
	});
	$('.products-list').on('mouseleave', '.producto-box:not(.promo) > .content', function() {
		if ( common.detectMobile() == false ) {
			$(this).find('.item').removeClass('show');
		}
	});

	// Product's grid - Change image for selected finished image
	$('.products-list').on('change', '.producto-box .acabados input[type="radio"]', function() {
		var finishID 	= $(this).attr('data-finish'),
			productRef	= $(this).closest('.content').find('.item').attr('data-product-ref'),
			place 		= 'grid';
		common.changeFinishImage(finishID, productRef, place);
	});

	// Product's grid - Add to cart from product's grid
	$('.products-list').on('click', '.add-product-form .btn.add-to-cart', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var validator = $(this).closest('form').validate();
		if ( validator.form() == true ) {
			
			// prepare info for creating query for ajax
			var objectItem	= $(this).closest('.content').find('.item');
			var product_id 	= objectItem.attr('data-product-id'),
				quantity	= 1,
				finish 		= $(this).parent().find('.acabados input[type="radio"]:checked').attr('data-finish'),
				type		= "product";
				finishList 	= $('.finishes:not(.collapse)'),
				ok 			= true,
				isDetail	= false;

			// create query for ajax depending of product type
			if ( objectItem.is('.pack') ) {
				type='pack';
				var query = '&id='+product_id+'&cantidad=' + quantity + '&color=&colores=' + finish + '&acabado=&opcion=';
			} else if ( objectItem.is('.outlet') ) {
				type='outlet';
			} else {
				type ='product';
				var query = '&cantidad=' + quantity + '&color=' + finish + '&acabado=&opcion=';
			}

			// Send product info to cart
			common.addProductToCart(product_id, query, type, isDetail);
		} else {
			//move error label to a correct place for greater visual effect
			$(this).closest('.producto-box').find('label.error').insertAfter($(this).closest('.producto-box .add-to-cart'));
		}
	})

	// Product's grid - Close 'add to product' alert
	$('#addedToCartFeedback, #addedToCartErrorFeedback').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('body').append($('#addedToCartFeedback'));
		$('body').append($('#addedToCartErrorFeedback'));
	})

	// Delete product from cart (all from same product)
	$('#myCart').on('click', '.delete-product-from-cart-btn', function() {
		common.deleteAllProductFromCart( $(this).parent().parent().attr('data-relation-id') );
	})

	// Cart - Add one more products (already added in cart)
	$('#myCart').on('click', '.btn.more', function() {
		var item = $(this).closest('.item.media');
			relationID = item.attr('data-relation-id'),
			query = '&idrelacion=' + relationID;
		
		common.blockUI();

		$.ajax({
			url: '/includes/web/plugin_accion_carrito?accion=mas1' + query,
			success: function (data) {
				common.unblockUI();
				common.loadCart();
			},
		});
	});

	// Cart - Delete one less product from cart (already added in cart)
	$('#myCart').on('click', '.btn.less', function() {
		var item = $(this).closest('.item.media');
			relationID = item.attr('data-relation-id'),
			query = '&idrelacion=' + relationID;
		
		common.blockUI();

		$.ajax({
			url: '/includes/web/plugin_accion_carrito?accion=menos1' + query,
			success: function (data) {
				common.unblockUI();
				common.loadCart();
			},
		});
	});

	// Cart - Open cart and show all products
	$('#cartBtn').on('click', function() {
		common.loadCart();
	});

	// Cart - Add dark layer when cart is opened and remove it when cart is closed
	$('.dark-layer').on('click', function() {
		$('#myCart').collapse('hide');
		$('#subscribeNewsletter').removeClass('show');
		$('#contactFormContent').removeClass('show');
	});

	// Subscribing to newslettter
	$('#newsletterForm .subscribe-btn, #footerNewsletterForm .btn').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();

		var validator = $(this).closest('form').validate();
		if ( validator.form() == true ) {
			$('#newsletterForm .form-group, #footerNewsletterForm .input-group').removeClass('has-error');
			$('.help-block').addClass('hidden');

			var url = '/newsletter';

			common.blockUI();
			$.ajax({
				url: url,
				type: 'post',
				data: $(this).closest('form').serialize(),
				success: function(data) {
					common.unblockUI();
					if (data === 'enviado') {
						$('#step1').fadeOut('fast', function(){
							$('#step2').fadeIn('fast');
						});
					} else {
						if (data === 'noindicado') {
							$('#helpBlockEmpty').removeClass('hidden');
						} else if (data === 'yaexiste') {
							$('#helpBlockExist').removeClass('hidden');
						} else {
							$('#helpBlockError').removeClass('hidden');
						}
						$('#newsletterForm .form-group, #footerNewsletterForm .input-group').addClass('has-error');
					}
				}
			});
			return false;
		}
	});	

	// Hide subscribe to newsletter lateral content
	$('#SubscribeNewsletterCloseButton, .dark-layer, #alreadySubscribedButton, #closeWindowButton').on('click', function() {
		if ( $('#subscribeNewsletter').is('.show') ) {
			$('#subscribeNewsletter').removeClass('show');
			$('#subscribeNewsletter .coupon-image').removeClass('animated tada');
			$('body').removeClass('block-content');
		}
		// create cookie to avoid open again
		var name 	= 'email-subscription',
			value 	= true,
			days 	= 1;
		common.createCookie(name, value, days);
	});

	// Scroll to top button
    $(window).scroll(function() {
    	if ($(this).scrollTop() >= 100) {
	        $('#scrollToTopBtn').fadeIn(200);
	    } else {
	        $('#scrollToTopBtn').fadeOut(200);
	    }
	});
	$('#scrollToTopBtn').click(function() {
	    $('body,html').animate({
	        scrollTop : 0
	    }, 500);
	});

	// Super promo alert position under page footer when scrolled to bottom
	$(window).scroll(function() {
   		if( $(window).scrollTop() + $(window).height() == $(document).height() ) {
			$('#superPromosAlert').addClass('in-bottom animated fadeOutDown');
		} else {
			$('#superPromosAlert').removeClass('in-bottom animated fadeOutDown');
		}
	});

	// Close super promos alert
	$('#hidingAlertButton').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#superPromosAlert').addClass('unshow');
		var name 	= 'cookies-superpromo-closed',
			value 	= true,
			days 	= 30;
		common.createCookie(name, value, days);
	});

	// Close cookies alert
	$('#closeCookiesAlertButton').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#cookiesAlert').collapse('hide');
		var name 	= 'cookies-accepted',
			value 	= true,
			days 	= 30;
		common.createCookie(name, value, days);
	});
});