webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/HostelCard.js":
/*!*****************************************!*\
  !*** ./components/shared/HostelCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _ModalShare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalShare */ "./components/shared/ModalShare.js");
var _this = undefined,
    _jsxFileName = "/home/ransom/Documents/frontend/nextjs/redux_app/components/shared/HostelCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //core-components

 //third-party



 //components


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    background: 'rgb(19,38,57)',
    color: '#fff',
    marginTop: '2px',
    marginBottom: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  avatar: {
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]
  },
  img: {
    width: '100px',
    height: '100%'
  }
});

var HostelCard = function HostelCard(_ref) {
  var data = _ref.data;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  var title = "".concat(data['name'], " hostel in allcomrades platform");
  var message = "share ".concat(data['name'], " hostel via other platforms");
  var link = "https://allcomrades.co.ke/platform/hostels/".concat(data['_id']);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
    avatar: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      "aria-label": "hostel",
      className: classes.avatar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 18
      }
    }, data.name[0].toUpperCase()),
    title: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/hostels/".concat(data['slug']),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 18
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 22
      }
    }, data['name'])),
    subheader: __jsx("h5", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-subheader",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, data.location),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 12
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
    className: classes.avatar,
    title: data.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.profiles[0],
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + (classes.root || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, data.type, "."), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdShare"], {
    className: "hostel_card_icon--link",
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx(_ModalShare__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: title,
    toggle: toggle,
    isOpen: isOpen,
    message: message,
    link: link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActions"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "view more"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2765126541",
    dynamic: [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]],
    __self: _this
  }, ".root.__jsx-style-dynamic-selector{background:'rgb(19,38,57)' !important, color:'#fff', marginTop:'2px', marginBottom:'5px';}.media.__jsx-style-dynamic-selector{height:0;paddingTop:'56.25%';}.avatar.__jsx-style-dynamic-selector{backgroundColor:".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbnNvbS9Eb2N1bWVudHMvZnJvbnRlbmQvbmV4dGpzL3JlZHV4X2FwcC9jb21wb25lbnRzL3NoYXJlZC9Ib3N0ZWxDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFPUSxBQUVhLEFBSW9DLFNBSHpCLG9CQUN2QixnQkFHQSw0Q0FQQSIsImZpbGUiOiIvaG9tZS9yYW5zb20vRG9jdW1lbnRzL2Zyb250ZW5kL25leHRqcy9yZWR1eF9hcHAvY29tcG9uZW50cy9zaGFyZWQvSG9zdGVsQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0Jztcbi8vY29yZS1jb21wb25lbnRzXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vL3RoaXJkLXBhcnR5XG5pbXBvcnQge0lvTWRTaGFyZX0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHtDYXJkLENhcmRIZWFkZXIsQ2FyZE1lZGlhLENhcmRDb250ZW50LEF2YXRhcixDYXJkQWN0aW9ucyxtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge3JlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcbi8vY29tcG9uZW50c1xuaW1wb3J0IE1vZGFsU2hhcmUgZnJvbSAnLi9Nb2RhbFNoYXJlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDp7XG4gICAgICAgIGJhY2tncm91bmQ6J3JnYigxOSwzOCw1NyknLFxuICAgICAgICBjb2xvcjonI2ZmZicsXG4gICAgICAgIG1hcmdpblRvcDonMnB4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOic1cHgnXG4gICAgfSxcbiAgICBtZWRpYTp7XG4gICAgICAgIGhlaWdodDowLFxuICAgICAgICBwYWRkaW5nVG9wOic1Ni4yNSUnXG4gICAgfSxcbiAgICBhdmF0YXI6e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6cmVkWzUwMF1cbiAgICB9LFxuICAgIGltZzp7XG4gICAgICAgIHdpZHRoOicxMDBweCcsXG4gICAgICAgIGhlaWdodDonMTAwJSdcbiAgICB9XG59KTtcblxuY29uc3QgSG9zdGVsQ2FyZCA9ICh7ZGF0YX0pID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIGxldCB0aXRsZSA9IGAke2RhdGFbJ25hbWUnXX0gaG9zdGVsIGluIGFsbGNvbXJhZGVzIHBsYXRmb3JtYDtcbiAgICBsZXQgbWVzc2FnZSAgPSBgc2hhcmUgJHtkYXRhWyduYW1lJ119IGhvc3RlbCB2aWEgb3RoZXIgcGxhdGZvcm1zYDtcbiAgICBsZXQgbGluayA9IGBodHRwczovL2FsbGNvbXJhZGVzLmNvLmtlL3BsYXRmb3JtL2hvc3RlbHMvJHtkYXRhWydfaWQnXX1gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICA8Q2FyZEhlYWRlciBcbiAgICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJob3N0ZWxcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEubmFtZVswXS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgL2hvc3RlbHMvJHtkYXRhWydzbHVnJ119YH0+XG4gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZC1uYW1lXCI+e2RhdGFbJ25hbWUnXX08L2E+XG4gICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgc3ViaGVhZGVyPXtcbiAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZC1zdWJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubG9jYXRpb259XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkTWVkaWEgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucHJvZmlsZXNbMF19IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSAvPlxuICAgICAgICAgICAgPC9DYXJkTWVkaWE+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvc3RlbF9jYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhvc3RlbF9jYXJkLWRlc2NyaXB0aW9uXCI+e2RhdGEudHlwZX0uPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SW9NZFNoYXJlIGNsYXNzTmFtZT1cImhvc3RlbF9jYXJkX2ljb24tLWxpbmtcIiBvbkNsaWNrPXt0b2dnbGV9Lz5cbiAgICAgICAgICAgIDxNb2RhbFNoYXJlIHRpdGxlPXt0aXRsZX0gdG9nZ2xlPXt0b2dnbGV9IGlzT3Blbj17aXNPcGVufSBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPXtsaW5rfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcgbW9yZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290e1xuICAgICAgICAgICAgYmFja2dyb3VuZDoncmdiKDE5LDM4LDU3KScgIWltcG9ydGFudCxcbiAgICAgICAgICAgIGNvbG9yOicjZmZmJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDonMnB4JyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTonNXB4J1xuICAgICAgICB9O1xuICAgICAgICAubWVkaWF7XG4gICAgICAgICAgICBoZWlnaHQ6MDtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6JzU2LjI1JSc7XG4gICAgICAgIH07XG4gICAgICAgIC5hdmF0YXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JHtyZWRbNTAwXX07XG4gICAgICAgIH07XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3RlbENhcmQ7Il19 */\n/*@ sourceURL=/home/ransom/Documents/frontend/nextjs/redux_app/components/shared/HostelCard.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (HostelCard);

/***/ })

})
//# sourceMappingURL=index.js.e13a3d81066a10ade0b6.hot-update.js.map