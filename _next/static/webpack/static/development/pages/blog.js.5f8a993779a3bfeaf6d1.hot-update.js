webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./tools/blog.js":
/*!***********************!*\
  !*** ./tools/blog.js ***!
  \***********************/
/*! exports provided: truncateDescription, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateDescription", function() { return truncateDescription; });
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);


var loadPosts = function loadPosts() {
  var loadedFiles = __webpack_require__("./posts sync recursive \\.md$"); // process them with gray-matter


  var posts = function (ctx) {
    var keys = ctx.keys();
    var values = keys.map(ctx);
    var data = keys.map(function (key, index) {
      // gather the filename and turn it into a slug
      var slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.'); // value is an object the file content

      var value = values[index]; // parse the document and its meta data

      var document = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(value.default); // make the data available as props

      return {
        document: document,
        slug: slug
      };
    });
    return data;
  }(loadedFiles);

  return {
    posts: posts
  };
};

var truncateDescription = function truncateDescription(description) {
  description = description.substring(0, 177);
  description = description.length == 177 ? description + '...' : description;
  return description;
};
/* harmony default export */ __webpack_exports__["default"] = (loadPosts);

/***/ })

})
//# sourceMappingURL=blog.js.5f8a993779a3bfeaf6d1.hot-update.js.map