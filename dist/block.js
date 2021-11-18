// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/glasses_guy/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    ColorPalette = _wp$components.ColorPalette;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    useBlockProps = _wp$blockEditor.useBlockProps,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var useSelect = wp.data.useSelect;

var edit = function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var colors = useSelect('core/block-editor').getSettings().colors;

  var onChangeMessage = function onChangeMessage(value) {
    setAttributes({
      message: value
    });
  };

  var onChangeName = function onChangeName(value) {
    setAttributes({
      name: value
    });
  };

  var onChangeAlignment = function onChangeAlignment(alignment) {
    setAttributes({
      alignment: alignment
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(hexColor) {
    setAttributes({
      backgroundColor: hexColor
    });
  };

  var onChangeTextColor = function onChangeTextColor(hexColor) {
    setAttributes({
      textColor: hexColor
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, _extends({}, useBlockProps(), {
    key: "setting"
  }), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: "Info",
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    id: "gutenpride-controls"
  }, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Name of this guy"), /*#__PURE__*/React.createElement(TextControl, {
    value: attributes.name,
    onChange: onChangeName,
    placeholder: 'Type a name'
  }))))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: "Color",
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    id: "gutenpride-controls-color"
  }, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Background color"), /*#__PURE__*/React.createElement(ColorPalette, {
    colors: colors,
    value: attributes.backgroundColor,
    onChange: onChangeBackgroundColor
  })), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Text color"), /*#__PURE__*/React.createElement(ColorPalette, {
    colors: colors,
    value: attributes.textColor,
    onChange: onChangeTextColor
  })))))), /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {
    value: attributes.alignment,
    onChange: onChangeAlignment
  })), /*#__PURE__*/React.createElement(TextControl, {
    style: {
      textAlign: attributes.alignment || 'left',
      color: attributes.textColor || '#333',
      backgroundColor: attributes.backgroundColor || '#FFF'
    },
    value: attributes.message,
    onChange: onChangeMessage,
    placeholder: 'Type a message'
  }));
};

var _default = edit;
exports.default = _default;
},{}],"components/glasses_guy/save.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var save = function save(_ref) {
  var attributes = _ref.attributes;

  var _ref2 = wp.data.select('core/editor').getEditedPostAttribute('meta') || {},
      _ref2$who_wear_glasse = _ref2.who_wear_glasses,
      who_wear_glasses = _ref2$who_wear_glasse === void 0 ? '' : _ref2$who_wear_glasse;

  return /*#__PURE__*/React.createElement("div", null, " [", attributes.name || 'Anonymous', "] ", /*#__PURE__*/React.createElement("span", null, who_wear_glasses === attributes.name ? '(⌐■-■)' : '( ∙_∙)>⌐■-■'), " :", /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: attributes.alignment || 'left',
      color: attributes.textColor || '#333',
      backgroundColor: attributes.backgroundColor || '#FFF'
    }
  }, attributes.message || ''));
};

var _default = save;
exports.default = _default;
},{}],"components/glasses_guy/sidebarPlugin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var TextControl = wp.components.TextControl;
var _wp$data = wp.data,
    useDispatch = _wp$data.useDispatch,
    useSelect = _wp$data.useSelect;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;

var pluginSidebarGlassesGuy = function pluginSidebarGlassesGuy() {
  var someMeta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta')['who_wear_glasses'];
  }, []);
  var edit = useDispatch('core/editor').editPost;
  return /*#__PURE__*/React.createElement(PluginDocumentSettingPanel, {
    title: "Who wear glasses?"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextControl, {
    value: someMeta,
    onChange: function onChange(value) {
      edit({
        meta: {
          who_wear_glasses: value
        }
      });
    }
  })));
};

var _default = pluginSidebarGlassesGuy;
exports.default = _default;
},{}],"block.js":[function(require,module,exports) {
"use strict";

var _edit = _interopRequireDefault(require("./components/glasses_guy/edit"));

var _save = _interopRequireDefault(require("./components/glasses_guy/save"));

var _sidebarPlugin = _interopRequireDefault(require("./components/glasses_guy/sidebarPlugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerPlugin = wp.plugins.registerPlugin;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('glassesguy/block', {
  title: "Glasses guy",
  description: "A simple demonstration block",
  icon: "admin-site",
  category: "common",
  attributes: {
    message: {
      type: 'string',
      default: 'Hello'
    },
    name: {
      type: 'string',
      default: 'Guy'
    },
    textColor: {
      type: 'string',
      default: '#333'
    },
    backgroundColor: {
      type: 'string',
      default: '#FFF'
    },
    align: {
      type: 'string',
      default: 'auto'
    }
  },
  edit: _edit.default,
  save: _save.default
});
registerPlugin('plugin-sidebar-glasses-guy', {
  render: _sidebarPlugin.default
});
},{"./components/glasses_guy/edit":"components/glasses_guy/edit.js","./components/glasses_guy/save":"components/glasses_guy/save.js","./components/glasses_guy/sidebarPlugin":"components/glasses_guy/sidebarPlugin.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57854" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","block.js"], null)
//# sourceMappingURL=/block.js.map