define(function (require) {
    var $           = require('jquery'),
        lib         = require('./lib'),
        libCommon   = require('./libCommon'),
        libEvents   = require('./libEvents'),
        controller  = require('./controller/cCategory'),
        model       = require('./model/mCategory');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});