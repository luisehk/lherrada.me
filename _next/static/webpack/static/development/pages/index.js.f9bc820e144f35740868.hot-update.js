webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/media/luis/cf73f6eb-8c2e-4bf8-b1b6-fbfd06c9ea91/Projects/lherrada.me/components/sidebar.js";


var style = {
  container: {
    position: 'fixed',
    height: '100%',
    width: '200px',
    top: 0,
    left: 0,
    zIndex: 1,
    overflowX: 'hidden',
    paddingTop: '36px',
    paddingLeft: '18px',
    paddingRight: '18px',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    backgroundColor: '#393B5B',
    color: '#FFFFFF'
  },
  profile: {
    container: {
      marginBottom: '48px'
    },
    pic: {
      width: '100px',
      height: '100px',
      borderRadius: '50%'
    },
    name: {
      marginTop: '18px',
      fontWeight: 900,
      fontSize: '28px'
    },
    bio: {
      fontSize: '18px'
    }
  },
  links: {
    list: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      fontSize: '20px'
    },
    item: {
      marginBottom: '18px'
    },
    link: {
      color: '#FFFFFF',
      textDecoration: 'none'
    }
  }
};
var links = [{
  name: 'Blog',
  href: '/'
}, {
  name: 'Work',
  href: '/'
}, {
  name: 'About',
  href: '/about'
}];

var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style.profile.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: style.profile.pic,
    src: "/static/img/profile.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: style.profile.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Luis Herrada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: style.profile.bio,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "I\u2019m a Software Engineer with a focus on digital products.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: style.links.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, links.map(function (link, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: style.links.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      style: style.links.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, link.name)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.f9bc820e144f35740868.hot-update.js.map