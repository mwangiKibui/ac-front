module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _jsxFileName = "/home/ransom/Documents/frontend/nextjs/redux_app/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//React
 //Third-parties






 //custom

 //the bs styles

const makeStore = (initialState, options) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_store__WEBPACK_IMPORTED_MODULE_7__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

const theme = {};

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(makeStore)(MyApp));

/***/ }),

/***/ "./store/bs/actions.js":
/*!*****************************!*\
  !*** ./store/bs/actions.js ***!
  \*****************************/
/*! exports provided: fetchOvo, requestOrder, sendReview, bsSub, claimOrder, fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOvo", function() { return fetchOvo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestOrder", function() { return requestOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendReview", function() { return sendReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bsSub", function() { return bsSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimOrder", function() { return claimOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/bs/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const URL = `https://karuapi.herokuapp.com/api`;

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["BS_LOADING"]
  };
};

const setError = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["BS_ERROR"],
    payload: data
  };
};

const setBs = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_BS"],
    payload: data
  };
};

const setMessage = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["BS_MESSAGE"],
    payload: data
  };
};

const setRequest = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_ORDER"],
    payload: data
  };
};

const setMeals = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MEALS"],
    payload: data
  };
};

const setDrinks = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_DRINKS"],
    payload: data
  };
};

const setOffers = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_OFFERS"],
    payload: data
  };
};

const fetchOvo = () => {
  //we are fetching ovo by their username
  const data = {
    username: 'ovo_fries'
  };
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/bs/fetchBs`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return dispatch(setBs(response.data.message));
    }).catch(console.log);
  };
}; //request for order

const requestOrder = data => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/bs/addOrder`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return dispatch(setRequest(response.data.message));
    }).catch(console.log);
  };
}; //leaving a review

const sendReview = data => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/bs/addReview`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      return dispatch(setMessage(`Review sent`));
    }).catch(console.log);
  };
}; //change on the server side
//today is the night 
// we are going live

const bsSub = (id, data) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/bs/addSubs/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return dispatch(setMessage(response.data.message));
    }).catch(console.log);
  };
};
const claimOrder = data => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/orders/claimOrder`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      let result = response.data.success;
      if (!result) return dispatch(setError(response.data.message));
      return dispatch(setMessage(response.data.message));
    }).catch(console.log);
  };
}; //fetching products

const fetchProducts = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/bs/products`).then(response => {
      //we shall set the meals,drinks and the offers
      dispatch(setMeals(response.data.meals));
      dispatch(setDrinks(response.data.drinks));
      return dispatch(setOffers(response.data.offers));
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/bs/index.js":
/*!***************************!*\
  !*** ./store/bs/index.js ***!
  \***************************/
/*! exports provided: fetchOvo, requestOrder, sendReview, bsSub, claimOrder, fetchProducts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/bs/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/bs/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchOvo", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchOvo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestOrder", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["requestOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendReview", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["sendReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bsSub", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["bsSub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "claimOrder", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["claimOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchProducts"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/bs/reducer.js":
/*!*****************************!*\
  !*** ./store/bs/reducer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/bs/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  error: '',
  message: '',
  bs: null,
  meals: [],
  drinks: [],
  offers: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["BS_LOADING"]:
      return _objectSpread({}, state, {
        error: '',
        message: '',
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["BS_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_BS"]:
      return _objectSpread({}, state, {
        loading: false,
        bs: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["BS_MESSAGE"]:
      return _objectSpread({}, state, {
        loading: false,
        message: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_ORDER"]:
      return _objectSpread({}, state, {
        loading: false,
        message: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MEALS"]:
      return _objectSpread({}, state, {
        meals: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_DRINKS"]:
      return _objectSpread({}, state, {
        drinks: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_OFFERS"]:
      return _objectSpread({}, state, {
        offers: action.payload,
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/bs/types.js":
/*!***************************!*\
  !*** ./store/bs/types.js ***!
  \***************************/
/*! exports provided: BS_LOADING, BS_ERROR, BS_MESSAGE, LOAD_BS, REQUEST_ORDER, LOAD_MEALS, LOAD_OFFERS, LOAD_DRINKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BS_LOADING", function() { return BS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BS_ERROR", function() { return BS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BS_MESSAGE", function() { return BS_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BS", function() { return LOAD_BS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_ORDER", function() { return REQUEST_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MEALS", function() { return LOAD_MEALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS", function() { return LOAD_OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DRINKS", function() { return LOAD_DRINKS; });
const BS_LOADING = "BS_LOADING";
const BS_ERROR = "BS_ERROR";
const BS_MESSAGE = "BS_MESSAGE";
const LOAD_BS = "LOAD_BS";
const REQUEST_ORDER = "REQUEST_ORDER";
const LOAD_MEALS = "LOAD_MEALS";
const LOAD_OFFERS = "LOAD_OFFERS";
const LOAD_DRINKS = "LOAD_DRINKS";

/***/ }),

/***/ "./store/categories/actions.js":
/*!*************************************!*\
  !*** ./store/categories/actions.js ***!
  \*************************************/
/*! exports provided: fetchCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategories", function() { return fetchCategories; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store/categories/types.js");


const URI = `https://karuapi.herokuapp.com/api/`;

const load_categories = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CATEGORIES_FETCH"],
    payload: data
  };
};

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CATEGORIES_LOADING"]
  };
};

const fetchCategories = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${URI}/prodCategories/fetchProdCategories`).then(result => {
      let data = result.data.message;
      return dispatch(load_categories(data));
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/categories/index.js":
/*!***********************************!*\
  !*** ./store/categories/index.js ***!
  \***********************************/
/*! exports provided: fetchCategories, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/categories/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/categories/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCategories", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchCategories"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/categories/reducer.js":
/*!*************************************!*\
  !*** ./store/categories/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/categories/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  categories: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["CATEGORIES_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CATEGORIES_FETCH"]:
      return _objectSpread({}, state, {
        loading: false,
        categories: action.payload
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/categories/types.js":
/*!***********************************!*\
  !*** ./store/categories/types.js ***!
  \***********************************/
/*! exports provided: CATEGORIES_FETCH, CATEGORIES_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES_FETCH", function() { return CATEGORIES_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES_LOADING", function() { return CATEGORIES_LOADING; });
const CATEGORIES_FETCH = "CATEGORIES_FETCH";
const CATEGORIES_LOADING = "CATEGORIES_LOADING";

/***/ }),

/***/ "./store/covid19/actions.js":
/*!**********************************!*\
  !*** ./store/covid19/actions.js ***!
  \**********************************/
/*! exports provided: fetchData, fetchcountries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchcountries", function() { return fetchcountries; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/covid19/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const URL = `https://covid19.mathdro.id/api`;

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING"]
  };
};

const setCountries = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_COUNTRIES"],
    payload: data
  };
};

const setConfirmed = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CONFIRMED"],
    payload: data
  };
};

const setRecovered = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RECOVERED"],
    payload: data
  };
};

const setDeaths = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DEATHS"],
    payload: data
  };
};

const setLastUpdate = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LAST_UPDATE"],
    payload: data
  };
}; //fetching spec data


const fetchData = country => {
  return async dispatch => {
    dispatch(setLoading());
    let changeableUrl = URL; //if a country

    if (country) {
      changeableUrl = `${URL}/countries/${country}`;
    }

    ; //the data format to get 

    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(changeableUrl).then(response => {
      const {
        data: {
          confirmed,
          recovered,
          deaths,
          lastUpdate
        }
      } = response;
      dispatch(setConfirmed(confirmed));
      dispatch(setRecovered(recovered));
      dispatch(setDeaths(deaths));
      return dispatch(setLastUpdate(lastUpdate));
    });
  };
}; //fetching countries data

const fetchcountries = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/countries`).then(response => {
      let {
        data: {
          countries
        }
      } = response;
      countries = countries.map(country => country.name);
      return dispatch(setCountries(countries));
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/covid19/index.js":
/*!********************************!*\
  !*** ./store/covid19/index.js ***!
  \********************************/
/*! exports provided: fetchData, fetchcountries, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/covid19/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/covid19/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchcountries", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchcountries"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/covid19/reducer.js":
/*!**********************************!*\
  !*** ./store/covid19/reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/covid19/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  countries: [],
  confirmed: {},
  recovered: {},
  deaths: {},
  last_update: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_COUNTRIES"]:
      return _objectSpread({}, state, {
        countries: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CONFIRMED"]:
      return _objectSpread({}, state, {
        confirmed: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["RECOVERED"]:
      return _objectSpread({}, state, {
        recovered: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DEATHS"]:
      return _objectSpread({}, state, {
        deaths: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LAST_UPDATE"]:
      return _objectSpread({}, state, {
        last_update: action.payload,
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/covid19/types.js":
/*!********************************!*\
  !*** ./store/covid19/types.js ***!
  \********************************/
/*! exports provided: CONFIRMED, RECOVERED, DEATHS, LAST_UPDATE, LOAD_COUNTRIES, LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRMED", function() { return CONFIRMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECOVERED", function() { return RECOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEATHS", function() { return DEATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_UPDATE", function() { return LAST_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COUNTRIES", function() { return LOAD_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
const CONFIRMED = "CONFIRMED";
const RECOVERED = "RECOVERED";
const DEATHS = "DEATHS";
const LAST_UPDATE = "LAST_UPDATE";
const LOAD_COUNTRIES = "LOAD_COUNTRIES";
const LOADING = "LOADING";

/***/ }),

/***/ "./store/hostels/actions.js":
/*!**********************************!*\
  !*** ./store/hostels/actions.js ***!
  \**********************************/
/*! exports provided: fetchHostels, fetchSpecificHostel, loadReviews, pushHostelReview, pullHostelReview, addHostelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHostels", function() { return fetchHostels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSpecificHostel", function() { return fetchSpecificHostel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReviews", function() { return loadReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushHostelReview", function() { return pushHostelReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pullHostelReview", function() { return pullHostelReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHostelView", function() { return addHostelView; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/hostels/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const URL = `https://karuapi.herokuapp.com/api/`;

const load_hostels = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HOSTELS_FETCH"],
    payload: data
  };
};

const load_hostel = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_FETCH"],
    payload: data
  };
};

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_LOADING"]
  };
};

const resetLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RESET_HOSTEL_LOADING"]
  };
}; //setting the reviews


const setReviews = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_REVIEWS"],
    payload: data
  };
}; //adding a single review


const addReview = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_REVIEW"],
    payload: data
  };
}; //deleting review


const deleteReview = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_REVIEW"],
    payload: data
  };
};

const fetchHostels = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/hostels/fetchHostels`).then(result => {
      return dispatch(load_hostels(result.data.message));
    }).catch(console.log);
  };
};
const fetchSpecificHostel = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/hostels/${slug}`).then(result => {
      return dispatch(load_hostel(result.data.message));
    }).catch(console.log);
  };
}; //loading the reviews

const loadReviews = data => {
  return async dispatch => {
    dispatch(setLoading());
    return dispatch(setReviews(data));
  };
}; //adding a review

const pushHostelReview = (data, slug, added_review) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/hostels/addReview/${slug}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      dispatch(load_hostel(response.data.message));
      return dispatch(addReview(added_review));
    }).catch(console.log);
  };
}; //removing a review

const pullHostelReview = (slug, review) => {
  let data = {
    review
  };
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/hostels/deleteReview/${slug}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      dispatch(load_hostel(response.data.message));
      return dispatch(deleteReview(review));
    }).catch(console.log);
  };
}; //adding views

const addHostelView = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/hostels/addViews`, {
      slug
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      let success = response.data.success;
      if (success) return dispatch(resetLoading());
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/hostels/index.js":
/*!********************************!*\
  !*** ./store/hostels/index.js ***!
  \********************************/
/*! exports provided: fetchHostels, fetchSpecificHostel, loadReviews, pushHostelReview, pullHostelReview, addHostelView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/hostels/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/hostels/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchHostels", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchHostels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSpecificHostel", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchSpecificHostel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadReviews", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["loadReviews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushHostelReview", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pushHostelReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pullHostelReview", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pullHostelReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHostelView", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["addHostelView"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/hostels/reducer.js":
/*!**********************************!*\
  !*** ./store/hostels/reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/hostels/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  hostels: [],
  hostel: {},
  reviews: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["RESET_HOSTEL_LOADING"]:
      return _objectSpread({}, state, {
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["HOSTELS_FETCH"]:
      return _objectSpread({}, state, {
        loading: false,
        hostels: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_FETCH"]:
      return _objectSpread({}, state, {
        loading: false,
        hostel: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_REVIEWS"]:
      return _objectSpread({}, state, {
        reviews: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ADD_REVIEW"]:
      return _objectSpread({}, state, {
        reviews: [...state.reviews, action.payload],
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_REVIEW"]:
      return _objectSpread({}, state, {
        reviews: state.reviews.filter(review => review._id !== action.payload),
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/hostels/types.js":
/*!********************************!*\
  !*** ./store/hostels/types.js ***!
  \********************************/
/*! exports provided: HOSTELS_FETCH, HOSTEL_FETCH, HOSTEL_LOADING, LOAD_REVIEWS, ADD_REVIEW, DELETE_REVIEW, RESET_HOSTEL_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTELS_FETCH", function() { return HOSTELS_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTEL_FETCH", function() { return HOSTEL_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTEL_LOADING", function() { return HOSTEL_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEWS", function() { return LOAD_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW", function() { return ADD_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REVIEW", function() { return DELETE_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_HOSTEL_LOADING", function() { return RESET_HOSTEL_LOADING; });
const HOSTELS_FETCH = "HOSTELS_FETCH";
const HOSTEL_FETCH = "HOSTEL_FETCH";
const HOSTEL_LOADING = "HOSTEL_LOADING";
const LOAD_REVIEWS = "LOAD_REVIEWS";
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const RESET_HOSTEL_LOADING = "RESET_HOSTEL_LOADING";

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hostels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hostels */ "./store/hostels/index.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ "./store/products/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./store/user/index.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu */ "./store/mobile-menu/index.js");
/* harmony import */ var _quickview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quickview */ "./store/quickview/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./store/services/index.js");
/* harmony import */ var _influencers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./influencers */ "./store/influencers/index.js");
/* harmony import */ var _covid19__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./covid19 */ "./store/covid19/index.js");
/* harmony import */ var _bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bs */ "./store/bs/index.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale */ "./store/locale/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar */ "./store/sidebar/index.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories */ "./store/categories/index.js");
 //custom reducers













/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  hostels: _hostels__WEBPACK_IMPORTED_MODULE_1__["default"],
  products: _products__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_3__["default"],
  mobileMenu: _mobile_menu__WEBPACK_IMPORTED_MODULE_4__["default"],
  quickview: _quickview__WEBPACK_IMPORTED_MODULE_5__["default"],
  services: _services__WEBPACK_IMPORTED_MODULE_6__["default"],
  influencers: _influencers__WEBPACK_IMPORTED_MODULE_7__["default"],
  covid19: _covid19__WEBPACK_IMPORTED_MODULE_8__["default"],
  bs: _bs__WEBPACK_IMPORTED_MODULE_9__["default"],
  locale: _locale__WEBPACK_IMPORTED_MODULE_10__["default"],
  mp_sidebar: _sidebar__WEBPACK_IMPORTED_MODULE_11__["default"],
  categories: _categories__WEBPACK_IMPORTED_MODULE_12__["default"]
}));

/***/ }),

/***/ "./store/influencers/actions.js":
/*!**************************************!*\
  !*** ./store/influencers/actions.js ***!
  \**************************************/
/*! exports provided: loadInfluencers, fetchInfluencer, vote, comment, followInfluencer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInfluencers", function() { return loadInfluencers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInfluencer", function() { return fetchInfluencer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vote", function() { return vote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followInfluencer", function() { return followInfluencer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/influencers/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const URL = `https://karuapi.herokuapp.com/api/`;

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INFLUENCER_LOADING"]
  };
};

const setInfluencers = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_INFLUENCERS"],
    payload: data
  };
};

const setInfluencer = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SPEC_INFLUENCER"],
    payload: data
  };
}; //load influencers


const loadInfluencers = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/influencers/getInfluencers`).then(data => dispatch(setInfluencers(data.data.message))).catch(console.log);
  };
}; //fetch an influencer

const fetchInfluencer = name => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/influencers/${name}`).then(data => dispatch(setInfluencer(data.data.message))).catch(console.log);
  };
}; //vote for an influencer

const vote = (influencer, data) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/influencers/vote/${influencer}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => {
      console.log(`data received`, data.data.message);
      return dispatch(setInfluencer(data.data.message));
    }).catch(console.log);
  };
}; //adding a comment for an influencer

const comment = (name, data) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/influencers/comment/${name}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return dispatch(setInfluencer(response.data.message));
    }).catch(console.log);
  };
}; //following an influencer

const followInfluencer = (data, slug) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/influencers/follow/${slug}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return dispatch(setInfluencers(response.data.message));
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/influencers/index.js":
/*!************************************!*\
  !*** ./store/influencers/index.js ***!
  \************************************/
/*! exports provided: loadInfluencers, fetchInfluencer, vote, comment, followInfluencer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/influencers/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/influencers/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadInfluencers", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["loadInfluencers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchInfluencer", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchInfluencer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vote", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["vote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["comment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followInfluencer", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["followInfluencer"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/influencers/reducer.js":
/*!**************************************!*\
  !*** ./store/influencers/reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/influencers/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  influencers: [],
  influencer: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["INFLUENCER_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_INFLUENCERS"]:
      return _objectSpread({}, state, {
        influencers: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SPEC_INFLUENCER"]:
      return _objectSpread({}, state, {
        influencer: action.payload,
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/influencers/types.js":
/*!************************************!*\
  !*** ./store/influencers/types.js ***!
  \************************************/
/*! exports provided: INFLUENCER_LOADING, LOAD_INFLUENCERS, LOAD_SPEC_INFLUENCER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFLUENCER_LOADING", function() { return INFLUENCER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INFLUENCERS", function() { return LOAD_INFLUENCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPEC_INFLUENCER", function() { return LOAD_SPEC_INFLUENCER; });
const INFLUENCER_LOADING = "INFLUENCER_LOADING";
const LOAD_INFLUENCERS = "LOAD_INFLUENCERS";
const LOAD_SPEC_INFLUENCER = "LOAD_SPEC_INFLUENCER";

/***/ }),

/***/ "./store/locale/index.js":
/*!*******************************!*\
  !*** ./store/locale/index.js ***!
  \*******************************/
/*! exports provided: localeChange, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localeReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeReducer */ "./store/locale/localeReducer.js");
/* harmony import */ var _localeActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localeActions */ "./store/locale/localeActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeChange", function() { return _localeActions__WEBPACK_IMPORTED_MODULE_1__["localeChange"]; });



/* harmony default export */ __webpack_exports__["default"] = (_localeReducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/locale/localeActionTypes.js":
/*!*******************************************!*\
  !*** ./store/locale/localeActionTypes.js ***!
  \*******************************************/
/*! exports provided: LOCALE_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_CHANGE", function() { return LOCALE_CHANGE; });
// eslint-disable-next-line import/prefer-default-export
const LOCALE_CHANGE = 'LOCALE_CHANGE';

/***/ }),

/***/ "./store/locale/localeActions.js":
/*!***************************************!*\
  !*** ./store/locale/localeActions.js ***!
  \***************************************/
/*! exports provided: localeChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeChange", function() { return localeChange; });
/* harmony import */ var _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeActionTypes */ "./store/locale/localeActionTypes.js");
 // eslint-disable-next-line import/prefer-default-export

const localeChange = locale => ({
  type: _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOCALE_CHANGE"],
  locale
});

/***/ }),

/***/ "./store/locale/localeReducer.js":
/*!***************************************!*\
  !*** ./store/locale/localeReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return localeReducer; });
/* harmony import */ var _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeActionTypes */ "./store/locale/localeActionTypes.js");

const initialState = 'en';
function localeReducer(state = initialState, action) {
  if (action.type === _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOCALE_CHANGE"]) {
    return action.locale;
  }

  return state;
}

/***/ }),

/***/ "./store/mobile-menu/index.js":
/*!************************************!*\
  !*** ./store/mobile-menu/index.js ***!
  \************************************/
/*! exports provided: mobileMenuOpen, mobileMenuClose, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobileMenuReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileMenuReducer */ "./store/mobile-menu/mobileMenuReducer.js");
/* harmony import */ var _mobileMenuActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileMenuActions */ "./store/mobile-menu/mobileMenuActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileMenuOpen", function() { return _mobileMenuActions__WEBPACK_IMPORTED_MODULE_1__["mobileMenuOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileMenuClose", function() { return _mobileMenuActions__WEBPACK_IMPORTED_MODULE_1__["mobileMenuClose"]; });



/* harmony default export */ __webpack_exports__["default"] = (_mobileMenuReducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/mobile-menu/mobileMenuActionTypes.js":
/*!****************************************************!*\
  !*** ./store/mobile-menu/mobileMenuActionTypes.js ***!
  \****************************************************/
/*! exports provided: MOBILE_MENU_OPEN, MOBILE_MENU_CLOSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_MENU_OPEN", function() { return MOBILE_MENU_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_MENU_CLOSE", function() { return MOBILE_MENU_CLOSE; });
const MOBILE_MENU_OPEN = 'MOBILE_MENU_OPEN';
const MOBILE_MENU_CLOSE = 'MOBILE_MENU_CLOSE';

/***/ }),

/***/ "./store/mobile-menu/mobileMenuActions.js":
/*!************************************************!*\
  !*** ./store/mobile-menu/mobileMenuActions.js ***!
  \************************************************/
/*! exports provided: mobileMenuOpen, mobileMenuClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenuOpen", function() { return mobileMenuOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenuClose", function() { return mobileMenuClose; });
/* harmony import */ var _mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileMenuActionTypes */ "./store/mobile-menu/mobileMenuActionTypes.js");

function mobileMenuOpen() {
  return {
    type: _mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__["MOBILE_MENU_OPEN"]
  };
}
function mobileMenuClose() {
  return {
    type: _mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__["MOBILE_MENU_CLOSE"]
  };
}

/***/ }),

/***/ "./store/mobile-menu/mobileMenuReducer.js":
/*!************************************************!*\
  !*** ./store/mobile-menu/mobileMenuReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileMenuReducer; });
/* harmony import */ var _mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileMenuActionTypes */ "./store/mobile-menu/mobileMenuActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  open: false
};
function mobileMenuReducer(state = initialState, action) {
  switch (action.type) {
    case _mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__["MOBILE_MENU_OPEN"]:
      return _objectSpread({}, state, {
        open: true
      });

    case _mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__["MOBILE_MENU_CLOSE"]:
      return _objectSpread({}, state, {
        open: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./store/products/actions.js":
/*!***********************************!*\
  !*** ./store/products/actions.js ***!
  \***********************************/
/*! exports provided: openToggle, closeToggle, fetchProducts, fetchUserStock, fetchProduct, updateProduct, fetchPremiums, uploadProduct, deleteProduct, loadReviews, pushMpReview, pullMpReview, addProductViews, updateStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openToggle", function() { return openToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeToggle", function() { return closeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserStock", function() { return fetchUserStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduct", function() { return fetchProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPremiums", function() { return fetchPremiums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProduct", function() { return uploadProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReviews", function() { return loadReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushMpReview", function() { return pushMpReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pullMpReview", function() { return pullMpReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductViews", function() { return addProductViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStock", function() { return updateStock; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/products/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const URL = 'https://karuapi.herokuapp.com/api/';

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_LOADING"]
  };
};

const setOffLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_OFF_PRODUCT_LOADING"]
  };
};

const messageLoad = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_LOAD"],
    payload: data
  };
};

const loadProducts = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_FETCH"],
    payload: data
  };
};

const loadProduct = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_FETCH"],
    payload: data
  };
};

const setError = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_ERROR"],
    payload: data
  };
};

const productDelete = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_DELETE"],
    payload: data
  };
};

const setPremium = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PREMIUM_LOAD"],
    payload: data
  };
};

const setUserProducts = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_PRODUCTS"],
    payload: data
  };
}; //loading reviews


const setReviews = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_REVIEWS"],
    payload: data
  };
}; //adding reviews


const addReview = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_REVIEW"],
    payload: data
  };
}; //deleting reviews


const deleteReview = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_REVIEW"],
    payload: data
  };
};

const openToggle = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["OPEN_TOGGLER"]
  };
};
const closeToggle = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLOSE_TOGGLER"]
  };
}; //this is for the marketplace view for all users

const fetchProducts = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/marketPlace/products/fetchBasic`).then(result => {
      return dispatch(loadProducts(result.data.message));
    }).catch(console.log);
  };
}; //this is for the user dashboard.

const fetchUserStock = _id => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/marketPlace/products/${_id}`).then(result => {
      return dispatch(setUserProducts(result.data.message));
    }).catch(console.log);
  };
}; //fetching a specific product

const fetchProduct = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/marketPlace/product/fetchProduct/${slug}`).then(result => {
      return dispatch(loadProduct(result.data.message));
    }).catch(console.log);
  };
};
const updateProduct = (data, _id) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${URL}/marketPlace/updateProduct/${_id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(result => {
      return dispatch(loadProduct(result.data.message));
    }).catch(console.log);
  };
}; //loading the premiums.

const fetchPremiums = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/marketPlace/products/fetchPremium`).then(result => {
      console.log('result from premium', result.data.message);
      return dispatch(setPremium(result.data.message));
    }).catch(console.log);
  };
}; //uploading a product --> whenever you add a product return it

const uploadProduct = data => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/marketPlace/product/addProduct`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(result => {
      let response = result.data.success;
      if (!response) return dispatch(setError(result.data.message));
      return dispatch(messageLoad(result.data.message));
    }).catch(console.log);
  };
}; //deleting a specific product

const deleteProduct = _id => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${URL}/marketPLace/deleteProduct/${_id}`).then(() => {
      return dispatch(productDelete(_id));
    }).catch(console.log);
  };
}; //loading the reviews

const loadReviews = data => {
  return async dispatch => {
    dispatch(setLoading());
    return dispatch(setReviews(data));
  };
}; //adding a review

const pushMpReview = (data, slug, added_review) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/marketPlace/addReview/${slug}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      dispatch(loadProduct(response.data.message));
      return dispatch(addReview(added_review));
    }).catch(console.log);
  };
}; //deleting a review

const pullMpReview = (slug, review) => {
  let data = {
    review
  };
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/marketPlace/products/deleteReview/${slug}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      dispatch(loadProduct(response.data.message));
      return dispatch(deleteReview(review));
    }).catch(console.log);
  };
}; //adding the product views

const addProductViews = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/marketPlace/addViews/${slug}`, null, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      return dispatch(setOffLoading());
    }).catch(console.log);
  };
}; //setting a product off stock

const updateStock = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${URL}/marketPlace/updateStock`, {
      slug
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      return dispatch(setOffLoading());
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/products/index.js":
/*!*********************************!*\
  !*** ./store/products/index.js ***!
  \*********************************/
/*! exports provided: openToggle, closeToggle, fetchProducts, fetchUserStock, fetchProduct, updateProduct, fetchPremiums, uploadProduct, deleteProduct, loadReviews, pushMpReview, pullMpReview, addProductViews, updateStock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/products/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/products/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openToggle", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["openToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeToggle", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["closeToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchUserStock", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchUserStock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProduct", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["updateProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchPremiums", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchPremiums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadProduct", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["uploadProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["deleteProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadReviews", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["loadReviews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushMpReview", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pushMpReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pullMpReview", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pullMpReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProductViews", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["addProductViews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateStock", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["updateStock"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/products/reducer.js":
/*!***********************************!*\
  !*** ./store/products/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/products/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  basic: [],
  success: null,
  message: '',
  error: '',
  product: {},
  toggle: false,
  premium: [],
  user_products: [],
  reviews: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_LOADING"]:
      return _objectSpread({}, state, {
        error: '',
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_OFF_PRODUCT_LOADING"]:
      return _objectSpread({}, state, {
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        success: false,
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_LOAD"]:
      return _objectSpread({}, state, {
        loading: false,
        success: true,
        error: '',
        message: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_FETCH"]:
      console.log('being called');
      return _objectSpread({}, state, {
        loading: false,
        success: true,
        basic: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_FETCH"]:
      return _objectSpread({}, state, {
        loading: false,
        success: true,
        product: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_DELETE"]:
      return _objectSpread({}, state, {
        loading: false,
        basic: state.basic.filter(product => product._id !== action.payload),
        user_products: state.user_products.filter(product => product._id !== action.payload)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OPEN_TOGGLER"]:
      return _objectSpread({}, state, {
        toggle: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLOSE_TOGGLER"]:
      return _objectSpread({}, state, {
        toggle: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PREMIUM_LOAD"]:
      return _objectSpread({}, state, {
        premium: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_PRODUCTS"]:
      return _objectSpread({}, state, {
        user_products: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_REVIEWS"]:
      return _objectSpread({}, state, {
        reviews: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ADD_REVIEW"]:
      return _objectSpread({}, state, {
        reviews: [...state.reviews, action.payload],
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_REVIEW"]:
      return _objectSpread({}, state, {
        reviews: state.reviews.filter(review => review._id !== action.payload),
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/products/types.js":
/*!*********************************!*\
  !*** ./store/products/types.js ***!
  \*********************************/
/*! exports provided: PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_LOADING, SET_OFF_PRODUCT_LOADING, PRODUCT_ERROR, MESSAGE_LOAD, PRODUCT_DELETE, OPEN_TOGGLER, CLOSE_TOGGLER, PREMIUM_LOAD, LOAD_USER_PRODUCTS, LOAD_REVIEWS, ADD_REVIEW, DELETE_REVIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_FETCH", function() { return PRODUCTS_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_FETCH", function() { return PRODUCT_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LOADING", function() { return PRODUCT_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OFF_PRODUCT_LOADING", function() { return SET_OFF_PRODUCT_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_ERROR", function() { return PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_LOAD", function() { return MESSAGE_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_DELETE", function() { return PRODUCT_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_TOGGLER", function() { return OPEN_TOGGLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_TOGGLER", function() { return CLOSE_TOGGLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREMIUM_LOAD", function() { return PREMIUM_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_PRODUCTS", function() { return LOAD_USER_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEWS", function() { return LOAD_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW", function() { return ADD_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REVIEW", function() { return DELETE_REVIEW; });
const PRODUCTS_FETCH = 'PRODUCTS_FETCH';
const PRODUCT_FETCH = 'PRODUCT_FETCH';
const PRODUCT_LOADING = 'PRODUCT_LOADING';
const SET_OFF_PRODUCT_LOADING = "SET_OFF_PRODUCT_LOADING";
const PRODUCT_ERROR = 'PRODUCT_ERROR';
const MESSAGE_LOAD = "MESSAGE_LOAD";
const PRODUCT_DELETE = "PRODUCT_DELETE";
const OPEN_TOGGLER = "OPEN_TOGGLER";
const CLOSE_TOGGLER = "CLOSE_TOGGLER";
const PREMIUM_LOAD = "PREMIUM_LOAD";
const LOAD_USER_PRODUCTS = "LOAD_USER_PRODUCTS";
const LOAD_REVIEWS = "LOAD_REVIEWS";
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

/***/ }),

/***/ "./store/quickview/actions.js":
/*!************************************!*\
  !*** ./store/quickview/actions.js ***!
  \************************************/
/*! exports provided: quickviewOpenSuccess, quickviewClose, quickviewOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickviewOpenSuccess", function() { return quickviewOpenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickviewClose", function() { return quickviewClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickviewOpen", function() { return quickviewOpen; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/quickview/types.js");

function quickviewOpenSuccess(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["QUICKVIEW_OPEN"],
    payload: data
  };
}
function quickviewClose() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["QUICKVIEW_CLOSE"]
  };
}
; //we shall be sending the _id and the data to look up from 
//because the data can be really different

function quickviewOpen(_id, data) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      const element = data.find(elem => elem._id === _id);

      if (element) {
        dispatch(quickviewOpenSuccess(element));
      }

      resolve();
    }, 2000);
  });
}

/***/ }),

/***/ "./store/quickview/index.js":
/*!**********************************!*\
  !*** ./store/quickview/index.js ***!
  \**********************************/
/*! exports provided: quickviewOpenSuccess, quickviewClose, quickviewOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/quickview/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/quickview/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickviewOpenSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["quickviewOpenSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickviewClose", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["quickviewClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickviewOpen", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["quickviewOpen"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/quickview/reducer.js":
/*!************************************!*\
  !*** ./store/quickview/reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickviewReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/quickview/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  open: false,
  element: null
};
function quickviewReducer(state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["QUICKVIEW_OPEN"]:
      return _objectSpread({}, state, {
        open: true,
        element: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["QUICKVIEW_CLOSE"]:
      return _objectSpread({}, state, {
        open: false
      });

    default:
      {
        return _objectSpread({}, state);
      }
  }
}
;

/***/ }),

/***/ "./store/quickview/types.js":
/*!**********************************!*\
  !*** ./store/quickview/types.js ***!
  \**********************************/
/*! exports provided: QUICKVIEW_OPEN, QUICKVIEW_CLOSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICKVIEW_OPEN", function() { return QUICKVIEW_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICKVIEW_CLOSE", function() { return QUICKVIEW_CLOSE; });
const QUICKVIEW_OPEN = 'QUICKVIEW_OPEN';
const QUICKVIEW_CLOSE = 'QUICKVIEW_CLOSE';

/***/ }),

/***/ "./store/services/actions.js":
/*!***********************************!*\
  !*** ./store/services/actions.js ***!
  \***********************************/
/*! exports provided: loadServices, loadService, pushService, fetchUserServices, updateService, pullService, loadReviews, pushReview, pullReview, addServiceViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadServices", function() { return loadServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadService", function() { return loadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushService", function() { return pushService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserServices", function() { return fetchUserServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return updateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pullService", function() { return pullService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReviews", function() { return loadReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushReview", function() { return pushReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pullReview", function() { return pullReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addServiceViews", function() { return addServiceViews; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store/services/types.js");
//third-party
 //components


const URL = `https://karuapi.herokuapp.com/api`;

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SERVICES_LOADING"]
  };
};

const setOffLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_OFF_SERVICES_LOADING"]
  };
};

const setError = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_ERROR"],
    payload: data
  };
};

const setMessage = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_MESSAGE"],
    payload: data
  };
};

const setService = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_SERVICE"],
    payload: data
  };
};

const setServices = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_SERVICES"],
    payload: data
  };
};

const setUserServices = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SERVICES"],
    payload: data
  };
};

const deleteService = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["DELETE_SERVICE"],
    payload: data
  };
};

const setReviews = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_REVIEWS"],
    payload: data
  };
};

const addReview = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["ADD_REVIEW"],
    payload: data
  };
};

const deleteReview = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["DELETE_REVIEW"],
    payload: data
  };
};

const loadServices = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${URL}/services/fetchServices`).then(response => {
      return dispatch(setServices(response.data.message));
    }).catch(console.log);
  };
}; //loading a specific service

const loadService = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${URL}/services/fetchService/${slug}`).then(response => {
      return dispatch(setService(response.data.message));
    }).catch(console.log);
  };
}; //Push a service

const pushService = data => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${URL}/services/addService`, data, {
      headers: {
        'Content-Type': 'application/form-data'
      }
    }).then(response => {
      let success = response.data.success;
      if (!success) return dispatch(setError(response.data.message));
      return dispatch(setMessage(response.data.message));
    }).catch(console.log);
  };
}; //fetching user specific services

const fetchUserServices = _id => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${URL}/services/${_id}`).then(response => {
      return dispatch(setUserServices(response.data.message));
    }).catch(console.log);
  };
}; //updating a service

const updateService = (data, _id) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${URL}/services/update/${_id}`, data, {
      headers: {
        'Content-Type': 'application/form-data'
      }
    }).then(response => {
      let success = response.data.success;
      if (!success) return dispatch(setError(response.data.message));
      return dispatch(setMessage(response.data.message));
    });
  };
}; //deleting a service

const pullService = _id => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${URL}/services/delete/${_id}`).then(() => {
      return dispatch(deleteService(_id));
    }).catch(console.log);
  };
}; //loading the reviews

const loadReviews = data => {
  return async dispatch => {
    dispatch(setLoading());
    return dispatch(setReviews(data));
  };
}; //pushing a review

const pushReview = (data, slug, added_review) => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${URL}/services/addReview/${slug}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      dispatch(setService(response.data.message));
      return dispatch(addReview(added_review));
    }).catch(console.log);
  };
}; //deleting a review

const pullReview = (slug, reviewId) => {
  const data = {
    review: reviewId
  };
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${URL}/services/deleteReview/${slug}`, data).then(response => {
      dispatch(deleteReview(reviewId));
      return dispatch(setService(response.data.message));
    }).catch(console.log);
  };
}; //adding views for a service

const addServiceViews = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${URL}/services/addViews/${slug}`, null, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      return dispatch(setOffLoading());
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/services/index.js":
/*!*********************************!*\
  !*** ./store/services/index.js ***!
  \*********************************/
/*! exports provided: loadServices, loadService, pushService, fetchUserServices, updateService, pullService, loadReviews, pushReview, pullReview, addServiceViews, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/services/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/services/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadServices", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["loadServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadService", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["loadService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushService", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pushService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchUserServices", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchUserServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["updateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pullService", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pullService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadReviews", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["loadReviews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushReview", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pushReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pullReview", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["pullReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addServiceViews", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["addServiceViews"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/services/reducer.js":
/*!***********************************!*\
  !*** ./store/services/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/services/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  error: '',
  services: [],
  service: {},
  user_services: [],
  message: '',
  reviews: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SERVICES_LOADING"]:
      return _objectSpread({}, state, {
        error: '',
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_OFF_SERVICES_LOADING"]:
      return _objectSpread({}, state, {
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SERVICES"]:
      return _objectSpread({}, state, {
        services: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SERVICE"]:
      return _objectSpread({}, state, {
        service: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_ERROR"]:
      return _objectSpread({}, state, {
        error: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MESSAGE"]:
      return _objectSpread({}, state, {
        message: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_SERVICES"]:
      return _objectSpread({}, state, {
        user_services: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_SERVICE"]:
      return _objectSpread({}, state, {
        services: state.services.filter(service => service._id !== action.payload),
        user_services: state.user_services.filter(service => service._id !== action.payload),
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_REVIEWS"]:
      return _objectSpread({}, state, {
        reviews: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_REVIEW"]:
      return _objectSpread({}, state, {
        reviews: state.reviews.filter(review => review._id !== action.payload)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ADD_REVIEW"]:
      return _objectSpread({}, state, {
        reviews: [...state.reviews, action.payload],
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/services/types.js":
/*!*********************************!*\
  !*** ./store/services/types.js ***!
  \*********************************/
/*! exports provided: SERVICES_LOADING, SET_OFF_SERVICES_LOADING, LOAD_ERROR, LOAD_SERVICES, LOAD_SERVICE, LOAD_MESSAGE, LOAD_USER_SERVICES, DELETE_SERVICE, LOAD_REVIEWS, ADD_REVIEW, DELETE_REVIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES_LOADING", function() { return SERVICES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OFF_SERVICES_LOADING", function() { return SET_OFF_SERVICES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ERROR", function() { return LOAD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SERVICES", function() { return LOAD_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SERVICE", function() { return LOAD_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MESSAGE", function() { return LOAD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SERVICES", function() { return LOAD_USER_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SERVICE", function() { return DELETE_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEWS", function() { return LOAD_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW", function() { return ADD_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REVIEW", function() { return DELETE_REVIEW; });
const SERVICES_LOADING = "SERVICES_LOADING";
const SET_OFF_SERVICES_LOADING = "SET_OFF_SERVICES_LOADING";
const LOAD_ERROR = "LOAD_ERROR";
const LOAD_SERVICES = "LOAD_SERVICES";
const LOAD_SERVICE = "LOAD_SERVICE";
const LOAD_MESSAGE = "LOAD_MESSAGE";
const LOAD_USER_SERVICES = "LOAD_USER_SERVICES";
const DELETE_SERVICE = "DELETE_SERVICE";
const LOAD_REVIEWS = "LOAD_REVIEWS";
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

/***/ }),

/***/ "./store/sidebar/actions.js":
/*!**********************************!*\
  !*** ./store/sidebar/actions.js ***!
  \**********************************/
/*! exports provided: sidebarOpen, sidebarClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarOpen", function() { return sidebarOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarClose", function() { return sidebarClose; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/sidebar/types.js");

function sidebarOpen() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_OPEN"]
  };
}
;
function sidebarClose() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_CLOSE"]
  };
}

/***/ }),

/***/ "./store/sidebar/index.js":
/*!********************************!*\
  !*** ./store/sidebar/index.js ***!
  \********************************/
/*! exports provided: sidebarOpen, sidebarClose, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/sidebar/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/sidebar/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarOpen", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["sidebarOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarClose", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["sidebarClose"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/sidebar/reducer.js":
/*!**********************************!*\
  !*** ./store/sidebar/reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/sidebar/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  open: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_OPEN"]:
      return _objectSpread({}, state, {
        open: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_CLOSE"]:
      return _objectSpread({}, state, {
        open: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/sidebar/types.js":
/*!********************************!*\
  !*** ./store/sidebar/types.js ***!
  \********************************/
/*! exports provided: SIDEBAR_OPEN, SIDEBAR_CLOSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_OPEN", function() { return SIDEBAR_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_CLOSE", function() { return SIDEBAR_CLOSE; });
const SIDEBAR_OPEN = "SIDEBAR_OPEN";
const SIDEBAR_CLOSE = "SIDEBAR_CLOSE";

/***/ }),

/***/ "./store/user/actions.js":
/*!*******************************!*\
  !*** ./store/user/actions.js ***!
  \*******************************/
/*! exports provided: fetchUser, user_login, provider_userlogin, user_signup, provider_usersignup, user_logout, update_user_details, update_profile, recover_account, reset_password, follow_club, fetchUserById, subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_login", function() { return user_login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider_userlogin", function() { return provider_userlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_signup", function() { return user_signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider_usersignup", function() { return provider_usersignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_logout", function() { return user_logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_user_details", function() { return update_user_details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_profile", function() { return update_profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recover_account", function() { return recover_account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset_password", function() { return reset_password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "follow_club", function() { return follow_club; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserById", function() { return fetchUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/user/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const URL = `http://karuapi.herokuapp.com/api/`;

const load_user = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_FETCH"],
    payload: data
  };
};

const login_error = data => {
  //showing the error
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_ERROR"],
    payload: data
  };
};

const logout = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_LOGOUT"]
  };
};

const signup_error = data => {
  //the signup error
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_SIGNUP_ERROR"],
    payload: data
  };
};

const signup = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_SIGNUP"],
    payload: data
  };
};

const loading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]
  };
};

const setMessage = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_MESSAGE"],
    payload: data
  };
};

const setToken = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TOKEN"],
    payload: data
  };
};

const setError = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RECOVERY_ERROR"],
    payload: data
  };
};

const loadSearchedUser = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SEARCHED_USER"],
    payload: data
  };
};

const loadSearchedUserProducts = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SEARCHED_USER_PRODUCTS"],
    payload: data
  };
};

const loadSearchedUserServices = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SEARCHED_USER_SERVICES"],
    payload: data
  };
}; //decode the token


const fetchUser = token => {
  return async dispatch => {
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/decodeToken`, null, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(result => {
      return dispatch(load_user(result.data.message));
    }).catch(console.log);
  };
}; //login user

const user_login = data => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/login`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      console.log('result we are getting', result.data.message);
      let response = result.data.success;

      if (!response) {
        return dispatch(login_error(result.data.message));
      }

      ;
      return dispatch(setToken(result.data.message));
    }).catch(console.log);
  };
}; //provider user login

const provider_userlogin = data => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/provider_login`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      let response = result.data.success;
      if (!response) return dispatch(login_error(result.data.message));
      return dispatch(setToken(result.data.message));
    }).catch(console.log);
  };
}; //signup user

const user_signup = data => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/signup`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      if (!result.data.success) {
        return dispatch(signup_error(result.data.message));
      }

      ; //this is the message

      console.log('the message', result.data.message);
      return dispatch(signup(result.data.message));
    }).catch(console.log);
  };
}; //provider signup

const provider_usersignup = data => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/provider_signup`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      let response = result.data.success;
      if (!response) return dispatch(signup_error(result.data.message));
      return dispatch(setToken(result.data.message));
    }).catch(console.log);
  };
}; //logout the user

const user_logout = () => {
  return async dispatch => {
    dispatch(loading());
    return dispatch(logout());
  };
}; //updating the user

const update_user_details = (data, _id) => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${URL}/users/updateDetails/${_id}`, data).then(result => {
      console.log(`the result `, result);
      return dispatch(load_user(result.data.message));
    }).catch(console.log);
  };
}; //updating a profile pic

const update_profile = (data, _id) => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${URL}/users/updateProfile/${_id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(result => {
      return dispatch(load_user(result.data.message));
    }).catch(console.log);
  };
}; //recovering an account -- this shall return either an error, or a message

const recover_account = data => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/recover_account`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      let response = result.data.success;
      if (!response) return dispatch(setError(result.data.message));
      return dispatch(setMessage(result.data.message));
    }).catch(console.log);
  };
}; //setting new password --- this shall return a message

const reset_password = (data, slug) => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/reset_password/${slug}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      return dispatch(setMessage(result.data.message));
    }).catch(console.log);
  };
}; //following a club

const follow_club = (user_id, club_id) => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/clubs/follow/${club_id}`, {
      user_id
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      //we set the new user who has followed the club
      return dispatch(load_user(result.data.message));
    }).catch(console.log);
  };
}; //searching user by id --- update on the db

const fetchUserById = _id => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/users/spec_user/${_id}`).then(response => {
      let result = response.data.success;
      if (!result) return dispatch(setError(response.data.message)); //we have the user,products and services of that user

      dispatch(loadSearchedUserProducts(response.data.products));
      dispatch(loadSearchedUserServices(response.data.services));
      return dispatch(loadSearchedUser(response.data.user));
    }).catch(console.log);
  };
}; //subscribing to another users profile

const subscribe = (data, _id) => {
  return async dispatch => {
    dispatch(loading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${URL}/users/subscribe/${_id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      let success = response.data.success;
      if (!success) return dispatch(setError('already subscribed'));
      return dispatch(loadSearchedUser(response.data.message));
    }).catch(console.log);
  };
};

/***/ }),

/***/ "./store/user/index.js":
/*!*****************************!*\
  !*** ./store/user/index.js ***!
  \*****************************/
/*! exports provided: fetchUser, user_login, provider_userlogin, user_signup, provider_usersignup, user_logout, update_user_details, update_profile, recover_account, reset_password, follow_club, fetchUserById, subscribe, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/user/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/user/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user_login", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["user_login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provider_userlogin", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["provider_userlogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user_signup", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["user_signup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provider_usersignup", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["provider_usersignup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user_logout", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["user_logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update_user_details", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["update_user_details"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update_profile", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["update_profile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recover_account", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["recover_account"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reset_password", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["reset_password"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "follow_club", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["follow_club"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchUserById", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchUserById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["subscribe"]; });



/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/user/reducer.js":
/*!*******************************!*\
  !*** ./store/user/reducer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/user/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  message: '',
  token: '',
  success: false,
  user: {},
  searched_user: {},
  searched_user_products: [],
  searched_user_services: [],
  error: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["USER_LOADING"]:
      return _objectSpread({}, state, {
        error: '',
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER_FETCH"]:
      return _objectSpread({}, state, {
        loading: false,
        error: '',
        user: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        success: false,
        message: '',
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER_MESSAGE"]:
      return _objectSpread({}, state, {
        loading: false,
        error: '',
        message: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["RECOVERY_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER_SIGNUP_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        success: false,
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER_SIGNUP"]:
      return _objectSpread({}, state, {
        loading: false,
        success: true,
        error: '',
        message: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER_LOGOUT"]:
      return _objectSpread({}, state, {
        loading: false,
        error: '',
        token: '',
        user: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SEARCHED_USER"]:
      return _objectSpread({}, state, {
        searched_user: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_TOKEN"]:
      return _objectSpread({}, state, {
        token: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SEARCHED_USER_SERVICES"]:
      return _objectSpread({}, state, {
        searched_user_services: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_SEARCHED_USER_PRODUCTS"]:
      return _objectSpread({}, state, {
        searched_user_products: action.payload,
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
});

/***/ }),

/***/ "./store/user/types.js":
/*!*****************************!*\
  !*** ./store/user/types.js ***!
  \*****************************/
/*! exports provided: USER_FETCH, USER_ERROR, USER_LOGIN_ERROR, USER_SIGNUP, USER_SIGNUP_ERROR, USER_LOADING, USER_LOGOUT, USER_MESSAGE, RECOVERY_ERROR, LOAD_SEARCHED_USER, LOAD_SEARCHED_USER_PRODUCTS, LOAD_SEARCHED_USER_SERVICES, SET_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FETCH", function() { return USER_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ERROR", function() { return USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_ERROR", function() { return USER_LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SIGNUP", function() { return USER_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SIGNUP_ERROR", function() { return USER_SIGNUP_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADING", function() { return USER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_MESSAGE", function() { return USER_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECOVERY_ERROR", function() { return RECOVERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCHED_USER", function() { return LOAD_SEARCHED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCHED_USER_PRODUCTS", function() { return LOAD_SEARCHED_USER_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCHED_USER_SERVICES", function() { return LOAD_SEARCHED_USER_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
const USER_FETCH = "USER_FETCH";
const USER_ERROR = "USER_ERROR";
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
const USER_SIGNUP = "USER_SIGNUP";
const USER_SIGNUP_ERROR = "USER_SIGNUP_ERROR";
const USER_LOADING = "USER_LOADING";
const USER_LOGOUT = "USER_LOGOUT";
const USER_MESSAGE = "USER_MESSAGE";
const RECOVERY_ERROR = "RECOVERY_ERROR";
const LOAD_SEARCHED_USER = "LOAD_SEARCHED_USER";
const LOAD_SEARCHED_USER_PRODUCTS = "LOAD_SEARCHED_USER_PRODUCTS";
const LOAD_SEARCHED_USER_SERVICES = "LOAD_SEARCHED_USER_SERVICES";
const SET_TOKEN = "SET_TOKEN";

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map