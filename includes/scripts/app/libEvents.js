//generic JS for all views
define(['jquery', 'bootstrap', './libCommon'], function ($, Bootstrap, LibCommon) {


	var common = new LibCommon();
	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */
	$( document ).ready(function() {
		console.log('initialized all common events');

		var common = new LibCommon();

		// Fixed header	 
		var stickyNavTop = $('.topmenu').offset().top;
		common.fixedNav(stickyNavTop);
		
		$(window).scroll(function() {
		    common.fixedNav(stickyNavTop);
		});

		// Block UI when AJAX is active
		$(document).ajaxStart( function() {
			$('#preloader').show();
		});
		$(document).ajaxStop( function() {
			$('#preloader').hide();
		});

		// If device is mobile, show product grid in hover position
		if ( common.detectMobile() == true ) {
			$('.producto-box:not(.promo) .item').addClass('show mobile');
		}
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

	// Product's grid - Show more info in product box's bottom while mouseover
	$('.producto-box:not(.promo) > .content').mouseover(function() {
		if ( common.detectMobile() == false ) {
			$(this).find('.item').addClass('show');
		}
	});
	$('.producto-box:not(.promo) > .content').mouseout(function() {
		if ( common.detectMobile() == false ) {
			$(this).find('.item').removeClass('show');
		}
	});

	// Delete product from cart (all from same product)
	$('.deleteProductFromCartBtn').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		common.deleteAllProductFromCart( $(this).parent().parent().attr('rel') );
	})

	// Cart - Add one more product (already added in cart)
	$('#myCart .item .btn.more').on('click', function () {
		var product = $(this).parent().parent();
		var qty = 1;
		var varianteColor = product.data('color');
		var varianteAcabado = product.data('finish');
		var varianteOpcion = product.data('option');
		var tipo = product.data('type');
		var id_producto = product.attr('rel');
		var opciones = '&cantidad=' + qty + '&color=' + varianteColor + '&acabado=' + varianteAcabado + '&opcion=' + varianteOpcion;

		common.addProductToCart(id_producto, opciones, tipo);
	});

	// Cart - Delete one product (already added in cart)
	$('#myCart .item .btn.less').on('click', function () {
		var product = $(this).parent().parent();
		var qty = -1;
		var varianteColor = product.data('color');
		var varianteAcabado = product.data('finish');
		var varianteOpcion = product.data('option');
		var tipo = product.data('type');
		var id_producto = product.attr('rel');
		var opciones = '&cantidad=' + qty + '&color=' + varianteColor + '&acabado=' + varianteAcabado + '&opcion=' + varianteOpcion;

		common.deleteProductFromCart(id_producto, opciones, tipo);
	});

	// Subscribing to newslettter
	$('#newsletterForm, #footerNewsletterForm').on('submit', function(e){
		e.preventDefault();
		e.stopPropagation();

		$('#newsletterForm .form-group, #footerNewsletterForm .input-group').removeClass('has-error');
		$('.help-block').addClass('hidden');

		var url = 'https://intranet.superestudio.com/newsletter';
		$.ajax({
			url: url,
			type: 'post',
			data: $(this).serialize(),
			success: function(data) {
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
	});	

	// Hide lateral contact form -newsletter-
	$('#SubscribeNewsletterCloseButton, .dark-layer, #alreadySubscribedButton, #closeWindowButton').on('click', function() {
		$('#subscribeNewsletter').removeClass('show');
		$('body').removeClass('block-content');
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

});