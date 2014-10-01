(function () {
    'use strict';

    window.NRD = window.NRD || {};


    function Scene (canvas) {

        this.canvas = canvas;

        this.context = canvas.getContext('2d');

        this.canvasObjects = [];

        this.requestId = -1;

        this.play = this.play.bind(this);

        this.init();
    }


    Scene.prototype.init = function () {
        this.updateAspectRatio();
        return this;
    };


    Scene.prototype.play = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.render();
        this.requestId = window.requestAnimationFrame(this.play);
        return this;
    };


    Scene.prototype.add = function (canvasObject) {
        this.canvasObjects.push(canvasObject);
        return this;
    };


    Scene.prototype.updateAspectRatio = function () {
        this.canvas.width = this.canvas.scrollWidth;
        this.canvas.height = this.canvas.scrollHeight;
        return this;
    };


    Scene.prototype.update = function () {
        var i = 0;
        var canvasObject;
        while ((canvasObject = this.canvasObjects[i++]) !== undefined) {
            canvasObject.update(this);
        }
        return this;
    };


    Scene.prototype.render = function () {
        var i = 0;
        var canvasObject;
        while ((canvasObject = this.canvasObjects[i++]) !== undefined) {
            canvasObject.render(this);
        }
        return this;
    };


    NRD['Scene'] = Scene;
}());
