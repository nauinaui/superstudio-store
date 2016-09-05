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
	 * Block/unblock interface to avoid unwanted events
	 */
	LibCommon.prototype.blockUI = function() {
		$('body').addClass('blocked');
	}
	LibCommon.prototype.blockUI = function() {
		$('body').removeClass('blocked');
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
	 * Refresh cart number of items after adding one
	 * @param action:String Add or substract item
	 */
	LibCommon.prototype.refreshCartNumber = function(action) {
		var item = parseInt($('#cartItemsNumber').text(), 10);
		if (action == 'add') {
			item = item + 1;
		} else if (action == 'substract') {
			item = item - 1;
		}
		$('#cartItemsNumber').text(item);
		$('#cartItemsNumber').addClass('animated rubberBand');
		setTimeout(function(){
			$('#cartItemsNumber').removeClass('animated rubberBand');
		}, 2000);
	}

	/**
	 * AJAX - Delete all same products from cart
	 */
	LibCommon.prototype.deleteAllProductFromCart = function(id_producto) {
	    $.ajax({
	    	url: "https://intranet.superestudio.com/includes/web/carrito.asp?accion=borra&idrelacion="+id_producto+"&_=146729611725o9",
	    	type: 'GET',
	    	crossDomain: true,
	    	datatype: 'jsonp',
	    	success: function() { 
	    		console.log('deleted product from cart');
	    		$('.item[rel="'+id_producto+'"]').remove();
	    		var action = 'substract';
	    		this.refreshCartNumber(action);
	    	},
	    	error: function() { console.log('Failed! delete product from cart'); },
	    });
	}			

	/**
	 * AJAX - Delete a product from cart
	 */
	LibCommon.prototype.deleteProductFromCart = function(id_producto, opciones, tipo) {
	    $.ajax({
	    	url: "https://intranet.superestudio.com/includes/web/carrito.asp?accion=borra&idrelacion="+id_producto+"&_=146729611725o9",
	    	type: 'GET',
	    	crossDomain: true,
	    	datatype: 'jsonp',
	    	success: function() { 
	    		console.log('deleted product from cart');
	    		$('.item[rel="'+id_producto+'"]').remove();
	    		var action = 'substract';
	    		this.refreshCartNumber(action);
	    	},
	    	error: function() { console.log('Failed! delete product from cart'); },
	    });
	}

	/**
	 * AJAX - Add product to cart
	 */
	LibCommon.prototype.addProductToCart = function(id_producto, query, tipo) {
		var topbar = $('#topbar');
		var envioCarrito = '';

		if (tipo === 'outlet'){
			envioCarrito = "&id_outlet=" + id_producto;
		} else if (tipo === 'pack') {
			envioCarrito = "&id_pack=" + id_producto;
		} else {
			envioCarrito = "&id=" + id_producto;
		}

		// Enviamos la info al carrito
		$.ajax({
			url: '/includes/web/carrito.asp?accion=anadir' + envioCarrito + query,
			success: function (data) {
				console.log('added!');

				// This product has been already added to cart. Just increment its number
				if ( $('#myCart .item[rel="'+id_producto+'"]').length ) {
					var addedProductNumber = $('#myCart .item[rel="'+id_producto+'"]').find('.units .number').text();
					addedProductNumber = parseInt(addedProductNumber);
					addedProductNumber++;
					$('#myCart .item[rel="'+id_producto+'"]').find('.units .number').text(addedProductNumber);
				} else {
					// Add product to cart for first time
					console.log('there is not this product in cart yet');
				}
				// Cargamos carrito
				topbar.find('#carrito').html(data).slideDown(250);
				// cargamos carrito linia
				topbar.find('.carritoText').load('/includes/web/carrito_linea.asp');
			}
		});
	};

	return LibCommon;
});