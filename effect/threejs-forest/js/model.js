function paintModel() {
  plane()
  for (let i = 0, len = 300; i < len; i++) {
    let tree = new MODEL.Tree(scene, {
      type: ~~(Math.random()*4)
    })
    let x = Math.random()* 100 - 50
    let z = Math.random()* 100 - 50
    let scale = Math.random()  + 0.2
    tree.setPos(x, 0, z).scale(scale, scale, scale)
  }
}

function plane() {
  var planeGeometry = new THREE.PlaneGeometry(100, 100);
  var planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x8fab60
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.receiveShadow = true;
  scene.add(plane)
}

function subtract(src, dest) {
  var srcBSP = new ThreeBSP(src);
  var destBSP = new ThreeBSP(dest);
  var resultBSP = srcBSP.subtract(destBSP);
  return resultBSP.toMesh(src.material);
}