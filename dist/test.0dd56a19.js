// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n .skin * {\n box-sizing: border-box;\n margin: 0;\n padding: 0;\n}\n.skin *::after {\n box-sizing: border-box;\n}\n.skin *::before {\n box-sizing: border-box;\n}\n.skin {\n min-height: 50vh;\n background: #ffe600;\n position: relative;\n}\n.nose {\n border: 10px solid red;\n border-color: red transparent transparent;\n border-bottom: none;\n position: relative;\n width: 0;\n height: 0;\n left: 50%;\n top: 245px;\n margin-left: -10px;\n z-index: 2;\n}\n@keyframes wave {\n 0% {\n   transform: rotate(0deg);\n }\n 33% {\n   transform: rotate(15deg);\n }\n 66% {\n   transform: rotate(-15deg);\n }\n 100% {\n   transform: rotate(0deg);\n }\n}\n.nose:hover {\n transform-origin: 50% 100%;\n animation: wave 500ms infinite linear;\n}\n.yuan {\n width: 20px;\n height: 7px;\n position: absolute;\n top: -16px;\n left: -10px;\n border-radius: 10px 10px 0 0;\n background: red;\n}\n.eye {\n position: absolute;\n border: 2px solid black;\n width: 64px;\n height: 64px;\n left: 50%;\n top: 200px;\n margin-left: -32px;\n background: #2e2e2e;\n border-radius: 50%;\n}\n.eye::before {\n position: relative;\n content: \"\";\n display: block;\n background: #fff;\n height: 25px;\n width: 25px;\n border: 3px solid #000;\n left: 7px;\n top: 4px;\n border-radius: 50%;\n}\n.eye.left {\n transform: translateX(-100px);\n}\n.eye.right {\n transform: translateX(100px);\n}\n.mouth {\n height: 200px;\n width: 200px;\n position: absolute;\n left: 50%;\n top: 270px;\n margin-left: -100px;\n}\n.mouth .up {\n position: relative;\n top: -6px;\n z-index: 1;\n}\n.mouth .up .lip {\n width: 100px;\n height: 30px;\n border: 5px solid black;\n border-top-color: transparent;\n position: relative;\n left: 50%;\n background: #ffe600;\n}\n.mouth .up .lip.left {\n border-radius: 0 0 0 50px;\n margin-left: -95px;\n transform: rotate(-15deg);\n}\n.mouth .up .lip.right {\n border-radius: 0 0 50px 0;\n margin-left: -5px;\n top: -30px;\n transform: rotate(15deg) translateX(7px);\n}\n.mouth .up .lip.left::before {\n content: \"\";\n height: 30px;\n width: 7px;\n display: block;\n position: absolute;\n left: 89px;\n top: -4px;\n background: #ffe600;\n}\n.mouth .up .lip.right::before {\n content: \"\";\n height: 29px;\n width: 7px;\n display: block;\n position: absolute;\n left: -6px;\n top: -9px;\n background: #ffe600;\n}\n.mouth .down {\n width: 100%;\n height: 180px;\n position: absolute;\n top: 0px;\n overflow: hidden;\n}\n.mouth .down .yuan1 {\n height: 1000px;\n width: 150px;\n position: absolute;\n border: 3px solid black;\n left: 50%;\n margin-left: -75px;\n bottom: 0;\n border-radius: 75px/300px;\n background: #9b000a;\n overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n width: 200px;\n height: 300px;\n position: absolute;\n background: green;\n bottom: -155px;\n left: 50%;\n margin-left: -100px;\n border-radius: 100px;\n background: #ff485f;\n}\n.face {\n position: absolute;\n width: 80px;\n height: 80px;\n border: 1px solid red;\n left: 50%;\n margin-left: -40px;\n top: 300px;\n z-index: 3;\n border: 3px solid black;\n}\n.face.left {\n transform: translateX(-180px);\n background: #ff0000;\n border-radius: 50%;\n}\n.face.right {\n transform: translateX(180px);\n background: #ff0000;\n border-radius: 50%;\n}\n";
var n = 1;
demo1.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
var time = 100;
var run = function run() {
  n += 1;
  if (n > string.length) {
    clearInterval(id);
    return; //这里在每次计时时都会有一个id               //return终止这行代码不执行下面的代码了
  }
  demo1.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo1.scrollTop = demo1.scrollHeight; // scrollTop 距离顶部的距离
};
var play = function play() {
  return setInterval(run, time);
};
var pause = function pause() {
  window.clearInterval(id);
};
var id = play();
var slow = function slow() {
  pause();
  time = 100;
  id = play();
};
var normal = function normal() {
  pause();
  time = 30;
  id = play();
};
var fast = function fast() {
  pause();
  time = 0;
  id = play();
};
btnPause.onclick = pause;
btnPlay.onclick = function () {
  id = play();
};
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
},{}],"..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '62403' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.0dd56a19.map