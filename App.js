(function () {
    'use strict';

    var Scene = NRD['Scene'];
    var ParticleEmitter = NRD['ParticleEmitter'];


    function App () {

        this.canvas = document.getElementById('js-scene');

        this.scene = new Scene(this.canvas);

        this.rainEmitter = new ParticleEmitter(this.canvas.width / 2, 0, this.canvas.width);

        this.particleSpeedPrevious = this.rainEmitter.particleSpeed;

        this.particlesPerFramePrevious = this.rainEmitter.particlesPerFrame;

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.init();
    }


    App.prototype.init = function () {
        this.enable();
        this.scene.add(this.rainEmitter);
        this.scene.play();
        return this;
    };


    App.prototype.enable = function () {
        this.canvas.addEventListener('mouseenter', this._onMouseEnter);
        this.canvas.addEventListener('mousemove', this._onMouseMove);
        this.canvas.addEventListener('mouseleave', this._onMouseLeave);
        return this;
    };


    App.prototype._onMouseEnter = function (e) {
        this.particleSpeedPrevious = this.rainEmitter.particleSpeed;
        this.particlesPerFramePrevious = this.rainEmitter.particlesPerFrame;
        this.rainEmitter.width = 60;
    };


    App.prototype._onMouseMove = function (e) {
        var throttleFactor = e.offsetY / this.canvas.height;
        this.rainEmitter.particleSpeed = this.particleSpeedPrevious * throttleFactor * 1.5;
        this.rainEmitter.particlesPerFrame = Math.ceil(this.particlesPerFramePrevious * throttleFactor);
        this.rainEmitter.x = e.offsetX;
    };


    App.prototype._onMouseLeave = function (e) {
        this.rainEmitter.particleSpeed = this.particleSpeedPrevious;
        this.rainEmitter.particlesPerFrame = this.particlesPerFramePrevious;
        this.rainEmitter.x = this.canvas.width / 2;
        this.rainEmitter.width = this.canvas.width;
    };


    NRD['App'] = App;
}());
