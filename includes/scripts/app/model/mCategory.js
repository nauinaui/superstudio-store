define(['./Base', '../libCommon', 'bootstrap_slider', 'plugins'], function (Base, LibCommon, Bootstrap_slider, Plugins) {
    var mCategory = new Base('This is the data for Page Category');

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
			$element.css('height', "60px");
			$element.animate({ height: heightFull }, 500);
		} else if (action === 'hide') {
			$element.css('height', heightFull);
			$element.animate({ height: "60px" }, 500);
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
	 * Category page - Show active filter in top of filter box
	 * @param option: String Selected option to show
	 * @param value: String Option value as identifier
	 * @param type: Type of filter
	 */
	function enableFilter(option, value, type) {
		var $resultados = $('.resultados');
		$('#filtroInfo').hide();
		$('.apply-filters-btn').removeAttr('disabled');
		// modify price filter to new values
		if ( value === "price" && $resultados.find('.active-filter#price').length > 0 ) {
			$resultados.find('#price span.text').remove();
			$resultados.find('#price').append('<span class="text">'+option+'</span>');
		} else { // create new filter although is price value or not
			$('#filtersBox .resultados').append('<div class="alert alert-danger alert-dismissible active-filter active" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>')
			$resultados.find('.active-filter:not([id])').attr('id', value);
			$resultados.find('.active-filter#'+value).append('<span class="text">'+option+'</span>');
			$resultados.append($('#'+value));
		}
		// Add coin symbol
		if ( value === "price" ) {
			$('.resultados').find('#price span.text').append('€');
		}
		// Add data of filter type
		$resultados.find('.active-filter#'+value).attr('data-type', type);
	}
	
	/**
	 * Category page - Show active filter in top of filter box
	 * @param option:String Selected option to hide
	 */
	function disableFilter(option, value) {
		$('.resultados').find('#'+value).remove();
		if ( $('.resultados').find('.active-filter').length == 0 ) {
			$('#filtroInfo').show();
			$('.apply-filters-btn').attr('disabled', 'disabled');
		}
		if ( $('input[value="'+value+'"]').is(':checked') ) {
			$('input[value="'+value+'"]').attr('checked', false);
		}
		if ( value == "price" ) {
			$('#priceRange').data('slider').refresh();
		}

		$('.color[value="'+value+'"].selected, .material[value="'+value+'"].selected').removeClass('selected');
	}

	function applyFilters() {
		if ( !$(this).is('[disabled=disabled]') ) {
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
				if (i === 0) {
					url = url + '?' + type + '=' + option;
				} else {
					url = url + '&' + type + '=' + option;
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
			url = url + '&orden=' + sort + '&asc=' + asc;
			// refresh page with parameters
			window.location.href = url;
		}
	}

	function readFilters() {
		var url = window.location.href;
		url = url.split('?');
		url = url[1];

		if ( !url == '' ) {
			url = url.split('&');

			for ( var i = 0, l = url.length; i < l; i++ ) {
				var filter = url[i].split('=');
				if ( filter[0] === 'finish' ) { // it's finish filter
					$('.filters-section .acabado div[value="'+ filter[1] +'"]').trigger('click');
				} else if ( filter[0] === 'rango' ) { // it's price filter
				    var range = filter[1];
				    range = range.split('-');
				    $('#priceRange').attr('data-slider-value', '[' + range[0] + ',' + range[1] + ']');
				    enableFilter( range[0] + ',' + range[1], 'price', 'range');
				} else if ( filter[0] == 'orden' ) { // sort
					$('#sortList label.active').removeClass('active');
					$('#sortList label > input[data-url="' + filter[1] + '"]').parent().addClass('active');
				} else if ( filter[0] == 'asc' ) {
					if ( filter[1] == 'true' ) {
						$('#sortList label.active').addClass('change-sort');
					}
				} else {
					$('.filters-columns input[value="' + filter[1] + '"]').trigger( 'click' );
				}
			}
			$('#filtersBox').collapse('show');
		}
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
		var colorName = $(this).attr('value');
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
	});

	// Show active filters (checkbox type)
	$('#filtersBox input[type="checkbox"]').change(function() {
	    var type = $(this).closest('.filter-container').find('.filter-label label').attr('data-url');
	    if(this.checked) {
	        enableFilter($(this).parent().attr('title'), $(this).val(), type);
	    } else {
	    	disableFilter($(this).parent().attr('title'), $(this).val());
	    }
	});

	// Show active filters (price type)
	$('#priceRange').on('slideStop', function() {
		var value = "price";
	    var type = $(this).closest('.filter-container').find('.filter-label label').attr('data-url');
		enableFilter( $(this).attr('value'), value, type);
	});

	// Show active filters (color/material type)
	$('.acabado .color, .acabado .material').on('click', function() {
		if ( $(this).hasClass('selected') ) {
			disableFilter( $(this).attr('data-title'), $(this).attr('value') );
		} else {
		    var type = $(this).closest('.filter-container').find('.filter-label label').attr('data-url');
			enableFilter( $(this).attr('data-title'), $(this).attr('value'), type );
			$(this).addClass('selected');
		}
	});

	// Disable filter
	$('.resultados').on('click', '.active-filter .close', function(e) {
		e.preventDefault();
		e.stopPropagation();
		disableFilter(null, $(this).parent().attr('id'))
	});

	// Refresh page with parameters in URL to filter
	$('.apply-filters-btn').on('click', function() {
		applyFilters();
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
		toggleHeight('seoText', 'hide');

		// Read paramters from url and active current filters
		readFilters();

		//Category page - Price range filter with slider
		$('#priceRange').slider();  

		// Show subscribe newsletter - only if not mobile
		var common = new LibCommon;
		if ( common.detectMobile() == false ) {
			setTimeout(function(){
				showSubscribeNewsletter();
			}, 10000);
		}	
    });

    return mCategory;
});