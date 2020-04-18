module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ransom/Documents/frontend/nextjs/redux_app/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //core-components

 //css has to be imported here



const Layout = props => {
  return __jsx("div", {
    className: "component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "allcomrades"), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/hostels/[slug].js":
/*!*********************************!*\
  !*** ./pages/hostels/[slug].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _store_hostels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hostels */ "./store/hostels/index.js");
/* harmony import */ var _partials_seo_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/seo-meta */ "./partials/seo-meta.js");
var _jsxFileName = "/home/ransom/Documents/frontend/nextjs/redux_app/pages/hostels/[slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//from here we shall be fetching a specific hostel
//react
 //core-components
// import {useRouter} from 'next/router';
//components





const Hostel = ({
  hostel
}) => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_partials_seo_meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    description: `${hostel['name']} on allcomrades platform`,
    url: `www.allcomrades.co.ke/platform/hostels/${hostel['slug']}`,
    title: `${hostel['name']}`,
    image: `${hostel['profiles'][0]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hostel_page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "hostel_page-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, hostel['name']), __jsx("img", {
    src: hostel['profiles'][0],
    alt: "",
    className: "hostel_page_img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })));
};

Hostel.getInitialProps = async ({
  store,
  query
}) => {
  /** we shall dispatch the process of finding a single hostel */
  await store.dispatch(Object(_store_hostels__WEBPACK_IMPORTED_MODULE_2__["fetchHostel"])(query.slug)).then(() => {});
  return {
    hostel: store.getState().hostels.hostel
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Hostel);

/***/ }),

/***/ "./partials/seo-meta.js":
/*!******************************!*\
  !*** ./partials/seo-meta.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ransom/Documents/frontend/nextjs/redux_app/partials/seo-meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//core-components

/**
 * The data shall be fed here directly
 * @param {*} props 
 */

const Meta = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, props.title), __jsx("meta", {
  name: "description",
  content: props.description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "og:title",
  property: "og:title",
  content: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "og:description",
  property: "og:description",
  content: props.description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "og:site_name",
  content: "allcomrades platform",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "og:url",
  content: props.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "twitter:title",
  content: props.title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "twitter:description",
  content: props.desc,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "twitter:creator",
  content: "allcomrades platform",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "/static/images/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: "/static/images/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image",
  content: props.image,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: props.image,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./store/hostels/actions.js":
/*!**********************************!*\
  !*** ./store/hostels/actions.js ***!
  \**********************************/
/*! exports provided: fetchHostels, fetchHostel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHostels", function() { return fetchHostels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHostel", function() { return fetchHostel; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/hostels/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const URL = `https://karuapi.herokuapp.com/api`;

const setLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HOSTELS_LOADING"]
  };
};

const setHostels = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HOSTELS_FETCH"],
    payload: data
  };
};

const setHostel = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_LOAD"],
    payload: data
  };
};

const setError = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_ERROR"],
    payload: data
  };
};

const fetchHostels = () => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/hostels/fetchHostels`).then(response => {
      return dispatch(setHostels(response.data.message));
    }).catch(console.log);
  };
};
const fetchHostel = slug => {
  return async dispatch => {
    dispatch(setLoading());
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${URL}/hostels/${slug}`).then(response => {
      let success = response.data.success;
      if (!success) return dispatch(setError(response.data.message));
      return dispatch(setHostel(response.data.message));
    });
  };
};

/***/ }),

/***/ "./store/hostels/index.js":
/*!********************************!*\
  !*** ./store/hostels/index.js ***!
  \********************************/
/*! exports provided: fetchHostels, fetchHostel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/hostels/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/hostels/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchHostels", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchHostels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchHostel", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["fetchHostel"]; });



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
  hostels: [],
  loading: false,
  hostel: {},
  error: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["HOSTELS_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["HOSTELS_FETCH"]:
      return _objectSpread({}, state, {
        hostels: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_LOAD"]:
      return _objectSpread({}, state, {
        hostel: action.payload,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["HOSTEL_ERROR"]:
      return _objectSpread({}, state, {
        error: action.payload,
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
/*! exports provided: HOSTELS_LOADING, HOSTELS_FETCH, HOSTEL_LOAD, HOSTEL_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTELS_LOADING", function() { return HOSTELS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTELS_FETCH", function() { return HOSTELS_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTEL_LOAD", function() { return HOSTEL_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTEL_ERROR", function() { return HOSTEL_ERROR; });
const HOSTELS_LOADING = "HOSTELS_LOADING";
const HOSTELS_FETCH = "HOSTELS_FETCH";
const HOSTEL_LOAD = "HOSTEL_LOAD";
const HOSTEL_ERROR = "HOSTEL_ERROR";

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!***************************************!*\
  !*** multi ./pages/hostels/[slug].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ransom/Documents/frontend/nextjs/redux_app/pages/hostels/[slug].js */"./pages/hostels/[slug].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[slug].js.map