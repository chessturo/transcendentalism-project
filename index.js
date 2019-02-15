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

let textSlideOpen = "<div style='margin-left: auto; margin-right: auto; vertical-align: middle; padding: 5vw'><p style='font-family: \"Cormorant\", serif; font-weight: 300; font-size: 5vh; margin: 0;'>";
let textSlideClose = "</p></div>";


//This is a complete mess, and should be refactored. Unfortunately, ain't nobody got time for that.

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
  div.innerHTML = textSlideOpen + " \
    <span style='font-size: 6vh;'>Transcendentalism</span> is, at its core, about how one <i>experiences the world.</i> \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function transcendIntro1() {
  div.innerHTML = textSlideOpen + " \
    Transcendentalist ideology posits that the mind creates experiences; the mind itself is a lens through which we view the world. \
    Rather than being a blank tablet that the world molds, each individual person's experiences are shaped by innate factors. \
    Despite this, Transcendentalism holds that divinity does exist, but is within everything: nature, the works of man, and man itself.  \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function transcendIntro2() {
  div.innerHTML = textSlideOpen + " \
    Much of the work of the Transcendentalists is designed to explain this relationship between the divine and man, as well as show how experiences are shaped by individuals. <br /><br /> \
    Transcendentalism hinges upon the idea that the mind itself has some innate perspective, and this perspective acts upon how individuals experience the world, as opposed to the mind being a <i>tabula rasa</i>, or \"blank slate,\" which is impressed wholly by experiences. \
    In other words, in the classic question of whether the mind is formed by nature or nurture, Transcendentalism firmly answers nature (Goodman). \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function transcendIntro3() {
  div.innerHTML = textSlideOpen + " \
    This idea is based in the work of Immanuel Kant; he called this idea the, \"Copernican Revolution in philosophy\" (Goodman). \
    To reject the empiricist movement's idea of the tabula rasa, he used what he called <i>transcendental arguments.</i> \
    For example, Kant rejected the tabula rasa by claiming that one can only experience the world under a framework provided by the mind. \
    \"It must be the mind's structuring, Kant argues, that makes experience possible\" (\"Immanuel Kant: Metaphysics\"); \
    therefore, the mind cannot be entirely based upon experiences, as having a consciousness is a prerequisite of having experiences in the first place. <br /><br /> \
    This influence shaped much of Transcendentalist thought, specifically their ideas that truth and divinity could be uncovered through individual experience. \
    Because experience is shaped through the mind, and consciousness itself is divine, they asserted that individual experience would help attain a connection to this universal truth and divinity. \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}


async function transcendIntroDemo() {
  div.innerHTML = textSlideOpen + " \
    One simple example of how our minds alters our experience is looking at how our brains mask our eye's blind spot. <br /> \
    To demonstrate: <br /> \
    1) Hold your right thumb out at arm's length. <br /> \
    2) Put the tip of your thumb directly beneath the dot on your screen. <br /> \
    3) Close your left eye. <br /> \
    4) Slowly move your arm to the right, keeping your eye on the dot. <br />  \
    </p> \
    <div style=\"font-size: 10vh; text-align: center; margin-left: auto; margin-right: auto;\">&sdot;</div> <br /> \
    <p style='font-family: \"Cormorant\", serif; font-weight: 300; font-size: 5vh; margin: 0;'> \
    After you move your arm about twenty degrees off of center, you should notice that your thumb has disappeared. \
    Notably, your mind just fills this blind spot with whatever color surrounds it, meaning that you don't often notice the blind spot at all. \
    While this example is fairly trivial, it showcases a simple, yet very subtle way your mind falsifies information and how your mind can and does change what you experience. \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function transcendIntro4() {
  div.innerHTML = textSlideOpen + " \
    Returning to the Transcendentalists, it is important to note that the Transcendentalists felt that people had abandoned their connection with nature and individual experience. \
    Indeed, Emerson wrote that, \"we are now so far from the road to truth, that religious teachers dispute and hate each other, and speculative men are esteemed unsound and frivolous\" (Emerson 215). <br /><br /> \
    Much of Transcendentalist writing seems to focus on solving this problem, with Emerson's Nature attempting to take its reader on a journey to inquire, \"to what end is nature?\" (Emerson 215). \
    As Transcendental philosophy hinges on the idea of individual experience, the writings produced by this movement are often experiences in themselves, rather than prescriptive guides on living life, which would run counter to many of the movement's ideals. \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function stars() {
  div.innerHTML = textSlideOpen + " \
    Emerson said something about stars. That's pretty cool. \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}

async function credits() {
  div.innerHTML = textSlideOpen + " \
    Built using the amazing <a href=\"https://threejs.org/\">Threejs</a> library <br /><br /> \
    This fancy font is Cormorant, which can be found <a href=\"https://fonts.google.com/specimen/Cormorant\">here</a> <br /><br /> \
    Lorem ipsum dolor sit amet, consectetur adipiscing elio. Phasellus vel erat in libero consectetur feugiat nec vel magna. Cras bibendum ante ac arcu tempor molestie. Etiam a pellentesque turpis, ut commodo sapien. Nulla tincidunt vestibulum dui, at consectetur turpis ultricies in. Nullam sollicitudin porta urna, eu tristique risus fermentum porttitor. Suspendisse diam risus, porta ac placerat eget, accumsan nec eros. Vestibulum aliquet nibh est, et ultrices turpis imperdiet eget. In porttitor mi ac turpis dapibus aliquet. <br /><br /> \
  " + textSlideClose;
  div.style.cssText = "display: flex; align-items: center;";
  await sleep(50);
  div.classList.toggle("fade");
}


// TEMP:
title();



let currentSlide = 0;
//Each slide is [init, bool:shouldUpdate]
let slides = [
  [title, false],
  [intro, false],

  [transcendIntro1, false],
  [transcendIntro2, false],
  [transcendIntro3, false],
  [transcendIntroDemo, false],
  [transcendIntro4, false],

  [stars, false],
  [drivewaySphere, true],
  [credits, false]
];

document.addEventListener("contextmenu", function handleContextMenu(event) {
  event.preventDefault();
});

document.addEventListener('keydown', async function(event) {
  //If the key pressed is spacebar.
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

    //If there are more slides
    if (currentSlide < slides.length) {
      slides[currentSlide][0]();

      //If shouldUpdate
      if (slides[currentSlide][1]) {
        currentAnimationFrame = requestAnimationFrame(render);
      }

    //If the presentation is finished.
    } else {
      canvas.style.display = "none";
      div.classList.toggle("fade");
      await sleep(250);
      div.innerHTML = "";
      div.style.display = "none";
    }
  }
})
