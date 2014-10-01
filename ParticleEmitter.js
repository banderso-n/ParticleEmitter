(function () {
    'use strict';

    var CanvasObject = NRD['CanvasObject'];


    function ParticleEmitter (x, y, width) {
        CanvasObject.call(this, x, y);

        this.width = width;

        this.particleSpeed = 7;

        this.particlesPerFrame = 4;

        this.particles = [];

    }
    ParticleEmitter.prototype = Object.create(CanvasObject.prototype);
    ParticleEmitter.prototype.constructor = CanvasObject;


    ParticleEmitter.prototype.render = function (scene) {
        var i = 0;
        var particle;
        while ((particle = this.particles[i++]) !== undefined) {
            particle.render(scene);
        }
        return this;
    };


    ParticleEmitter.prototype.update = function (scene) {
        var i = 0;
        var x;
        var y;
        var particle;

        for (; i !== this.particlesPerFrame; i++) {
            x = Math.random() * this.width + this.x - (this.width / 2);
            y = this.y;
            this.particles.push(new Particle(x, y));
        }

        i = this.particles.length;
        while ((particle = this.particles[--i]) !== undefined) {
            if (particle.y > scene.context.canvas.height) {
                this.particles.splice(i, 1);
                continue;
            }
            particle.y = particle.y + this.particleSpeed;
        }
    };


    function Particle (x, y) {
        CanvasObject.call(this, x, y);

        this.width = 3;

        this.height = 13;

        this.color = 'rgba(30, 150, 240, 0.2)';

    }
    Particle.prototype = Object.create(CanvasObject.prototype);
    Particle.prototype.constructor = Particle;


    Particle.prototype.render = function (scene) {
        scene.context.fillStyle = this.color;
        scene.context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        return this;
    };


    NRD['ParticleEmitter'] = ParticleEmitter;
}());
