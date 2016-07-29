//generic JS for all views
define(['jquery', 'bootstrap', './libCommon'], function ($, Bootstrap, LibCommon) {


	var libCommon = new LibCommon();
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
		$(this).find('.item').addClass('show');
	});
	$('.producto-box:not(.promo) > .content').mouseout(function() {
		$(this).find('.item').removeClass('show');
	});

	// Delete product from cart (all from same product)
	$('.deleteProductFromCartBtn').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		deleteAllProductFromCart( $(this).parent().parent().attr('rel') );
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

		addProductToCart(id_producto, opciones, tipo);
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

		LibCommon.deleteProductFromCart(id_producto, opciones, tipo);
	});

	// Subscribing to newslettter
	$('#newsletterForm').on('submit', function(){	
		$('#existingEmailError').hide();
		$('#emailInput').parent().removeClass('has-error', 'has-feedback');
		var url = $(this).attr('action');
		console.log($('#emailInput').val());
		$.ajax({
			url: url,
			type: 'post',
			data: $('#emailInput').val(),
			success: function(data) {
				console.log('ajax success');
				if (data === 'enviado') {
					console.log('data enviado ok');
					$('#step1').fadeOut('fast', function(){
						$('#step2').fadeIn('fast');
					});
				} else {
					console.log('data no enviado');
					if (data === 'noindicado') {
						console.log('no indicado');
						$('.noindicado').show();
					} else if (data === 'yaexiste') {
						console.log('ja existeix');
						$('.yaexiste').show();
					} else {
						console.log('erroni');
						$('.erroneo').show();
					}
				}
			}
		});
		return false;
	});
});