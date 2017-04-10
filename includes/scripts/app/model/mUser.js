define(['./Base.js', '../libCommon.js', 'bootstrap'], function (Base, LibCommon, Bootstrap) {
    var mUser = new Base('data for generic pages loaded');
    var common = new LibCommon();

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		/**
		 * =================
		 * FUNCTIONS
		 * =================
		 */

		if ( $('#emptyListAlert').length > 0 ) {
			$('button#deleteAllProducts').attr('disabled', 'disabled');
		}

		function listaVacia() {
			var itemCuant = $(".product-info").length,
				avisoLista = $(".avisoLista");

			if (itemCuant <= 2) {
				$("#noItemAlert").alert();
			}
		}

		/**
		 * =================
		 * EVENTS
		 * =================
		 */
		
		$(".lista-top").on("click", "#deleteAllProducts", function () {
			var mainList = $('.products-table'),
				that = $(this),
				BoxDlista = mainList.find(".product-info");

			$.ajax({
				url: '/includes/web/plugin_listadeseos.asp?a=all',
				success: function () {
					that.attr('disabled', 'disabled');
					BoxDlista.remove();
					$('#noItemAlert').collapse('show');
				}
			});
		});

		// Open and close favourite products from list
		$('#collapseItems').on('hidden.bs.collapse', function () {
			$('#openList .open-text').show();
			$('#openList .close-text').hide();
		});
		$('#collapseItems').on('shown.bs.collapse', function () {
			$('#openList .open-text').hide();
			$('#openList .close-text').show();
		});


		$('.delete-product').on("click", function () {
			var borrarElem = $(this).closest(".product-info");
			$.ajax({
				url: '/includes/web/plugin_listadeseos.asp?a=del&p=' + $(this).data('idproducto'),
				success: function () {
					borrarElem.remove();
				}
			});

		});

		$(".product-info").on("click", ".carList", function () {
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
    });

    return mUser;
});