'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function () {
    return {
        noColors: true,

        createErrorDecorator: function createErrorDecorator() {
            var _this = this;

            return {
                'span category': function spanCategory() {
                    return '';
                },
                'span step-name': function spanStepName(str) {
                    return '"' + str + '"';
                },
                'span user-agent': function spanUserAgent(str) {
                    return _this.chalk.gray(str);
                },
                'div screenshot-info': function divScreenshotInfo(str) {
                    return str;
                },
                'a screenshot-path': function aScreenshotPath(str) {
                    return _this.chalk.underline(str);
                },
                'code': function code(str) {
                    return _this.chalk.yellow(str);
                },
                'code step-source': function codeStepSource(str) {
                    return _this.chalk.magenta(_this.indentString(str, 4));
                },
                'span code-line': function spanCodeLine(str) {
                    return str + '\n';
                },
                'span last-code-line': function spanLastCodeLine(str) {
                    return str;
                },
                'code api': function codeApi(str) {
                    return _this.chalk.yellow(str);
                },
                'strong': function strong(str) {
                    return _this.chalk.cyan(str);
                },
                'a': function a(str) {
                    return _this.chalk.yellow('"' + str + '"');
                }
            };
        },

        reportTaskStart: function reportTaskStart(startTime, userAgents, testCount) {
            this.startTime = startTime;
            this.testCount = testCount;
            this.write('Running tests in: ' + userAgents).newline().newline();
        },

        reportFixtureStart: function reportFixtureStart(name) {
            this.currentFixtureName = name;
        },

        reportTestDone: function reportTestDone(name, errs) {
            var hasErr = !!errs.length;
            var result = hasErr ? 'passed' : 'failed';

            name = this.currentFixtureName + ' - ' + name;

            var title = result + ' ' + name;

            this.write(title).newline();
        },

        reportTaskDone: function reportTaskDone(endTime, passed) {
            var durationMs = endTime - this.startTime;
            var durationStr = this.moment.duration(durationMs).format('h[h] mm[m] ss[s]');
            var footer = passed === this.testCount ? this.testCount + ' passed' : this.testCount - passed + '/' + this.testCount + ' failed';

            footer += '(Duration: ' + durationStr + ')';

            this.write(footer).newline();
        }
    };
};

module.exports = exports['default'];