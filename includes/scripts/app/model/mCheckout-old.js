define(['./Base.js', '../libCommon.js', 'bootstrap'], function (Base, LibCommon, Bootstrap) {
    var mCheckoutOld = new Base('data for Page Checkout-old loaded');
	var common = new LibCommon();
	
	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		$('.dropdown-toggle').dropdown();

		// Stop auto play cross selling carousel
		$('#showPromoProduct .carousel').carousel({
		  interval: false
		})

		/**
		 * =================
		 * FUNCTIONS
		 * =================
		 */

		function modalCenter() {
			var textWidth = $(".text-msn").innerWidth() / 2,
				textHeigth = $(".text-msn").innerHeight() / 2;

			$(".text-msn").css({"margin-left": "-"+textWidth+"px", "margin-top": "-"+textHeigth+"px"});

		}

		function checkRegistrado() {
			common.blockUI();
			$.ajax({
				url: '/includes/web/plugin_login_carrito',
				type: 'POST',
				data: 'e=' + $('#envio_email').val() + '&p=' + $('#pass_cliente').val(),
				success: function (data) {
					common.unblockUI();
					if (data !== '') {
						$('input[name="envio_email"]').after(data).slideDown('fast');
						$('#pass_cliente').focus();
					}
				}
			});
		}

		function checkPassRegistrado() {
			var passCliente = $('#pass_cliente').val();
			if (passCliente !== '') {
				common.blockUI();
				$.ajax({
					url: '/includes/web/plugin_login_carrito',
					type: 'POST',
					data: 'e=' + $('#envio_email').val() + '&p=' + passCliente,
					success: function (data) {
						common.unblockUI();
						if (data === "login-ok") {
							$('#checkoutForm').submit();
						} else {
							$('#pass_cliente').after(data);
						}
					}
				});
			}
		}

		function changeTitle() {
			window.parent.document.title ="Superestudio";
		}
		
		/**
		 * =================
		 * EVENTS
		 * =================
		 */

		// Submit del form cuando cambiamos el valor
		$('#checkoutForm').on('submit', function(e){
			common.blockUI();
		});

		if ($('#envio_email').val() !== '') {
			checkRegistrado();
		}

		// Deshabilitamos Enter = submit
		$('.noEnterSubmit').on('keypress',function(e){
			if ( e.keyCode == 13 ) {
				e.preventDefault();
				return false;
			}
		});

		$("#envio_pais, #envio_cp, #envio_direccion_sel, #envio_direccion_sel_ant").on('change', function() {
			var dir = $("#envio_direccion_sel").val();
			var dir_ant = $("#envio_direccion_sel_ant").val();
			var cp = $("#envio_cp").val();
			var cp_ant = $("#envio_cp_ant").val();
			var pais = $("#envio_pais")[0].value;
			var pais_ant = $("#envio_pais_ant").val();
			var form = $("#checkoutForm");
			var objectChanged = $(this);

			common.blockUI();
			$.ajax({
				url: 'includes/web/plugin_iva_pedido?dir='+dir+'&dir_ant='+dir_ant+'&cp='+cp+'&cp_ant='+cp_ant+'&pais='+pais+'&pais_ant='+pais_ant,
				success: function (data) {
					common.unblockUI();
					if(data !=="") {
						if ( objectChanged.is('#envio_pais') || objectChanged.is('#envio_cp') ) {
							data = data.split('|');
							var saltoLinea = data[1].replace('.', '.<br><br>');
							$("#checkoutForm").prepend("<section id='vatModal' class='modal fade new-web-modal' tabindex='-1' role='dialog'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><img src='imagenes/logo.png' width='100' alt='SuperStudio'></div><div class='modal-body'><h5 class='text-center'>"+saltoLinea+"<br /></h5></div><div class='modal-footer text-center'><button type='button' class='btn btn-primary btn-rounded' data-dismiss='modal'>"+data[0]+"</button></div></div></div></section>");
							$('#vatModal').modal('show');
						}
					} else {
						$("#checkoutForm").submit();
					}
				}
			});
		});

		$('body').on('hidden.bs.modal', '#vatModal', function (e) {
		  $("#checkoutForm").submit();
		})

		$('#checkout').on('focusout keypress', '.checkRegistrado', function(e){
			if ( e.type === 'focusout' || e.keyCode === 13 ) {
				common.blockUI();
				var emailinfo = $('#emailinfo');
				if ( emailinfo.length) {
					emailinfo.remove();
				}
				checkRegistrado();
			}
		});

		$('#checkout').on('blur', '#pass_cliente', function (e) {
			if ($(this).val() !== "") {

				common.blockUI();
				var $passinfo = $('#passinfo');
				if ($passinfo.length) {
					$passinfo.remove();
				}
				checkPassRegistrado();
			}
		});

		$('input[name="dir_fact_dif_visible"]').on('click', function(){
			var dir_fact = $(this).prop('checked');
			if (dir_fact === true) {
				$('#checkout').find('input[name="dir_fact_dif"]').val('1');
			} else {
				$('#checkout').find('input[name="dir_fact_dif"]').val('0');
			}
			$('#checkoutForm').submit();
		});

		$('#checkout').on('click', '.recordar', function (e) {
			e.preventDefault();
			common.blockUI();
			$.ajax({
				url: '/recordar',
				type: 'POST',
				data: 'datos=1&auto=1&email_recordar=' + $('#envio_email').val(),
				success: function (data) {
					common.unblockUI();
					$('.recordar').parent().addClass('success').html(data);
					$('#pass_cliente').focus();
				}
			});
		});
		
		// forzar click en checkbox - quiero recebir factura
		$('.pedido-factura').on('click', function(){
			$('#enviar_factura').trigger('click');
		});

	    $('body').on('click', '.login_toggle', function(e){
	    	e.stopPropagation();
	    	e.preventDefault();
	    	if ( $(window).width() < 768 ) {
				$('#moreOptionsDropdown').dropdown('toggle');
				$('#loginIniciarSesionDropdown .submenu').toggle();
	    	} else {
				if ( !$('.login-dropdown').is('.open') ) {
					$('#loginDropdown').dropdown('toggle');
				}
	    	}
	    });

		$('.btn_print').on("click", function(){
			changeTitle();
		});

		// Disable open cart to avoid desynchronization with changes from cart with checkout page
		$('#cartBtn').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
		});

		$('[data-toggle="tooltip"]').tooltip({
			html: true
		});
		
		$('[data-toggle="popover"]').popover({
			html: true,
			trigger: 'hover'
		});

		// Save product values when user add a promotional product
		$('#showPromoProduct .add-to-cart-promo').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			if ( !$(this).is(':disabled') ) {
				var product = $(this).closest('.item');
				var promoProductId = product.attr('data-product-id');
				var promoProductColor = product.attr('data-product-color_id');
				$('input[name="promo-data-product-id"]').val(promoProductId);
				$('input[name="promo-data-product-color_id"]').val(promoProductColor);
				$('.botonComprar').trigger('click');
			}
			return false;
		})
    });

    return mCheckoutOld;
});