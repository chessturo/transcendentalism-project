let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let currentAnimationFrame;

let scene, camera;

let canvas = document.getElementsByTagName('canvas')[0];
let div = document.getElementsByTagName('div')[0];

function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, delay);
  })
}

function render() {
  renderer.render(scene, camera);
  currentAnimationFrame = requestAnimationFrame(render);
}

async function drivewaySphere() {
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

async function title() {
  div.innerHTML = " \
  <div style='margin-left: auto; margin-right: auto; vertical-align: middle;'> \
    <h1 style='font-family: \"Cormorant\", serif; font-weight: 300; font-style: italic; font-size: 10vh;' >Transcendentalism</h1> \
    <h4 style='font-family: \"Cormorant\", serif; font-weight: 300; font-size: 3vh;' >By: Mitchell Levy</h4> \
  </div> \
  ";
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function intro() {
  div.innerHTML = " \
  <div style='margin-left: auto; margin-right: auto; vertical-align: middle; padding: 1vw'> \
    <p style='font-family: \"Cormorant\", serif; font-weight: 300; font-size: 2vh;' > \
      Transcendentalism is cool...\
    </p> \
  </div> \
  ";
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function stars() {
  div.innerHTML = " \
  <div style='margin-left: auto; margin-right: auto; vertical-align: middle; padding: 1vw'> \
    <p style='font-family: \"Cormorant\", serif; font-weight: 300; font-size: 2vh;' > \
      Transcendentalism is cool...\
    </p> \
  </div> \
  ";
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function credits() {
  div.innerHTML = " \
  <div style='margin-left: auto; margin-right: auto; vertical-align: middle; padding: 1vw'> \
    <p style='font-family: \"Cormorant\", serif; font-weight: 300; font-size: 2vh;' > \
      Built using the amazing <a href=\"https://threejs.org/\">Threejs</a> library <br /><br /> \
      This fancy font is Cormorant, which can be found <a href=\"https://fonts.google.com/specimen/Cormorant\">here</a> <br /><br /> \
      Lorem ipsum dolor sit amet, consectetur adipiscing elio. Phasellus vel erat in libero consectetur feugiat nec vel magna. Cras bibendum ante ac arcu tempor molestie. Etiam a pellentesque turpis, ut commodo sapien. Nulla tincidunt vestibulum dui, at consectetur turpis ultricies in. Nullam sollicitudin porta urna, eu tristique risus fermentum porttitor. Suspendisse diam risus, porta ac placerat eget, accumsan nec eros. Vestibulum aliquet nibh est, et ultrices turpis imperdiet eget. In  porttitor mi ac turpis dapibus aliquet. <br /><br /> \
      \
      Vivamus non mi est. Sed tellus quam, maximus sit amet finibus et, dignissim vel tortor. Fusce ac accumsan sapien. Curabitur tristique consequat sem a auctor. In sit amet magna at lacus faucibus pellentesque. Sed venenatis, metus facilisis maximus laoreet, diam orci eleifend ipsum, quis tempor sapien nisl vel metus. Praesent vestibulum odio ultrices, auctor tellus a, molestie quam. <br /><br /> \
      \
      Etiam faucibus mauris ac augue accumsan, ac porttitor dolor fringilla. Vestibulum finibus, tortor a maximus lobortis, tellus lorem auctor mauris, ac consequat risus augue et mauris. Praesent sed risus laoreet justo lacinia euismod vitae at ex. Donec sollicitudin magna et posuere efficitur. Suspendisse in convallis tortor, at sollicitudin libero. Integer gravida mi ipsum, eget cursus libero dapibus et. Nullam ligula quam, auctor nec bibendum vel, ullamcorper quis dolor. Duis facilisis, massa in ultricies convallis, turpis nisl vestibulum nisi, non cursus risus massa iaculis velit. Sed finibus, felis mattis imperdiet laoreet, ligula justo auctor sapien, eu maximus odio nulla in sapien. Morbi molestie orci nibh, in tristique magna faucibus ut. Donec sit amet lectus id orci posuere eleifend at eget urna. Suspendisse mollis euismod tincidunt. Suspendisse potenti. Proin vehicula odio nec neque mattis faucibus. Nullam sodales dolor eget ex condimentum tristique.<br /><br /> \
      \
      Quisque ultricies tempus dapibus. Quisque sagittis vehicula dui vel pulvinar. Nullam vestibulum suscipit purus eu gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam placerat mollis gravida. Morbi euismod sem diam, et varius ligula commodo non. Cras porta ex et libero convallis, quis suscipit lacus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat lectus vel enim dapibus feugiat. Nullam feugiat metus eu varius lobortis. Nam et maximus quam. Duis sodales justo justo, sed consequat tortor condimentum accumsan. Donec a posuere ante. <br /><br /> \
      \
      Vivamus hendrerit non nisl eu vulputate. Integer odio nisi, congue malesuada nisl in, tempor rhoncus est. Duis ut faucibus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed magna ac leo ullamcorper vehicula in vel velit. Quisque vitae sollicitudin metus. Nullam elit risus, molestie ut mattis eget, porttitor nec lorem. Proin maximus efficitur eros, nec mattis velit sodales sit amet.<br /><br />  \
    </p> \
  </div> \
  ";
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}


// TEMP:
title();



let currentSlide = 0;
//Each slide is [init, bool:shouldUpdate]
let slides = [[title, false], [intro, false], [stars, false], [drivewaySphere, true], [credits, false]];

document.addEventListener("contextmenu", function handleContextMenu(event) {
  event.preventDefault();
});

document.addEventListener('keydown', async function(event) {
  if (event.keyCode == 32) {
    //If it's a threejs slide
    if (slides[currentSlide][1]) {
      cancelAnimationFrame(currentAnimationFrame);
    } else {
      div.classList.toggle("fade");
      await sleep(250);
      div.innerHTML = "";
      div.style.display = "none";
    }

    currentSlide++;

    if (currentSlide < slides.length) {
      slides[currentSlide][0]();

      //If shouldUpdate
      if (slides[currentSlide][1]) {
        currentAnimationFrame = requestAnimationFrame(render);
      }

    } else {
      canvas.style.display = "none";
      div.classList.toggle("fade");
      await sleep(250);
      div.innerHTML = "";
      div.style.display = "none";
    }
  }
})
