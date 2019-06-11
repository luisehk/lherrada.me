webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./tools/blog.js":
/*!***********************!*\
  !*** ./tools/blog.js ***!
  \***********************/
/*! exports provided: loadPosts, truncateDescription, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPosts", function() { return loadPosts; });
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
    }); // sort them by most recent

    data.sort(function (a, b) {
      return b.document.data.id - a.document.data.id;
    });
    return data;
  }(loadedFiles);

  return {
    posts: posts
  };
};
var truncateDescription = function truncateDescription(description) {
  var limit = 150;
  description = description.substring(0, limit);
  description = description.length == limit ? description.trim() + '...' : description;
  return description;
};
/* harmony default export */ __webpack_exports__["default"] = (loadPosts);

/***/ })

})
//# sourceMappingURL=blog.js.66c6a359c98818dec28e.hot-update.js.map