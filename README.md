# testcafe-reporter-my-reporter
[![Build Status](https://travis-ci.org/luavigar/testcafe-reporter-my-reporter.svg)](https://travis-ci.org/luavigar/testcafe-reporter-my-reporter)

This is the **my-reporter** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/luavigar/testcafe-reporter-my-reporter/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-my-reporter
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter my-reporter
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('my-reporter') // <-
    .run();
```

## Author
 (https://github.com/luavigar/my-reporter)
