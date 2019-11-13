"use strict";
/* exported App */
class App {
    constructor(canvas, overlay) {
        this.canvas = canvas;
        this.overlay = overlay;

        // obtain WebGL context
        this.gl = canvas.getContext("webgl2", { alpha: false });
        if (this.gl === null) {
            throw new Error("Browser does not support WebGL2");
        }

        this.keysPressed = {};

        // serves as a registry for textures or models being loaded
        this.gl.pendingResources = {};
        // create a simple scene
        this.scene = new Scene(this.gl);
        this.score = this.scene.score

        this.resize();
    }

    // match WebGL rendering resolution and viewport to the canvas size
    resize() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.scene.resize(this.gl, this.canvas);

    }

    registerEventHandlers() {
        document.onkeydown = (event) => {
            //jshint unused:false
            this.keysPressed[keyNames[event.keyCode]] = true;
            if (this.keysPressed["R"]) {
                this.scene = new Scene(this.gl)
                this.resize();
            };
        };
        document.onkeyup = (event) => {
            //jshint unused:false
            this.keysPressed[keyNames[event.keyCode]] = false
        };
        this.canvas.onmousedown = (event) => {
            //jshint unused:false
        };
        this.canvas.onmousemove = (event) => {
            //jshint unused:false
            event.stopPropagation();
        };
        this.canvas.onmouseout = (event) => {
            //jshint unused:false
        };
        this.canvas.onmouseup = (event) => {
            //jshint unused:false
        };
        window.addEventListener('resize', () => this.resize());
        window.requestAnimationFrame(() => this.update());
    };

    // animation frame update
    update() {

        const pendingResourceNames = Object.keys(this.gl.pendingResources);
        if (pendingResourceNames.length === 0) {
            // animate and draw scene
            this.scene.update(this.gl, this.keysPressed);
            this.score = this.scene.score
            this.overlay.innerHTML = `Score: ${this.score}`;
        } else {
            this.overlay.innerHTML = `<font color="red">Loading: ${pendingResourceNames}</font>`;
        }

        // refresh
        window.requestAnimationFrame(() => this.update());
    }
}
