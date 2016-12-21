define(['./Base.js', '../libCommon.js', 'bootstrap'], function (Base, LibCommon, Bootstrap) {
    var mGeneric = new Base('data for generic pages loaded');
    var common = new LibCommon();

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */


	/**
	 * =================
	 * EVENTS
	 * =================
	 */
	
	// Show large image when clicking on main image and on secondary images thummbnails if device is not mobile
	$('.photogallery button[data-target="#largeImageModal"]').on('click', function(e) {
		console.log('entro');
		if ( common.detectMobile() == false ) {
			var source = $(this).find('img').attr('src');
			console.log(source);
			source = source.replace('/min/','/max/');
			source = source.replace('m.jpg','.jpg');
			$('#largeImageModal .modal-content img').attr('src',source);
		} else {
			e.preventDefault();
			e.stopPropagation();
			$('#largeImageModal').modal({
				show: false
			});
		}
	});

	// $('.photogallery a[data-target="#largeImageModal"] img').on('click', function(e) {
	// 	console.log('entro a imatge');
	// });

	// $('#largeImageModal').on('shown.bs.modal', function () {
 //  		console.log('detecto levent a lobrir');
	// })

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		
    });

    return mGeneric;
});