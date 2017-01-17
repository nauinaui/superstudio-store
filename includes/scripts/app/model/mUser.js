define(['./Base.js', '../libCommon.js', 'bootstrap'], function (Base, LibCommon, Bootstrap) {
    var mUser = new Base('data for generic pages loaded');
    var common = new LibCommon();

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */

	function listaToogleAlto(elem) {
		var $mainList = elem.closest(".mainList"),
			$abrirLista = elem.parent().find("#openList"),
			$cerrarLista = elem.parent().find("#closeList"),
			BoxDlista = $mainList.find(".BoxDlista").length,
		// Altura de elementos
			listHg = elem.closest(".listHg").outerHeight(),
			mainListAlto = elem.closest(".mainList").outerHeight();

		if (mainListAlto < listHg) {
			$mainList.animate({"height": listHg}, 300);
			$abrirLista.hide();
			$cerrarLista.show();
		} else {
			$mainList.animate({"height": "245px"}, 300);
			$abrirLista.show();
			$cerrarLista.hide();
			listaVacia();
		}
	}

	function listaVacia() {

		var $itemCuant = $(".BoxDlista").length,
			$avisoLista = $(".avisoLista"),
			$noItem = $(".no-item");

		if ($itemCuant <= 2) {
			$noItem.fadeIn(300).delay(1000).fadeOut(300);
		}
	}

	function altoHeight() {
		var listHg = $('.listHg').outerHeight(),
			$mainList = $(".mainList"),
			$avisoLista = $(".avisoLista"),
			$clearAll = $(".clearAll"),
			$abrirLista = $(".abrirLista"),
			$cerrarLista = $(".cerrarLista"),
			BoxDlista = $(".BoxDlista").length;

		$mainList.animate({"height": listHg}, 300);

		if (BoxDlista < 3) {
			$cerrarLista.hide(300);
			$abrirLista.show(300);

			if (BoxDlista === 0) {
				$avisoLista.slideDown(300);
				$clearAll.hide();
			} else {
				$avisoLista.slideUp();
				$clearAll.show();
			}
		}
	}

	/**
	 * =================
	 * EVENTS
	 * =================
	 */
	
	$(".listaTop").on("click", "#deleteAllProducts", function () {
		var $mainList = $(this).closest(".mainList"),
			_this = $(this),
			$BoxDlista = $mainList.find(".BoxDlista");

		$.ajax({
			url: '/includes/web/plugin_listadeseos.asp?a=all',
			success: function () {
				_this.remove();
				$BoxDlista.remove();
				altoHeight();
				listaVacia();
			}
		});
	});

	$('#contentsList').on("click", ".borrarItem", function () {
		var borrarElem = $(this).closest(".BoxDlista");
		$.ajax({
			url: '/includes/web/plugin_listadeseos.asp?a=del&p=' + $(this).data('idproducto'),
			success: function () {
				borrarElem.remove();
				altoHeight();
			}
		});

	});

	$(".listaTop").on("click", ".listToggle", function () {
		var elem = $(this);
		listaToogleAlto(elem);
	});

	$(".BoxDlista").on("click", ".carList", function () {
		var idproducto = $(this).data('idproducto');
		var enviarCarrito = '&id_producto=' + idproducto;
		var elemento = $("#carrito");

		$.ajax({
			url: '/includes/web/carrito.asp?accion=anadir' + enviarCarrito,
			cache: false,
			success: function (data) {
				elemento.html(data).slideDown(300);
				$('.badge').load('/includes/web/carrito-numb.asp');
			}
		});
	});


	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		
    });

    return mUser;
});