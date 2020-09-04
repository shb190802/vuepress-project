function paintFurniture() {
  // 主卧床
  createBed({
    width: 22,
    depth: 20,
    z: 6,
    x: -23.5
  })
  // 次卧床
  createBed({
    width: 20,
    depth: 15,
    z: 44,
    x: -6.5
  })
  // 次卧2床
  createBed({
    width: 15,
    depth: 20,
    z: -41.5,
    x: 38
  })
  // 主卧柜子
  createChest({
    width: 19,
    depth: 6,
    z: -12.5,
    x: -24
  })
  // 客厅柜子
  createChest({
    width: 16,
    depth: 6,
    z: -21.5,
    x: 24,
    height: 12,
    y: 6
  })
  // 客厅柜子2
  createChest({
    width: 16,
    depth: 6,
    z: -21.5,
    x: 24,
    height: 10,
    y: 22
  })
  // 次卧柜子
  createChest({
    width: 15,
    depth: 6,
    z: 26.5,
    x: -9
  })
  // 次卧2柜子
  createChest({
    width: 6,
    depth: 14,
    z: -44.5,
    x: 17.5
  })
  // 厨房柜子2
  createChest2({
    width: 15,
    depth: 6,
    z: -49,
    x: -18,
    y: 20
  })
  // 厨房柜子
  createChest2({
    width: 35,
    depth: 6,
    z: -49,
    x: -28
  })
  // 盥洗室柜子
  createChest2({
    width: 13,
    depth: 6,
    z: -31,
    x: -10
  })
  // 盥洗室柜子2
  createChest2({
    width: 9,
    depth: 2,
    z: -33,
    x: -10,
    y: 20
  })
  // 电视柜
  createChest2({
    width: 6,
    depth: 24,
    height: 6,
    y: 3,
    z: 1,
    x: 0
  })
  // 电视
  createChest2({
    width: 0.5,
    depth: 18,
    height: 10,
    y: 16,
    z: 1,
    x: 0,
    color: '#000000'
  })
  createSofa()
}
// 床
function createBed(opts) {
  // 床板
  opts.color = 0xd1a578
  opts.height = 4
  opts.y = 4
  createWall(opts)
  // 床垫
  opts.color = 0xdcdfe4
  opts.height = 2
  opts.y = 6
  createWall(opts)
}
// 高柜子
function createChest(opts) {
  opts.color = opts.color || 0xd1a578
  opts.height = opts.height || 28
  opts.y = opts.y || 14
  createWall(opts)
}
// 低柜子
function createChest2(opts) {
  opts.color = opts.color || 0xe0e0e0
  opts.height = opts.height || 10
  opts.y = opts.y || 5
  createWall(opts)
}
// 沙发
function createSofa(opts) {
  createBed({
    width: 10,
    depth: 30,
    z: 1,
    x: 26.5
  })
  createBed({
    width: 10,
    depth: 9,
    z: 10,
    x: 19
  })
  // 三个扶手
  createWall({
    width: 2,
    depth: 30,
    z: 1,
    x: 30.5,
    color: 0xdcdfe4,
    height: 3,
    y: 8
  })
  createWall({
    width: 10,
    depth: 2,
    z: -13,
    x: 26.5,
    color: 0xdcdfe4,
    height: 3,
    y: 8
  })
  createWall({
    width: 10,
    depth: 2,
    z: 15,
    x: 26.5,
    color: 0xdcdfe4,
    height: 3,
    y: 8
  })
}