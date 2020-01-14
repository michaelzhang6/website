Shader.source[document.currentScript.src.split('js/shaders/')[1]] = `#version 300 es 
  precision highp float;

  out vec4 fragmentColor;
  in vec4 rayDir;

  uniform struct {
  	samplerCube envTexture;
  } material;

  uniform struct {
    mat4 viewProjMatrix;  
    mat4 rayDirMatrix;
    vec3 position;
  } camera;

  uniform struct {
    mat4 surface;
    mat4 clipper;
    vec3 materialColor;
    vec3 lightWoodColor;
    vec3 darkWoodColor;
  } clippedQuadrics[40];

  uniform struct {
    mat4 surface;
    mat4 clipper;
    mat4 clipper2;
    vec3 materialColor;
    vec3 lightWoodColor;
    vec3 darkWoodColor;
  } clippedQuadrics2[10];

  uniform struct{
  	vec4 position;
    vec3 powerDensity;
  } lights[8];

vec3 shade(vec3 normal, vec3 lightDir, vec3 viewDir, vec3 powerDensity, vec3 materialColor,
    vec3 specularColor, float shininess) {
    float cosa = clamp( dot(lightDir, normal),0.0,1.0);
    vec3 halfway = normalize(viewDir + lightDir);
    float cosDelta = clamp(dot(halfway, normal), 0.0, 1.0);

    return powerDensity * materialColor * cosa + powerDensity * specularColor * pow(cosDelta, shininess);
}

float snoise(vec3 r) {
  vec3 s = vec3(7502, 22777, 4767);
  float f = 0.0;
  for(int i=0; i<16; i++) {
    f += sin( dot(s - vec3(32768, 32768, 32768), r)
                                 / 65536.0);
    s = mod(s, 32768.0) * 2.0 + floor(s / 32768.0);
  }
  return f / 32.0 + 0.5;
}

float intersectClippedQuadric(mat4 A, mat4 B, vec4 e, vec4 d) {
    float a = dot(d*A,d);
    float b = dot(d*A, e) + dot(e*A, d);
    float c = dot(e*A, e);
    float discriminant = b*b-4.0*a*c;
    if (discriminant < 0.0) {
      return -1.0;
    }
    float t1 = (-b + sqrt(discriminant)) / (2.0*a);
    float t2 = (-b - sqrt(discriminant)) / (2.0*a);

    vec4 r1 = e+d*t1;
    vec4 r2 = e+d*t2;

    if (dot(r1*B,r1) > 0.0) {
      t1 = -1.0;
    }
    if (dot(r2*B,r2) > 0.0) {
      t2 = -1.0;
    }
      
    return (t1<0.0)?t2:((t2<0.0)?t1:min(t1,t2));
}

float intersect2ClippedQuadric(mat4 A, mat4 B, mat4 C, vec4 e, vec4 d) {
    float a = dot(d*A,d);
    float b = dot(d*A, e) + dot(e*A, d);
    float c = dot(e*A, e);
    float discriminant = b*b-4.0*a*c;
    if (discriminant < 0.0) {
      return -1.0;
    }
    float t1 = (-b + sqrt(discriminant)) / (2.0*a);
    float t2 = (-b - sqrt(discriminant)) / (2.0*a);

    vec4 r1 = e+d*t1;
    vec4 r2 = e+d*t2;

    if (dot(r1*B,r1) > 0.0) {
      t1 = -1.0;
    }
    if (dot(r2*B,r2) > 0.0) {
      t2 = -1.0;
    }

    if (dot(r1*C,r1) > 0.0) {
      t1 = -1.0;
    }
    if (dot(r2*C,r2) > 0.0) {
      t2 = -1.0;
    }
      
    return (t1<0.0)?t2:((t2<0.0)?t1:min(t1,t2));
}

bool findBestHit(vec4 e, vec4 d, out float bestT, out int bestIndex) {
    bestT = 10000.0;
    for (int i = 0; i < clippedQuadrics.length(); i++) {
        float t = intersectClippedQuadric(clippedQuadrics[i].surface, clippedQuadrics[i].clipper, e, d);
        if (t > 0.0 && t < bestT) {
            bestIndex = i;
            bestT = t;
        }
    }
    for (int i = 0; i < 3; i++) {
        float t = intersect2ClippedQuadric(clippedQuadrics2[i].surface, clippedQuadrics2[i].clipper, clippedQuadrics2[i].clipper2, e, d);
        if (t > 0.0 && t < bestT) {
            bestIndex = clippedQuadrics.length() + i;
            bestT = t;
        }
    }
    return (bestT != 10000.0);
}

void main(void) {
    vec4 e = vec4(camera.position, 1);		 //< ray origin
  	vec4 d = vec4(normalize(rayDir).xyz, 0); //< ray direction

    float bestT;
    int bestIndex;
    if (!findBestHit(e,d,bestT, bestIndex)) {
        fragmentColor = texture(material.envTexture, d.xyz );
        gl_FragDepth = 0.9999999;
    } else {
        vec4 hit = e + d *bestT;
        mat4 A;
        if (bestIndex >= clippedQuadrics.length()) {
            A = clippedQuadrics2[bestIndex].surface;
        } else {
            A = clippedQuadrics[bestIndex].surface;
        }
        vec3 normal = normalize((hit*A+A*hit).xyz);
        if (dot(normal, d.xyz) > 0.0 ) {
            normal = -normal;
        }

        if (bestIndex >= clippedQuadrics.length()) {
            fragmentColor.rgb = clippedQuadrics2[bestIndex-clippedQuadrics.length()].materialColor;
            // float w;
            // if (bestIndex == clippedQuadrics.length()) {
            //     w = fract(hit.z *2.0);
            // } else {
            //     w = fract(hit.x *2.0);
            // }
            // fragmentColor.rgb = mix(clippedQuadrics2[bestIndex-clippedQuadrics.length()].materialColor, vec3(0,.4,0), w);
        }
        // tree
        else if (clippedQuadrics[bestIndex].lightWoodColor.x == 85.0/255.0) {
            float w = fract(hit.x * 8.0 + pow(
                snoise(hit.xyz * 20.0), 10.0) * 70.0
            );
            fragmentColor.rgb = mix(clippedQuadrics[bestIndex].lightWoodColor, 
                            clippedQuadrics[bestIndex].darkWoodColor, w);
        // floor
        } else if (clippedQuadrics[bestIndex].lightWoodColor.x == 157.0/255.0) {
            float w = fract(hit.x * 2.0 + pow(
                snoise(hit.xyz * 10.0), 14.0) * 20.0
            );
            fragmentColor.rgb = mix(clippedQuadrics[bestIndex].lightWoodColor, 
                            clippedQuadrics[bestIndex].darkWoodColor, w);
        } else {
            fragmentColor.rgb = clippedQuadrics[bestIndex].materialColor;
        }
        fragmentColor.a = 1.0;
        vec4 ndcHit = hit*camera.viewProjMatrix;
        gl_FragDepth = ndcHit.z/ndcHit.w*0.5+0.5;

        for (int i = 0; i < 2; i++) {
            vec3 lightDiff = lights[i].position.xyz - hit.xyz * lights[i].position.w;
            vec3 lightDir = normalize(lightDiff);
            vec3 viewDir = normalize(-d.xyz);
            float distanceSquared = dot(lightDiff, lightDiff);
            vec3 powerDensity = lights[i].powerDensity / distanceSquared;
            // for cone light, dot light direction and light diff, if angle is above threshold

            float bestShadowT;
            int bestShadowIndex;
            vec4 hitOffset = hit + vec4(normal, 0) * 0.01;
            bool shadowRayHitSomething = findBestHit(hitOffset, vec4(lightDir,0), bestShadowT, bestShadowIndex);

            if (!shadowRayHitSomething || bestShadowT * lights[i].position.w > sqrt(dot(lightDiff, lightDiff))) {
                // add light source contribution
                fragmentColor.rgb += shade(normal, lightDir, viewDir, powerDensity,
                vec3(1,1,1), vec3(0,0,0), 0.0);
            }

            
    }
    }
    
  }

`;