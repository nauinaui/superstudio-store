define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/cPrivacy'),
        model = require('./model/mPrivacy');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});