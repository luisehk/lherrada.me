---
id: 3
title: "A sane CI/CD setup for Python"
thumbnail: /static/img/hack-capital.jpg
date: June 14, 2019
length: 5 min read
category: devops
description: "This is a quick guide on how to setup a sane CI/CD pipeline for your Python project using Gitlab CI and Docker, so you can spend your time on developing new features instead of stressing about fixing errors, merge conflicts and broken deployments."
---
When you're working in a real project with a real team, it's very important to have a development workflow that allows you to spend time developing actual features instead of constantly fixing broken releases. This is article is a quick guide on how to setup a CI/CD pipeline for your Python project using Gitlab CI.

## Continuous Integration
Continuous Integration is the practice of integrating the work of a team of developers into a shared repository as frequently as possible. The goal is to detect and fix errors fast instead of waiting for things to pile up. When you're integrating code frequently (and by frequently I mean daily), you're basically de-risking your releases because of a very simple principle: less code to integrate == less things that can go wrong.

The key practices to do CI successfully are:
* Integrate small and atomic branches into a shared repository
* Before integrating, the entire application should be tested automatically
* Everytime a branch is integrated, it should be built automatically
* When the release is built, it should deploy automatically to a staging server

In other words: you should iterate fast and automate your process.

## Continuous Delivery
Continuous Delivery on the other hand is the practice of deploying your code to production as frequently as possible, with the goal of reducing the possibilities of something going wrong when releasing new features or bug fixes. Ideally, deployment should be done automatically.

In other words:
* CI = merge frequently into master
* CD = deploy master frequently to production

## Automated testing
When you're adding new code to the repository you **must** add unit or functional tests, this is key for having a sane CI/CD workflow. A lot of beginners think the main benefit of testing is knowing your code works, but the real benefit is that you're making sure if someone breaks your code *in the future* they know about it and fix their code (or your test).

This is why automated testing is so important, because if you're doing frequent integrations you need to make sure you're not breaking anything *every single time*. I won't cover unit and functional testing in this article, but if you want to get started with test-driven development you should start reading [Obey the testing goat!](https://www.obeythetestinggoat.com/).

## Gitlab CI
In this guide I use Gitlab CI to execute the pipeline everytime a branch is merged into master, but you're free to use a different service like CircleCI, TravisCI or Codeship.

```
image: python:3.6

services:
  - postgres:9.6
  - redis:3.2

variables:
  PIP_CACHE_DIR: "$CI_PROJECT_DIR/.cache/pip"
  POSTGRES_DB: publicomex

cache:
  untracked: true
  key: "test"
  paths:
    - .cache/pip
    - venv/

before_script:
  - python --version
  - pip install virtualenv
  - virtualenv venv
  - source venv/bin/activate
  - pip install -r docker/python/requirements.txt

stages:
  - pep8
  - radon
  - bandit
  - test

pep8:
  stage: pep8
  artifacts:
    paths:
      - .cache/pip
      - venv
  script:
    - flake8 --exclude='.git,venv,*migrations*,webapps/canvas,static/lib' .

radon:
  stage: radon
  artifacts:
    paths:
      - .cache/pip
      - venv
  script:
    - radon cc -s -a --ignore='venv' .
    - radon mi -s --ignore='venv' .

bandit:
  stage: bandit
  artifacts:
    paths:
      - .cache/pip
      - venv
  script:
    - bandit -r --exclude='venv' .

test:
  stage: test
  variables:
    DATABASE_URL: "postgresql://postgres:postgres@postgres:5432/$POSTGRES_DB"
    DISPLAY: ":99"
  artifacts:
    paths:
      - .cache/pip
      - venv/
  script:
    - wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
    - sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
    - apt-get -y update
    - apt-get install -y google-chrome-stable
    - apt-get install -yqq unzip
    - wget -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`/chromedriver_linux64.zip
    - unzip /tmp/chromedriver.zip chromedriver -d /usr/local/bin/
    - python manage.py migrate auth
    - python manage.py migrate sites
    - python manage.py migrate
    - python manage.py collectstatic --noinput
    - coverage run manage.py test -v 2
    - coverage report
  coverage: '/TOTAL.+ ([0-9]{1,3}%)/'

```


