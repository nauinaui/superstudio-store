//generic JS for all views
define(['jquery', 'bootstrap'], function ($, Bootstrap) {
    return {
        getBody: function () {
            return $('body');
        }
    }
});