/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([283,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(284);
module.exports = __webpack_require__(478);


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 143,
	"./af.js": 143,
	"./ar": 144,
	"./ar-dz": 145,
	"./ar-dz.js": 145,
	"./ar-kw": 146,
	"./ar-kw.js": 146,
	"./ar-ly": 147,
	"./ar-ly.js": 147,
	"./ar-ma": 148,
	"./ar-ma.js": 148,
	"./ar-sa": 149,
	"./ar-sa.js": 149,
	"./ar-tn": 150,
	"./ar-tn.js": 150,
	"./ar.js": 144,
	"./az": 151,
	"./az.js": 151,
	"./be": 152,
	"./be.js": 152,
	"./bg": 153,
	"./bg.js": 153,
	"./bm": 154,
	"./bm.js": 154,
	"./bn": 155,
	"./bn.js": 155,
	"./bo": 156,
	"./bo.js": 156,
	"./br": 157,
	"./br.js": 157,
	"./bs": 158,
	"./bs.js": 158,
	"./ca": 159,
	"./ca.js": 159,
	"./cs": 160,
	"./cs.js": 160,
	"./cv": 161,
	"./cv.js": 161,
	"./cy": 162,
	"./cy.js": 162,
	"./da": 163,
	"./da.js": 163,
	"./de": 164,
	"./de-at": 165,
	"./de-at.js": 165,
	"./de-ch": 166,
	"./de-ch.js": 166,
	"./de.js": 164,
	"./dv": 167,
	"./dv.js": 167,
	"./el": 168,
	"./el.js": 168,
	"./en-SG": 169,
	"./en-SG.js": 169,
	"./en-au": 170,
	"./en-au.js": 170,
	"./en-ca": 171,
	"./en-ca.js": 171,
	"./en-gb": 172,
	"./en-gb.js": 172,
	"./en-ie": 173,
	"./en-ie.js": 173,
	"./en-il": 174,
	"./en-il.js": 174,
	"./en-nz": 175,
	"./en-nz.js": 175,
	"./eo": 176,
	"./eo.js": 176,
	"./es": 177,
	"./es-do": 178,
	"./es-do.js": 178,
	"./es-us": 179,
	"./es-us.js": 179,
	"./es.js": 177,
	"./et": 180,
	"./et.js": 180,
	"./eu": 181,
	"./eu.js": 181,
	"./fa": 182,
	"./fa.js": 182,
	"./fi": 183,
	"./fi.js": 183,
	"./fo": 184,
	"./fo.js": 184,
	"./fr": 185,
	"./fr-ca": 186,
	"./fr-ca.js": 186,
	"./fr-ch": 187,
	"./fr-ch.js": 187,
	"./fr.js": 185,
	"./fy": 188,
	"./fy.js": 188,
	"./ga": 189,
	"./ga.js": 189,
	"./gd": 190,
	"./gd.js": 190,
	"./gl": 191,
	"./gl.js": 191,
	"./gom-latn": 192,
	"./gom-latn.js": 192,
	"./gu": 193,
	"./gu.js": 193,
	"./he": 194,
	"./he.js": 194,
	"./hi": 195,
	"./hi.js": 195,
	"./hr": 196,
	"./hr.js": 196,
	"./hu": 197,
	"./hu.js": 197,
	"./hy-am": 198,
	"./hy-am.js": 198,
	"./id": 199,
	"./id.js": 199,
	"./is": 200,
	"./is.js": 200,
	"./it": 201,
	"./it-ch": 202,
	"./it-ch.js": 202,
	"./it.js": 201,
	"./ja": 203,
	"./ja.js": 203,
	"./jv": 204,
	"./jv.js": 204,
	"./ka": 205,
	"./ka.js": 205,
	"./kk": 206,
	"./kk.js": 206,
	"./km": 207,
	"./km.js": 207,
	"./kn": 208,
	"./kn.js": 208,
	"./ko": 209,
	"./ko.js": 209,
	"./ku": 210,
	"./ku.js": 210,
	"./ky": 211,
	"./ky.js": 211,
	"./lb": 212,
	"./lb.js": 212,
	"./lo": 213,
	"./lo.js": 213,
	"./lt": 214,
	"./lt.js": 214,
	"./lv": 215,
	"./lv.js": 215,
	"./me": 216,
	"./me.js": 216,
	"./mi": 217,
	"./mi.js": 217,
	"./mk": 218,
	"./mk.js": 218,
	"./ml": 219,
	"./ml.js": 219,
	"./mn": 220,
	"./mn.js": 220,
	"./mr": 221,
	"./mr.js": 221,
	"./ms": 222,
	"./ms-my": 223,
	"./ms-my.js": 223,
	"./ms.js": 222,
	"./mt": 224,
	"./mt.js": 224,
	"./my": 225,
	"./my.js": 225,
	"./nb": 226,
	"./nb.js": 226,
	"./ne": 227,
	"./ne.js": 227,
	"./nl": 228,
	"./nl-be": 229,
	"./nl-be.js": 229,
	"./nl.js": 228,
	"./nn": 230,
	"./nn.js": 230,
	"./pa-in": 231,
	"./pa-in.js": 231,
	"./pl": 232,
	"./pl.js": 232,
	"./pt": 233,
	"./pt-br": 234,
	"./pt-br.js": 234,
	"./pt.js": 233,
	"./ro": 235,
	"./ro.js": 235,
	"./ru": 236,
	"./ru.js": 236,
	"./sd": 237,
	"./sd.js": 237,
	"./se": 238,
	"./se.js": 238,
	"./si": 239,
	"./si.js": 239,
	"./sk": 240,
	"./sk.js": 240,
	"./sl": 241,
	"./sl.js": 241,
	"./sq": 242,
	"./sq.js": 242,
	"./sr": 243,
	"./sr-cyrl": 244,
	"./sr-cyrl.js": 244,
	"./sr.js": 243,
	"./ss": 245,
	"./ss.js": 245,
	"./sv": 246,
	"./sv.js": 246,
	"./sw": 247,
	"./sw.js": 247,
	"./ta": 248,
	"./ta.js": 248,
	"./te": 249,
	"./te.js": 249,
	"./tet": 250,
	"./tet.js": 250,
	"./tg": 251,
	"./tg.js": 251,
	"./th": 252,
	"./th.js": 252,
	"./tl-ph": 253,
	"./tl-ph.js": 253,
	"./tlh": 254,
	"./tlh.js": 254,
	"./tr": 255,
	"./tr.js": 255,
	"./tzl": 256,
	"./tzl.js": 256,
	"./tzm": 257,
	"./tzm-latn": 258,
	"./tzm-latn.js": 258,
	"./tzm.js": 257,
	"./ug-cn": 259,
	"./ug-cn.js": 259,
	"./uk": 260,
	"./uk.js": 260,
	"./ur": 261,
	"./ur.js": 261,
	"./uz": 262,
	"./uz-latn": 263,
	"./uz-latn.js": 263,
	"./uz.js": 262,
	"./vi": 264,
	"./vi.js": 264,
	"./x-pseudo": 265,
	"./x-pseudo.js": 265,
	"./yo": 266,
	"./yo.js": 266,
	"./zh-cn": 267,
	"./zh-cn.js": 267,
	"./zh-hk": 268,
	"./zh-hk.js": 268,
	"./zh-tw": 269,
	"./zh-tw.js": 269
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 464;

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(72);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(274);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(275);

// CONCATENATED MODULE: ./src/client/store/reducers/recipeListReducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var recipeListReducer = function recipeListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_RECIPE':
      return [].concat(_toConsumableArray(state), [action.recipe]);

    case 'DELETE_RECIPE':
      return state.filter(function (recipe) {
        return recipe.id !== action.id;
      });

    case 'DELETE_ALL_RECIPE':
      return [];

    case 'EDIT_RECIPE':
      return state.map(function (recipe) {
        if (recipe.id === action.id) {
          return _objectSpread({}, recipe, action.updates);
        }

        return recipe;
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_recipeListReducer = (recipeListReducer);
// CONCATENATED MODULE: ./src/client/store/reducers/recipeFilterReducer.js
function recipeFilterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { recipeFilterReducer_defineProperty(target, key, source[key]); }); } return target; }

function recipeFilterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var recipeFilterReducer = function recipeFilterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: '',
    sortBy: 'date',
    order: 'ascending'
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FILTER_TITLE':
      return recipeFilterReducer_objectSpread({}, state, {
        title: action.title
      });

    case 'SORT_BY_DATE':
      return recipeFilterReducer_objectSpread({}, state, {
        sortBy: 'date'
      });

    case 'SORT_BY_TITLE':
      return recipeFilterReducer_objectSpread({}, state, {
        sortBy: 'title'
      });

    case 'ORDER_ASCENDING':
      return recipeFilterReducer_objectSpread({}, state, {
        order: 'ascending'
      });

    case 'ORDER_DESCENDING':
      return recipeFilterReducer_objectSpread({}, state, {
        order: 'descending'
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_recipeFilterReducer = (recipeFilterReducer);
// CONCATENATED MODULE: ./src/client/store/configureStore.js




var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux["d" /* compose */];

var localStorageMiddleware = function localStorageMiddleware(store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      try {
        localStorage.setItem('myRecipes', JSON.stringify(store.getState()));
      } catch (e) {
        console.log('Error while saving in localStorage', e);
      }

      return result;
    };
  };
};

var reHydrateStore = function reHydrateStore() {
  if (localStorage.getItem('myRecipes') !== null) {
    return JSON.parse(localStorage.getItem('myRecipes'));
  }

  return undefined;
};

/* harmony default export */ var configureStore = (function () {
  var store = Object(redux["e" /* createStore */])(Object(redux["c" /* combineReducers */])({
    recipes: reducers_recipeListReducer,
    filter: reducers_recipeFilterReducer
  }), reHydrateStore(), composeEnhancers(Object(redux["a" /* applyMiddleware */])(localStorageMiddleware, redux_thunk_es["a" /* default */])));
  return store;
});
// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Router.js + 1 modules
var Router = __webpack_require__(482);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Switch.js + 1 modules
var Switch = __webpack_require__(481);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js
var Route = __webpack_require__(479);

// EXTERNAL MODULE: ./node_modules/history/createBrowserHistory.js
var createBrowserHistory = __webpack_require__(276);
var createBrowserHistory_default = /*#__PURE__*/__webpack_require__.n(createBrowserHistory);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Link.js + 8 modules
var Link = __webpack_require__(480);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/withRouter.js + 1 modules
var withRouter = __webpack_require__(483);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var react_fontawesome_index_es = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(1);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/react-responsive-modal/lib/index.es.js
var lib_index_es = __webpack_require__(108);

// CONCATENATED MODULE: ./src/client/components/Modal.jsx




var Modal_ReactModal = function ReactModal(props) {
  var modalStyle = {
    modal: {
      background: '#fff',
      padding: '50px',
      textAlign: 'left',
      borderRadius: '6px',
      maxWidth: '400px'
    },
    closeButton: {
      top: '10px',
      right: '10px',
      background: 'transparent',
      boxShadow: 'none'
    },
    closeIcon: {
      fill: '#1a1a1a'
    }
  };
  return react_default.a.createElement(lib_index_es["a" /* default */], {
    center: true,
    onClose: props.closeModal,
    open: props.isOpenModal,
    styles: modalStyle
  }, props.children);
};

lib_index_es["a" /* default */].propTypes = {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  closeModal: prop_types_default.a.func,
  isOpenModal: prop_types_default.a.bool
};
/* harmony default export */ var Modal = (Modal_ReactModal);
// EXTERNAL MODULE: ./src/client/assets/images/food.jpg
var food = __webpack_require__(60);
var food_default = /*#__PURE__*/__webpack_require__.n(food);

// CONCATENATED MODULE: ./src/client/store/actions/recipes.js
var recipes_addNewRecipe = function addNewRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    recipe: recipe
  };
};
var recipes_deleteRecipe = function deleteRecipe(id) {
  return {
    type: 'DELETE_RECIPE',
    id: id
  };
};
var recipes_deleteAllRecipe = function deleteAllRecipe() {
  return {
    type: 'DELETE_ALL_RECIPE'
  };
};
var recipes_editRecipe = function editRecipe(id, updates) {
  return {
    type: 'EDIT_RECIPE',
    id: id,
    updates: updates
  };
};
// CONCATENATED MODULE: ./src/client/components/RecipeItem.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var RecipeItem_RecipeItem =
/*#__PURE__*/
function (_Component) {
  _inherits(RecipeItem, _Component);

  function RecipeItem() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, RecipeItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RecipeItem)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      isOpenDeleteModal: false,
      isOpenRecipeModal: false
    }, _this.onDelete = function () {
      _this.props.deleteRecipe(_this.props.recipe.id);

      _this.setState({
        isOpenDeleteModal: false
      });

      _this.props.history.push('/');
    }, _this.openModalHandler = function () {
      _this.setState({
        isOpenDeleteModal: true
      });
    }, _this.openRecipeModal = function () {
      _this.setState({
        isOpenRecipeModal: true
      });
    }, _this.closeModalHandler = function () {
      _this.setState({
        isOpenDeleteModal: false,
        isOpenRecipeModal: false
      });
    }, _temp));
  }

  _createClass(RecipeItem, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isOpenRecipeModal = _this$state.isOpenRecipeModal,
          isOpenDeleteModal = _this$state.isOpenDeleteModal;
      var recipe = this.props.recipe;
      return react_default.a.createElement("div", {
        className: "card"
      }, react_default.a.createElement(Modal, {
        closeModal: this.closeModalHandler,
        isOpenModal: isOpenDeleteModal
      }, react_default.a.createElement("h2", null, "Sure to delete this recipe?"), react_default.a.createElement("span", {
        style: {
          color: '#cacaca',
          fontSize: '12px',
          display: 'block',
          marginBottom: '20px'
        }
      }, recipe.title), react_default.a.createElement("button", {
        className: "button--red",
        onClick: this.onDelete
      }, "Delete")), react_default.a.createElement(Modal, {
        closeModal: this.closeModalHandler,
        isOpenModal: isOpenRecipeModal
      }, react_default.a.createElement("div", {
        className: "recipe-modal"
      }, react_default.a.createElement("h2", null, recipe.title), react_default.a.createElement("div", {
        className: "card-image"
      }, react_default.a.createElement("img", {
        alt: recipe.title,
        src: recipe.image ? recipe.image : food_default.a
      })), recipe.recipes ? react_default.a.createElement("div", {
        className: "recipe-items"
      }, react_default.a.createElement("span", {
        className: "card-subtitle"
      }, "Recipe:"), react_default.a.createElement("textarea", {
        className: "card-recipe-preview",
        id: "textarea-preview",
        readOnly: true,
        rows: recipe.recipes.split(/\r\n|\r|\n/).length,
        value: recipe.recipes
      })) : react_default.a.createElement("span", {
        className: "card-subtitle"
      }, "No recipe written yet"))), react_default.a.createElement("div", {
        className: "card-header",
        style: {
          background: "url(".concat(recipe.image ? recipe.image : food_default.a, ")"),
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }
      }, react_default.a.createElement("div", {
        className: "card-header-title"
      }, react_default.a.createElement("h2", {
        className: "card-title"
      }, recipe.title), react_default.a.createElement("span", {
        className: "card-date"
      }, moment_default()(recipe.createdAt).format('llll'))), react_default.a.createElement("div", {
        className: "card-header-controls"
      }, react_default.a.createElement("div", null, react_default.a.createElement(Link["a" /* default */], {
        to: "/edit/recipe/".concat(recipe.id)
      }, react_default.a.createElement("button", {
        className: "button--nobg"
      }, react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
        color: "#6DB65B",
        icon: "pen",
        size: "1x"
      })))), react_default.a.createElement("div", null, react_default.a.createElement("button", {
        className: "button--nobg",
        onClick: this.openModalHandler
      }, react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
        color: "#6DB65B",
        icon: "trash-alt",
        size: "1x"
      }))))), react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("button", {
        className: "button--primary button--block",
        onClick: this.openRecipeModal
      }, "View Recipe")));
    }
  }]);

  return RecipeItem;
}(react["Component"]);

RecipeItem_RecipeItem.propTypes = {
  recipe: prop_types_default.a.object
};

var RecipeItem_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteRecipe: function deleteRecipe(id) {
      return dispatch(recipes_deleteRecipe(id));
    }
  };
};

/* harmony default export */ var components_RecipeItem = (Object(withRouter["a" /* default */])(Object(es["b" /* connect */])(undefined, RecipeItem_mapDispatchToProps)(RecipeItem_RecipeItem)));
// CONCATENATED MODULE: ./src/client/store/actions/filters.js
var filters_setTitleFilter = function setTitleFilter() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    type: 'FILTER_TITLE',
    title: title
  };
};
var filters_sortByDate = function sortByDate() {
  return {
    type: 'SORT_BY_DATE'
  };
};
var filters_sortByTitle = function sortByTitle() {
  return {
    type: 'SORT_BY_TITLE'
  };
};
var filters_orderAscending = function orderAscending() {
  return {
    type: 'ORDER_ASCENDING'
  };
};
var filters_orderDescending = function orderDescending() {
  return {
    type: 'ORDER_DESCENDING'
  };
};
// CONCATENATED MODULE: ./src/client/components/FilterRecipe.jsx




var FilterRecipe_FilterRecipe = function FilterRecipe(props) {
  var onChangeHandler = function onChangeHandler(e) {
    props.setTitleFilter(e.target.value);
  };

  var onSortChange = function onSortChange(e) {
    var selected = e.target.value;
    if (selected === 'date') props.sortByDate();
    if (selected === 'title') props.sortByTitle();
  };

  var onOrderChange = function onOrderChange(e) {
    var order = e.target.value;
    if (order === 'ascending') props.orderAscending();
    if (order === 'descending') props.orderDescending();
  };

  return react_default.a.createElement(react_default.a.Fragment, null, props.recipes.length !== 0 ? react_default.a.createElement("div", {
    className: "filter__recipe"
  }, react_default.a.createElement("input", {
    onChange: onChangeHandler,
    placeholder: "Search for recipe",
    type: "text",
    value: props.filter.title
  }), react_default.a.createElement("div", {
    className: "filter__sort"
  }, react_default.a.createElement("select", {
    name: "sort",
    id: "sort",
    onChange: onSortChange
  }, react_default.a.createElement("option", {
    value: "date"
  }, "Sort By Date"), react_default.a.createElement("option", {
    value: "title"
  }, "Sort By Title")), react_default.a.createElement("select", {
    name: "order",
    id: "order",
    onChange: onOrderChange
  }, react_default.a.createElement("option", {
    value: "ascending"
  }, "Ascending"), react_default.a.createElement("option", {
    value: "descending"
  }, "Descending")))) : null);
};

var FilterRecipe_mapStateToProps = function mapStateToProps(_ref) {
  var filter = _ref.filter,
      recipes = _ref.recipes;
  return {
    filter: filter,
    recipes: recipes
  };
};

var FilterRecipe_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setTitleFilter: function setTitleFilter(title) {
      return dispatch(filters_setTitleFilter(title));
    },
    sortByDate: function sortByDate() {
      return dispatch(filters_sortByDate());
    },
    sortByTitle: function sortByTitle() {
      return dispatch(filters_sortByTitle());
    },
    orderAscending: function orderAscending() {
      return dispatch(filters_orderAscending());
    },
    orderDescending: function orderDescending() {
      return dispatch(filters_orderDescending());
    }
  };
};

/* harmony default export */ var components_FilterRecipe = (Object(es["b" /* connect */])(FilterRecipe_mapStateToProps, FilterRecipe_mapDispatchToProps)(FilterRecipe_FilterRecipe));
// CONCATENATED MODULE: ./src/client/helpers/filterRecipe.js
// import moment from 'moment';

/* eslint-disable  */
var filterRecipe = function filterRecipe(recipes, filter) {
  if (recipes) {
    return recipes.filter(function (recipe) {
      return recipe.title.toLowerCase().includes(filter.title.toLowerCase());
    }).sort(function () {
      if (filter.sortBy === 'date') {
        if (filter.order === 'ascending') return 1;
        if (filter.order === 'descending') return -1;
      }

      if (filter.sortBy === 'title') {
        if (filter.order === 'ascending') return 1;
        if (filter.order === 'descending') return -1;
      }
    });
  }
};

/* harmony default export */ var helpers_filterRecipe = (filterRecipe);
// CONCATENATED MODULE: ./src/client/components/RecipeApp.jsx







var RecipeApp_RecipeApp = function RecipeApp(props) {
  Object(react["useEffect"])(function () {
    window.scrollTo(null, 0);
  }, []);
  var recipes = props.recipes,
      filter = props.filter;
  return react_default.a.createElement("div", {
    className: "recipe-list-main fadeIn"
  }, react_default.a.createElement("div", {
    className: "recipe-list-header"
  }, react_default.a.createElement("h1", null, "My Recipe Box"), react_default.a.createElement(components_FilterRecipe, null)), filter.title && recipes.length !== 0 && react_default.a.createElement("h4", {
    className: "filter__text"
  }, "Found ", recipes.length, " ".concat(recipes.length > 1 ? 'recipes' : 'recipe')), react_default.a.createElement("div", {
    className: "card-wrapper"
  }, recipes.length !== 0 && recipes.map(function (recipe) {
    return react_default.a.createElement(components_RecipeItem, {
      key: recipe.id,
      recipe: recipe
    });
  })), recipes.length === 0 && react_default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react_default.a.createElement("h2", null, "No Recipe Found"), react_default.a.createElement("p", null, "Start listing your recipe now. Your data will be saved to your localStorage.")));
};

var RecipeApp_mapStateToProps = function mapStateToProps(_ref) {
  var recipes = _ref.recipes,
      filter = _ref.filter;
  return {
    recipes: helpers_filterRecipe(recipes, filter),
    filter: filter
  };
};

var RecipeApp_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteRecipe: function deleteRecipe(id) {
      return dispatch(recipes_deleteRecipe(id));
    },
    deleteAllRecipe: function deleteAllRecipe() {
      return dispatch(recipes_deleteAllRecipe());
    }
  };
};

/* harmony default export */ var components_RecipeApp = (Object(es["b" /* connect */])(RecipeApp_mapStateToProps, RecipeApp_mapDispatchToProps)(RecipeApp_RecipeApp));
// EXTERNAL MODULE: ./node_modules/uuid/index.js
var uuid = __webpack_require__(282);
var uuid_default = /*#__PURE__*/__webpack_require__.n(uuid);

// CONCATENATED MODULE: ./src/client/helpers/textarealine.js
var TLN = {
  eventList: {},

  /* eslint-disable */
  update_line_numbers: function update_line_numbers(ta, el) {
    var lines = ta.value.split("\n").length;
    var child_count = el.children.length;
    var difference = lines - child_count;

    if (difference > 0) {
      var frag = document.createDocumentFragment();

      while (difference > 0) {
        var line_number = document.createElement("span");
        line_number.className = "tln-line";
        frag.appendChild(line_number);
        difference--;
      }

      el.appendChild(frag);
    }

    while (difference < 0) {
      el.removeChild(el.firstChild);
      difference++;
    }
  },
  append_line_numbers: function append_line_numbers(id) {
    var ta = document.getElementById(id);

    if (ta == null) {
      return console.warn("[tln.js] Couldn't find textarea of id '" + id + "'");
    }

    if (ta.className.indexOf("tln-active") != -1) {
      return console.warn("[tln.js] textarea of id '" + id + "' is already numbered");
    }

    ta.classList.add("tln-active");
    ta.style = {};
    var el = document.createElement("div");
    ta.parentNode.insertBefore(el, ta);
    el.className = "tln-wrapper";
    TLN.update_line_numbers(ta, el);
    TLN.eventList[id] = [];
    var __change_evts = ["propertychange", "input", "keydown", "keyup"];

    var __change_hdlr = function (ta, el) {
      return function (e) {
        if (+ta.scrollLeft == 10 && (e.keyCode == 37 || e.which == 37 || e.code == "ArrowLeft" || e.key == "ArrowLeft") || e.keyCode == 36 || e.which == 36 || e.code == "Home" || e.key == "Home" || e.keyCode == 13 || e.which == 13 || e.code == "Enter" || e.key == "Enter" || e.code == "NumpadEnter") ta.scrollLeft = 0;
        TLN.update_line_numbers(ta, el);
      };
    }(ta, el);

    for (var i = __change_evts.length - 1; i >= 0; i--) {
      ta.addEventListener(__change_evts[i], __change_hdlr);
      TLN.eventList[id].push({
        evt: __change_evts[i],
        hdlr: __change_hdlr
      });
    }

    var __scroll_evts = ["change", "mousewheel", "scroll"];

    var __scroll_hdlr = function (ta, el) {
      return function () {
        el.scrollTop = ta.scrollTop;
      };
    }(ta, el);

    for (var _i = __scroll_evts.length - 1; _i >= 0; _i--) {
      ta.addEventListener(__scroll_evts[_i], __scroll_hdlr, {
        passive: true
      });
      TLN.eventList[id].push({
        evt: __scroll_evts[_i],
        hdlr: __scroll_hdlr
      });
    }
  },
  remove_line_numbers: function remove_line_numbers(id) {
    var ta = document.getElementById(id);

    if (ta == null) {
      return console.warn("[tln.js] Couldn't find textarea of id '" + id + "'");
    }

    if (ta.className.indexOf("tln-active") == -1) {
      return console.warn("[tln.js] textarea of id '" + id + "' isn't numbered");
    }

    ta.classList.remove("tln-active");
    ta.previousSibling.remove();
    if (!TLN.eventList[id]) return;

    for (var i = TLN.eventList[id].length - 1; i >= 0; i--) {
      var evt = TLN.eventList[id][i];
      ta.removeEventListener(evt.evt, evt.hdlr);
    }

    delete TLN.eventList[id];
  }
  /* eslint-enable */

};
/* harmony default export */ var textarealine = (TLN);
// CONCATENATED MODULE: ./src/client/components/RecipeForm.jsx
function RecipeForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RecipeForm_typeof = function _typeof(obj) { return typeof obj; }; } else { RecipeForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RecipeForm_typeof(obj); }

function RecipeForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RecipeForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RecipeForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) RecipeForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) RecipeForm_defineProperties(Constructor, staticProps); return Constructor; }

function RecipeForm_possibleConstructorReturn(self, call) { if (call && (RecipeForm_typeof(call) === "object" || typeof call === "function")) { return call; } return RecipeForm_assertThisInitialized(self); }

function RecipeForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RecipeForm_getPrototypeOf(o) { RecipeForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RecipeForm_getPrototypeOf(o); }

function RecipeForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RecipeForm_setPrototypeOf(subClass, superClass); }

function RecipeForm_setPrototypeOf(o, p) { RecipeForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RecipeForm_setPrototypeOf(o, p); }








var RecipeForm_RecipeForm =
/*#__PURE__*/
function (_Component) {
  RecipeForm_inherits(RecipeForm, _Component);

  function RecipeForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    RecipeForm_classCallCheck(this, RecipeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return RecipeForm_possibleConstructorReturn(_this, (_temp = _this = RecipeForm_possibleConstructorReturn(this, (_getPrototypeOf2 = RecipeForm_getPrototypeOf(RecipeForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      title: _this.props.recipe ? _this.props.recipe.title : '',
      description: _this.props.recipe ? _this.props.recipe.description : '',
      recipes: _this.props.recipe ? _this.props.recipe.recipes : '',
      createdAt: 0,
      image: _this.props.recipe ? _this.props.recipe.image : '',
      id: _this.props.recipe ? _this.props.recipe.id : '',
      error: undefined
    }, _this.onSubmitHandler = function (e) {
      e.preventDefault();

      if (_this.state.title === '') {
        _this.setState({
          error: 'Title is required'
        });
      } else {
        _this.setState({
          error: undefined
        });

        _this.props.onSubmit({
          title: _this.state.title,
          description: _this.state.description,
          recipes: _this.state.recipes,
          createdAt: moment_default()().valueOf(),
          image: _this.state.image,
          id: _this.state.id ? _this.state.id : uuid_default()()
        });
      }
    }, _this.onTitleChange = function (e) {
      var input = e.target.value;

      _this.setState({
        title: input
      });
    }, _this.onDescriptionChange = function (e) {
      var input = e.target.value;

      _this.setState({
        description: input
      });
    }, _this.onRecipeChange = function (e) {
      var input = e.target.value;

      _this.setState({
        recipes: input
      });
    }, _this.onFileChange = function (e) {
      var fileType = e.target.files[0].type;

      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          _this.setState({
            image: reader.result
          });
        });
        reader.readAsDataURL(e.target.files[0]);
      } else {
        alert('file type must be JPEG or PNG');
      }
    }, _temp));
  }

  RecipeForm_createClass(RecipeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      textarealine.append_line_numbers(this.textarea.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          error = _this$state.error,
          title = _this$state.title,
          description = _this$state.description,
          recipes = _this$state.recipes,
          image = _this$state.image;
      return react_default.a.createElement("div", null, react_default.a.createElement("form", {
        className: "recipe-form",
        onSubmit: this.onSubmitHandler
      }, react_default.a.createElement("div", {
        className: "form-input"
      }, react_default.a.createElement("br", null), error && react_default.a.createElement("span", {
        className: "error-message"
      }, "* Title is required"), react_default.a.createElement("div", {
        className: "form-control"
      }, react_default.a.createElement("input", {
        onChange: this.onTitleChange,
        placeholder: "Title",
        type: "text",
        value: title
      })), react_default.a.createElement("div", {
        className: "form-control"
      }, react_default.a.createElement("input", {
        onChange: this.onDescriptionChange,
        placeholder: "Description",
        type: "text",
        value: description
      })), react_default.a.createElement("div", {
        className: "form-control"
      }, react_default.a.createElement("div", {
        className: "textarea-wrapper"
      }, react_default.a.createElement("textarea", {
        className: "textarea-add",
        id: "textarea-add",
        onChange: this.onRecipeChange,
        placeholder: "List of Recipe"
        /* eslint-disable no-return-assign */
        ,
        ref: function ref(el) {
          return _this2.textarea = el;
        },
        rows: recipes.split(/\r\n|\r|\n/).length,
        value: recipes
      }))), react_default.a.createElement("div", {
        className: "form-control"
      }, react_default.a.createElement("button", {
        className: "button--primary button--icon"
      }, react_default.a.createElement("span", null, "Save Recipe"), react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
        color: "#fff",
        icon: "save",
        size: "1x"
      })))), react_default.a.createElement("div", {
        className: "form-thumbnail"
      }, react_default.a.createElement("img", {
        src: image ? image : food_default.a,
        alt: ""
      }), react_default.a.createElement("div", {
        className: "form-file-chooser"
      }, react_default.a.createElement("label", {
        className: "button--block file-label",
        htmlFor: "file"
      }, "Choose Thumbnail"), react_default.a.createElement("input", {
        className: "input-file",
        id: "file",
        onChange: this.onFileChange,
        type: "file"
      })))));
    }
  }]);

  return RecipeForm;
}(react["Component"]);

/* harmony default export */ var components_RecipeForm = (RecipeForm_RecipeForm);
// CONCATENATED MODULE: ./src/client/components/AddNewRecipe.jsx
function AddNewRecipe_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddNewRecipe_typeof = function _typeof(obj) { return typeof obj; }; } else { AddNewRecipe_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddNewRecipe_typeof(obj); }

function AddNewRecipe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddNewRecipe_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddNewRecipe_createClass(Constructor, protoProps, staticProps) { if (protoProps) AddNewRecipe_defineProperties(Constructor.prototype, protoProps); if (staticProps) AddNewRecipe_defineProperties(Constructor, staticProps); return Constructor; }

function AddNewRecipe_possibleConstructorReturn(self, call) { if (call && (AddNewRecipe_typeof(call) === "object" || typeof call === "function")) { return call; } return AddNewRecipe_assertThisInitialized(self); }

function AddNewRecipe_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AddNewRecipe_getPrototypeOf(o) { AddNewRecipe_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AddNewRecipe_getPrototypeOf(o); }

function AddNewRecipe_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AddNewRecipe_setPrototypeOf(subClass, superClass); }

function AddNewRecipe_setPrototypeOf(o, p) { AddNewRecipe_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AddNewRecipe_setPrototypeOf(o, p); }





var AddNewRecipe_AddNewRecipe =
/*#__PURE__*/
function (_Component) {
  AddNewRecipe_inherits(AddNewRecipe, _Component);

  function AddNewRecipe(props) {
    var _this;

    AddNewRecipe_classCallCheck(this, AddNewRecipe);

    _this = AddNewRecipe_possibleConstructorReturn(this, AddNewRecipe_getPrototypeOf(AddNewRecipe).call(this, props));

    _this.onSubmit = function (recipe) {
      if (_this._isMounted) {
        _this.props.addNewRecipe(recipe);

        _this.props.history.push('/');
      }
    };

    _this._isMounted = false;
    return _this;
  }

  AddNewRecipe_createClass(AddNewRecipe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      window.scrollTo(null, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "fadeIn"
      }, react_default.a.createElement("h1", null, "Add Recipe"), react_default.a.createElement(components_RecipeForm, {
        onSubmit: this.onSubmit
      }));
    }
  }]);

  return AddNewRecipe;
}(react["Component"]);

var AddNewRecipe_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addNewRecipe: function addNewRecipe(recipe) {
      return dispatch(recipes_addNewRecipe(recipe));
    },
    deleteAllRecipe: function deleteAllRecipe() {
      return dispatch(recipes_deleteAllRecipe());
    }
  };
};

/* harmony default export */ var components_AddNewRecipe = (Object(es["b" /* connect */])(undefined, AddNewRecipe_mapDispatchToProps)(AddNewRecipe_AddNewRecipe));
// CONCATENATED MODULE: ./src/client/components/EditRecipe.jsx
function EditRecipe_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditRecipe_typeof = function _typeof(obj) { return typeof obj; }; } else { EditRecipe_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditRecipe_typeof(obj); }

function EditRecipe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditRecipe_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditRecipe_createClass(Constructor, protoProps, staticProps) { if (protoProps) EditRecipe_defineProperties(Constructor.prototype, protoProps); if (staticProps) EditRecipe_defineProperties(Constructor, staticProps); return Constructor; }

function EditRecipe_possibleConstructorReturn(self, call) { if (call && (EditRecipe_typeof(call) === "object" || typeof call === "function")) { return call; } return EditRecipe_assertThisInitialized(self); }

function EditRecipe_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditRecipe_getPrototypeOf(o) { EditRecipe_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EditRecipe_getPrototypeOf(o); }

function EditRecipe_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EditRecipe_setPrototypeOf(subClass, superClass); }

function EditRecipe_setPrototypeOf(o, p) { EditRecipe_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EditRecipe_setPrototypeOf(o, p); }





var EditRecipe_EditRecipe =
/*#__PURE__*/
function (_Component) {
  EditRecipe_inherits(EditRecipe, _Component);

  function EditRecipe(props) {
    var _this;

    EditRecipe_classCallCheck(this, EditRecipe);

    _this = EditRecipe_possibleConstructorReturn(this, EditRecipe_getPrototypeOf(EditRecipe).call(this, props));

    _this.onSubmitHandler = function (recipe) {
      if (_this._isMounted) {
        _this.props.editRecipe(_this.props.recipe.id, recipe);

        _this.props.history.push("/view/recipe/".concat(_this.props.recipe.id));
      }
    };

    _this._isMounted = false;
    return _this;
  }

  EditRecipe_createClass(EditRecipe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;

      if (!this.props.recipe) {
        this.props.history.push('/error');
      }

      window.scrollTo(null, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "fadeIn"
      }, react_default.a.createElement("h1", null, "Edit Recipe"), react_default.a.createElement(components_RecipeForm, {
        onSubmit: this.onSubmitHandler,
        recipe: this.props.recipe
      }));
    }
  }]);

  return EditRecipe;
}(react["Component"]);

var EditRecipe_mapStateToProps = function mapStateToProps(_ref, props) {
  var recipes = _ref.recipes;
  return {
    recipe: recipes.find(function (recipe) {
      return recipe.id === props.match.params.id;
    })
  };
};

var EditRecipe_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    editRecipe: function editRecipe(id, recipe) {
      return dispatch(recipes_editRecipe(id, recipe));
    },
    deleteAllRecipe: function deleteAllRecipe() {
      return dispatch(recipes_deleteAllRecipe());
    }
  };
};

/* harmony default export */ var components_EditRecipe = (Object(es["b" /* connect */])(EditRecipe_mapStateToProps, EditRecipe_mapDispatchToProps)(EditRecipe_EditRecipe));
// CONCATENATED MODULE: ./src/client/components/ViewRecipe.jsx




var ViewRecipe_ViewRecipe = function ViewRecipe(_ref) {
  var recipe = _ref.recipe;
  return react_default.a.createElement("div", {
    className: "fadeIn"
  }, react_default.a.createElement("span", {
    className: "card-subtitle",
    style: {
      position: 'relative',
      top: '15px'
    }
  }, "Delicious"), react_default.a.createElement("h1", null, recipe.title), react_default.a.createElement("div", {
    className: "view-card"
  }, react_default.a.createElement("div", {
    className: "card-wrapper"
  }, react_default.a.createElement(components_RecipeItem, {
    recipe: recipe
  }))));
};

var ViewRecipe_mapStateToProps = function mapStateToProps(_ref2, props) {
  var recipes = _ref2.recipes;
  return {
    recipe: recipes.find(function (recipe) {
      return recipe.id === props.match.params.id;
    })
  };
};

var ViewRecipe_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteRecipe: function deleteRecipe(id) {
      return dispatch(recipes_deleteRecipe(id));
    },
    deleteAllRecipe: function deleteAllRecipe() {
      return dispatch(recipes_deleteAllRecipe());
    }
  };
};

/* harmony default export */ var components_ViewRecipe = (Object(es["b" /* connect */])(ViewRecipe_mapStateToProps, ViewRecipe_mapDispatchToProps)(ViewRecipe_ViewRecipe));
// CONCATENATED MODULE: ./src/client/components/PageNotFound.jsx


var PageNotFound_PageNotFound = function PageNotFound(props) {
  var returnHome = function returnHome() {
    props.history.push('/');
  };

  return react_default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react_default.a.createElement("h1", null, "Page not found"), react_default.a.createElement("p", null, "The page you are looking for doesn't exist."), react_default.a.createElement("br", null), react_default.a.createElement("button", {
    className: "button--primary",
    onClick: returnHome
  }, "Return Home"));
};

/* harmony default export */ var components_PageNotFound = (PageNotFound_PageNotFound);
// CONCATENATED MODULE: ./src/client/components/RecipeList.jsx




var RecipeList_RecipeList = function RecipeList(_ref) {
  var recipes = _ref.recipes;
  return react_default.a.createElement("div", {
    className: "recipe-list"
  }, recipes.length !== 0 ? react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("h3", null, "My Recipes"), recipes.map(function (recipe) {
    return react_default.a.createElement(Link["a" /* default */], {
      className: "recipe-item",
      key: recipe.id,
      to: "/view/recipe/".concat(recipe.id)
    }, react_default.a.createElement("div", {
      className: "recipe-item-wrapper"
    }, react_default.a.createElement("div", {
      className: "recipe-thumbnail"
    }, react_default.a.createElement("img", {
      src: recipe.image
    })), react_default.a.createElement("h4", null, recipe.title)));
  })) : react_default.a.createElement("p", null, "You have no recipe"));
};

var RecipeList_mapStateToProps = function mapStateToProps(_ref2) {
  var recipes = _ref2.recipes;
  return {
    recipes: recipes
  };
};

/* harmony default export */ var components_RecipeList = (Object(es["b" /* connect */])(RecipeList_mapStateToProps, undefined)(RecipeList_RecipeList));
// CONCATENATED MODULE: ./src/client/components/Navigation.jsx
function Navigation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Navigation_typeof = function _typeof(obj) { return typeof obj; }; } else { Navigation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Navigation_typeof(obj); }

function Navigation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Navigation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Navigation_createClass(Constructor, protoProps, staticProps) { if (protoProps) Navigation_defineProperties(Constructor.prototype, protoProps); if (staticProps) Navigation_defineProperties(Constructor, staticProps); return Constructor; }

function Navigation_possibleConstructorReturn(self, call) { if (call && (Navigation_typeof(call) === "object" || typeof call === "function")) { return call; } return Navigation_assertThisInitialized(self); }

function Navigation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Navigation_getPrototypeOf(o) { Navigation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Navigation_getPrototypeOf(o); }

function Navigation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Navigation_setPrototypeOf(subClass, superClass); }

function Navigation_setPrototypeOf(o, p) { Navigation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Navigation_setPrototypeOf(o, p); }









var Navigation_Navigation =
/*#__PURE__*/
function (_Component) {
  Navigation_inherits(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _temp, _this;

    Navigation_classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Navigation_possibleConstructorReturn(_this, (_temp = _this = Navigation_possibleConstructorReturn(this, (_getPrototypeOf2 = Navigation_getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      isOpenNavigation: false,
      isOpenModal: false,
      navIcon: 'bars'
    }, _this.handleDeleteAll = function () {
      _this.props.deleteAllRecipe();

      _this.props.history.push('/');

      _this.setState({
        isOpenModal: false
      });
    }, _this.openModalHandler = function () {
      _this.setState(function () {
        return {
          isOpenModal: true
        };
      });
    }, _this.closeModalHandler = function () {
      _this.setState(function () {
        return {
          isOpenModal: false
        };
      });
    }, _this.toggleNavigation = function () {
      _this.setState({
        isOpenNavigation: !_this.state.isOpenNavigation
      });

      _this.nav.classList.toggle('open');

      if (_this.state.isOpenNavigation) {
        _this.setState({
          navIcon: 'bars'
        });
      } else {
        _this.setState({
          navIcon: 'times'
        });
      }
    }, _temp));
  }

  Navigation_createClass(Navigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isOpenNavigation = _this$state.isOpenNavigation,
          navIcon = _this$state.navIcon;
      return react_default.a.createElement("div", {
        className: "navigation"
        /* eslint-disable no-return-assign */
        ,
        ref: function ref(el) {
          return _this2.nav = el;
        }
      }, react_default.a.createElement(Modal, {
        isOpenModal: this.state.isOpenModal,
        closeModal: this.closeModalHandler
      }, react_default.a.createElement("h2", null, "Sure to delete all recipes?"), react_default.a.createElement("button", {
        className: "button--red",
        onClick: this.handleDeleteAll
      }, "Yes, Delete All")), react_default.a.createElement("div", {
        className: "navigation-wrapper"
      }, react_default.a.createElement("div", {
        className: "navigation-logo"
      }, react_default.a.createElement(Link["a" /* default */], {
        to: "/"
      }, react_default.a.createElement("h1", null, "Crecipe"))), react_default.a.createElement("div", {
        className: "navigation-controls"
      }, react_default.a.createElement(Link["a" /* default */], {
        className: "button--link",
        exact: "true",
        onClick: this.toggleNavigation,
        to: "/"
      }, react_default.a.createElement("button", {
        className: "button--secondary button--icon"
      }, react_default.a.createElement("span", null, "View All Recipes"), react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
        color: "#fff",
        icon: "list-ul",
        size: "1x"
      }))), react_default.a.createElement("br", null), react_default.a.createElement(Link["a" /* default */], {
        className: "button--link",
        onClick: this.toggleNavigation,
        to: "/addrecipe"
      }, react_default.a.createElement("button", {
        className: "button--secondary button--icon"
      }, react_default.a.createElement("span", null, "Add New Recipe"), react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
        color: "#fff",
        icon: "plus",
        size: "1x"
      }))), react_default.a.createElement("br", null), react_default.a.createElement("button", {
        className: "button--secondary button--icon",
        onClick: this.openModalHandler
      }, react_default.a.createElement("span", null, "Delete All Recipes"), react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
        color: "#fff",
        icon: "trash-alt",
        size: "1x"
      })))), react_default.a.createElement("div", {
        className: "navigation-toggle"
      }, react_default.a.createElement("button", {
        onClick: this.toggleNavigation
      }, react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
        color: "#fff",
        icon: navIcon,
        size: "1x"
      }))));
    }
  }]);

  return Navigation;
}(react["Component"]);

var Navigation_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteAllRecipe: function deleteAllRecipe() {
      return dispatch(recipes_deleteAllRecipe());
    }
  };
};

/* harmony default export */ var components_Navigation = (Object(withRouter["a" /* default */])(Object(es["b" /* connect */])(undefined, Navigation_mapDispatchToProps)(Navigation_Navigation)));
// CONCATENATED MODULE: ./src/client/routers/AppRouter.js









var AppRouter_history = createBrowserHistory_default()();

var AppRouter_AppRouter = function AppRouter() {
  return react_default.a.createElement(Router["a" /* default */], {
    history: AppRouter_history
  }, react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components_Navigation, null), react_default.a.createElement("div", {
    className: "content"
  }, react_default.a.createElement(Switch["a" /* default */], null, react_default.a.createElement(Route["a" /* default */], {
    component: components_RecipeApp,
    exact: true,
    path: "/"
  }), react_default.a.createElement(Route["a" /* default */], {
    component: components_AddNewRecipe,
    exact: true,
    path: "/addrecipe"
  }), react_default.a.createElement(Route["a" /* default */], {
    component: components_EditRecipe,
    exact: true,
    path: "/edit/recipe/:id"
  }), react_default.a.createElement(Route["a" /* default */], {
    component: components_ViewRecipe,
    exact: true,
    path: "/view/recipe/:id"
  }), react_default.a.createElement(Route["a" /* default */], {
    component: components_PageNotFound
  })))));
};

/* harmony default export */ var routers_AppRouter = (AppRouter_AppRouter);
// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(476);

// EXTERNAL MODULE: ./src/client/styles/style.scss
var style = __webpack_require__(477);

// CONCATENATED MODULE: ./src/client/index.js










var client_store = configureStore();
index_es["b" /* library */].add(free_solid_svg_icons_index_es["j" /* faUtensils */], free_solid_svg_icons_index_es["e" /* faPen */], free_solid_svg_icons_index_es["i" /* faTrashAlt */], free_solid_svg_icons_index_es["g" /* faSave */], free_solid_svg_icons_index_es["d" /* faListUl */], free_solid_svg_icons_index_es["f" /* faPlus */], free_solid_svg_icons_index_es["a" /* faAngleDown */], free_solid_svg_icons_index_es["b" /* faAngleUp */], free_solid_svg_icons_index_es["c" /* faBars */], free_solid_svg_icons_index_es["h" /* faTimes */]);
webfontloader_default.a.load({
  google: {
    families: ['Source Sans Pro', 'Carter One']
  }
});

if ( true && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    console.log('SW registered: ', registration);
  }).catch(function (registrationError) {
    console.log('SW registration failed: ', registrationError);
  });
}

react_dom_default.a.render(react_default.a.createElement(es["a" /* Provider */], {
  store: client_store
}, react_default.a.createElement(routers_AppRouter, null)), document.getElementById('app'));

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/food.a94212ff149038c3545a6b467089febd.jpg";

/***/ })

/******/ });
//# sourceMappingURL=main.f449ab1f2a158eef0f37.js.map