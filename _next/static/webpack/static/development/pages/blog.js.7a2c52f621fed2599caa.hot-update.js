webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./posts/03-sane-cicd-setup-python.md":
/*!********************************************!*\
  !*** ./posts/03-sane-cicd-setup-python.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nid: 3\ntitle: \"A sane CI/CD setup for Python\"\nthumbnail: /static/img/hack-capital.jpg\ndate: June 14, 2019\nlength: 5 min read\ncategory: devops\ndescription: \"This is a quick guide on how to setup a sane CI/CD pipeline for your Python project using Gitlab CI and Docker, so you can spend your time on developing new features instead of stressing about fixing errors, merge conflicts and broken deployments.\"\n---\nWhen you're working in a real project with a real team, it's very important to have a development workflow where you spend more time developing actual features instead of constantly fixing broken releases. This is article is a quick guide on how to setup a CI/CD pipeline for your Python project using Gitlab CI and Docker.\n\n## Continuous Integration\nContinuous Integration is the practice of integrating the work of a team of developers into a shared repository as frequently as possible. The goal is to detect and fix errors fast instead of waiting for things to pile up. When you're integrating code frequently (and by frequently I mean daily), you're basically de-risking your releases because of a very simple principle: less code to integrate == less things that can go wrong.\n\nThe key practices to do CI successfully are:\n* Integrate small and atomic branches into a shared repository\n* Before integrating, the entire application should be tested automatically\n* Everytime a branch is integrated, it should be built automatically\n* When the release is built, it should deploy automatically to a staging server\n\nIn other words: you should iterate fast and automate your process.\n\n## Continuous Delivery\nContinuous Delivery on the other hand is the practice of deploying your code to production as frequently as possible, with the goal of reducing the possibilities of something going wrong when releasing new features or bug fixes. Ideally, deployment should be done automatically.\n\nIn other words:\n* CI = merge frequently into master\n* CD = deploy master frequently to production\n\n\n\n\n");

/***/ })

})
//# sourceMappingURL=blog.js.7a2c52f621fed2599caa.hot-update.js.map