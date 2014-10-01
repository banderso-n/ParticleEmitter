(function () {
    'use strict';

    window.NRD = window.NRD || {};


    function CanvasObject (x, y) {

        this.x = x;

        this.y = y;

    }


    CanvasObject.prototype.render = function (scene) {

        return this;
    };


    CanvasObject.prototype.update = function (scene) {

        return this;
    };


    NRD['CanvasObject'] = CanvasObject;
}());
