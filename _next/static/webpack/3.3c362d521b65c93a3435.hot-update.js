webpackHotUpdate(3,{

/***/ "./posts/03-sane-cicd-setup-python.md":
/*!********************************************!*\
  !*** ./posts/03-sane-cicd-setup-python.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nid: 3\ntitle: \"A sane CI/CD setup for Python\"\nthumbnail: /static/img/hack-capital.jpg\ndate: June 14, 2019\nlength: 5 min read\ncategory: devops\ndescription: \"This is a quick guide on how to setup a sane CI/CD pipeline for your Python project using Gitlab CI and Docker, so you can spend your time on developing new features instead of stressing about fixing errors, merge conflicts and broken deployments.\"\n---\nWhen you're working in a real project with a real team, it's very important to have a development workflow that allows you to spend time developing actual features instead of constantly fixing broken releases. This is article is a quick guide on how to setup a CI/CD pipeline for your Python project using Gitlab CI.\n\n## Continuous Integration\nContinuous Integration is the practice of integrating the work of a team of developers into a shared repository as frequently as possible. The goal is to detect and fix errors fast instead of waiting for things to pile up. When you're integrating code frequently (and by frequently I mean daily), you're basically de-risking your releases because of a very simple principle: less code to integrate == less things that can go wrong.\n\nThe key practices to do CI successfully are:\n* Integrate small and atomic branches into a shared repository\n* Before integrating, the entire application should be tested automatically\n* Everytime a branch is integrated, it should be built automatically\n* When the release is built, it should deploy automatically to a staging server\n\nIn other words: you should iterate fast and automate your process.\n\n## Continuous Delivery\nContinuous Delivery on the other hand is the practice of deploying your code to production as frequently as possible, with the goal of reducing the possibilities of something going wrong when releasing new features or bug fixes. Ideally, deployment should be done automatically.\n\nIn other words:\n* CI = merge frequently into master\n* CD = deploy master frequently to production\n\n## Automated testing\nWhen you're adding new code to the repository you **must** add unit or functional tests, this is key for having a sane CI/CD workflow. A lot of beginners think the main benefit of testing is knowing your code works, but the real benefit is that you're making sure if someone breaks your code *in the future* they know about it and fix their code (or your test).\n\nThis is why automated testing is so important, because if you're doing frequent integrations you need to make sure you're not breaking anything *every single time*. I won't cover unit and functional testing in this article, but if you want to get started with test-driven development you should start reading [Obey the testing goat!](https://www.obeythetestinggoat.com/).\n\n## Gitlab CI\nIn this guide I use Gitlab CI to execute the pipeline everytime a branch is merged into master, but you're free to use a different service like CircleCI, TravisCI or Codeship.\n\nThink about a CI/CD pipeline as a set of jobs or commands that we execute everytime a new branch is being merged into master. In this guide we are running five jobs in the following order:\n1. flake8\n2. radon\n3. bandit\n4. our test suite\n5. deploy to staging\n\n\n```\nimage: python:3.6\n\nservices:\n  - postgres:9.6\n  - redis:3.2\n\nvariables:\n  PIP_CACHE_DIR: \"$CI_PROJECT_DIR/.cache/pip\"\n  POSTGRES_DB: publicomex\n\ncache:\n  untracked: true\n  key: \"test\"\n  paths:\n    - .cache/pip\n    - venv/\n\nbefore_script:\n  - python --version\n  - pip install virtualenv\n  - virtualenv venv\n  - source venv/bin/activate\n  - pip install -r docker/python/requirements.txt\n\nstages:\n  - pep8\n  - radon\n  - bandit\n  - test\n\npep8:\n  stage: pep8\n  artifacts:\n    paths:\n      - .cache/pip\n      - venv\n  script:\n    - flake8 --exclude='.git,venv,*migrations*,webapps/canvas,static/lib' .\n\nradon:\n  stage: radon\n  artifacts:\n    paths:\n      - .cache/pip\n      - venv\n  script:\n    - radon cc -s -a --ignore='venv' .\n    - radon mi -s --ignore='venv' .\n\nbandit:\n  stage: bandit\n  artifacts:\n    paths:\n      - .cache/pip\n      - venv\n  script:\n    - bandit -r --exclude='venv' .\n\ntest:\n  stage: test\n  variables:\n    DATABASE_URL: \"postgresql://postgres:postgres@postgres:5432/$POSTGRES_DB\"\n    DISPLAY: \":99\"\n  artifacts:\n    paths:\n      - .cache/pip\n      - venv/\n  script:\n    - wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -\n    - sh -c 'echo \"deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main\" >> /etc/apt/sources.list.d/google-chrome.list'\n    - apt-get -y update\n    - apt-get install -y google-chrome-stable\n    - apt-get install -yqq unzip\n    - wget -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`/chromedriver_linux64.zip\n    - unzip /tmp/chromedriver.zip chromedriver -d /usr/local/bin/\n    - python manage.py migrate auth\n    - python manage.py migrate sites\n    - python manage.py migrate\n    - python manage.py collectstatic --noinput\n    - coverage run manage.py test -v 2\n    - coverage report\n  coverage: '/TOTAL.+ ([0-9]{1,3}%)/'\n\n```\n\n\n");

/***/ })

})
//# sourceMappingURL=3.3c362d521b65c93a3435.hot-update.js.map