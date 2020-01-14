class ClippedQuadric2 extends UniformProvider {
    constructor(id, ...programs) {
        super(`clippedQuadrics2[${id}]`);

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
        this.clipperOriginal1 = new Mat4();
        this.clipperOriginal2 = new Mat4();

        this.rotationMatrix = new Mat4();

        this.modelMatrix = new Mat4();
        this.modelMatrixInverse = new Mat4();

        this.addComponentsAndGatherUniforms(...programs);
    }

    transform(T) {
        var copyT = T.clone()
        var copyT2 = T.clone()

        this.surface = this.surfaceOriginal.clone();
        var A = this.surface;
        T.invert();    // T is now T-1
        A.premul(T);   // A is now T-1 * A
        T.transpose(); // T is now T-1T
        A.mul(T);

        this.clipper = this.clipperOriginal1.clone();
        var B = this.clipper;
        copyT.invert();    // T is now T-1
        B.premul(copyT);   // A is now T-1 * A
        copyT.transpose(); // T is now T-1T
        B.mul(copyT);

        this.clipper2 = this.clipperOriginal2.clone();
        var C = this.clipper2;
        copyT2.invert();    // T is now T-1
        C.premul(copyT2);   // A is now T-1 * A
        copyT2.transpose(); // T is now T-1T
        C.mul(copyT2);
    }

    makeUnitCubeX() {
        this.surfaceOriginal.set(
            1, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, -3);
        this.clipperOriginal1.set(
            0, 0, 0, 0,
            0, 1, 0, 3,
            0, 0, 0, 0,
            0, 0, 0, 0);
        this.clipperOriginal2.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 3,
            0, 0, 0, 0);
    }

    makeUnitCubeY() {
        this.surfaceOriginal.set(
            0, 0, 0, 0,
            0, 1, 0, 3,
            0, 0, 0, 0,
            0, 0, 0, 0);
        this.clipperOriginal1.set(
            1, 0, 0, 3,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0);
        this.clipperOriginal2.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 3,
            0, 0, 0, 0);
    }

    makeUnitCubeZ() {
        this.surfaceOriginal.set(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, -3);
        this.clipperOriginal1.set(
            1, 0, 0, 3,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0);
        this.clipperOriginal2.set(
            0, 0, 0, 0,
            0, 1, 0, 3,
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