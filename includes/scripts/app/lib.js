//generic JS for all views
define(['jquery', 'bootstrap'], function ($, Bootstrap) {
    return {
        getBody: function () {
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
			$('.producto-box > .content').mouseover(function() {
				$(this).find('.item').addClass('show');
			});
			$('.producto-box > .content').mouseout(function() {
				$(this).find('.item').removeClass('show');
			});

			/**
			 * =================
			 * TO EXECUTE WHEN INIT
			 * =================
			 */
			$( document ).ready(function() {
				console.log('executed all common events');
				
				// Fixed header	 
				var stickyNavTop = $('.topmenu').offset().top;
				fixedNav(stickyNavTop);
				
				$(window).scroll(function() {
				    fixedNav(stickyNavTop);
				});
			})

            return $('body');
        }
    }
});