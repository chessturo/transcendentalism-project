import * as THREE from '/home/mitchell/dev/transcendentalism-project/node_modules/three/build/three.module.js';

let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//camera.lookAt(1,1,1);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);
var light = new THREE.PointLight();
light.position.set(5, 5, 5);

let scene1 = new THREE.Scene();
let materia11 = new THREE.MeshToonMaterial({ color: 0x00ff00 });
let cube1 = new THREE.Mesh(geometry, materia11);
scene1.add(cube1);
scene1.add(light.clone());

let scene2 = new THREE.Scene();
let materia12 = new THREE.MeshToonMaterial({ color: 0xaa00ff });
let cube2 = new THREE.Mesh(geometry, materia12);
scene2.add(cube2);
scene2.add(light);

camera.position.z = 5;

let start = Date.now();

let animate1 = function() {
  if (Date.now() - start < 5000) {
    requestAnimationFrame(animate1);
  } else {
    requestAnimationFrame(animate2);
  }

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  renderer.render(scene1, camera);
}

let animate2 = function() {
  requestAnimationFrame(animate2);

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  renderer.render(scene2, camera);
}

animate1();
