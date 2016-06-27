
var Superestudio = (function () {




	/**
	 * =================
	 * VARIABLES
	 * =================
	 */
	const $menu = $('#menu');
	const $showMenu = $('#showMenu');
	const $showSubmenu = $('.category.sub');
	const $submenu = $('.submenu');
	const $showMenuMobile = $('#showMenuMobile');
	const $showFranjaHoraria = $('.showFranjaHoraria');
	const $toggleHeight = $('.toggleHeight');
	const $spin = $('#spin');

	const currentPage = document.currentScript.getAttribute('data-page');

	const $categoryName = $('.menu-subcategorias li');



	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */

	/**
	 * Submenu (ocultar)
	 */
	function hideSubmenu() {
		$submenu.removeClass('show');
	}
	/**
	 * Submenu (mostrar)
	 * @param tipo:String Para indicar qué submenu abrir
	 */
	function toggleSubmenu(tipo) {
		const $tipoSubmenu = $('#'+tipo);
		hideSubmenu();
		if (!$tipoSubmenu.hasClass('show')) {
			$tipoSubmenu.addClass('show');
		} else {
			$tipoSubmenu.removeClass('show');
		}
	}


	/**
	 * Menu categorías (toggle)
	 */
	function toggleMenu() {
		if (!$menu.hasClass('show')) {
			$menu.addClass('show');
			$menu.on('mouseleave', function(){
				hideSubmenu();
				$menu.removeClass('show');
			});
		} else {
			$menu.removeClass('show');
		}
	}


	/**
	 * Funcionalidad 'ver más' y 'ver menos'
	 * @param el:String Elemento que mostraremos y ocultaremos
	 * @param action:String Indica si muestra u oculta
	 */
	function toggleHeight(el, action) {
		var $element = $('#' + el);
		if (action === 'show') {
			const heightnow = $element.height();
			const heightfull = $element.css({height: 'auto'}).height();
			$element.css({height: heightnow}).transition({
				height: heightfull + 80
			}, 500, 'in-out');
		} else {
			if ( el == 'seoText' ) {
				$element.transition({
					height: 120
				}, 500, 'in-out');			
			} else {
				$element.transition({
					height: 270
				}, 500, 'in-out');	
			}

		}
	}

	/**
	 * Añade 'fixed' a la cabecera al hacer scroll
	 * @param scroll:Int Tamaño del scroll necesario
	 */
	function fixedNav(stickyNavTop) {
		var scrollTop = $(window).scrollTop();
		if ( $(window).width() > 767 ) {		      
			if (scrollTop > stickyNavTop) { 
			    $('.topmenu').addClass('fixed');
			} else {
			    $('.topmenu').removeClass('fixed'); 
			}
		}
	}

	/**
	 * SpinJS Precarga (mostrar)
	 */
	function showLoading() {
		$spin.fadeIn('fast').spin('large', '#fff');
	}

	/**
	 * SpinJS Precarga (ocultar)
	 */
	function hideLoading() {
		$spin.fadeOut('fast').spin(false);
	}

	/**
	 * Show active filter in top of filter box
	 * @param option:String Selected option to show
	 * @param option:String Option value as identifier
	 */
	function enableFilter(option, value) {
		
		$('#filtroInfo').hide();
		if ( value == "price" && $('.resultados').find('.active-filter#price').length > 0 ) {
			$('.resultados').find('#price span.text').remove();
			$('.resultados').find('#price').append('<span class="text">'+option+'</span>');
		} else {
			$('.resultados').find('.active-filter:not([id])').first().attr('id', value);
			$('.resultados').find('.active-filter#'+value).addClass('active');
			$('.resultados').find('.active-filter#'+value).append('<span class="text">'+option+'</span>');
			$('.resultados').append($('#'+value));
		}
		if ( value == "price" ) {
			$('.resultados').find('#price span.text').append('€');
		}
	}
	
	/**
	 * Show active filter in top of filter box
	 * @param option:String Selected option to hide
	 */
	function disableFilter(option, value) {
		$('.resultados').find('#'+value).removeClass('active');
		$('.resultados #'+value+' span.text').remove();
		$('.resultados').find('#'+value).removeAttr('id');
		
		if ( $('.resultados').find('.active-filter.active').length == 0 ) {
			$('#filtroInfo').show();
		}
		if ( $('input[value="'+value+'"]').is(':checked') ) {
			$('input[value="'+value+'"]').attr('checked', false);
		}
		if ( value == "price" ) {
			$('#priceRange').data('slider').refresh();
		}
	}

	/**
	 * Refresh selected item in cross selling slider
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
	 * Show alert for 3 seconds and hide again
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
	 * Collapse other information and show cross selling section with a scrolling effect
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
	 * Refresh cart number of items after adding one
	 */
	function refreshCartNumber() {
		var item = parseInt($('#cartItemsNumber').text(), 10);
		item = item + 1;
		$('#cartItemsNumber').text(item);
		$('#cartItemsNumber').addClass('animated rubberBand');
		setTimeout(function(){
			$('#cartItemsNumber').removeClass('animated rubberBand');
		}, 2000);
	}

	/**
	 * Move alert to the end of document
	 */
	function closeFeedbackAlert() {
		$('#addedToCartFeedback').css('opacity','0');
		setTimeout(function(){
			$('#addedToCartFeedback').appendTo('body');
			$('#addedToCartFeedback').css('opacity','1');
		}, 500);
	}


	/**
	 * =================
	 * DOM EVENTS
	 * =================
	 */

	$toggleHeight.on('click', function() {
		toggleHeight(this.getAttribute('data-element'), this.getAttribute('data-action'));
		$(this).parent().find('.hide').toggleClass('hide');
		$(this).toggleClass('hide');
	});

	// Header - Reposicionar el submenú según el espacio en pantalla
	$categoryName.hover(function() {
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

	$showFranjaHoraria.on('click', function() {
		$(this).parent().find('.franjaHoraria').slideToggle('fast');
	});

	// Product's grid - Show more info in product box's bottom while mouseover
	$('.producto-box > .content').mouseover(function() {
		$(this).find('.item').addClass('show');
	});
	$('.producto-box > .content').mouseout(function() {
		$(this).find('.item').removeClass('show');
	});

	// Product's grid - Gives feedback when submitted an 'add to cart' product from product's grid
	$('.add-product-form').submit(function () {
		$('#addedToCartFeedback').prependTo($(this).parent().parent().parent().find('.item'));
		setTimeout(function(){
			closeFeedbackAlert();
		}, 3000);
		return false;
	});

	// Product's grid - Close feedback alert in product's grid
	$('#addedToCartFeedback .close').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		closeFeedbackAlert();
	});

	// Category page - Color selector tooltip filter
	$('.acabado > div').mouseover(function() {
		var colorName = $(this).attr('value');
		$(this).tooltip('hide')
			.attr('data-original-title', colorName)
			.tooltip('fixTitle')
			.tooltip('show');
	});

	// Category page - Toggle button between ASC or DESC in sort list
	$('#sortList .btn').on('click', function() {
		if ( $(this).hasClass('active') == true ) {
			$(this).toggleClass('change-sort');
		} else {
			$(this).removeClass('change-sort');
		}
	});

	// Category page - Show active filters (checkbox type)
	$('#filtersBox input[type="checkbox"]').change(function() {
	    if(this.checked) {
	        enableFilter($(this).parent().attr('title'), $(this).val());
	    } else {
	    	disableFilter($(this).parent().attr('title'), $(this).val());
	    }
	});

	// Category page - Show active filters (price type)
	$('#priceRange').on('slideStop', function() {
		var value = "price";
		enableFilter( $(this).attr('value'), value );
	});

	// Category page - Show active filters (color/material type)
	$('.acabado .color, .acabado .material').on('click', function() {
		if ( $(this).hasClass('selected') ) {
			disableFilter( $(this).attr('data-title'), $(this).attr('value') );
		} else {
			enableFilter( $(this).attr('data-title'), $(this).attr('value') );
		}
		$(this).toggleClass('selected');
	});

	// Category page - Disable filter
	$('.active-filter .close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		disableFilter(null, $(this).parent().attr('id'))
	});

	// Detail page - Show large image when clicking on secundary images thummbnails
	$('.more-images img[data-target="#largeImageModal"]').on('click', function() {
		var source = $(this).attr('src');
		console.log(source);
		$('#largeImageModal .modal-content img').attr('src',source);
	});

	// Detail page - Show secundary image in main image content when hover in a thumbnail
	$('.more-images img').mouseover(function() {
		$('#mainImage').attr('src',$(this).attr('src'));
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
	$('#addMainProductForm').submit(function () {
		showFeedback();
		showCrossSelling();
		refreshCartNumber();
		return false;
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
	 * Función Inicial
	 */
	function init() {

		// Fixed header	 
		var stickyNavTop = $('.topmenu').offset().top;
		fixedNav(stickyNavTop);
		 
		$(window).scroll(function() {
		    fixedNav(stickyNavTop);
		});
		
		// Tooltip
		$('.tooltip').powerTip({
			placement: 'nw-alt'
		});

		//Category page - Price range filter with slider
		$('#priceRange').slider({});

		//Detail page - Init cross selling carousel
		$('[data-toggle="tooltip"]').tooltip();
		$('.carousel').carousel({
		  interval: false
		})

		// Get current page
		// Switch case
		console.log(currentPage);
	}



	return {
		init: init,
		showLoading: showLoading,
		hideLoading: hideLoading
	};





})();

Superestudio.init();
