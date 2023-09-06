// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fUloJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1GgH0":[function(require,module,exports) {
// Core imports
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
// Local imports
var _modelJs = require("./model.js");
var _viewJs = require("./views/View.js");
var _domJs = require("./config/dom.js");
var _configJs = require("./config/config.js");
const controller = async function() {
    // Display the spinner
    (0, _viewJs.app).displaySpinner(_domJs.sidebarContainer);
    try {
        // Get the products
        const products = await _modelJs.fetchProducts();
        // Empty the sidebar container
        _domJs.sidebarContainer.innerHTML = "";
        // Display results to the side bar
        products.forEach(function(product, i, arr) {
            // Append to the UI
            (0, _viewJs.app).displaySidebarResults(product, _domJs.sidebarContainer);
        });
        // Add an event listener to the sidebar
        _domJs.sidebarContainer.addEventListener("click", async function(e) {
            // Clear the product container
            _domJs.productContainer.innerHTML = "";
            // Display the spinner
            (0, _viewJs.app).displaySpinner(_domJs.productContainer);
            // Get the product id
            const productId = +_modelJs.getItemId(e);
            // Get the products array
            const productsArr = await _modelJs.fetchProducts();
            // Get the product from the products
            const selectedProduct = productsArr.find((item)=>item.id === productId);
            // Clear the container
            _domJs.productContainer.innerHTML = "";
            // Append to the UI
            (0, _viewJs.app).displayProduct(selectedProduct, _domJs.productContainer);
        });
        // Get all the categories
        const categories = _modelJs.getAllCategories(products);
        // Sorted categories
        const sortedCategories = categories.sort();
        // Display the categories to the UI
        sortedCategories.forEach(function(category, i, arr) {
            // Append to the UI
            (0, _viewJs.app).displaySelectOptions(category, _domJs.selectContainer);
        });
        // Add an event listener
        _domJs.selectContainer.addEventListener("change", async function(e) {
            // Empty the sidebar
            _domJs.sidebarContainer.innerHTML = "";
            // Display the spinner
            (0, _viewJs.app).displaySpinner(_domJs.sidebarContainer);
            // Get the clicked value
            const optionValue = e.target.value;
            // Get the array
            const categorrArr = await _modelJs.getProductsInCategory(optionValue);
            // Empty the sidebar
            _domJs.sidebarContainer.innerHTML = "";
            // Loop over the array
            categorrArr.forEach(function(item, i, arr) {
                // Display the UI
                (0, _viewJs.app).displaySidebarResults(item, _domJs.sidebarContainer);
            });
        });
        // Event listeners to the product page
        _domJs.productContainer.addEventListener("click", async function(e) {
            // Traget item
            const shoppingBtn = e.target.classList.contains("product-shopping");
            const shoppingBtnIcon = e.target.classList.contains("shopping-icon");
            if (shoppingBtn || shoppingBtnIcon) {
                // Select the parent element
                const parentElement = e.target.closest(".product");
                // Select the button element
                const clickedItem = parentElement.querySelector(".product-shopping");
                // Get the product id
                const productId = +clickedItem.dataset.item;
                // Get the product
                const shoppingList = await _modelJs.shoppingItem(productId);
                // Get the length of the array
                const totalItems = shoppingList.length;
                // Update the shopping cart total
                (0, _viewJs.app).updateShoppingCartLength(_domJs.shoppingTotalItems, totalItems);
                // Clear the shopping list container
                _domJs.shoppingCartContainer.innerHTML = "";
                // Update shopping cart
                shoppingList.forEach(function(item) {
                    (0, _viewJs.app).updateShoppingCart(_domJs.shoppingCartContainer, item);
                });
            }
        });
    } catch (err) {
        console.log(err.message);
    }
};
controller();
// Toggle the hidden class
const toggleShoppingListModal = function() {
    _modelJs.showShoppingListModal(_domJs.overflowsContainer, _domJs.shoppingListContainer);
};
// Add event listeners
_domJs.headerShopping.addEventListener("click", function() {
    // Remove the hidden class
    toggleShoppingListModal();
});
_domJs.shoppingListCloseBtn.addEventListener("click", function() {
    // Add the hidden class
    toggleShoppingListModal();
});
_domJs.overflowsContainer.addEventListener("click", function() {
    // Add the hidden classes
    toggleShoppingListModal();
});
_domJs.shoppingListBtn.addEventListener("click", function() {
    // Remove hidden class
    _modelJs.showHideCheckoutModal(_domJs.checkoutContainer);
    _domJs.shoppingListContainer.classList.add("shopping-modal-hidden");
});
_domJs.checkoutBtn.addEventListener("click", function() {
    // Remove hidden class
    _modelJs.showHideCheckoutModal(_domJs.checkoutContainer);
    _domJs.overflowsContainer.classList.add("overflow-modal-hidden");
});

},{"core-js/modules/web.immediate.js":"1Kzzt","regenerator-runtime/runtime":"bdeeW","./model.js":"Py0LO","./views/View.js":"iS7pi","./config/dom.js":"7QeJR","./config/config.js":"jL1TQ"}],"1Kzzt":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("db29a4aa0cb82375");
require("6eb6351dfbad1c74");

},{"db29a4aa0cb82375":"hHkmB","6eb6351dfbad1c74":"khh5b"}],"hHkmB":[function(require,module,exports) {
"use strict";
var $ = require("2c8b15889df2eb0");
var global = require("78e12ee2c0aa854f");
var clearImmediate = require("f45ff9c25f136a39").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"2c8b15889df2eb0":"gTH70","78e12ee2c0aa854f":"jqwTy","f45ff9c25f136a39":"hE9sQ"}],"gTH70":[function(require,module,exports) {
"use strict";
var global = require("17d3a54ba0065d6d");
var getOwnPropertyDescriptor = require("afe4792c4e81b29").f;
var createNonEnumerableProperty = require("d9c8c32c7b7bcd34");
var defineBuiltIn = require("d466be73a7ec66e4");
var defineGlobalProperty = require("a5b4f3404fd66d56");
var copyConstructorProperties = require("6b17d2e1b6ed986e");
var isForced = require("531dfdafb7d21ba4");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"17d3a54ba0065d6d":"jqwTy","afe4792c4e81b29":"bc3sh","d9c8c32c7b7bcd34":"ila9r","d466be73a7ec66e4":"8zBPZ","a5b4f3404fd66d56":"7p8K2","6b17d2e1b6ed986e":"k1TES","531dfdafb7d21ba4":"4dg01"}],"jqwTy":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || this || Function("return this")();

},{}],"bc3sh":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("48d487c6fed79219");
var call = require("7c0accbb7c92fea1");
var propertyIsEnumerableModule = require("4fd4779392805900");
var createPropertyDescriptor = require("cde0768186b80b34");
var toIndexedObject = require("62553ce3bae8e721");
var toPropertyKey = require("3962eb1d85cd3153");
var hasOwn = require("b8c25ea6c9cdee6b");
var IE8_DOM_DEFINE = require("f284c0ed3965ba96");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"48d487c6fed79219":"fLDsW","7c0accbb7c92fea1":"2CyCC","4fd4779392805900":"8H3qp","cde0768186b80b34":"74yfL","62553ce3bae8e721":"1HSfz","3962eb1d85cd3153":"3ITma","b8c25ea6c9cdee6b":"1GiKe","f284c0ed3965ba96":"cyCjh"}],"fLDsW":[function(require,module,exports) {
"use strict";
var fails = require("5ee6c63a83bef91e");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"5ee6c63a83bef91e":"1GWOg"}],"1GWOg":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"2CyCC":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("2e7c0f773569c007");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"2e7c0f773569c007":"cEeJT"}],"cEeJT":[function(require,module,exports) {
"use strict";
var fails = require("bf21ca74b2ca18ff");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"bf21ca74b2ca18ff":"1GWOg"}],"8H3qp":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"74yfL":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"1HSfz":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("4354e3ee39b1a04");
var requireObjectCoercible = require("a389c084bf086005");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"4354e3ee39b1a04":"1rUUE","a389c084bf086005":"f9B05"}],"1rUUE":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1e78567b4b522054");
var fails = require("f760a8f6a03fff6a");
var classof = require("50e34c210203a959");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"1e78567b4b522054":"68a4V","f760a8f6a03fff6a":"1GWOg","50e34c210203a959":"6hjnZ"}],"68a4V":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("13c2f261283c5aa9");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"13c2f261283c5aa9":"cEeJT"}],"6hjnZ":[function(require,module,exports) {
"use strict";
var uncurryThis = require("e0d515a4444b6384");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"e0d515a4444b6384":"68a4V"}],"f9B05":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("d0d766878c3e8d1c");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"d0d766878c3e8d1c":"jYiW1"}],"jYiW1":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"3ITma":[function(require,module,exports) {
"use strict";
var toPrimitive = require("3fd12e8284c1c326");
var isSymbol = require("451d43c11ae898f9");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"3fd12e8284c1c326":"409ug","451d43c11ae898f9":"kAkaj"}],"409ug":[function(require,module,exports) {
"use strict";
var call = require("463a98ff9fba5e38");
var isObject = require("f70b37a3ce1bb62d");
var isSymbol = require("f55e81522f92a76f");
var getMethod = require("cb5542a766007ba9");
var ordinaryToPrimitive = require("66c542af9b27e819");
var wellKnownSymbol = require("6936c2d1801cbd5d");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"463a98ff9fba5e38":"2CyCC","f70b37a3ce1bb62d":"4KF3j","f55e81522f92a76f":"kAkaj","cb5542a766007ba9":"bblVr","66c542af9b27e819":"kadGR","6936c2d1801cbd5d":"64yL9"}],"4KF3j":[function(require,module,exports) {
"use strict";
var isCallable = require("bc5d1a0c8f1d3f4e");
var $documentAll = require("2870828098998318");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"bc5d1a0c8f1d3f4e":"eDwms","2870828098998318":"4WKcw"}],"eDwms":[function(require,module,exports) {
"use strict";
var $documentAll = require("b017fd1f0cdda5f1");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"b017fd1f0cdda5f1":"4WKcw"}],"4WKcw":[function(require,module,exports) {
"use strict";
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"kAkaj":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("286497474cd61375");
var isCallable = require("50bea2af44352f92");
var isPrototypeOf = require("8c4d84da04dd7807");
var USE_SYMBOL_AS_UID = require("23c21f619e7dbc4d");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"286497474cd61375":"ljxg4","50bea2af44352f92":"eDwms","8c4d84da04dd7807":"lgcYU","23c21f619e7dbc4d":"fw4Bq"}],"ljxg4":[function(require,module,exports) {
"use strict";
var global = require("d1bb90ddba192e22");
var isCallable = require("208a73c1adb91896");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"d1bb90ddba192e22":"jqwTy","208a73c1adb91896":"eDwms"}],"lgcYU":[function(require,module,exports) {
"use strict";
var uncurryThis = require("48b7d04bd5ea419b");
module.exports = uncurryThis({}.isPrototypeOf);

},{"48b7d04bd5ea419b":"68a4V"}],"fw4Bq":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("7ec8ce1a8d2da1a4");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"7ec8ce1a8d2da1a4":"hNnQl"}],"hNnQl":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("2550bc9afe336757");
var fails = require("528d1d2e9c71c631");
var global = require("2a45d8d26078be9d");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"2550bc9afe336757":"jJLhS","528d1d2e9c71c631":"1GWOg","2a45d8d26078be9d":"jqwTy"}],"jJLhS":[function(require,module,exports) {
"use strict";
var global = require("f3f816886c81a866");
var userAgent = require("c941d3b55a0e7a19");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"f3f816886c81a866":"jqwTy","c941d3b55a0e7a19":"hF5w4"}],"hF5w4":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"bblVr":[function(require,module,exports) {
"use strict";
var aCallable = require("61736d3277cf10ef");
var isNullOrUndefined = require("69edbb3bda943f1e");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"61736d3277cf10ef":"27AlC","69edbb3bda943f1e":"jYiW1"}],"27AlC":[function(require,module,exports) {
"use strict";
var isCallable = require("6639fa0359cef6ab");
var tryToString = require("b704f3436b12708c");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"6639fa0359cef6ab":"eDwms","b704f3436b12708c":"2GP7m"}],"2GP7m":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"kadGR":[function(require,module,exports) {
"use strict";
var call = require("98455e76ea3e4e8d");
var isCallable = require("77e97f4d7f6d0f66");
var isObject = require("d2c018d4acaa29b8");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"98455e76ea3e4e8d":"2CyCC","77e97f4d7f6d0f66":"eDwms","d2c018d4acaa29b8":"4KF3j"}],"64yL9":[function(require,module,exports) {
"use strict";
var global = require("27e7d4b51cd39b16");
var shared = require("764c617efc496ffa");
var hasOwn = require("947caa0d87298fd8");
var uid = require("79bc1ed34d159926");
var NATIVE_SYMBOL = require("c9e61157f513ab01");
var USE_SYMBOL_AS_UID = require("98d7998536d039a1");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"27e7d4b51cd39b16":"jqwTy","764c617efc496ffa":"7wU1f","947caa0d87298fd8":"1GiKe","79bc1ed34d159926":"avt5B","c9e61157f513ab01":"hNnQl","98d7998536d039a1":"fw4Bq"}],"7wU1f":[function(require,module,exports) {
"use strict";
var IS_PURE = require("9af21721c22c414c");
var store = require("659fffae87c48373");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.32.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"9af21721c22c414c":"lPPVW","659fffae87c48373":"Vvd4K"}],"lPPVW":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"Vvd4K":[function(require,module,exports) {
"use strict";
var global = require("20b4c5f67c0d5569");
var defineGlobalProperty = require("a1bbbd6a27cad347");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"20b4c5f67c0d5569":"jqwTy","a1bbbd6a27cad347":"7p8K2"}],"7p8K2":[function(require,module,exports) {
"use strict";
var global = require("26a9ab9c743e1dae");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"26a9ab9c743e1dae":"jqwTy"}],"1GiKe":[function(require,module,exports) {
"use strict";
var uncurryThis = require("6f238ca188e2d8ca");
var toObject = require("a0ff381f5904f2c0");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"6f238ca188e2d8ca":"68a4V","a0ff381f5904f2c0":"8aTbg"}],"8aTbg":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("5878c3fb744e0f45");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"5878c3fb744e0f45":"f9B05"}],"avt5B":[function(require,module,exports) {
"use strict";
var uncurryThis = require("870e24b09b8d7dcd");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"870e24b09b8d7dcd":"68a4V"}],"cyCjh":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("23a2f1ce276d24d2");
var fails = require("5c66b5827b37eb5");
var createElement = require("7a9ab688961f6b73");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"23a2f1ce276d24d2":"fLDsW","5c66b5827b37eb5":"1GWOg","7a9ab688961f6b73":"irCbs"}],"irCbs":[function(require,module,exports) {
"use strict";
var global = require("f31e472fb5e7a93d");
var isObject = require("804fd74371a0ff0c");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f31e472fb5e7a93d":"jqwTy","804fd74371a0ff0c":"4KF3j"}],"ila9r":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("fdda8e95e399b652");
var definePropertyModule = require("98cccd022f1c56f6");
var createPropertyDescriptor = require("d332ef320138e21");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"fdda8e95e399b652":"fLDsW","98cccd022f1c56f6":"fJ3cw","d332ef320138e21":"74yfL"}],"fJ3cw":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("73c18d78212e2a83");
var IE8_DOM_DEFINE = require("6e7305df43b4bf3c");
var V8_PROTOTYPE_DEFINE_BUG = require("4abde7c2a0795aef");
var anObject = require("83e0c1fa74339309");
var toPropertyKey = require("34fcf65ac93e52bd");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"73c18d78212e2a83":"fLDsW","6e7305df43b4bf3c":"cyCjh","4abde7c2a0795aef":"ktTxg","83e0c1fa74339309":"bXpKW","34fcf65ac93e52bd":"3ITma"}],"ktTxg":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("4c95547c8efe36f8");
var fails = require("6baf6a9542375dc7");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"4c95547c8efe36f8":"fLDsW","6baf6a9542375dc7":"1GWOg"}],"bXpKW":[function(require,module,exports) {
"use strict";
var isObject = require("cfe46de0fe1df3aa");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"cfe46de0fe1df3aa":"4KF3j"}],"8zBPZ":[function(require,module,exports) {
"use strict";
var isCallable = require("1d00f973e2177f8a");
var definePropertyModule = require("784288eadf336e6c");
var makeBuiltIn = require("f05ec2494d5d3c1f");
var defineGlobalProperty = require("a5bed196120ccc14");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"1d00f973e2177f8a":"eDwms","784288eadf336e6c":"fJ3cw","f05ec2494d5d3c1f":"d0UhN","a5bed196120ccc14":"7p8K2"}],"d0UhN":[function(require,module,exports) {
"use strict";
var uncurryThis = require("40185e727768a51a");
var fails = require("ff970020eedf6c44");
var isCallable = require("7f87baa5ed2960b8");
var hasOwn = require("cd43e60c4993ff03");
var DESCRIPTORS = require("1a2b35258cb9db8e");
var CONFIGURABLE_FUNCTION_NAME = require("e2cea20855965288").CONFIGURABLE;
var inspectSource = require("7c65197894d6062c");
var InternalStateModule = require("92d9df7fc04503fc");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"40185e727768a51a":"68a4V","ff970020eedf6c44":"1GWOg","7f87baa5ed2960b8":"eDwms","cd43e60c4993ff03":"1GiKe","1a2b35258cb9db8e":"fLDsW","e2cea20855965288":"h4ndp","7c65197894d6062c":"jYBd4","92d9df7fc04503fc":"d0MzT"}],"h4ndp":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("d82b50901fa14551");
var hasOwn = require("a3f59164e088fbe0");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"d82b50901fa14551":"fLDsW","a3f59164e088fbe0":"1GiKe"}],"jYBd4":[function(require,module,exports) {
"use strict";
var uncurryThis = require("67a32afacd3ba18d");
var isCallable = require("483d3865c4fa2200");
var store = require("9919e122cc15f4bd");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"67a32afacd3ba18d":"68a4V","483d3865c4fa2200":"eDwms","9919e122cc15f4bd":"Vvd4K"}],"d0MzT":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("de8966a384af9d94");
var global = require("1419bee6034627c4");
var isObject = require("b910e35c0211ae14");
var createNonEnumerableProperty = require("e238f7122e0ea203");
var hasOwn = require("aa1a8e55723caae8");
var shared = require("47f8ae9f3aa401bf");
var sharedKey = require("713853f0d460769a");
var hiddenKeys = require("13a4b1e893c066ae");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"de8966a384af9d94":"ldgcy","1419bee6034627c4":"jqwTy","b910e35c0211ae14":"4KF3j","e238f7122e0ea203":"ila9r","aa1a8e55723caae8":"1GiKe","47f8ae9f3aa401bf":"Vvd4K","713853f0d460769a":"4Mm1g","13a4b1e893c066ae":"ldlZ9"}],"ldgcy":[function(require,module,exports) {
"use strict";
var global = require("27bb0660600f8c87");
var isCallable = require("67554eaca950adcd");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"27bb0660600f8c87":"jqwTy","67554eaca950adcd":"eDwms"}],"4Mm1g":[function(require,module,exports) {
"use strict";
var shared = require("5bc5af4c02a89224");
var uid = require("41da38a199d060d3");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"5bc5af4c02a89224":"7wU1f","41da38a199d060d3":"avt5B"}],"ldlZ9":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"k1TES":[function(require,module,exports) {
"use strict";
var hasOwn = require("c4f77198d7c454b8");
var ownKeys = require("d6dbfbda3859cb55");
var getOwnPropertyDescriptorModule = require("96b8f66f6fb1f3eb");
var definePropertyModule = require("11cb8d793e013e5a");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"c4f77198d7c454b8":"1GiKe","d6dbfbda3859cb55":"htG5a","96b8f66f6fb1f3eb":"bc3sh","11cb8d793e013e5a":"fJ3cw"}],"htG5a":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("e46e7d86e99af0e0");
var uncurryThis = require("ce291cc5b7f7cc07");
var getOwnPropertyNamesModule = require("df96be6ded62cecc");
var getOwnPropertySymbolsModule = require("2c1a70a28ec52c82");
var anObject = require("7d623f2aba42b438");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"e46e7d86e99af0e0":"ljxg4","ce291cc5b7f7cc07":"68a4V","df96be6ded62cecc":"kNm5o","2c1a70a28ec52c82":"kZhbx","7d623f2aba42b438":"bXpKW"}],"kNm5o":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("d21142779e19ccb2");
var enumBugKeys = require("f4ad55b905ea2533");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"d21142779e19ccb2":"jBjrT","f4ad55b905ea2533":"3kzch"}],"jBjrT":[function(require,module,exports) {
"use strict";
var uncurryThis = require("2c86b98b8224a3c9");
var hasOwn = require("ef22c359c3adc12a");
var toIndexedObject = require("d5c09d02228503b9");
var indexOf = require("87febe9382e8e639").indexOf;
var hiddenKeys = require("2b2c719751360c48");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"2c86b98b8224a3c9":"68a4V","ef22c359c3adc12a":"1GiKe","d5c09d02228503b9":"1HSfz","87febe9382e8e639":"jlh0J","2b2c719751360c48":"ldlZ9"}],"jlh0J":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("6313c06eb35a8d3a");
var toAbsoluteIndex = require("b01a86da61365d93");
var lengthOfArrayLike = require("84f12e91990776fb");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"6313c06eb35a8d3a":"1HSfz","b01a86da61365d93":"e6Cm0","84f12e91990776fb":"8DYhG"}],"e6Cm0":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("7bfb673d47f58fba");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"7bfb673d47f58fba":"k2nQV"}],"k2nQV":[function(require,module,exports) {
"use strict";
var trunc = require("a3268d18373df30e");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"a3268d18373df30e":"kMAKw"}],"kMAKw":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"8DYhG":[function(require,module,exports) {
"use strict";
var toLength = require("21c116927f247313");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"21c116927f247313":"gkJzF"}],"gkJzF":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("876ac4b31166a1ed");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"876ac4b31166a1ed":"k2nQV"}],"3kzch":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"kZhbx":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"4dg01":[function(require,module,exports) {
"use strict";
var fails = require("efc2c5194cf074f9");
var isCallable = require("a586d3d25611c481");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"efc2c5194cf074f9":"1GWOg","a586d3d25611c481":"eDwms"}],"hE9sQ":[function(require,module,exports) {
"use strict";
var global = require("43e655df71326002");
var apply = require("32a9ab570c899926");
var bind = require("d3cc48ecc648c6e7");
var isCallable = require("cd9d2a504d8eca0b");
var hasOwn = require("2ed8270fb46bbb4f");
var fails = require("1da7556a453c2435");
var html = require("2fc361793add2f97");
var arraySlice = require("d4bd78a7d7dc5a89");
var createElement = require("9e018dce779fa1f5");
var validateArgumentsLength = require("4fea1240f9c6f58c");
var IS_IOS = require("cd81faa20bb917ea");
var IS_NODE = require("d2cfcb909734eb04");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"43e655df71326002":"jqwTy","32a9ab570c899926":"abBt0","d3cc48ecc648c6e7":"6xyiL","cd9d2a504d8eca0b":"eDwms","2ed8270fb46bbb4f":"1GiKe","1da7556a453c2435":"1GWOg","2fc361793add2f97":"khBD5","d4bd78a7d7dc5a89":"3Vc3j","9e018dce779fa1f5":"irCbs","4fea1240f9c6f58c":"8X44T","cd81faa20bb917ea":"g1hYz","d2cfcb909734eb04":"4UloU"}],"abBt0":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("33cd0cea0fd1b821");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"33cd0cea0fd1b821":"cEeJT"}],"6xyiL":[function(require,module,exports) {
"use strict";
var uncurryThis = require("bb8c31bfcbdfba8f");
var aCallable = require("6bdf25fdcba77a55");
var NATIVE_BIND = require("7aa26b23c1134628");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"bb8c31bfcbdfba8f":"lsl8E","6bdf25fdcba77a55":"27AlC","7aa26b23c1134628":"cEeJT"}],"lsl8E":[function(require,module,exports) {
"use strict";
var classofRaw = require("b440543883a0ffbb");
var uncurryThis = require("b39cec7fd73cc4fb");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"b440543883a0ffbb":"6hjnZ","b39cec7fd73cc4fb":"68a4V"}],"khBD5":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("6bf3c5ddf3575b65");
module.exports = getBuiltIn("document", "documentElement");

},{"6bf3c5ddf3575b65":"ljxg4"}],"3Vc3j":[function(require,module,exports) {
"use strict";
var uncurryThis = require("adb37a38f29a2670");
module.exports = uncurryThis([].slice);

},{"adb37a38f29a2670":"68a4V"}],"8X44T":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"g1hYz":[function(require,module,exports) {
"use strict";
var userAgent = require("5e80c039bc893783");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"5e80c039bc893783":"hF5w4"}],"4UloU":[function(require,module,exports) {
"use strict";
var global = require("9da372c84de2a679");
var classof = require("e417adb73c214116");
module.exports = classof(global.process) === "process";

},{"9da372c84de2a679":"jqwTy","e417adb73c214116":"6hjnZ"}],"khh5b":[function(require,module,exports) {
"use strict";
var $ = require("e4bde84258f0b01a");
var global = require("667b84cb973b57a9");
var setTask = require("b4fa0d757b43fb3").set;
var schedulersFix = require("dc083771e8a4039e");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"e4bde84258f0b01a":"gTH70","667b84cb973b57a9":"jqwTy","b4fa0d757b43fb3":"hE9sQ","dc083771e8a4039e":"3iP9X"}],"3iP9X":[function(require,module,exports) {
"use strict";
var global = require("9ca739c2079b06f0");
var apply = require("764e2b31877c5e2e");
var isCallable = require("e79cafaeaacf16c3");
var ENGINE_IS_BUN = require("61d337ebe40a469b");
var USER_AGENT = require("efa7b9d12a86d0c3");
var arraySlice = require("9eca312dd2f56abe");
var validateArgumentsLength = require("5fb7b999ed115f40");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"9ca739c2079b06f0":"jqwTy","764e2b31877c5e2e":"abBt0","e79cafaeaacf16c3":"eDwms","61d337ebe40a469b":"aMHJR","efa7b9d12a86d0c3":"hF5w4","9eca312dd2f56abe":"3Vc3j","5fb7b999ed115f40":"8X44T"}],"aMHJR":[function(require,module,exports) {
"use strict";
/* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"bdeeW":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable || iterable === "") {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"Py0LO":[function(require,module,exports) {
// Local imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchProducts", ()=>fetchProducts);
parcelHelpers.export(exports, "getItemId", ()=>getItemId);
parcelHelpers.export(exports, "getAllCategories", ()=>getAllCategories);
parcelHelpers.export(exports, "getProductsInCategory", ()=>getProductsInCategory);
parcelHelpers.export(exports, "showShoppingListModal", ()=>showShoppingListModal);
parcelHelpers.export(exports, "showHideCheckoutModal", ()=>showHideCheckoutModal);
parcelHelpers.export(exports, "shoppingItem", ()=>shoppingItem);
var _config = require("./config/config");
const fetchProducts = async function() {
    try {
        // API request for all the products
        const reponse = await fetch((0, _config.API_URL));
        // Throw an exception
        if (!reponse.ok) throw new Error("Something went wrong!!");
        // Convert the data to a json string
        const data = await reponse.json();
        // Return the products from the function
        return data.products;
    } catch (err) {
        // Rethrow the error
        throw new Error(err.message);
    }
};
const getItemId = function(e) {
    // Get the clicked item
    const clickedItem = e.target.closest(".sidebar-item");
    // Get the product id
    const { product } = clickedItem.dataset;
    // Return the id
    return product;
};
const getAllCategories = function(products) {
    // Set the categories array
    const categories = products.reduce(function(acc, cur, i, arr) {
        if (!acc.includes(cur.category)) acc.push(cur.category);
        return acc;
    }, [
        "all"
    ]);
    // Return the categories
    return categories;
};
const getProductsInCategory = async function(category) {
    try {
        // API request for all the products
        const products = await fetchProducts();
        // Get the category
        if (category === "all" || category === "") return products;
        // Filter the array
        const categoryArr = products.filter((product)=>product.category === category);
        // Return the products
        return categoryArr;
    } catch (err) {
        throw new Error(err.message);
    }
};
const showShoppingListModal = function(overflowContainer, shoppingListContainer) {
    // Manipulate classes
    overflowContainer.classList.toggle("overflow-modal-hidden");
    shoppingListContainer.classList.toggle("shopping-modal-hidden");
};
const showHideCheckoutModal = function(checkoutContainer) {
    // Manipulate classes
    checkoutContainer.classList.toggle("checkout-modal-hidden");
};
const shoppingItem = async function(id) {
    // Fetch the products
    const products = await fetchProducts();
    // Get the selected item
    const selectedProduct = products.find((product)=>product.id === id);
    // Create a shopping object
    const shopping = {
        productImage: selectedProduct.thumbnail,
        productTitle: selectedProduct.title,
        productCategory: selectedProduct.category,
        productStock: selectedProduct.stock,
        productPrice: selectedProduct.price,
        productId: selectedProduct.id
    };
    // Push the object to the array
    (0, _config.shoppingListArr).push(shopping);
    // Return the array
    return 0, _config.shoppingListArr;
};

},{"./config/config":"jL1TQ","@parcel/transformer-js/src/esmodule-helpers.js":"ePoXS"}],"jL1TQ":[function(require,module,exports) {
// State variables
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "shoppingListArr", ()=>shoppingListArr);
const API_URL = "https://dummyjson.com/products";
const shoppingListArr = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ePoXS"}],"ePoXS":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iS7pi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "app", ()=>app);
var _helpers = require("../config/helpers");
class App {
    constructor(){}
    // Display spinner
    displaySpinner(container) {
        const html = `
        <div class="spinner-container">
          <i class="fa-sharp fa-solid fa-circle-notch spinner"></i>
        </div>
      `;
        container.insertAdjacentHTML("beforeend", html);
    }
    // Display select container options
    displaySelectOptions(options, container) {
        // Generate markup
        const html = `<option value="${options}">${options}</option>`;
        // Append to the container
        container.insertAdjacentHTML("beforeend", html);
    }
    // Display sidebar list
    displaySidebarResults(product, container) {
        // Generate markup
        const html = `
      <li class="sidebar-item" data-product="${product.id}">
        <img
          src="${product.thumbnail}"
          alt="${product.title}"
          class="sidebar-img"
        />
        <div class="sidebar-info">
          <h3 class="sidebar-name">${product.title.length > 30 ? product.title.split("").slice(0, 30).join("") + "..." : product.title}</h3>
          <p class="sidebar-text">${product.brand}</p>
        </div>
      </li>
    `;
        // Append to the UI
        container.insertAdjacentHTML("beforeend", html);
    }
    // Display product
    displayProduct(product, container) {
        // Generate markup
        const html = `
      <figure class="product-photo">
        <img
          src="${product.thumbnail}"
          alt="${product.title}"
          class="product-img"
        />
        <figcaption class="product-name">
          <h1>${product.title}</h1>
        </figcaption>
      </figure>
      <div class="product-info">
        <p class="product-category">${product.category[0].toUpperCase() + product.category.slice(1)}</p>
        <p class="product-brand">${product.brand}</p>
        <p class="product-price">${(0, _helpers.currencyFormatter)(product.price)}</p>
        <p class="product-stock">${product.stock} units left</p>
        <p class="product-rating">${product.rating} rating</p>
        <button class="product-shopping" data-item="${product.id}">
          <i class="fa-sharp fa-solid fa-cart-plus shopping-icon"></i>
          <i class="fa-solid fa-check shopping-icon hide-shopping-icon"></i>
        </button>
      </div>
      <p class="product-description">${product.description}</p>
      <div class="product-links">
        <a href="" class="product-link"
          >Check out more <i class="fa-solid fa-arrow-right"></i
        ></a>
      </div>
    `;
        // Append to the UI
        container.insertAdjacentHTML("beforeend", html);
    }
    updateShoppingCartLength(element, total) {
        element.textContent = total;
    }
    updateShoppingCart(container, product) {
        // Generate markup
        const html = `
      <tr>
        <td>
          <img src="${product.productImage}" alt="${product.productTitle}"/>
        </td>
        <td>${product.productTitle}</td>
        <td>${product.productCategory}</td>
        <td>${product.productStock} units</td>
        <td>${product.productPrice}</td>
        <td class="total-items-container">
          <i
            class="fa-solid fa-chevron-up total-items total-items-increase"
          ></i>
          <p class="shopping-list-total-items">1</p>
          <i
            class="fa-solid fa-chevron-down total-items total-items-reduce"
          ></i>
        </td>
      </tr>
    `;
        // Append to the UI
        container.insertAdjacentHTML("beforeend", html);
    }
}
const app = new App();

},{"../config/helpers":"bfT5h","@parcel/transformer-js/src/esmodule-helpers.js":"ePoXS"}],"bfT5h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currencyFormatter", ()=>currencyFormatter);
const currencyConverter = function(amount) {
    return amount * 1206;
};
const currencyFormatter = function(currency) {
    // Convert currency to som
    const som = currencyConverter(currency);
    // Format the currency
    return new Intl.NumberFormat(navigator.language, {
        style: "currency",
        currency: "som"
    }).format(som);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ePoXS"}],"7QeJR":[function(require,module,exports) {
// Select DOM Elements
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebarContainer", ()=>sidebarContainer);
parcelHelpers.export(exports, "productContainer", ()=>productContainer);
parcelHelpers.export(exports, "selectContainer", ()=>selectContainer);
parcelHelpers.export(exports, "headerSearchbar", ()=>headerSearchbar);
parcelHelpers.export(exports, "headerShopping", ()=>headerShopping);
parcelHelpers.export(exports, "overflowsContainer", ()=>overflowsContainer);
parcelHelpers.export(exports, "shoppingListContainer", ()=>shoppingListContainer);
parcelHelpers.export(exports, "shoppingListCloseBtn", ()=>shoppingListCloseBtn);
parcelHelpers.export(exports, "checkoutContainer", ()=>checkoutContainer);
parcelHelpers.export(exports, "checkoutBtn", ()=>checkoutBtn);
parcelHelpers.export(exports, "shoppingListBtn", ()=>shoppingListBtn);
parcelHelpers.export(exports, "shoppingTotalItems", ()=>shoppingTotalItems);
parcelHelpers.export(exports, "shoppingCartContainer", ()=>shoppingCartContainer);
const sidebarContainer = document.querySelector(".sidebar-list");
const productContainer = document.querySelector(".product");
const selectContainer = document.querySelector(".header-select");
const headerSearchbar = document.querySelector(".header-searchbar");
const headerShopping = document.querySelector(".header-shopping");
const overflowsContainer = document.querySelector(".overflows");
const shoppingListContainer = document.querySelector(".shopping-list");
const shoppingListCloseBtn = document.querySelector(".shopping-list-close");
const checkoutContainer = document.querySelector(".checkout-modal-hidden");
const checkoutBtn = document.querySelector(".checkout-btn");
const shoppingListBtn = document.querySelector(".shopping-list-btn");
const shoppingTotalItems = document.querySelector(".header-product-value");
const shoppingCartContainer = document.querySelector(".shopping-list-body");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ePoXS"}]},["fUloJ","1GgH0"], "1GgH0", "parcelRequire8946")

//# sourceMappingURL=index.850bd9e5.js.map
