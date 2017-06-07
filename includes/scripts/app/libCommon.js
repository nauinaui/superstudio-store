//generic JS for all views
define(['jquery'], function ($) {
	var LibCommon = function () {};

	LibCommon.prototype.loadImages = function() {
		var imgDefer = document.getElementsByTagName('img');
		for (var i=0; i<imgDefer.length; i++) {
			if(imgDefer[i].getAttribute('data-src')) {
				imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
			}
		}
	}

	LibCommon.prototype.hideSubmenu = function() {
		$submenu.removeClass('show');
	}

	LibCommon.prototype.toggleSubmenu = function(tipo) {
		var $tipoSubmenu = $('#'+tipo);
		this.hideSubmenu();
		if (!$tipoSubmenu.hasClass('show')) {
			$tipoSubmenu.addClass('show');
		} else {
			$tipoSubmenu.removeClass('show');
		}
	};

	LibCommon.prototype.repositionSubmenu = function(that) {
		var position = that.position();
		var spaceDerecha = $(window).width() - position.left;
		var spaceIzquierda = position.left;
		var submenu = that.find('.submenu');
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
	}

	/**
	 * Menu categorías (toggle)
	 */
	LibCommon.prototype.toggleMenu = function() {
		if (!$menu.hasClass('show')) {
			$menu.addClass('show');
			$menu.on('mouseleave', function(){
				this.hideSubmenu();
				$menu.removeClass('show');
			});
		} else {
			$menu.removeClass('show');
		}
	}

	/**
	 * Header - Fix header when scrolling
	 * @param stickyNavTop:Int Scroll size needed
	 */
	LibCommon.prototype.fixedNav = function(stickyNavTop) {
		var scrollTop = $(window).scrollTop(),
			contentElement = $('body > .container').first();
		if (scrollTop > stickyNavTop) { 
		    $('.topmenu').addClass('fixed');
		    contentElement.css('padding-top','75px');
		} else {
		    $('.topmenu').removeClass('fixed'); 
		    contentElement.removeAttr('style');
		}
		if ( $('#menuSubcategorias li .submenu').is(':visible') ) {
			var openedMenu = $('#menuSubcategorias li .submenu:visible').parent();
			this.repositionSubmenu(openedMenu);
		}
	}

	/**
	 * Block/unblock interface to avoid unwanted events
	 */
	LibCommon.prototype.blockUI = function() {
		$('body').addClass('blocked');
	}
	LibCommon.prototype.unblockUI = function() {
		$('body').removeClass('blocked');
	}
	
	LibCommon.prototype.preventDefault = function(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	}

	LibCommon.prototype.preventDefaultForScrollKeys = function(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	}


	/**
	 * Move alert to the end of document
	 */
	LibCommon.prototype.closeFeedbackAlert = function() {
		$('#addedToCartFeedback').css('opacity','0');
		setTimeout(function(){
			$('#addedToCartFeedback').appendTo('body');
			$('#addedToCartFeedback').css('opacity','1');
		}, 500);
	}

	/**
	 * Device detection
	 */
	LibCommon.prototype.detectMobile = function() {
		var isMobile = false;

		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
		return isMobile;
	}

	/**
	 * Logged user detection // DEPRECATED
	 */
	LibCommon.prototype.detectLogged = function() {
		var isLogged = false;

		if ( $('body.logged').length > 0 ) {
			isLogged = true;
		}
		return isLogged;
	}

	/**
	 * Check if user is logged
	 */
	LibCommon.prototype.checkLogin = function() {
		$.ajax({
	    	url: "/includes/web/plugin_login",
	    	success: function(data) { 
	    		data = $.trim(data);
	    		if ( data == '0' ) {
	    			$('body').removeClass('logged');
	    		} else {
		    		data = data.split('|');
		    		var desktopContent = data[0],
		    			mobileContent = data[1];
					$('#userDropdownDesktop').html(desktopContent);
					$('#userDropdownMobile').html(mobileContent);
					// Show only first word of user name in topbar
					$('body').addClass('logged');
					var username = $('#loggedDropdown').html();
					username = username.split('&nbsp;');
					var onlyName = username[1].replace(/(\w+).*/,"$1");
					$('#loggedDropdown').html(username[0]+'&nbsp;'+onlyName+' <span class="caret"></span>');
	    		}
	    	}
	    });
	}

	/**
	 * Check if user is outside the country of the domain
	 */
	LibCommon.prototype.checkOtherCountryModal = function() {
		var thisFile = this;
		$.ajax({
	    	url: "/includes/web/plugin_idioma_pais_cliente",
	    	success: function(data) {
	    		data = data.split('|');
	    		countryUser = data[1];
			    if (countryWeb != countryUser) {
					if ( !thisFile.readCookie('other-country-dismiss') == true ) {
						$('#otherCountryModal').modal('show');
					}
			    }
	    	}
	    });
	}

	/**
	 * Change image when change a product finish
	 */
	LibCommon.prototype.changeFinishImage = function(finishID, productRef, place) {
		var thisFile = this;
		this.blockUI();
		$.ajax({
			url: '/includes/web/plugin_fotos_color.asp?ref='+productRef+'&id_color='+finishID,
			success: function (data) {
				thisFile.unblockUI();
				if ( !data == '' ) {
					if ( place === 'grid' ) {
						// Change in product's grid
						$('.producto-box a.item[data-product-ref="'+productRef+'"]').addClass('show');
						$('.producto-box a.item[data-product-ref="'+productRef+'"] img').attr('src',data);
					} else if ( place === 'detail' ) {
						// Change in detail page
						if ( $('body').is('.pack') ) {
							var product_id = finishObj.parent().parent().attr('data-product-id');
							$('.product-pack-item[data-product-id="' + product_id + '"] img').attr('src',data);
						} else {
							$('#mainImage').attr('src',data);
						}
						// trigger event to execute zoominit function
						$('.finishes-list input:checked').trigger('click');
					}	
				}
			}
		});
	}

	/**
	 * Product's grid - Toggle to show or collapse product's finishes in tablet device (larger than 767px)
	 */
	LibCommon.prototype.showInfoInTablet = function(element) {
		var product = element.closest('.producto-box');
		var productHeight = product.height();
		var heightFinishesCollapsed = product.find('.finishes').height();
		
		if ( !product.find('.item').is('.show') ) {
			product.find('.finishes').css('height','initial');
			var heightFinishesOpened = product.find('.finishes').height();
			product.find('.finishes').height(heightFinishesCollapsed);
			product.find('.finishes').height(heightFinishesOpened);
			product.find('.item').addClass('show');
			product.height(productHeight);
		} else {
			product.find('.finishes').attr('style','');
			setTimeout(function(){
				product.attr('style','');
				product.find('.item').removeClass('show');
			}, 500);
		}
	}

	/**
	 * Change image when change a product finish
	 */
	LibCommon.prototype.autoSelectFinish = function() {
		if ( '.products-list'.length > 0 ) {
			$('.producto-box').each( function() {
				if ( $(this).find('.finishes input').length < 2 ) {
					$(this).find('.finishes input').attr('checked','checked');
				}
			})
		}
	}

	/**
	 * AJAX - Delete all same products from cart
	 */
	LibCommon.prototype.deleteAllProductFromCart = function(relationID) {
	    $('#myCart .content').html('<img class="loader" src="imagenes/loader.gif"/>');
	    $.ajax({
	    	url: "/includes/web/plugin_accion_carrito.asp?accion=borra&idrelacion="+relationID,
	    	success: function() { 
				// Refresh cart items
				$('#myCart .content').html('<img class="loader" src="imagenes/loader.gif"/>').slideDown(250).load('/includes/web/carrito.asp');
				$('#cartItemsNumber').load('/includes/web/carrito_linea.asp');
	    	},
	    });
	}			

	/**
	 * AJAX - Delete a product from cart
	 */
	LibCommon.prototype.deleteProductFromCart = function(productID, query, type) {
	    $.ajax({
	    	url: "/includes/web/carrito.asp?accion=borra&idrelacion="+ productID + query + type,
	    	type: 'GET',
	    	crossDomain: true,
	    	datatype: 'jsonp',
	    	success: function() { 
	    		$('.item[rel="'+productID+'"]').remove();
	    		var action = 'substract';
	    		this.refreshCartNumber(action);
	    	},
	    	error: function() {
	    		console.log('Failed! Error has occurred while deleting product from cart');
	    	},
	    });
	}

	/**
	 * AJAX - Add product to cart
	 */
	LibCommon.prototype.addProductToCart = function(productID, query, type, isDetail) {
		var envioCarrito = '';
		var loaded = false;
		var thisFile = this;
		var isOk = true;
		
		if (type === 'outlet'){
			envioCarrito = "&id_outlet=" + productID;
		} else if (type === 'pack') {
			envioCarrito = "&id_pack=" + productID;
		} else {
			envioCarrito = "&id=" + productID;
		}
		
		this.blockUI();
		// Load info to cart
		$.ajax({
			url: '/includes/web/plugin_accion_carrito.asp?accion=anadir' + envioCarrito + query,
			type: 'POST',
			success: function (data) {
				thisFile.unblockUI();

				if (data == '0') { // added

					// if ( !type==='pack' ) {
					// 	hideUpSelling();
					// }
					// setTimeout(function(){
					// 	showCrossSelling();
					// }, 3000);

					// Open cart
					$('#cartBtn').trigger('click');
				} else { // error adding
					var error = data.split('-');
					if ( error[0]== '1' ) {
						error = error[1];
						isOk = false;
						console.log(error);
					}
				}
				
				// Show feedback
				thisFile.showFeedback(isOk, isDetail, productID, error);
			},
			error: function () {
				thisFile.unblockUI();
				console.log('connection error');
				isOk = false;
				// Show feedback
				thisFile.showFeedback(isOk, isDetail, productID, null);
			}
		});
	};

	/**
	* AJAX - Load current Cart
	*/
	LibCommon.prototype.loadCart = function() {
		var thisFile = this;

		// refresh cart content
		$('#myCart .content').html('<img class="loader" src="imagenes/loader.gif"/>').slideDown(250);
		
		$.ajax({
			url: '/includes/web/carrito.asp',
			type: 'POST',
			success: function (data) {
				$('#myCart .content').html(data);
			}
		});
		
		// refresh product number
		$.ajax({
			url: '/includes/web/carrito_linea.asp',
			type: 'POST',
			success: function (data) {
				$('#cartItemsNumber').html(data);
				thisFile.animateCartNumber();
			}
		});
	};

	/**
	* Show number cart effect to get user attention
	*/
	LibCommon.prototype.animateCartNumber = function() {
		// show effect
		$('#cartBtn').addClass('animated tada');
		setTimeout(function(){
			$('#cartBtn').removeClass('animated tada');
		}, 2000);
	};

	/**
	 * Show alert for 3 seconds and hide again after adding a product to cart
	 */
	LibCommon.prototype.showFeedback = function(isOk, isDetail, productID, error) {
		// Positive feedback
		if ( isOk == true ) {
			if ( isDetail == true ) { // Detail page
				$('#addedProductAlert').collapse('show');
				setTimeout(function(){
					$('#addedProductAlert').collapse('hide');
				}, 3000);
			} else { // Product's grid
				$('.item[data-product-id="'+productID+'"]').prepend($('#addedToCartFeedback'));
				setTimeout(function(){
					$('body').append($('#addedToCartFeedback'));
				}, 4000);
			}
		// Negative feedback
		} else {
			if ( isDetail == true ) { // Detail page
				$('#addedProductAlertError').html(error);
				$('#addedProductAlertError').collapse('show');
				setTimeout(function(){
					$('#addedProductAlertError').collapse('hide');
				}, 3000);
			} else { // Product's grid
				$('#addedToCartErrorFeedback').html(error);
				$('.item[data-product-id="'+productID+'"]').prepend($('#addedToCartErrorFeedback'));
			}
		}
	}

    /**
    * cookies - Create cookie
    */
	LibCommon.prototype.createCookie = function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";               

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    /**
    * cookies - Read cookie
    */
	LibCommon.prototype.readCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    /**
    * cookies - Erase cookie
    */
    LibCommon.prototype.eraseCookie = function(name) {
        createCookie(name, "", -1);
    }

	return LibCommon;
});