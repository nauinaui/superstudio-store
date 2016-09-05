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
	 * Category page - Show active filter in top of filter box
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

		$('.color[value="'+value+'"].selected, .material[value="'+value+'"].selected').removeClass('selected');
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
			$(this).addClass('selected');
		}
	});

	// Category page - Disable filter
	$('.active-filter .close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		disableFilter(null, $(this).parent().attr('id'))
	});

	//Hide lateral contact form -newsletter-
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