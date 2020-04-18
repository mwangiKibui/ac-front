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
    src: data.profile[0],
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
  }, ".root.__jsx-style-dynamic-selector{background:'rgb(19,38,57)' !important, color:'#fff', marginTop:'2px', marginBottom:'5px';}.media.__jsx-style-dynamic-selector{height:0;paddingTop:'56.25%';}.avatar.__jsx-style-dynamic-selector{backgroundColor:".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbnNvbS9Eb2N1bWVudHMvZnJvbnRlbmQvbmV4dGpzL3JlZHV4X2FwcC9jb21wb25lbnRzL3NoYXJlZC9Ib3N0ZWxDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFPUSxBQUVhLEFBSW9DLFNBSHpCLG9CQUN2QixnQkFHQSw0Q0FQQSIsImZpbGUiOiIvaG9tZS9yYW5zb20vRG9jdW1lbnRzL2Zyb250ZW5kL25leHRqcy9yZWR1eF9hcHAvY29tcG9uZW50cy9zaGFyZWQvSG9zdGVsQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0Jztcbi8vY29yZS1jb21wb25lbnRzXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vL3RoaXJkLXBhcnR5XG5pbXBvcnQge0lvTWRTaGFyZX0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHtDYXJkLENhcmRIZWFkZXIsQ2FyZE1lZGlhLENhcmRDb250ZW50LEF2YXRhcixDYXJkQWN0aW9ucyxtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge3JlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcbi8vY29tcG9uZW50c1xuaW1wb3J0IE1vZGFsU2hhcmUgZnJvbSAnLi9Nb2RhbFNoYXJlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDp7XG4gICAgICAgIGJhY2tncm91bmQ6J3JnYigxOSwzOCw1NyknLFxuICAgICAgICBjb2xvcjonI2ZmZicsXG4gICAgICAgIG1hcmdpblRvcDonMnB4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOic1cHgnXG4gICAgfSxcbiAgICBtZWRpYTp7XG4gICAgICAgIGhlaWdodDowLFxuICAgICAgICBwYWRkaW5nVG9wOic1Ni4yNSUnXG4gICAgfSxcbiAgICBhdmF0YXI6e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6cmVkWzUwMF1cbiAgICB9LFxuICAgIGltZzp7XG4gICAgICAgIHdpZHRoOicxMDAlJyxcbiAgICAgICAgaGVpZ2h0OicxMDAlJ1xuICAgIH1cbn0pO1xuXG5jb25zdCBIb3N0ZWxDYXJkID0gKHtkYXRhfSkgPT4ge1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgbGV0IHRpdGxlID0gYCR7ZGF0YVsnbmFtZSddfSBob3N0ZWwgaW4gYWxsY29tcmFkZXMgcGxhdGZvcm1gO1xuICAgIGxldCBtZXNzYWdlICA9IGBzaGFyZSAke2RhdGFbJ25hbWUnXX0gaG9zdGVsIHZpYSBvdGhlciBwbGF0Zm9ybXNgO1xuICAgIGxldCBsaW5rID0gYGh0dHBzOi8vYWxsY29tcmFkZXMuY28ua2UvcGxhdGZvcm0vaG9zdGVscy8ke2RhdGFbJ19pZCddfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgIDxDYXJkSGVhZGVyIFxuICAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cImhvc3RlbFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lWzBdLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e2AvaG9zdGVscy8ke2RhdGFbJ3NsdWcnXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvc3RlbF9jYXJkLW5hbWVcIj57ZGF0YVsnbmFtZSddfTwvYT5cbiAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBzdWJoZWFkZXI9e1xuICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvc3RlbF9jYXJkLXN1YmhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENhcmRNZWRpYSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5wcm9maWxlWzBdfSBhbHQ9XCJcIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gLz5cbiAgICAgICAgICAgIDwvQ2FyZE1lZGlhPlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZC1kZXNjcmlwdGlvblwiPntkYXRhLnR5cGV9LjwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPElvTWRTaGFyZSBjbGFzc05hbWU9XCJob3N0ZWxfY2FyZF9pY29uLS1saW5rXCIgb25DbGljaz17dG9nZ2xlfS8+XG4gICAgICAgICAgICA8TW9kYWxTaGFyZSB0aXRsZT17dGl0bGV9IHRvZ2dsZT17dG9nZ2xlfSBpc09wZW49e2lzT3Blbn0gbWVzc2FnZT17bWVzc2FnZX0gbGluaz17bGlua30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3IG1vcmVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6J3JnYigxOSwzOCw1NyknICFpbXBvcnRhbnQsXG4gICAgICAgICAgICBjb2xvcjonI2ZmZicsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6JzJweCcsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206JzVweCdcbiAgICAgICAgfTtcbiAgICAgICAgLm1lZGlhe1xuICAgICAgICAgICAgaGVpZ2h0OjA7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOic1Ni4yNSUnO1xuICAgICAgICB9O1xuICAgICAgICAuYXZhdGFye1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiR7cmVkWzUwMF19O1xuICAgICAgICB9O1xuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3N0ZWxDYXJkOyJdfQ== */\n/*@ sourceURL=/home/ransom/Documents/frontend/nextjs/redux_app/components/shared/HostelCard.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (HostelCard);

/***/ })

})
//# sourceMappingURL=index.js.6c42ee474c1fd2380cdc.hot-update.js.map