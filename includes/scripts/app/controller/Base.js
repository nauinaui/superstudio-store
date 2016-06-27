define(function () {
    function controllerBase(id) {
        this.id = id;
    }

    controllerBase.prototype = {
        setModel: function (model) {
            this.model = model;
        },

        render: function (bodyDom) {
            console.log(this.id + ' says "' + this.model.getTitle());
        }
    };

    return controllerBase;
});