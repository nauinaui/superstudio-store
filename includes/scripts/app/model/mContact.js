define(['./Base.js', '../libCommon.js', 'recaptcha'], function (Base, LibCommon, Recaptcha) {
    var mContact = new Base('data for Page Detail loaded');
    var common = new LibCommon();

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */

    function isCaptchaOk(form) {
        var v = grecaptcha.getResponse();
        if(v.length == 0) {
            $('#verificationGroup > div').append('<label id="textareaMessage-error" class="error" for="textareaMessage">El captcha es erróneo</label>');
            return false;
        }
        if(v.length != 0) {
            $('#verificationGroup > div .error').remove();
            return true; 
        }
    }

	/**
	 * =================
	 * EVENTS
	 * =================
	 */

	// Contact form - Send information
	$('#contactFormButton').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var validator = $('#contactForm').validate();
		if ( validator.form() == true ) {
			if (isCaptchaOk()==true) {
	            var productID 	= $('body').attr('data-product-id'),
	            	name 		= $('#inputName').val(),
	            	email		= $('#inputEmail').val(),
	            	phone		= $('#inputPhone').val(),
	            	message 	= $('#textareaMessage').val();

	            common.blockUI();
	            $.ajax({
					type:'GET',
					url:'/includes/web/plugin_contacto.asp',
					data:'nombre=' + name + '&email=' + email + '&telefono=' + phone + '&mensaje=' + message,
					success: function(data){
						common.unblockUI();
						console.log(data);
						if (data == 'true') {
							$('#sentContactInfoAlert').collapse('show');							
						} else {
							$('#sentContactInfoAlertError').collapse('show');
						}
						setTimeout(function(){
							$('#sentContactInfoAlert').collapse('hide');
							$('#sentContactInfoAlertError').collapse('hide');
						}, 5000);
					}
			   	});
            }
		}
	});

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		
		var verifyCallback = function(response) {
			alert(response);
		};
		var widgetId1;
		var onloadCallback = function() {
			// Renders the HTML element with id 'example1' as a reCAPTCHA widget.
			// The id of the reCAPTCHA widget is assigned to 'widgetId1'.
			widgetId1 = grecaptcha.render('example1', {
			  'sitekey' : '6LccYR4TAAAAAGH2j14AkvUCYzzb2EZrgx2A6Y5G',
			  'callback' : verifyCallback,
			  'theme' : 'clean'
			});
		};
    });

    return mContact;
});