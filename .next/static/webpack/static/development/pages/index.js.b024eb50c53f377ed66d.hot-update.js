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
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ModalShare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalShare */ "./components/shared/ModalShare.js");
var _this = undefined,
    _jsxFileName = "/home/ransom/Documents/frontend/nextjs/redux_app/components/shared/HostelCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //core-components

 //third-party



 //the styles

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
    width: '100%',
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
    className: "hostel_card-root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
    avatar: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      "aria-label": "hostel",
      className: "hostel_card-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 18
      }
    }, data.name[0].toUpperCase()),
    title: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/hostels/".concat(data['slug']),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 18
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 22
      }
    }, data['name'])),
    subheader: __jsx("h5", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-subheader",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, data.location),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
    title: data.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.profiles[0],
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "hostel_card-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, data.type, "."), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdShare"], {
    className: "hostel_card_icon--link",
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx(_ModalShare__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: title,
    toggle: toggle,
    isOpen: isOpen,
    message: message,
    link: link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActions"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2765126541", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]]]]) + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "view more"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2765126541",
    dynamic: [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]],
    __self: _this
  }, ".root.__jsx-style-dynamic-selector{background:'rgb(19,38,57)' !important, color:'#fff', marginTop:'2px', marginBottom:'5px';}.media.__jsx-style-dynamic-selector{height:0;paddingTop:'56.25%';}.avatar.__jsx-style-dynamic-selector{backgroundColor:".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbnNvbS9Eb2N1bWVudHMvZnJvbnRlbmQvbmV4dGpzL3JlZHV4X2FwcC9jb21wb25lbnRzL3NoYXJlZC9Ib3N0ZWxDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGb0IsQUFPUSxBQUVhLEFBSW9DLFNBSHpCLG9CQUN2QixnQkFHQSw0Q0FQQSIsImZpbGUiOiIvaG9tZS9yYW5zb20vRG9jdW1lbnRzL2Zyb250ZW5kL25leHRqcy9yZWR1eF9hcHAvY29tcG9uZW50cy9zaGFyZWQvSG9zdGVsQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0Jztcbi8vY29yZS1jb21wb25lbnRzXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vL3RoaXJkLXBhcnR5XG5pbXBvcnQge0lvTWRTaGFyZX0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHtDYXJkLENhcmRIZWFkZXIsQ2FyZE1lZGlhLENhcmRDb250ZW50LEF2YXRhcixDYXJkQWN0aW9ucyxtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge3JlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcbi8vdGhlIHN0eWxlc1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuLy9jb21wb25lbnRzXG5pbXBvcnQgTW9kYWxTaGFyZSBmcm9tICcuL01vZGFsU2hhcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICByb290OntcbiAgICAgICAgYmFja2dyb3VuZDoncmdiKDE5LDM4LDU3KScsXG4gICAgICAgIGNvbG9yOicjZmZmJyxcbiAgICAgICAgbWFyZ2luVG9wOicycHgnLFxuICAgICAgICBtYXJnaW5Cb3R0b206JzVweCdcbiAgICB9LFxuICAgIG1lZGlhOntcbiAgICAgICAgaGVpZ2h0OjAsXG4gICAgICAgIHBhZGRpbmdUb3A6JzU2LjI1JSdcbiAgICB9LFxuICAgIGF2YXRhcjp7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpyZWRbNTAwXVxuICAgIH0sXG4gICAgaW1nOntcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICBoZWlnaHQ6JzEwMCUnXG4gICAgfVxufSk7XG5cbmNvbnN0IEhvc3RlbENhcmQgPSAoe2RhdGF9KSA9PiB7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcbiAgICBsZXQgdGl0bGUgPSBgJHtkYXRhWyduYW1lJ119IGhvc3RlbCBpbiBhbGxjb21yYWRlcyBwbGF0Zm9ybWA7XG4gICAgbGV0IG1lc3NhZ2UgID0gYHNoYXJlICR7ZGF0YVsnbmFtZSddfSBob3N0ZWwgdmlhIG90aGVyIHBsYXRmb3Jtc2A7XG4gICAgbGV0IGxpbmsgPSBgaHR0cHM6Ly9hbGxjb21yYWRlcy5jby5rZS9wbGF0Zm9ybS9ob3N0ZWxzLyR7ZGF0YVsnX2lkJ119YDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImhvc3RlbF9jYXJkLXJvb3RcIj5cbiAgICAgICAgICAgPENhcmRIZWFkZXIgXG4gICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwiaG9zdGVsXCIgY2xhc3NOYW1lPVwiaG9zdGVsX2NhcmQtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkYXRhLm5hbWVbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17YC9ob3N0ZWxzLyR7ZGF0YVsnc2x1ZyddfWB9PlxuICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9zdGVsX2NhcmQtbmFtZVwiPntkYXRhWyduYW1lJ119PC9hPlxuICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHN1YmhlYWRlcj17XG4gICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9zdGVsX2NhcmQtc3ViaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2FyZE1lZGlhICB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5wcm9maWxlc1swXX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaG9zdGVsX2NhcmQtaW1nXCIgLz5cbiAgICAgICAgICAgIDwvQ2FyZE1lZGlhPlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZC1kZXNjcmlwdGlvblwiPntkYXRhLnR5cGV9LjwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPElvTWRTaGFyZSBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZF9pY29uLS1saW5rXCIgb25DbGljaz17dG9nZ2xlfS8+XG4gICAgICAgICAgICA8TW9kYWxTaGFyZSB0aXRsZT17dGl0bGV9IHRvZ2dsZT17dG9nZ2xlfSBpc09wZW49e2lzT3Blbn0gbWVzc2FnZT17bWVzc2FnZX0gbGluaz17bGlua30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3IG1vcmVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6J3JnYigxOSwzOCw1NyknICFpbXBvcnRhbnQsXG4gICAgICAgICAgICBjb2xvcjonI2ZmZicsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6JzJweCcsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206JzVweCdcbiAgICAgICAgfTtcbiAgICAgICAgLm1lZGlhe1xuICAgICAgICAgICAgaGVpZ2h0OjA7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOic1Ni4yNSUnO1xuICAgICAgICB9O1xuICAgICAgICAuYXZhdGFye1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiR7cmVkWzUwMF19O1xuICAgICAgICB9O1xuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0ZWxDYXJkOyJdfQ== */\n/*@ sourceURL=/home/ransom/Documents/frontend/nextjs/redux_app/components/shared/HostelCard.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (HostelCard);

/***/ })

})
//# sourceMappingURL=index.js.b024eb50c53f377ed66d.hot-update.js.map