define(function (require) {
    var $           = require('jquery'),
        lib         = require('./lib.js'),
        libCommon   = require('./libCommon.js'),
        libEvents   = require('./libEvents.js'),
        controller  = require('./controller/Base.js'),
        model       = require('./model/mDefault.js');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller = new controller();
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});