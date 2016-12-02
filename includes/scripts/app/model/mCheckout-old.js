define(['./Base.js', '../libCommon.js', 'bootstrap'], function (Base, LibCommon, Bootstrap) {
    var mCheckoutOld = new Base('data for Page Checkout-old loaded');
	var common = new LibCommon();
	
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

		common.blockUI();
		$.ajax({
			url: 'includes/web/plugin_iva_pedido?dir='+dir+'&dir_ant='+dir_ant+'&cp='+cp+'&cp_ant='+cp_ant+'&pais='+pais+'&pais_ant='+pais_ant,
			success: function (data) {
				common.unblockUI();
				var saltoLinea = data.replace('.', '.<br><br>');
				if(data !=="") {
					$("#checkoutForm").prepend("<div id='modal-envio'><p class='text-msn'>"+saltoLinea+" <input type='submit' name='submit_pedido' id='btn' value='Aceptar'></p></div>");
					modalCenter();
				} else {
					$("#checkoutForm").submit();
				}
			}
		});
	});

	$('#checkout').on('focusout keypress', '.checkRegistrado', function(e){
		if ( e.type === 'focusout' || e.keyCode === 13 ) {
			console.log('entro');
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
		if ( $('.login-dropdown').is('.open') ) {
			$('.login-dropdown').removeClass('open');
			$('#loginDropdown').attr('aria-expanded','false').focus();;
		} else {
			$('.login-dropdown').addClass('open');
			$('#loginDropdown').attr('aria-expanded','true').focus();;
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
	
	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		$('.dropdown-toggle').dropdown();
    });

    return mCheckoutOld;
});