define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/cCheckout'),
        model = require('./model/mCheckout');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});