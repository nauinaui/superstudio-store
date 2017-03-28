define(['./Base.js', '../libCommon.js'], function (Base, LibCommon) {
    var mGeneric = new Base('data for generic pages loaded');
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


		/**
		 * =================
		 * EVENTS
		 * =================
		 */
		
		// Show large image when clicking on main image and on secondary images thummbnails if device is not mobile
		$('.photogallery button[data-target="#largeImageModal"]').on('click', function(e) {
			if ( common.detectMobile() == false ) {
				var source = $(this).find('img').attr('src');
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
    });

    return mGeneric;
});