function paintHouse() {
  paintFloor()
  paintWall()
}
// 绘制墙 框架
function paintWall() {
  // 门位置外墙
  createRoomWallWidthDoor()
  // 厨房位置外墙
  createWall({
    width: 2,
    height: 28,
    depth: 36,
    z: -35.5,
    y: 14,
    x: -46.5
  })
  // 主卧位置外墙
  createWall({
    width: 2,
    height: 28,
    depth: 65,
    z: -2,
    y: 14,
    x: -34.5
  })
  // 主卧位置内墙
  createWall({
    width: 2,
    height: 28,
    depth: 39,
    z: 3,
    y: 14,
    x: -2.5
  })
  // 次卧位置左外墙
  createWall({
    width: 2,
    height: 28,
    depth: 30,
    z: 37.5,
    y: 14,
    x: -17.5
  })
  // 次卧位置右外墙
  createWall({
    width: 2,
    height: 28,
    depth: 30,
    z: 37.5,
    y: 14,
    x: 10.5
  })
  // 右侧次卧位置外墙
  createWall({
    width: 2,
    height: 28,
    depth: 37,
    z: -35,
    y: 14,
    x: 46.5
  })
  // 右侧次卧位置内墙
  createWall({
    width: 20.5,
    height: 28,
    depth: 2,
    z: -25.5,
    y: 14,
    x: 23.25
  })
  // 带门的厨房墙
  createKitchenWallWidthDoor()
  // 带门的主卧墙
  createMasterBedRoomWallWidthDoor()
  // 带门的次卧墙
  createSecondBedRoomWallWidthDoor()
  // 带门的次卧墙2
  createSecondBedRoomWallWidthDoor2()
  // 带门的卫生间墙
  createToiletWallWidthDoor()
  // 次卧飘窗
  createWall({
    width: 14,
    height: 6,
    depth: 8,
    z: -22,
    y: 3,
    x: 39.5,
    color: 0xe5e8c8
  })
  // 主卧飘窗
  createWall({
    width: 17,
    height: 6,
    depth: 8,
    z: 26,
    y: 3,
    x: -26,
    color: 0xe5e8c8
  })
  createKitchenWallWidthWindow()
  // 次卧带窗墙
  createSecondBedRoomWallWidthWindow()
  // 阳台带窗墙
  createBalconyWallWidthWindow()
  // 客厅位置带窗墙，阳台另一边
  createLivingRoomWallWidthWindow()
  // 主卧位置外墙带窗
  createMasterRoomWallWidthWindow()
  // 次卧2位置外墙带窗
  createSecondBedRoomWallWidthWindow2()
}
// 次卧2位置外墙带窗
function createSecondBedRoomWallWidthWindow2() {
  var src = createWall({
    width: 14,
    height: 28,
    depth: 2,
    z: -17.5,
    y: 14,
    x: 39.5,
    paint: false
  })
  var dest = createWall({
    width: 10,
    height: 16,
    depth: 2,
    z: -17.5,
    y: 16,
    x: 39.5,
    color: 0x58ACFA,
    opacity: 0.4
  })
  scene.add(subtract(src, dest))
}
// 主卧位置外墙带窗
function createMasterRoomWallWidthWindow() {
  var src = createWall({
    width: 18,
    height: 28,
    depth: 2,
    z: 31,
    y: 14,
    x: -26.5,
    paint: false
  })
  var dest = createWall({
    width: 14,
    height: 16,
    depth: 2,
    z: 31,
    y: 16,
    x: -26,
    color: 0x58ACFA,
    opacity: 0.4
  })
  scene.add(subtract(src, dest))
}
// 客厅位置外墙带窗
function createLivingRoomWallWidthWindow() {
  var src = createWall({
    width: 2,
    height: 28,
    depth: 66,
    z: 7.5,
    y: 14,
    x: 32.5,
    paint: false
  })
  var dest = createWall({
    width: 2,
    height: 22,
    depth: 12,
    z: 31.5,
    y: 13,
    x: 32.5,
    color: 0x58ACFA,
    opacity: 0.4
  })
  scene.add(subtract(src, dest))
}
// 阳台位置外墙带窗
function createBalconyWallWidthWindow() {
  var src = createWall({
    width: 22,
    height: 28,
    depth: 2,
    z: 40,
    y: 14,
    x: 22.5,
    paint: false
  })
  var dest = createWall({
    width: 18,
    height: 22,
    depth: 2,
    z: 40,
    y: 13,
    x: 21.5,
    color: 0x58ACFA,
    opacity: 0.4
  })
  scene.add(subtract(src, dest))
}
// 次卧位置外墙带窗
function createSecondBedRoomWallWidthWindow() {
  var src = createWall({
    width: 30,
    height: 28,
    depth: 2,
    z: 52.5,
    y: 14,
    x: -3.5,
    paint: false
  })
  var dest = createWall({
    width: 16,
    height: 14,
    depth: 2,
    z: 52.5,
    y: 18,
    x: -3.5,
    color: 0x58ACFA,
    opacity: 0.4
  })
  scene.add(subtract(src, dest))
}
// 厨房位置内墙带窗
function createKitchenWallWidthWindow() {
  var src = createWall({
    width: 44,
    height: 28,
    depth: 2,
    z: -34.5,
    y: 14,
    x: -25,
    paint: false
  })
  var dest = createWall({
    width: 8,
    height: 14,
    depth: 2,
    z: -34.5,
    y: 18,
    x: -40.5,
    color: 0x58ACFA,
    opacity: 0.4
  })
  scene.add(subtract(src, dest))
}
// 卫生间位置内墙带门
function createToiletWallWidthDoor() {
  var src = createWall({
    width: 2,
    height: 28,
    depth: 18,
    z: -25.5,
    y: 14,
    x: -17.5,
    paint: false
  })
  var dest = createWall({
    width: 2,
    height: 20,
    depth: 8,
    z: -22.5,
    y: 10,
    x: -17.5,
    color: 0xffffff
  })
  scene.add(subtract(src, dest))
}
// 次卧2位置内墙带门
function createSecondBedRoomWallWidthDoor2() {
  var src = createWall({
    width: 2,
    height: 28,
    depth: 26,
    z: -39.5,
    y: 14,
    x: 14,
    paint: false
  })
  var dest = createWall({
    width: 2,
    height: 20,
    depth: 8,
    z: -31.5,
    y: 10,
    x: 14,
    color: 0xffffff
  })
  scene.add(subtract(src, dest))
}
// 次卧位置内墙带门
function createSecondBedRoomWallWidthDoor() {
  var src = createWall({
    width: 30,
    height: 28,
    depth: 2,
    z: 22.5,
    y: 14,
    x: -3.5,
    paint: false
  })
  var dest = createWall({
    width: 8,
    height: 20,
    depth: 2,
    z: 22.5,
    y: 10,
    x: 4.5,
    color: 0xffffff
  })
  scene.add(subtract(src, dest))
}
// 主卧位置内墙带门
function createMasterBedRoomWallWidthDoor() {
  var src = createWall({
    width: 32,
    height: 28,
    depth: 2,
    z: -16.5,
    y: 14,
    x: -17.5,
    paint: false
  })
  var dest = createWall({
    width: 8,
    height: 20,
    depth: 2,
    z: -16.5,
    y: 10,
    x: -8.5,
    color: 0xffffff
  })
  scene.add(subtract(src, dest))
}
// 厨房位置内墙带门
function createKitchenWallWidthDoor() {
  var src = createWall({
    width: 2,
    height: 28,
    depth: 26,
    z: -39.5,
    y: 14,
    x: -2.5,
    paint: false
  })
  var dest = createWall({
    width: 2,
    height: 20,
    depth: 8,
    z: -40,
    y: 10,
    x: -2.5,
    color: 0xffffff
  })
  scene.add(subtract(src, dest))
}
// 主门墙
function createRoomWallWidthDoor() {
  var src = createWall({
    width: 93,
    height: 28,
    depth: 2,
    z: -52.5,
    y: 14,
    paint: false
  })
  var dest = createWall({
    width: 9,
    height: 20,
    depth: 2,
    z: -52.5,
    y: 10,
    x: 4,
    color: 0xffffff
  })
  scene.add(subtract(src, dest))
}
// 创建墙体
function createWall(opts) {
  var x = opts.x || 0
  var y = opts.y || 0
  var z = opts.z || 0
  var width = opts.width || 0
  var height = opts.height || 0
  var depth = opts.depth || 0
  var color = opts.color || 0x999999
  var paint = opts.paint === undefined ? true : opts.paint
  var opacity = opts.opacity === undefined ? 1 : opts.opacity
  var geometry = new THREE.BoxGeometry(width, height, depth)
  var material = new THREE.MeshLambertMaterial({
    color: color,
    transparent: true,
    opacity: opacity
  })
  var mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(x, y, z)
  if (paint) {
    scene.add(mesh)
  }
  return mesh
}
// 绘制地板
function paintFloor() {
  var geometry = new THREE.BoxGeometry(103, 2, 115)
  var material = new THREE.MeshLambertMaterial({
    color: 0xf5e8c8
  })
  var mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
}

function subtract(src, dest) {
  var srcBSP = new ThreeBSP(src)
  var destBSP = new ThreeBSP(dest)
  var resultBSP = srcBSP.subtract(destBSP)
  return resultBSP.toMesh(src.material)
}