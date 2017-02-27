define(['./Base.js', '../libCommon.js', 'countdown'], function (Base, LibCommon, Countdown) {
	var mCategory = new Base('data for Page Category loaded');
    var common = new LibCommon();
    var paginateFrom = 1;
    var xivato = false;

    $(document).ready( function() {
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

		// Init countdowns from every promo
		var timers = $('.countdown').length;
		for (j = 0; j < timers; j++) {
			startCountdown('countdown'+(j+1));
		}

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

		$('#sortSelectMbl').on('change', function() {
			applyFilters();
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
				var option = priceMin + '-' + priceMax;
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
			// if ( !$(this).is('[disabled=disabled]') ) {
				applyFilters($(this));
			// }

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

		// Eames menu - change category
		$('.eames-menu .category-list button').click(function() {
			if ( !$(this).parent().is('.active') ) {
				$('.category-list li.active').removeClass('active');
				$(this).parent().addClass('active');
				// hide previous subcategory
				$('.subcategory-list').fadeOut(500);
				// disable category button click while categories are changing
				$('.category-list button').attr('disabled', 'disabled');
				// show current subcategory
				var family = $(this).attr('id').replace('Btn','');
				setTimeout(function(){
					$('.subcategory-list#' + family).fadeIn(500);
					$('.subcategory-list li.active').removeClass('active');
					$('.subcategory-list#' + family + ' li:first-child').addClass('active');
					// enable category button click again
					setTimeout(function(){
						$('.category-list button').removeAttr('disabled');
					}, 500);
				}, 500);
			}
		});

		// Eames menu - change subcategory
		$('.eames-menu .subcategory-list li').click(function() {
			if ( !$(this).is('.active') ) {
				$('.subcategory-list li.active').removeClass('active');
				$(this).addClass('active');
			}
		})

		/**
		 * =================
		 * TO EXECUTE WHEN INIT
		 * =================
		 */
		// toggleHeight('seoText', 'hide');

		// Read parameters from url and active current filters
		readFilters();

		// Eames menu for tower page
		// get parameters from url to load correct active menu elements
		if ( $('.eames-menu').length > 0 ) {
			var getUrlParameter = function getUrlParameter(sParam) {
			    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			        sURLVariables = sPageURL.split('&'),
			        sParameterName,
			        i;

			    for (i = 0; i < sURLVariables.length; i++) {
			        sParameterName = sURLVariables[i].split('=');

			        if (sParameterName[0] === sParam) {
			            return sParameterName[1] === undefined ? true : sParameterName[1];
			        }
			    }
			};

			var parametros = getUrlParameter('subcamp');

			if (parametros !== undefined) {
				parametros = parametros.split("-");
						
				if (parametros[1] === undefined) {
					parametros[1] = 'todos';
				}
				$('.category-list li.active').removeClass('active');
				$('.category-list li button#' + parametros[0] + 'Btn').parent().addClass('active');
				$('.subcategory-list').hide();
				$('.subcategory-list#' + parametros[0]).show();
				$('.subcategory-list#' + parametros[0] + ' li.' + parametros[1]).addClass('active');
			}	
		}
		
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
			if ( productsList.find('.full-products').length == 0 && productsList.find('.no-results').length == 0 ) {
				var offset = productsList.offset();
				offset = offset.top;
				var screen = window.innerHeight * 2;
				var pixelToEvent = offset + productsList.height();
				var currentPixel = getScrollTop() + screen;
				setTimeout(function(){
					if ( pixelToEvent < (getScrollTop() + screen) && !$('#productsLoader').is(':visible') ) {
						documentoScroll();
					} else if ( xivato == false ) {
						$('#productsLoader').collapse('hide');
					}
				}, 100);
			}
		};

		$( document ).ajaxStart(function() {
			xivato = true;
		});
		$( document ).ajaxStop(function() {
			xivato = false;
		});

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

		 /* Start countdown
		 * @param el: String Element where countdown will be placed
		 * @param date: String Determine when countdown will be finnished
		 */
		function startCountdown(el) {
			var time = $('#'+el).attr('data-time');
			var daysTxt = $('#'+el).find('.days span').text(),
				hoursTxt = $('#'+el).find('.hours span').text();			
				minutesTxt = $('#'+el).find('.minutes span').text();
				secondsTxt = $('#'+el).find('.seconds span').text();
			$('#'+el).countdown({
				date: time,
				render: function (data) {
					var el = $(this.el);
					el.empty()
						.append("<div>" + this.leadingZeros(data.days, 2) + "<span>"+ daysTxt +"</span>")
						.append("<div>" + this.leadingZeros(data.hours, 2) + "<span>"+ hoursTxt +"</span>")
						.append("<div>" + this.leadingZeros(data.min, 2) + "<span>"+ minutesTxt +"</span>")
						.append("<div>" + this.leadingZeros(data.sec, 2) + "<span>"+ secondsTxt +"</span>")
				}
			});
		}

		/**
		 * Show subscribing newsletter in lateral content
		 */
		function showSubscribeNewsletter() {
			var cookie = common.readCookie('email-subscription');
			if ( !$('#subscribeNewsletter').is('.show') && !$('body').is('.logged') && cookie == null ) {
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
			$('.delete-all-filters-btn').css('display','block');
			// $('.apply-filters-btn').removeAttr('disabled');
			
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
			// Delete active label
			if ( type == 'price' ) {
				$('.resultados').find('#'+type).remove();
			} else {
				$('.resultados').find('#'+type+'-'+value).remove();
			}
			if ( $('.resultados').find('.active-filter').length == 0 ) {
				$('#filtroInfo').show();
				$('.delete-all-filters-btn').hide();
				// $('.apply-filters-btn').attr('disabled', 'disabled');
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
			var currentPage = getParameterByName('camp', window.location.href);

			$('.resultados .active-filter').each(function() {
				var type = $(this).attr('id');
				type = type.split('-');
				if (type[0] === 'price') {
					type[0] = 'rango';
					var option = $(this).find('.text').text();
					// option = option.slice(0,-1); // this line only is used to delete the currency if there is written in label
					option = option.replace(',','-');
				} else {
					var option = type[1];
				}

				// check if this type has already any filter activated
				if (url.indexOf(type[0]) == -1) { // It's first value of this type
					if (i === 0) {
						url = url + '?' + type[0] + '=' + option;
					} else {
						url = url + '&' + type[0] + '=' + option;
					}
				} else { // There is another value activated of same type
					var arr = url.split(type[0]+'=');
					url = arr[0] + type[0] + '=' + option + ',' + arr[1];
				}
				i = i+1;
			});

			// Detect if current page has been previously filtered by a collection/style
			if ( !currentPage == '' ) {
				url = url.split('?');
				if ( i>0 ) { // there is any filter to active
					url = url[0] + '?camp='+ currentPage + '&' + url[1];
				} else{ // there isn't any filter to active but there is a 'camp' filter
					url = url[0] + '?camp='+ currentPage;
					i = i+1;
				}
			}

			// Put sort order in url parameters
			if ( $(window).width() > 767 ) { // desktop view
				var sort = $('#sortList label.active > input').attr('data-url');
				if ( $('#sortList label.active').is('.change-sort') ) {
					var asc = true;
				} else {
					var asc = false;
				}
			} else { // mobile view
				var sort = $('#sortSelectMbl option:selected').attr('data-url');
				var asc = $('#sortSelectMbl option:selected').attr('data-asc');
			}

			// if there isn't any active filter and it's only sort order
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
				if ( $('.read-more').length > 0 ) {
					$('html, body').animate({
				        scrollTop: $(".read-more").offset().top -100
				    }, 1000);	
				}

				url = url.split('&');

				for ( var i = 0, l = url.length; i < l; i++ ) {
					var filter = url[i].split('=');
					if ( filter[1].indexOf(',') == -1 ) { // if current filter doesn't have more than one active value 
						
						if ( filter[0] === 'camp' ) { // it's a category page previously filtered by a collection/style
							$('label[data-url="col"]').closest('.filter-container').hide();
						
						} else if ( filter[0] === 'finish' ) { // it's finish filter
							$('.filters-section .acabado div[value="'+ filter[1] +'"]').trigger('click');
						
						} else if ( filter[0] === 'rango' ) { // it's price filter
						    var range = filter[1];
						    range = range.split('-');
						    $('#priceMinInput').val(range[0]);
						    $('#priceMaxInput').val(range[1]);
						    enableFilter( range[0] + '-' + range[1], 'price', 'range');
						
						} else if ( filter[0] == 'orden' ) { // sort
							$('#sortList label.active').removeClass('active');
							$('#sortList label > input[data-url="' + filter[1] + '"]').parent().addClass('active');
							var sortForSelect = filter[1];
						
						} else if ( filter[0] == 'asc' ) { // sort direction
							// set desktop list
							if ( filter[1] == 'true' ) {
								$('#sortList label.active').addClass('change-sort');
							}
							// set mobile select
							var selectedValue = $('#sortSelectMbl option[data-url="'+sortForSelect+'"][data-asc="'+filter[1]+'"]').val();
							$('#sortSelectMbl').val(selectedValue);
						
						} else { //it's a normal filter
							var filterType = $('#filtersBox label[data-url="'+filter[0]+'"]').parent();
							filterType.next().find($('.filters-columns input[value="' + filter[1] + '"]')).trigger( 'click' );
						}
					} else { // if current filter has more than one active value 
						var values = filter[1].split(',');
						var j;
						for (j = 0; j < values.length; ++j) {
							if ( filter[0] === 'finish' ) { // it's finish filter
								$('.filters-section .acabado div[value="'+ values[j] +'"]').trigger('click');
							} else { //it's a normal filter
								var filterType = $('#filtersBox label[data-url="'+filter[0]+'"]').parent();
								filterType.next().find($('.filters-columns input[value="' + values[j] + '"]')).trigger( 'click' );
							}
						}
					}
				}
				//$('#filtersBox').collapse('show');
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
						if ( common.detectMobile() == true ) {
							contentsProd.find('.producto-box:not(.promo) .item:not(.mobile)').addClass('mobile');
						}
						$(document).find('.iconLoad').remove();
						paginateFrom++;
					}
					$('body').removeClass('disable-scroll');
					loader.collapse('hide');
					common.autoSelectFinish();
				}
			});
		}

		function getDocumentHeight() {
			var body = document.body;
			var html = document.documentElement;
			
			return Math.max(
				body.scrollHeight, body.offsetHeight,
				html.clientHeight, html.scrollHeight, html.offsetHeight
			);
		};

		function getScrollTop() {
			return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		}
    });

    return mCategory;
});