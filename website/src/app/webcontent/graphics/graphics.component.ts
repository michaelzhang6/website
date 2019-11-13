import { Component, OnInit, ElementRef } from '@angular/core';

declare var App: any;

@Component({
    selector: 'app-graphics',
    templateUrl: './graphics.component.html',
    styleUrls: ['./graphics.component.css']
})

export class GraphicsComponent implements OnInit {


    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.loadScripts("/assets/graphics/asteroids/", this.startGame);
    }

    ngOnDestroy() {
    }

    public loadScripts(gameFolder, gameFunction) {

        var isFound = false;
        var scripts = document.getElementsByTagName("script")
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("/assets/graphics")) {
                isFound = true;
                break;
            }
        }

        if (!isFound) {
            var dynamicScripts = [
                "WebGLMath/js/util.js",
                "WebGLMath/js/Mat4.js",
                "WebGLMath/js/Vec1.js",
                "WebGLMath/js/Vec2.js",
                "WebGLMath/js/Vec3.js",
                "WebGLMath/js/Vec4.js",
                "WebGLMath/js/Sampler2D.js",
                "WebGLMath/js/SamplerCube.js",
                "WebGLMath/js/VecArray.js",
                "WebGLMath/js/Vec1Array.js",
                "WebGLMath/js/Vec2Array.js",
                "WebGLMath/js/Vec3Array.js",
                "WebGLMath/js/Vec4Array.js",
                "WebGLMath/js/Mat4Array.js",
                "WebGLMath/js/SamplerArray2D.js",
                "WebGLMath/js/SamplerArrayCube.js",
                "WebGLMath/js/UniformProvider.js",
                "WebGLMath/js/ProgramReflection.js",
                "WebGLMath/js/customFormatting.js",

                "asteroids/js/keyNames.js",
                "asteroids/js/Shader.js",
                "asteroids/js/shaders/trafo-vs.glsl",
                "asteroids/js/shaders/background-vs.glsl",
                "asteroids/js/shaders/solid-fs.glsl",
                "asteroids/js/shaders/striped-fs.glsl",
                "asteroids/js/shaders/textured-fs.glsl",
                "asteroids/js/shaders/textured-vs.glsl",
                "asteroids/js/shaders/boom-vs.glsl",
                "asteroids/js/Program.js",
                "asteroids/js/TexturedProgram.js",
                "asteroids/js/TriangleGeometry.js",
                "asteroids/js/QuadGeometry.js",
                "asteroids/js/TexturedQuadGeometry.js",
                "asteroids/js/Scene.js",
                "asteroids/js/App.js",
                "asteroids/js/Material.js",
                "asteroids/js/Mesh.js",
                "asteroids/js/GameObject.js",
                "asteroids/js/OrthoCamera.js",
                "asteroids/js/Texture2D.js"
            ];

            for (var i = 0; i < dynamicScripts.length; i++) {
                let node = document.createElement('script');
                node.src = "/assets/graphics/" + dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                if (i == dynamicScripts.length - 1) {
                    node.onload = gameFunction
                }
                document.getElementsByTagName('head')[0].appendChild(node);
            }

        } else {
            gameFunction()
        }
    }

    startGame() {
        const canvas = document.getElementById('canvas');
        const overlay = document.getElementById("overlay");
        overlay.innerHTML = "WebGL";

        const gameApp = new App(canvas, overlay);
        gameApp.registerEventHandlers();

        let container = document.getElementById("graphicsContainer")
        let goals = document.createElement('p');
        let instructions = document.createElement('p');
        let description = document.createElement('p');
        goals.textContent = "Destroy as many asteroids as you can without getting hit!"
        instructions.textContent = "WASD to move, Enter to Shoot, R to Restart"
        description.textContent = "I created this asteroids game in my computer graphics class using OpenGL and JavaScript"
        container.appendChild(goals)
        container.appendChild(instructions)
        container.appendChild(description)
    }
}
