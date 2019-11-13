Shader.source[document.currentScript.src.split('js/shaders/')[1]] = `#version 300 es
  in vec4 vertexPosition;
  in vec4 vertexNormal;
  in vec2 vertexTexCoord;
  out vec4 modelPosition;
  out vec4 texCoord;

  uniform struct {
  	mat4 modelMatrix;
    vec2 phase;
  } gameObject;

  uniform struct {
    mat4 viewProjMatrix;
  } camera;

  void main(void) {
  	texCoord = vec4(vertexTexCoord.x * .167 + .167 * gameObject.phase.x, vertexTexCoord.y * .167 + .167 * gameObject.phase.y, 0,0);
    modelPosition = vertexPosition;
    gl_Position = vertexPosition * gameObject.modelMatrix * camera.viewProjMatrix;
  }
`;