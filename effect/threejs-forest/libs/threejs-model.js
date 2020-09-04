(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MODEL = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  /**
   * 模型基础类
   */
  var Base =
  /*#__PURE__*/
  function () {
    function Base(sence) {
      _classCallCheck(this, Base);

      if (!THREE) {
        throw new Error('required THREE!!!');
      }

      this.sence = sence;
      this.group = new THREE.Object3D();
    } // 清空模型


    _createClass(Base, [{
      key: "clear",
      value: function clear() {
        this.group = new THREE.Object3D();
      } // 设置模型位置

    }, {
      key: "setPos",
      value: function setPos() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        this.group.position.set(x, y, z);
        return this;
      } // 设置模型旋转角度

    }, {
      key: "rotate",
      value: function rotate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        this.group.rotateX(x);
        this.group.rotateY(y);
        this.group.rotateZ(z);
        return this;
      } // 设置模型缩放

    }, {
      key: "scale",
      value: function scale() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        this.group.scale.set(x, y, z);
        return this;
      } // 获取模型

    }, {
      key: "getMesh",
      value: function getMesh() {
        return this.group;
      } // 接受阴影

    }, {
      key: "shadow",
      value: function shadow() {
        this.group.children.forEach(function (item) {
          item.castShadow = true;
          item.receiveShadow = true;
        });
        return this;
      } // 将模型加入场景

    }, {
      key: "paint",
      value: function paint() {
        this.sence.add(this.group);
        return this;
      }
    }]);

    return Base;
  }();

  var Tree =
  /*#__PURE__*/
  function (_Base) {
    _inherits(Tree, _Base);

    function Tree(scene, _ref) {
      var _this;

      var _ref$type = _ref.type,
          type = _ref$type === void 0 ? 1 : _ref$type,
          _ref$shadow = _ref.shadow,
          shadow = _ref$shadow === void 0 ? true : _ref$shadow,
          _ref$paint = _ref.paint,
          paint = _ref$paint === void 0 ? true : _ref$paint;

      _classCallCheck(this, Tree);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tree).call(this, scene));
      _this.materialLeaf = new THREE.MeshLambertMaterial({
        color: 0x00ff00
      });
      _this.materialTrunk = new THREE.MeshLambertMaterial({
        color: 0x8B4513
      });

      if (type === 0) {
        _this.design();
      } else if (type === 1) {
        _this.designCircle();
      } else if (type === 2) {
        _this.designPine();
      } else if (type === 3) {
        _this.designCircle2();
      } else {
        _this.design();
      }

      if (shadow) {
        _this.shadow();
      }

      if (paint) {
        _this.paint();
      }

      return _this;
    } // 方块树


    _createClass(Tree, [{
      key: "design",
      value: function design() {
        var leaf = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), this.materialLeaf);
        leaf.position.y = 5;
        var trunk_geo = new THREE.CylinderGeometry(0.5, 0.5, 2);
        var trunk = new THREE.Mesh(trunk_geo, this.materialTrunk);
        trunk.position.y = 1;
        this.group.add(leaf);
        this.group.add(trunk);
      } // 圆形树

    }, {
      key: "designCircle",
      value: function designCircle() {
        var leaf = new THREE.Mesh(new THREE.SphereGeometry(3, 10, 10), this.materialLeaf);
        leaf.position.y = 4.8;
        var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2), this.materialTrunk);
        trunk.position.y = 1;
        this.group.add(leaf);
        this.group.add(trunk);
      } // 松树

    }, {
      key: "designPine",
      value: function designPine() {
        var leaf = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 2, 6), this.materialLeaf);
        leaf.position.y = 7;
        var leaf2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 2, 2, 6), this.materialLeaf);
        leaf2.position.y = 5;
        var leaf3 = new THREE.Mesh(new THREE.CylinderGeometry(1, 2.5, 2, 6), this.materialLeaf);
        leaf3.position.y = 3;
        var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2), this.materialTrunk);
        trunk.position.y = 1;
        this.group.add(leaf);
        this.group.add(leaf2);
        this.group.add(leaf3);
        this.group.add(trunk);
      } // 圆形树各个点随机移动一下

    }, {
      key: "designCircle2",
      value: function designCircle2() {
        var leaf = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 4), this.materialLeaf);
        leaf.position.y = 4.8;
        leaf.geometry.vertices.forEach(function (item) {
          // let scale = Math.random()*0.4 + 0.7
          item.x *= Math.random() * 0.4 + 0.7;
          item.y *= Math.random() * 0.4 + 0.7;
          item.z *= Math.random() * 0.4 + 0.7;
        });
        var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 4), this.materialTrunk);
        trunk.position.y = 2;
        this.group.add(leaf);
        this.group.add(trunk);
      }
    }]);

    return Tree;
  }(Base);

  var Road =
  /*#__PURE__*/
  function (_Base) {
    _inherits(Road, _Base);

    function Road(scene) {
      var _this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var len = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;

      _classCallCheck(this, Road);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Road).call(this, scene));
      _this.width = width;
      _this.len = len;
      _this.materialBase = new THREE.MeshLambertMaterial({
        color: 0x68696c
      });
      _this.materialSide = new THREE.MeshLambertMaterial({
        color: 0xe5e8ed
      });
      _this.materialWhite = new THREE.MeshLambertMaterial({
        color: 0xe5e8ed
      });
      _this.materialWhite = new THREE.MeshLambertMaterial({
        color: 0xe5e8ed
      });

      if (type === 0) {
        _this.design();
      }

      return _this;
    } // 默认公路


    _createClass(Road, [{
      key: "design",
      value: function design() {
        var main = new THREE.Mesh(new THREE.BoxGeometry(this.width, 0.1, this.len), this.materialBase);
        main.position.y = 0.05;
        this.group.add(main);
      }
      /**
       * 公路两边辅路
       * @param {*} width 
       * @param {*} type left right 
       */

    }, {
      key: "side",
      value: function side() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var type = arguments.length > 1 ? arguments[1] : undefined;
        var side = new THREE.Mesh(new THREE.BoxGeometry(width, 0.12, this.len), this.materialSide);
        side.position.y = 0.06;
        this.group.add(side);

        if (type === 'left') {
          side.position.x = -(this.width + width) / 2;
        } else if (type === 'right') {
          side.position.x = (this.width + width) / 2;
        } else {
          side.position.x = -(this.width + width) / 2;
          var otherSide = side.clone();
          otherSide.position.x = (this.width + width) / 2;
          this.group.add(otherSide);
        }

        return this;
      }
      /**
       * 非机动车道
       */

    }, {
      key: "bicycle",
      value: function bicycle() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

        // 公路宽度小于4米，无非机动车道
        if (this.width < 4) {
          return this;
        }

        var side = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.102, this.len), this.materialWhite);
        side.position.y = 0.051;
        side.position.x = -(this.width / 2 - width);
        var otherSide = side.clone();
        otherSide.position.x = this.width / 2 - width;
        this.group.add(side);
        this.group.add(otherSide);
        return this;
      }
      /**
       * 道路添加分道线
       * @param {*} num 分道线数量 中心默认为1 之后每+1 两边同时加 1条线为单虚线
       * @param {*} warnning // warnning 中心线为黄色双实线
       */

    }, {
      key: "lane",
      value: function lane() {
        var _double = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var line = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.102, this.len), this.materialWhite);
        line.position.y = 0.051;
        line.position.x = _double ? 0 : 0.2;
        this.group.add(line);

        if (_double) {
          var otherline = line.clone();
          otherline.position.x = -0.2;
          this.group.add(otherline);
        }

        return this;
      }
      /**
       * 路口是否需要人行横道
       */

    }, {
      key: "sidewalk",
      value: function sidewalk() {}
    }]);

    return Road;
  }(Base);

  var index = {
    Tree: Tree,
    Road: Road
  };

  return index;

})));
