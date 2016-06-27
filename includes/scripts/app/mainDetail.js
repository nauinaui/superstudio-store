define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/cDetail'),
        model = require('./model/mDetail');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});