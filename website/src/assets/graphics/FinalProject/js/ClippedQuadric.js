class ClippedQuadric extends UniformProvider {
    constructor(id, ...programs) {
        super(`clippedQuadrics[${id}]`);

        this.position = new Vec3(0, 0, 0);
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.scale = new Vec3(1, 1, 1);

        this.parent = null;

        this.move = function () { };
        this.control = function () { };
        this.force = new Vec3();
        this.torque = 0;
        this.velocity = new Vec3();
        this.invMass = 1;
        this.backDrag = 1;
        this.sideDrag = 1;
        this.invAngularMass = 1;
        this.angularVelocity = 0;
        this.angularDrag = 1;

        this.surfaceOriginal = new Mat4();
        this.clipperOriginal = new Mat4();

        this.rotationMatrix = new Mat4();

        this.modelMatrix = new Mat4();
        this.modelMatrixInverse = new Mat4();

        this.addComponentsAndGatherUniforms(...programs);
    }

    transform(T) {
        var copyT = T.clone()
        this.surface = this.surfaceOriginal.clone();
        var A = this.surface;
        T.invert();    // T is now T-1
        A.premul(T);   // A is now T-1 * A
        T.transpose(); // T is now T-1T
        A.mul(T);

        this.clipper = this.clipperOriginal.clone();
        var B = this.clipper;
        copyT.invert();    // T is now T-1
        B.premul(copyT);   // A is now T-1 * A
        copyT.transpose(); // T is now T-1T
        B.mul(copyT);

    }

    makeUnitCylinder() {
        this.surfaceOriginal.set(
            .5, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, .5, 0,
            0, 0, 0, -1);
        this.clipperOriginal.set(
            0, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, -10);
    }

    makePlane() {
        this.surfaceOriginal.set(
            0, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, -.8);
        this.clipperOriginal.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0);
    }

    makeUnitSphere() {
        this.surfaceOriginal.set(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, -1);
        this.clipperOriginal.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0);
    }

    makeUnitCone() {
        this.surfaceOriginal.set(
            1, 0, 0, 0,
            0, -1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 0);
        this.clipperOriginal.set(
            0, 0, 0, 0,
            0, 1, 0, 6,
            0, 0, 0, 0,
            0, 0, 0, 0);
    }

    update() {
        this.modelMatrix.set().
            scale(this.scale).
            rotate(this.roll).
            rotate(this.pitch, 1, 0, 0).
            rotate(this.yaw, 0, 1, 0).
            translate(this.position);

        this.transform(this.modelMatrix);
    }
}