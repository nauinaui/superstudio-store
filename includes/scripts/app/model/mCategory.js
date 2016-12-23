define(['./Base.js', '../libCommon.js', 'bootstrap', 'bootstrap_slider', 'plugins'], function (Base, LibCommon, Bootstrap, Bootstrap_slider, Plugins) {
    var mCategory = new Base('data for Page Category loaded');
    var common = new LibCommon();
    var paginateFrom = 1;

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */

	 /* Funcionalidad 'ver más' y 'ver menos'
	 * @param el:String Elemento que mostraremos y ocultaremos
	 * @param action:String Indica si muestra u oculta
	 */
	function toggleHeight(el, action) {
		var $element = $('#' + el);
		var heightFull = $element.css({height: 'auto'}).height() + $element.find('.read-more').outerHeight();
		
		if (action === 'show') {
			$element.css('height', "90px");
			$element.animate({ height: heightFull }, 500);
		} else if (action === 'hide') {
			$element.css('height', heightFull);
			$element.animate({ height: "90px" }, 500);
		}
	}

	/**
	 * Show subscribing newsletter in lateral content
	 */
	function showSubscribeNewsletter() {
		if ( !$('#subscribeNewsletter').is('.show') ) {
			$('#subscribeNewsletter').addClass('show');
			setTimeout(function(){
				$('#subscribeNewsletter .coupon-image').addClass('animated tada');
			}, 1000);
			$('body').addClass('block-content');
		}
	}

	/**
	 * Show active filter in top of filter box
	 * @param option: String Selected option's text to show
	 * @param type: Type of filter
	 * @param value: String Option value
	 */
	function enableFilter(option, type, value) {
		var $resultados = $('.resultados');
		$('#filtroInfo').hide();
		$('.delete-all-filters-btn').show();
		$('.apply-filters-btn').removeAttr('disabled');
		
		if ( type === "price" ) {
			if ( $resultados.find('.active-filter#price').length > 0 ) {
				// modify price filter to new values
				$resultados.find('#price span.text').remove();
				$resultados.find('#price').append('<span class="text">'+option+'</span>');
			} else {
				// create price filter
				$('#filtersBox .resultados').append('<div class="alert alert-danger alert-dismissible active-filter active" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>')
				$resultados.find('.active-filter:not([id])').attr('id', 'price');
				$resultados.find('.active-filter#price').append('<span class="text">'+option+'</span>');
				$resultados.append($('#price'));
			}
		} else { // create new filter although is price value or not
			$('#filtersBox .resultados').append('<div class="alert alert-danger alert-dismissible active-filter active" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>')
			$resultados.find('.active-filter:not([id])').attr('id', type+'-'+value);
			$resultados.find('.active-filter#'+type+'-'+value).append('<span class="text">'+option+'</span>');
			$resultados.append($('#'+type+'-'+value));
		}
		// Add coin symbol
		if ( value === "price" ) {
			$('.resultados').find('#price span.text').append('€');
		}
		// Add data of filter type
		$resultados.find('.active-filter#'+value).attr('data-type', type);
	}
	
	/**
	 * Disable active filter from top of filter box and reset values
	 * @param type: String Selected name of filter to hide (i.e: material, designer, price,..)
	 * @param value:String Selected value of filter to hide (i.e: 4, 6,..)
	 */
	function disableFilter(type, value) {
		console.log('type: '+ type);
		console.log('value: '+ value);

		// Delete active label
		if ( type == 'price' ) {
			$('.resultados').find('#'+type).remove();
		} else {
			$('.resultados').find('#'+type+'-'+value).remove();
		}
		if ( $('.resultados').find('.active-filter').length == 0 ) {
			$('#filtroInfo').show();
			$('.delete-all-filters-btn').hide();
			$('.apply-filters-btn').attr('disabled', 'disabled');
		}
		
		// Delete checked or selected input from filterbox
		if ( type == "price" ) {
			$('#priceRange input').val('');
		} else if ( type == "finish") {
			$('.color[value="'+value+'"].selected, .material[value="'+value+'"].selected').removeClass('selected');
		} else {
			var labelType = $('label[data-url="'+type+'"]');
			var checkbox = labelType.parent().next().find('input[value="'+value+'"]').prop('checked',false);
		}
	}

	// Get all selected filters by user, write in url as a parameters and refresh page
	function applyFilters() {
		// Put filters in url parameters
		var i = 0;
		var url = window.location.pathname;
		var filters = '';
		
		$('.resultados .active-filter').each(function() {
			var type = $(this).attr('data-type');
			if (type === 'rango') {
				var option = $(this).find('.text').text();
				option = option.slice(0,-1);
				option = option.replace(',','-');
			} else {
				var option = $(this).attr('id');
			}

			// check if this type has already any filter activated
			if (url.indexOf(type) == -1) { // It's first value of this type
				if (i === 0) {
					url = url + '?' + type + '=' + option;
				} else {
					url = url + '&' + type + '=' + option;
				}
			} else { // There is another value activated of same type
				var arr = url.split(type+'=');
				url = arr[0] + type + '=' + option + ',' + arr[1];
			}
			i++;
		});
		// Put sort order in url parameters
		var sort = $('#sortList label.active > input').attr('data-url');
		if ( $('#sortList label.active').is('.change-sort') ) {
			var asc = true;
		} else {
			var asc = false;
		}
		// if there is not any filter active and it's only sort order
		if ( i === 0 ) {
			url = '?orden=' + sort + '&asc=' + asc;
		} else {
			url = url + '&orden=' + sort + '&asc=' + asc;
		}
		// refresh page with parameters
		common.blockUI();
		window.location.href = url;
	}

	// Read all parameters from url to activate filters
	function readFilters() {
		var url = window.location.href;
		url = url.split('?');
		url = url[1];

		if ( !url == '' ) {
			$('html, body').animate({
		        scrollTop: $(".read-more").offset().top -100
		    }, 1000);

			url = url.split('&');

			for ( var i = 0, l = url.length; i < l; i++ ) {
				var filter = url[i].split('=');
				if ( filter[1].indexOf(',') == -1 ) { // if current filter doesn't have more than one active value 
					if ( filter[0] === 'finish' ) { // it's finish filter
						$('.filters-section .acabado div[value="'+ filter[1] +'"]').trigger('click');
					} else if ( filter[0] === 'rango' ) { // it's price filter
					    var range = filter[1];
					    range = range.split('-');
					    $('#priceMinInput').val(range[0]);
					    $('#priceMaxInput').val(range[1]);
					    enableFilter( range[0] + ',' + range[1], 'price', 'range');
					} else if ( filter[0] == 'orden' ) { // sort
						$('#sortList label.active').removeClass('active');
						$('#sortList label > input[data-url="' + filter[1] + '"]').parent().addClass('active');
					} else if ( filter[0] == 'asc' ) { // sort direction
						if ( filter[1] == 'true' ) {
							$('#sortList label.active').addClass('change-sort');
						}
					} else { //it's a normal filter
						$('.filters-columns input[value="' + filter[1] + '"]').trigger( 'click' );
					}
				} else { // if current filter has more than one active value 
					var values = filter[1].split(',');
					var j;
					for (j = 0; j < values.length; ++j) {
						if ( filter[0] === 'finish' ) { // it's finish filter
							$('.filters-section .acabado div[value="'+ values[j] +'"]').trigger('click');
						} else { //it's a normal filter
							$('.filters-columns input[value="' + values[j] + '"]').trigger( 'click' );
						}
					}
				}
			}
			$('#filtersBox').collapse('show');
		}
	}

	// get parameters from url
	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
		if (!results) return '';
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	// infinite scroll
	function documentoScroll() {
		$('#productsLoader').collapse('show');

		var contentsProd = $('#productsList');
		var loader =  $('#productsLoader');
		var camp = getParameterByName('camp');
		var subcamp = getParameterByName('subcamp');
		var color = getParameterByName('color');
		var colores = getParameterByName('colores');
		var cats1 = getParameterByName('cats1');
		var cats2 = getParameterByName('cats2');
		var dsd = getParameterByName('dsd');
		var col = getParameterByName('col');
		var rango = getParameterByName('rango');
		var mat = getParameterByName('mat');
		var estado = getParameterByName('estado');
		var busqueda = getParameterByName('busqueda');
		var orden = getParameterByName('orden');
		var packs = getParameterByName('packs');

		var url 		= window.location.href;
		var index 		= url.lastIndexOf("/") + 1;
		var category 	= url.substr(index);
		category = category.split('?');

		var urlParametros = category[0]+'?camp='+camp+'&subcamp='+subcamp+'&color='+color+'&colores='+colores+'&rango='+rango+'&cats1='+cats1+'&cats2='+cats2+'&dsd='+dsd+'&col='+col+'&mat='+mat+'&estado='+estado+'&orden='+orden+'&busqueda='+busqueda+'&packs='+packs+'&plugin=1&desde='+paginateFrom;

		$.ajax({
			url: urlParametros,
			success: function (data) {
				if (data !== '') {
					contentsProd.append(data);
					$(document).find('.iconLoad').remove();
					paginateFrom++;
				}
				$('#preloader').hide();
				$('body').removeClass('disable-scroll');
				loader.collapse('hide');
				common.autoSelectFinish();
			}
		});
	}


	function getDocumentHeight() {
		const body = document.body;
		const html = document.documentElement;
		
		return Math.max(
			body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight
		);
	};

	function getScrollTop() {
		return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	}

	/**
	 * =================
	 * EVENTS
	 * =================
	 */
	
	$('.toggleHeight').on('click', function() {
		toggleHeight(this.getAttribute('data-element'), this.getAttribute('data-action'));
		$(this).parent().find('.hide').toggleClass('hide');
		$(this).toggleClass('hide');
	});

	// Color selector tooltip filter
	$('.acabado > div').mouseover(function() {
		var colorName = $(this).attr('data-title');
		$(this).tooltip('hide')
			.attr('data-original-title', colorName)
			.tooltip('fixTitle')
			.tooltip('show');
	});

	// Toggle button between ASC or DESC in sort list
	$('#sortList .btn').on('click', function() {
		if ( $(this).hasClass('active') == true ) {
			$(this).toggleClass('change-sort');
		} else {
			$(this).removeClass('change-sort');
		}
		setTimeout(function(){
			applyFilters();
		}, 500);
	});

	// Show active filters (checkbox type)
	$('#filtersBox input[type="checkbox"]').change(function() {
	    var type = $(this).closest('.filter-container').find('.filter-label label').attr('data-url');
	    if(this.checked) {
	        enableFilter($(this).parent().attr('title'), type, $(this).val());
	    } else {
	    	disableFilter(type, $(this).val());
	    }
	});

	// Show active filters (price type)
	$('#priceRange input').keyup(function() {
		var priceMin = $('#priceMinInput').val();
		var priceMax = $('#priceMaxInput').val();
		if ( !priceMin == '' || !priceMax == '' ) {
			if (priceMin == '') {
				priceMin = '0';
			}
			if ( priceMax == '' ) {
				priceMax = '2000';
			}
			var option = priceMin + ',' + priceMax;
			var type = 'price';
		    // var value = $(this).closest('.filter-container').find('.filter-label label').attr('data-url');
			enableFilter( option, type, option );	
		} else {
			disableFilter('price', null)
		}
	});

	// Show active filters (color/material type)
	$('.acabado .color, .acabado .material').on('click', function() {
		if ( $(this).hasClass('selected') ) {
			disableFilter( 'finish', $(this).attr('value') );
		} else {
		    var type = $(this).closest('.filter-container').find('.filter-label label').attr('data-url');
			enableFilter( $(this).attr('data-title'), type, $(this).attr('value') );
			$(this).addClass('selected');
		}
	});

	// Disable filter
	$('.resultados').on('click', '.active-filter .close', function(e) {
		e.preventDefault();
		e.stopPropagation();
		if ( $(this).parent().is('#price') == true ) {
			var type = $(this).parent().attr('id');
			var value = null;
		} else {
			var identifier = $(this).parent().attr('id');
			identifier = identifier.split('-');
			var type = identifier[0];
			var value = identifier[1];
		}
		disableFilter(type, value);
	});

	// Disable all filters
	$('.delete-all-filters-btn').on('click', function() {
		$('.resultados .active-filter').each(function() {
			$(this).find('.close').trigger('click');
		});
	});

	// Refresh page with parameters in URL to filter
	$('.apply-filters-btn').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		if ( !$(this).is('[disabled=disabled]') ) {
			applyFilters($(this));
		}

	});

	// Hide lateral contact form -newsletter-
	$('#SubscribeNewsletterCloseButton, .dark-layer, #alreadySubscribedButton').on('click', function() {
		$('#subscribeNewsletter').removeClass('show');
		$('body').removeClass('block-content');
	});

	// Show lateral contact form if it's hidden -outlet-
	$('.show-contact-form-button').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var productName = $(this).closest('.item').find('.info .nombre').text();
		$('#contactFormContent .headerpanel .title span').html('');
		$('#contactFormContent .headerpanel .title').append(' <span>'+productName+'</span>');
		if ( !$('#contactFormContent').is('.show') ) {
			$('#contactFormContent').addClass('show');
			$('body').addClass('block-content');
		}
	});

	// Hide lateral contact form -outlet-
	$('#cancelOutletContactForm, #outletContactFormCloseButton, .dark-layer').on('click', function() {
		$('#contactFormContent').removeClass('show');
		$('body').removeClass('block-content');
	});


	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		// toggleHeight('seoText', 'hide');

		// Read parameters from url and active current filters
		readFilters();

		// Show subscribe newsletter - only if not mobile
		if ( common.detectMobile() == false ) {
			setTimeout(function(){
				showSubscribeNewsletter();
			}, 10000);
		}

		// infinite scroll event
		window.onscroll = function(e) {
            e.preventDefault();
            e.stopPropagation();

			var productsList = $('#productsList');

			if ( productsList.find('.full-products').length == 0 ) {
				var offset = productsList.offset();
				offset = offset.top;
				var screen = window.innerHeight / 2;
				var pixelToEvent = offset + productsList.height();
				var currentPixel = getScrollTop() + screen;
				if ( pixelToEvent < (getScrollTop() + screen) && !$('#productsLoader').is(':visible') ) {
				  documentoScroll();
				}
			}
		};
    });

    return mCategory;
});