var spill
var firecrakerList = []
var fireList = []
var isPlay = false

function paintObject() {
  spill = createLine()
  var firecraker = createFirecracker()
  for (var i = 0; i < 10; i++) {
    var newFirecraker = firecraker.clone()
    var newFirecraker2 = firecraker.clone()
    newFirecraker.position.y = 17 - i * 7
    newFirecraker2.position.y = 13.5 - i * 7
    newFirecraker.rotateZ(Math.PI * 40 / 180)
    newFirecraker2.rotateZ(-Math.PI * 40 / 180)
    scene.add(newFirecraker)
    scene.add(newFirecraker2)
    firecrakerList.push(newFirecraker, newFirecraker2)
  }
}

// 判断炮仗是否点燃
function checkIsFire() {
  for (var i = 0; i < firecrakerList.length; i++) {
    var item = firecrakerList[i]
    if (item.position.y - 7 < 18 - spill.scale.y * 80) {
      createExplode(item.position)
      scene.remove(item)
      firecrakerList.splice(i, 1)
      i--
      if (!isPlay) {
        isPlay = true
        document.getElementById('audio').play()
      }
    }
  }
  if (isPlay && !firecrakerList.length) {
    document.getElementById('audio').pause()

  }
}
// 创建补间动画
function createTween(mesh, to, duration) {
  if (to.position) {
    var position = new TWEEN.Tween(mesh.position)
    position.to(to.position, duration).start()
  }
  if (to.rotation) {
    var rotation = new TWEEN.Tween(mesh.rotation)
    rotation.to(to.rotation, duration).start()
  }
  if (to.scale) {
    var scale = new TWEEN.Tween(mesh.scale)
    scale.to(to.scale, duration).start()
  }
  if (to.opacity) {
    var opacity = new TWEEN.Tween(mesh.material)
    opacity.to(to.opacity, duration).start()
  }
}
// 创建爆炸效果
function createExplode(position) {
  var group = new THREE.Group()
  var box = new THREE.BoxGeometry(2, 2, 2)
  var colors = [0xff0000, 0xffff00, 0xcccccc]
  var duration = 600
  for (var i = 0; i < 30; i++) {
    var material = new THREE.MeshLambertMaterial({
      color: colors[Math.floor(Math.random() * 3)],
      transparent: true
    })
    var newMesh = new THREE.Mesh(box, material)
    group.add(newMesh)
    createTween(newMesh, {
      position: {
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
        z: (Math.random() - 0.5) * 40
      },
      rotation: {
        x: 360 + Math.random() * 720,
        y: 360 + Math.random() * 720,
        z: 360 + Math.random() * 720
      },
      scale: {
        x: (Math.random() - 0.5) * 2 + 1,
        y: (Math.random() - 0.5) * 2 + 1,
        z: (Math.random() - 0.5) * 2 + 1
      }
    }, duration)
  }
  group.position.set(position.x, position.y, position.z)
  scene.add(group)
  setTimeout(function () {
    scene.remove(group)
  }, duration)
}
// 创建引线
function createLine() {
  var group = new THREE.Group()
  var spill_geo = new THREE.CylinderGeometry(0.2, 0.2, 80, 20)
  var spill_mater = new THREE.MeshLambertMaterial({
    color: 0x666666
  })
  var spill = new THREE.Mesh(spill_geo, spill_mater)
  spill.position.y = -40
  group.add(spill)
  scene.add(group)
  group.position.y = 26
  return group
}
// 创建一个炮仗
function createFirecracker() {
  var group = new THREE.Group()
  var main_geo = new THREE.CylinderGeometry(2, 2, 12, 20)
  var main_mater = new THREE.MeshLambertMaterial({
    color: 0xff0000
  })
  var main = new THREE.Mesh(main_geo, main_mater)
  main.position.y = -8

  var spill_geo = new THREE.CylinderGeometry(0.2, 0.2, 2, 20)
  var spill_mater = new THREE.MeshLambertMaterial({
    color: 0x666666
  })
  var spill = new THREE.Mesh(spill_geo, spill_mater)
  spill.position.y = -1

  var cycle_geo = new THREE.CylinderGeometry(2.01, 2.01, 1, 20)
  var cycle_mater = new THREE.MeshLambertMaterial({
    color: 0xffff00
  })
  var cycle = new THREE.Mesh(cycle_geo, cycle_mater)
  cycle.position.y = -11.5
  var cycle2 = cycle.clone()
  cycle2.position.y = -13
  var cycle3 = cycle.clone()
  cycle3.position.y = -3.5


  group.add(main)
  group.add(spill)
  group.add(cycle)
  group.add(cycle2)
  group.add(cycle3)
  return group
}