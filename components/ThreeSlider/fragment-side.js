export const fragmentShader = `varying vec2 vUv;

    uniform sampler2D currentImage;
    uniform sampler2D nextImage;
    uniform sampler2D disp;

    uniform float dispFactor;
    float intensity = 0.5;
    void main() {

        vec2 uv = vUv;

        vec4 disp = texture2D(disp, uv);

        vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*intensity), uv.y);
        vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*intensity), uv.y);

        vec4 _currentImage = texture2D(currentImage, distortedPosition);
        vec4 _nextImage = texture2D(nextImage, distortedPosition2);

        vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

        gl_FragColor = finalTexture;
    }`