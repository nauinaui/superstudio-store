//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
require.config({
  baseUrl: 'includes/scripts/lib',
  paths: {
  	app: 				      '../app',
    jquery:           'jquery-1.12.1.min',
    bootstrap:        'bootstrap.min',
    bootstrap_slider: 'bootstrap-slider.min',
    plugins: 			    'Plugins',
    countdown:        'jquery.countdown.min',
    detect_mobile:    'detectmobilebrowser.min',
    zoom:             'zoom.min',
    recaptcha:        'https://www.google.com/recaptcha/api',
    skeuocard:        'cssua.min',
    blockui:          'blockUI',

  },
	
	shim: {
		"app": 				     ["jquery"],
    "bootstrap":       ["jquery"],
    "bootstrap_slider":["jquery"],
    "plugins": 			   ["jquery"],
    "countdown":		   ["jquery"],
    "zoom":            ["jquery"],
    "recaptcha":       ["jquery"],
    "skeuocard":       ["jquery"],
    "blockui":         ["jquery"]
	}
});