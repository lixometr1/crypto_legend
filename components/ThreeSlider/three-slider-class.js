import { gsap } from "gsap";
import * as THREE from "three";
import { fragmentShader } from "./fragment-side.js";
export class DisplacementSlider {
  constructor(opts) {
    this.parent = opts.parent;
    this.images = opts.images;
    this.slideId = 0;
    this.sliderImages = [];

    this.vertex = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
   `;
    this.fragment = fragmentShader;
    this.init();
  }
  updateSize() {
    this.canvasWidth = this.parent.clientWidth;
    this.canvasHeight = this.parent.clientHeight;
    // this.renderWidth = this.canvasWidth;
    // this.renderHeight = this.canvasHeight;

    this.renderWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    this.renderHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    this.canvasWidth = this.renderWidth;
    this.canvasHeight = this.renderHeight;
  }
  updateRatio() {
    const imageWidth = this.images[0].clientWidth;
    const imageHeight = this.images[0].clientHeight;
    const imageRatio = imageWidth / imageHeight;

    this.renderH = this.canvasHeight;
    this.renderW = this.renderH * imageRatio;
    const whiteSpaceX = this.canvasWidth - this.renderW;
    if (whiteSpaceX < 0) {
      // this.camera.position.x = -whiteSpaceX / 2;
    } else {
      console.log(2);
      this.renderW = this.canvasWidth;
      this.renderH = this.renderW / imageRatio;
      const whiteSpaceY = this.canvasHeight - this.renderH;
      // if (whiteSpaceY < 0) {
      //   this.camera.position.y = -whiteSpaceY / 2;
      // }
    }
  }
  init() {
    this.updateSize();
    this.renderer = new THREE.WebGLRenderer({
      antialias: false
    });

    let loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    this.images.forEach(img => {
      const image = loader.load(img.getAttribute("src") + "?v=" + Date.now());
      image.magFilter = image.minFilter = THREE.LinearFilter;
      image.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      this.sliderImages.push(image);
    });

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x23272a);
    this.camera = new THREE.OrthographicCamera(
      this.renderWidth / -2,
      this.renderWidth / 2,
      this.renderHeight / 2,
      this.renderHeight / -2,
      1,
      1000
    );

    this.camera.position.z = 1;
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        dispFactor: { type: "f", value: 0.0 },
        currentImage: { type: "t", value: this.sliderImages[0] },
        nextImage: { type: "t", value: this.sliderImages[1] }
      },
      vertexShader: this.vertex,
      fragmentShader: this.fragment,
      transparent: true,
      opacity: 1.0
    });

    this.geometry = new THREE.PlaneBufferGeometry(
      this.parent.offsetWidth,
      this.parent.offsetHeight,
      1
    );

    console.log(this.parent.offsetWidth, this.parent.offsetHeight);
    this.object = new THREE.Mesh(this.geometry, this.material);
    this.object.position.set(0, 0, 0);
    // console.log(this.object);
    this.scene.add(this.object);
    this.updateRatio();

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x23272a, 1.0);
    this.renderer.setSize(this.renderW, this.renderH);
    this.parent.appendChild(this.renderer.domElement);
    this.addEvents();

    window.addEventListener("resize", e => {
      this.updateSize();
      this.updateRatio();
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.renderW, this.renderH);
    });

    this.animate();
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.renderer.render(this.scene, this.camera);
  }
  autoplay(ms = 1500) {
    setInterval(() => {
      this.slideNext();
    }, ms);
  }
  addEvents() {
    this.isAnimating = false;
  }
  async slideNext() {
    let to = this.slideId + 1;
    if (to >= this.sliderImages.length) to = 0;
    await this.slideTo(to);
  }
  async slidePrev() {
    let to = this.slideId - 1;
    if (to < 0) to = this.sliderImages.length - 1;
    await this.slideTo(to);
  }
  async slideTo(idx) {
    if (this.isAnimating) return;
    this.slideId = idx;
    await this.changeSlide();
  }
  changeSlide() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.material.uniforms.nextImage.value = this.sliderImages[this.slideId];
      this.material.uniforms.nextImage.needsUpdate = true;
      return new Promise(resolve => {
        gsap.to(this.material.uniforms.dispFactor, {
          duration: 1,
          value: 1,
          ease: "Expo.easeInOut",
          onComplete: () => {
            this.material.uniforms.currentImage.value = this.sliderImages[
              this.slideId
            ];
            this.material.uniforms.currentImage.needsUpdate = true;
            this.material.uniforms.dispFactor.value = 0.0;
            this.isAnimating = false;
            resolve();
          }
        });
      });
    }
  }
}
