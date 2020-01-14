"use strict";
/* exported Scene */
class Scene extends UniformProvider {
    constructor(gl) {
        super("scene");
        this.programs = [];
        this.gameObjects = [];

        this.fsTextured = new Shader(gl, gl.FRAGMENT_SHADER, "textured-fs.glsl");
        this.vsTextured = new Shader(gl, gl.VERTEX_SHADER, "textured-vs.glsl");
        this.programs.push(
            this.texturedProgram = new TexturedProgram(gl, this.vsTextured, this.fsTextured));

        this.vsQuad = new Shader(gl, gl.VERTEX_SHADER, "quad-vs.glsl");
        this.fsTrace = new Shader(gl, gl.FRAGMENT_SHADER, "trace-fs.glsl");
        this.fsShow = new Shader(gl, gl.FRAGMENT_SHADER, "show-fs.glsl");

        this.programs.push(
            this.traceProgram = new TexturedProgram(gl, this.vsQuad, this.fsTrace));
        this.programs.push(
            this.showProgram = new TexturedProgram(gl, this.vsQuad, this.fsShow));

        this.texturedQuadGeometry = new TexturedQuadGeometry(gl);

        this.timeAtFirstFrame = new Date().getTime();
        this.timeAtLastFrame = this.timeAtFirstFrame;

        this.traceMaterial = new Material(this.traceProgram);
        this.envTexture = new TextureCube(gl, [
            "media/nightsky.jpg",
            "media/nightsky.jpg",
            "media/nightsky.jpg",
            "media/nightsky.jpg",
            "media/nightsky.jpg",
            "media/nightsky.jpg",]
        );
        this.traceMaterial.envTexture.set(this.envTexture);
        this.traceMesh = new Mesh(this.traceMaterial, this.texturedQuadGeometry);

        this.traceQuad = new GameObject(this.traceMesh);
        this.gameObjects.push(this.traceQuad);

        this.slowpokeMaterial = new Material(this.texturedProgram);
        this.slowpokeMaterial.colorTexture.set(new Texture2D(gl, "media/slowpoke/YadonDh.png"));
        this.eyeMaterial = new Material(this.texturedProgram);
        this.eyeMaterial.colorTexture.set(new Texture2D(gl, "media/slowpoke/YadonEyeDh.png"));
        this.mesh = new MultiMesh(gl, "media/slowpoke/Slowpoke.json",
            [this.slowpokeMaterial, this.eyeMaterial]);

        this.clippedQuadrics = [];
        this.clippedQuadrics2 = [];
        this.createAvatar();
        for (var i = 0; i < 9; i++) {
            this.makeTree(this.getRndInteger(-40, -20), this.getRndInteger(-40, -20));
        }
        this.makeFloor();

        this.lights = [];
        this.lights.push(this.pointLight = new Light(this.lights.length, ...this.programs));
        this.pointLight.position.set(0, 9.03, 0, 1).normalize();
        this.pointLight.powerDensity.set(.05, .05, .041);

        this.lights.push(this.dirLight = new Light(this.lights.length, ...this.programs));
        this.dirLight.position.set(-100, 30, 0, 0).normalize();
        this.dirLight.powerDensity.set(.1, .1, .1);

        this.camera = new PerspectiveCamera(...this.programs);
        this.camera.update();
        this.addComponentsAndGatherUniforms(...this.programs);

        gl.enable(gl.DEPTH_TEST);
    }

    resize(gl, canvas) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        this.camera.setAspectRatio(canvas.width / canvas.height);
    }

    update(gl, keysPressed) {
        //jshint bitwise:false
        //jshint unused:false

        const timeAtThisFrame = new Date().getTime();
        const dt = (timeAtThisFrame - this.timeAtLastFrame) / 1000.0;
        const t = (timeAtThisFrame - this.timeAtFirstFrame) / 1000.0;
        this.timeAtLastFrame = timeAtThisFrame;
        //this.time.set(t);
        this.time = t;

        this.pointLight.position.set(this.avatarX.position.x + 1.3 *
            Math.sin(this.avatarX.yaw),
            this.avatarX.position.y + 0.2,
            this.avatarX.position.z + 1.3 * Math.cos(this.avatarX.yaw), 1).normalize();

        this.camera.yaw = this.avatarX.yaw + Math.PI;

        this.camera.position.set(this.avatarX.position.x + 4 * Math.sin(this.camera.yaw),
            this.avatarX.position.y + 1,
            this.avatarX.position.z + 4 * Math.cos(this.camera.yaw))

        this.camera.update()

        // clear the screen
        gl.clearColor(0.3, 0.0, 0.3, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        //this.camera.move(dt, keysPressed);

        for (const gameObject of this.gameObjects) {
            gameObject.control(t, dt, keysPressed, []);
        }

        for (const gameObject of this.gameObjects) {
            gameObject.move(t, dt);
        }

        for (const gameObject of this.gameObjects) {
            gameObject.update();
        }

        for (const clippedQuadric of this.clippedQuadrics) {
            clippedQuadric.control(t, dt, keysPressed, []);
        }

        for (const clippedQuadric of this.clippedQuadrics) {
            clippedQuadric.move(t, dt);
        }

        for (const clippedQuadric2 of this.clippedQuadrics2) {
            clippedQuadric2.control(t, dt, keysPressed, []);
        }

        for (const clippedQuadric2 of this.clippedQuadrics2) {
            clippedQuadric2.move(t, dt);
        }

        for (const clippedQuadric of this.clippedQuadrics) {
            clippedQuadric.update()
        }

        for (const clippedQuadric2 of this.clippedQuadrics2) {
            clippedQuadric2.update()
        }

        for (const gameObject of this.gameObjects) {
            gameObject.draw(this, this.camera, ...this.lights, ...this.clippedQuadrics, ...this.clippedQuadrics2);
        }

    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    makeTree(x, z) {
        const firColor = new Vec3(0, .15, 0);
        var trunk = new ClippedQuadric(this.clippedQuadrics.length, ...this.programs);
        trunk.makeUnitCylinder();
        trunk.position = new Vec3(x, 1, z);
        trunk.darkWoodColor = new Vec3(43 / 255, 30 / 255, 22 / 255);
        trunk.lightWoodColor = new Vec3(85 / 255, 60 / 255, 42 / 255);
        trunk.invMass = 0.00001;
        this.clippedQuadrics.push(trunk);

        var bottomTree = new ClippedQuadric(this.clippedQuadrics.length, ...this.programs);
        bottomTree.makeUnitCone();
        bottomTree.clipperOriginal.set(
            0, 0, 0, 0,
            0, 1, 0, 5,
            0, 0, 0, 0,
            0, 0, 0, 0,
        );
        bottomTree.position = new Vec3(x, 7, z);
        bottomTree.materialColor = firColor;
        bottomTree.invMass = 0.00001;
        this.clippedQuadrics.push(bottomTree);

        var middleTree = new ClippedQuadric(this.clippedQuadrics.length, ...this.programs)
        middleTree.makeUnitCone();
        middleTree.clipperOriginal.set(
            0, 0, 0, 0,
            0, 1, 0, 3.75,
            0, 0, 0, 0,
            0, 0, 0, 0,
        );
        middleTree.position = new Vec3(x, 8, z);
        middleTree.materialColor = firColor;
        this.clippedQuadrics.push(this.middleTree =
            middleTree);

        var topTree = new ClippedQuadric(this.clippedQuadrics.length, ...this.programs);
        topTree.makeUnitCone();
        topTree.clipperOriginal.set(
            0, 0, 0, 0,
            0, 1, 0, 2.5,
            0, 0, 0, 0,
            0, 0, 0, 0
        );
        topTree.position = new Vec3(x, 9, z);
        topTree.materialColor = firColor;
        this.clippedQuadrics.push(topTree);
    }

    makeFloor() {
        this.clippedQuadrics.push(
            this.floor = new ClippedQuadric(this.clippedQuadrics.length, ...this.programs));
        this.floor.makePlane();
        this.floor.position = new Vec3(0, -2.7, 0);
        this.floor.darkWoodColor = new Vec3(106 / 255, 75 / 255, 53 / 255);
        this.floor.lightWoodColor = new Vec3(157 / 255, 126 / 255, 104 / 255);
    }

    createAvatar() {
        this.avatar = [];
        this.clippedQuadrics2.push(this.avatarX = new ClippedQuadric2(this.clippedQuadrics2.length, ...this.programs));
        this.avatarX.makeUnitCubeX();
        this.avatarX.clipperOriginal2.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, -9);
        this.avatar.push(this.avatarX);

        this.clippedQuadrics2.push(this.avatarY = new ClippedQuadric2(this.clippedQuadrics2.length, ...this.programs));
        this.avatarY.makeUnitCubeY();
        this.avatarY.clipperOriginal1.set(
            1, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, -3);
        this.avatarY.clipperOriginal2.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, -9);
        this.avatar.push(this.avatarY);

        this.clippedQuadrics2.push(this.avatarZ = new ClippedQuadric2(this.clippedQuadrics2.length, ...this.programs));
        this.avatarZ.surfaceOriginal.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, -9);
        this.avatarZ.clipperOriginal1.set(
            1, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, -3);
        this.avatarZ.clipperOriginal2.set(
            0, 0, 0, 0,
            0, 1, 0, 3,
            0, 0, 0, 0,
            0, 0, 0, 0);
        this.avatar.push(this.avatarZ);

        this.clippedQuadrics2.push(this.headlight = new ClippedQuadric2(this.clippedQuadrics.length, ...this.programs));
        this.headlight.surfaceOriginal.set(
            10, 0, 0, 0,
            0, 10, 0, 0,
            0, 0, -1, 0,
            0, 0, 0, -.00001);
        this.headlight.clipperOriginal1.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, -1,
            0, 0, -4, 0);
        this.headlight.clipperOriginal2.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0);

        this.avatar.push(this.headlight);

        const genericMove = function (t, dt) {
            const ahead = new Vec3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
            this.velocity.addScaled(dt * this.invMass, this.force);
            this.position.addScaled(dt, this.velocity);
            this.angularVelocity += dt * this.invAngularMass * this.torque;
            this.yaw += dt * this.angularVelocity;
            const aheadVelocityMagnitude = ahead.dot(this.velocity);
            const aheadVelocity = ahead.times(aheadVelocityMagnitude);
            const sideVelocity = this.velocity.minus(aheadVelocity);
            this.velocity.set(0, 0, 0);
            this.velocity.addScaled(Math.pow(this.backDrag, dt), aheadVelocity);
            this.velocity.addScaled(Math.pow(this.sideDrag, dt), sideVelocity);
            this.angularVelocity *= Math.pow(this.angularDrag, dt);
        };

        for (const avatarComponent of this.avatar) {
            avatarComponent.materialColor = new Vec3(.1, .2, .3);
            avatarComponent.scale.set(.3, .3, .3);
            avatarComponent.position.set(-30, -0.7, 0);
            avatarComponent.yaw = Math.PI;
            avatarComponent.backDrag = 0.9;
            avatarComponent.sideDrag = 0.5;
            avatarComponent.angularDrag = 0.5;
            avatarComponent.control = function (t, dt, keysPressed, colliders) {
                this.thrust = 0;
                if (keysPressed.UP) {
                    this.thrust += 2;
                }
                if (keysPressed.DOWN) {
                    this.thrust -= 2;
                }
                this.torque = 0;
                if (keysPressed.LEFT) {
                    this.torque += 1;
                }
                if (keysPressed.RIGHT) {
                    this.torque -= 1;
                }
                let ahead = new Vec3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
                this.force = ahead.times(this.thrust);

                const relativeVelocity = new Vec2();
                let diff = new Vec3();
                for (let i = 0; i < colliders.length; i++) {
                    const other = colliders[i];
                    if (other === this || this.floor || this.headlight) {
                        continue;
                    }
                    diff.set(this.position).sub(other.position);
                    const dist2 = diff.dot(diff);
                    if (dist2 < 4) {
                        diff.mul(1.0 / Math.sqrt(dist2));
                        this.position.addScaled(0.05, diff);
                        other.position.addScaled(-0.05, diff);
                        let tangent = diff.cross(new Vec3(0, 1, 0));
                        let vi = this.velocity;
                        let bi = this.angularVelocity;
                        let vj = other.velocity;
                        let bj = other.angularVelocity;
                        relativeVelocity.set(vi).sub(vj).addScaled(-bi - bj, tangent).mul(0.5);
                        const impulseLength = diff.dot(relativeVelocity);
                        diff.mul(impulseLength * 1.5 /*restitution*/);
                        const frictionLength = tangent.dot(relativeVelocity);
                        tangent.mul(frictionLength * 0.5 /*friction*/);
                        vi.sub(diff).sub(tangent);
                        vj.add(diff).add(tangent);
                        this.angularVelocity += frictionLength /* *radius*/;
                        other.angularVelocity += frictionLength  /* *radius*/;
                    }
                }
            };
            avatarComponent.move = genericMove;
            avatarComponent.update()
        }

    }
}
