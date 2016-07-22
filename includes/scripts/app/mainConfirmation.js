define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/cConfirmation'),
        model = require('./model/mConfirmation');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});