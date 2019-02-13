let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let currentAnimationFrame;

let scene, camera;

let canvas = document.getElementsByTagName('canvas')[0];

function drivewaySphere() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  var controls = new THREE.OrbitControls(camera);
  controls.enableZoom = false;
  controls.enablePan = false;

  var driveway = new THREE.TextureLoader().load('driveway.jpg');
  let photoSphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshBasicMaterial({ map: driveway })
  );
  photoSphere.material.side = THREE.BackSide;
  photoSphere.scale.x = -1;

  scene = new THREE.Scene();
  scene.add(photoSphere);

  photoSphere.position.set(0, 0, 0);
  camera.position.set(0, 0, 0.0001);
  controls.update();
}

function render() {
  renderer.render(scene, camera);
  currentAnimationFrame = requestAnimationFrame(render);
}



// TEMP:
drivewaySphere();
currentAnimationFrame = requestAnimationFrame(render);



let currentSlide = 0;
//Each slide is [init, bool:shouldUpdate]
let slides = [[drivewaySphere, true]];

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 32) {
    cancelAnimationFrame(currentAnimationFrame);
    currentSlide++;
    if (currentSlide < slides.length) {
      slides[currentSlide][0]();

      //If shouldUpdate
      if (slides[currentSlide][1]) {
        currentAnimationFrame = requestAnimationFrame(render);
      }

    } else {
      //End.
    }
  }
})
