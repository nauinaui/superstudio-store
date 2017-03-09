//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
require.config({
    waitSeconds: 20,
    urlArgs: "v=1.1.7",
    baseUrl: '/includes/scripts/lib', // /new-portada
    paths: {
      	app: 			  '../app',
        jquery:           'jquery-1.12.1.min',
        bootstrap:        'bootstrap.min',
        bootstrap_slider: 'bootstrap-slider.min',
        plugins: 		  'Plugins',
        countdown:        'jquery.countdown.min',
        detect_mobile:    'detectmobilebrowser.min',
        zoom:             'zoom.min',
        recaptcha:        'https://www.google.com/recaptcha/api',
        blockui:          'blockUI',
        modernizr:        'modernizr',
        placeholder:      'placeholder.min',
        aplazame:         'https://aplazame.com/static/aplazame.js',
        // stripe:           'stripe-v2.min',
        doofinder:        'https://cdn.doofinder.com/media/js/doofinder-classic.latest.min', // .js
        validate:         'jquery.validate.min',
        validateES:       'localization/messages_es.min',
        validateFR:       'localization/messages_fr.min',
        validateIT:       'localization/messages_it.min',
        validateDE:       'localization/messages_de.min',
        validateNL:       'localization/messages_nl.min',
        validatePL:       'localization/messages_pl', 
        validatePT:       'localization/messages_pt_PT.min',
    },
	
	shim: {
    	"app":             ["jquery"],
        "bootstrap":       { "deps" :['jquery'] },
        "bootstrap_slider":{ "deps" :['jquery', 'bootstrap'] },
        "plugins": 		   ["jquery"],
        "countdown":	   ["jquery"],
        "zoom":            ["jquery"],
        "recaptcha":       ["jquery"],
        "blockui":         ["jquery"],
        "modernizr":       ["jquery"],
        "placeholder":     ["jquery"],
        "aplazame":        ["jquery"],
        // "stripe":          ["jquery"],
        "validate":        ["jquery"],
        "validateES":      ["jquery", "validate"],
        "validateFR":      ["jquery", "validate"],
        "validateIT":      ["jquery", "validate"],
        "validateDE":      ["jquery", "validate"],
        "validateNL":      ["jquery", "validate"],
        "validatePL":      ["jquery", "validate"],
        "validatePT":      ["jquery", "validate"]
	},
});