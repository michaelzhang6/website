"use strict";
/* exported Scene */
class Scene extends UniformProvider {
    constructor(gl) {
        super("scene");
        this.programs = [];

        this.vsTextured = new Shader(gl, gl.VERTEX_SHADER, "textured-vs.glsl");
        this.fsTextured = new Shader(gl, gl.FRAGMENT_SHADER, "textured-fs.glsl");
        this.vsBoom = new Shader(gl, gl.VERTEX_SHADER, "boom-vs.glsl");

        this.programs.push(
            this.texturedProgram = new TexturedProgram(gl, this.vsTextured, this.fsTextured));
        this.vsBackground = new Shader(gl, gl.VERTEX_SHADER, "background-vs.glsl");
        this.programs.push(
            this.backgroundProgram = new TexturedProgram(gl, this.vsBackground, this.fsTextured));
        this.programs.push(
            this.boomProgram = new TexturedProgram(gl, this.vsBoom, this.fsTextured));

        this.texturedQuadGeometry = new TexturedQuadGeometry(gl);

        this.backgroundMaterial = new Material(this.backgroundProgram);
        this.backgroundMaterial.colorTexture.set(new Texture2D(gl, "/assets/graphics/media/background.jpg"));
        this.backgroundMesh = new Mesh(this.backgroundMaterial, this.texturedQuadGeometry);
        this.background = new GameObject(this.backgroundMesh);
        this.background.update = function () { };

        this.raiderMaterial = new Material(this.texturedProgram);
        this.raiderMaterial.colorTexture.set(new Texture2D(gl, "/assets/graphics/media/raider.png"));
        this.raiderMesh = new Mesh(this.raiderMaterial, this.texturedQuadGeometry);
        this.avatar = new GameObject(this.raiderMesh);
        this.avatar.position.set(-13, -13)

        this.gameObjects = [];
        this.asteroidMaterial = new Material(this.texturedProgram);
        this.asteroidMaterial.colorTexture.set(new Texture2D(gl, "/assets/graphics/media/asteroid.png"));
        this.asteroidMesh = new Mesh(this.asteroidMaterial, this.texturedQuadGeometry);

        this.boomMaterial = new Material(this.boomProgram);
        this.boomMaterial.colorTexture.set(new Texture2D(gl, "/assets/graphics/media/boom.png"));
        this.boomMesh = new Mesh(this.boomMaterial, this.texturedQuadGeometry);

        this.flames = []
        this.flameMaterial = new Material(this.texturedProgram)
        this.flameMaterial.colorTexture.set(new Texture2D(gl, "/assets/graphics/media/flames.png"))
        this.flameMesh = new Mesh(this.flameMaterial, this.texturedQuadGeometry)
        this.createFlames()

        this.bolts = []
        this.boltMaterial = new Material(this.texturedProgram)
        this.boltMaterial.colorTexture.set(new Texture2D(gl, "/assets/graphics/media/bolt.png"))
        this.boltMesh = new Mesh(this.boltMaterial, this.texturedQuadGeometry)

        this.score = 0

        this.genericMove = function (t, dt, colliders) {
            // PRACTICAL TODO
            const acceleration = new Vec3(this.force).
                mul(this.invMass);

            this.velocity.addScaled(dt, acceleration);
            this.velocity.mul(this.backDrag ** dt);
            this.position.addScaled(dt, this.velocity);

            const angularAcceleration = this.torque * this.invAngularMass
            this.angularVelocity += dt * angularAcceleration
            this.angularVelocity *= (this.angularDrag ** dt)
            this.orientation += dt * this.angularVelocity

            const aheadVector = new Vec3(Math.cos(this.orientation), Math.sin(this.orientation), 0)
            const aheadVelocity = aheadVector.times(aheadVector.dot(this.velocity))
            const sideVelocity = this.velocity.minus(aheadVelocity)
            this.velocity = new Vec2()
            this.velocity.addScaled(this.backDrag ** dt, aheadVelocity)
            this.velocity.addScaled(this.sideDrag ** dt, sideVelocity)
        };

        for (let i = 0; i < 64; i++) {
            this.createAsteroid()
        }

        this.avatar.backDrag = 0.93;
        this.avatar.sideDrag = 0.7;
        this.avatar.angularDrag = 0.7;
        this.avatar.control = function (t, dt, keysPressed, colliders) {
            // PRACTICAL TODO
            this.force = new Vec3()
            this.thrust = 0
            if (keysPressed.W) {
                this.thrust += 15
            }
            if (keysPressed.S) {
                this.thrust -= 15
            }
            this.torque = 0
            if (keysPressed.A) {
                this.torque += 1
            }
            if (keysPressed.D) {
                this.torque -= 1
            }

            const aheadVector = new Vec3(Math.cos(this.orientation), Math.sin(this.orientation), 0)
            this.force.addScaled(.1, aheadVector.mul(this.thrust))

        };
        this.avatar.move = this.genericMove;

        this.timeAtFirstFrame = new Date().getTime();
        this.timeAtLastFrame = this.timeAtFirstFrame;
        this.lastBoltFired = 0

        this.camera = new OrthoCamera(...this.programs);
        this.addComponentsAndGatherUniforms(...this.programs);

        gl.enable(gl.BLEND);
        gl.blendFunc(
            gl.SRC_ALPHA,
            gl.ONE_MINUS_SRC_ALPHA);
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

        this.camera.position = this.avatar.position
        this.camera.update();

        // clear the screen
        gl.clearColor(0.3, 0.0, 0.3, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        this.background.draw(this, this.camera)

        this.avatar.control(t, dt, keysPressed);
        this.avatar.move(t, dt)
        this.avatar.update()
        this.shipCollision(t)
        this.explosion(this.avatar, t)
        this.avatar.draw(this, this.camera)
        this.fireBolt(keysPressed, t)

        for (const gameObject of this.gameObjects) {
            gameObject.move(t, dt, this.gameObjects);
            this.asteroidCollisionHandler(gameObject, t);
        }

        for (const gameObject of this.gameObjects) {
            this.explosion(gameObject, t)
            gameObject.update();
        }

        for (const gameObject of this.gameObjects) {
            gameObject.draw(this, this.camera);
        }

        for (const bolt of this.bolts) {
            bolt.move(t, dt)
            bolt.update()
            bolt.draw(this, this.camera)
        }

        for (let i = 0; i < 4; i++) {
            this.flames[i].update()
            if (keysPressed.W) {
                this.flames[0].draw(this, this.camera)
                this.flames[1].draw(this, this.camera)
            }
            if (keysPressed.A) {
                this.flames[3].draw(this, this.camera)
            }
            if (keysPressed.D) {
                this.flames[2].draw(this, this.camera)
            }
        }
    }

    setBoomPhase(ob, t) {
        const phase = Math.floor(t * 60 % 36)
        const phaseX = phase % 6
        const phaseY = (phase - phaseX) / 6
        ob.phase = new Vec2(phaseX, phaseY)
    }

    asteroidCollisionHandler(gameObject, t) {
        for (const ob of this.gameObjects) {
            if (ob === gameObject) {
                continue
            }
            this.elasticCollision(gameObject, ob)
        }
        for (const bolt of this.bolts) {
            const posDiff = bolt.position.minus(gameObject.position)
            if (posDiff.length() < (bolt.collisionRadius + gameObject.collisionRadius)) {
                gameObject.startExplosion = t
                this.score += 1
                this.bolts.splice(this.bolts.indexOf(bolt), 1)
                for (let i = 0; i < 4; i++) {
                    this.createAsteroid()
                }
            }
        }
    }

    elasticCollision(firstOb, secondOb) {
        const posDiff = firstOb.position.minus(secondOb.position)
        if (posDiff.length() < (firstOb.collisionRadius + secondOb.collisionRadius)) {

            const normal = posDiff.direction()
            // move apart
            firstOb.position.addScaled(.01, normal)
            secondOb.position.addScaled(-.01, normal)

            const relVelocity = firstOb.velocity.minus(secondOb.velocity)
            const restitutionCoeff = 1

            // elastic collision
            const impMag = normal.dot(relVelocity) / (firstOb.invMass + secondOb.invMass) * (1 + restitutionCoeff)

            firstOb.velocity.addScaled(-impMag * firstOb.invMass, normal)
            secondOb.velocity.addScaled(impMag * secondOb.invMass, normal)

        }
    }

    shipCollision(t) {
        for (const asteroid of this.gameObjects) {
            if (asteroid.exploding) {
                continue
            }
            const posDiff = this.avatar.position.minus(asteroid.position)
            if (posDiff.length() < (this.avatar.collisionRadius + asteroid.collisionRadius)) {
                this.avatar.control = function () { };
                this.avatar.move = function () { };
                this.avatar.startExplosion = t;
            }
        }
    }

    createAsteroid() {
        const asteroid = new GameObject(this.asteroidMesh);
        asteroid.position.setRandom(
            new Vec3(this.avatar.position.x - 17, this.avatar.position.y - 17, 0),
            new Vec3(this.avatar.position.x + 17, this.avatar.position.y + 17, 0)
        );
        const posDiff = this.avatar.position.minus(asteroid.position)
        if (posDiff.length() < 3 * (this.avatar.collisionRadius + asteroid.collisionRadius)) {
            asteroid.position.setRandom(
                new Vec3(this.avatar.position.x + 5, this.avatar.position.y + 5, 0),
                new Vec3(this.avatar.position.x + 10, this.avatar.position.y + 10, 0)
            )
        }
        asteroid.velocity.setRandom(new Vec3(-3, -3, 0), new Vec3(3, 3, 0));
        asteroid.angularVelocity = Math.random(-2, 2);
        this.gameObjects.push(asteroid);
        asteroid.backDrag = 0.96;
        asteroid.sideDrag = 0.94;
        asteroid.angularDrag = 0.9;
        asteroid.move = this.genericMove;
    }

    explosion(gameObject, t) {
        if (gameObject.exploding) {
            this.setBoomPhase(gameObject, t)
            if ((t - gameObject.exploding) > 1) {
                this.gameObjects.splice(this.gameObjects.indexOf(gameObject), 1)
            }
        }
        if (gameObject.startExplosion) {
            const explosion = new GameObject(this.boomMesh)
            explosion.position = gameObject.position
            explosion.exploding = t
            this.gameObjects.splice(this.gameObjects.indexOf(gameObject), 1)
            this.gameObjects.push(explosion)
        }
    }

    createFlames() {
        for (let i = 0; i < 4; i++) {
            const flame = new GameObject(this.flameMesh)
            flame.scale = new Vec3(.3, .7, 0)
            if (i < 2) {
                // back thrusters
                flame.orientation = Math.PI / 2
                flame.position = new Vec3(-1.5, i / 1.3 - .4, 0)
            } else if (i == 2) {
                // left thrusters 
                flame.orientation = Math.PI / 4
                flame.position = new Vec3(-1, 1.25, 0)
            } else if (i == 3) {
                // right thrusters
                flame.orientation = 3 * Math.PI / 4
                flame.position = new Vec3(-1, -1.25, 0)
            }
            flame.parent = this.avatar
            this.flames.push(flame)
        }
    }

    fireBolt(keysPressed, t) {
        if (keysPressed.ENTER && (t - this.lastBoltFired > 1.5)) {
            const bolt = new GameObject(this.boltMesh)
            bolt.scale = new Vec3(.3, .3, 0)
            bolt.position = new Vec3(this.avatar.position)
            bolt.orientation = this.avatar.orientation
            bolt.collisionRadius = .3
            const shipAheadVector = new Vec3(
                Math.cos(this.avatar.orientation),
                Math.sin(this.avatar.orientation),
                0
            )
            bolt.velocity = new Vec3().addScaled(10, shipAheadVector)
            bolt.move = this.genericMove
            this.bolts.push(bolt)
            this.lastBoltFired = t
        }
    }
}
