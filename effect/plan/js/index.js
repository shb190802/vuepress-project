var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var scene, camera, renderer;

// 初始化场景
function createScene() {
  scene = new THREE.Scene();
}
// 初始化相机
function createCamera() {
  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 1000);
  camera.position.set(80, 180, 120);
  camera.lookAt(scene.position);
}
// 初始化render
function createRender() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpht: true
  });
  renderer.setClearColor(0xeeeeee, 1);
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);
}
// 初始化光线
function createLight() {
  var pointLight = new THREE.PointLight();
  pointLight.position.set(130, 140, 150);
  var ambient = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(pointLight);
  scene.add(ambient)
}
// 创建控制器
function createControls() {
  var orbitControls = new THREE.OrbitControls(camera, renderer.domElement)
  orbitControls.minDistance = 1
  orbitControls.maxDistance = 5000
}
// 显示坐标系 
function creanteAxes() {
  var axes = new THREE.AxesHelper(100)
  scene.add(axes)
}
// 绘图
function render() {
  renderer.render(scene, camera);
}

function animite() {
  render();
  requestAnimationFrame(animite);
}

function init() {
  createScene();
  createLight();
  createCamera();
  createRender();
  createControls();
  // creanteAxes()
  paintHouse()
  paintFurniture();
  animite();
}
window.onload = init;