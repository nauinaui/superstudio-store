define(function (require) {
    var $           = require('jquery'),
        lib         = require('./lib.js'),
        libCommon   = require('./libCommon.js'),
        libEvents   = require('./libEvents.js'),
        controller  = require('./controller/cCheckout-old.js'),
        model       = require('./model/mCheckout-old.js');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});