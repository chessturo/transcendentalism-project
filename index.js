let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var controls = new THREE.OrbitControls(camera);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);
var light = new THREE.PointLight();
let lightSphere = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
light.position.set(5, 5, 5);
lightSphere.position.set(5, 5, 5);

let ambientLight = new THREE.AmbientLight( 0x404040 );

let scene = new THREE.Scene();
let materia1 = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, materia1);
scene.add(cube);
scene.add(light);
scene.add(lightSphere);
scene.add(ambientLight);

camera.position.z = 10;

let start = Date.now();

let animate1 = function() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);

  requestAnimationFrame(animate1);
}

requestAnimationFrame(animate1);
