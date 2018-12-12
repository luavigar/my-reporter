export default function () {
    return {
        noColors: true,
        
        createErrorDecorator () {
            return {
                'span category':       () => '',
                'span step-name':      str => `"${str}"`,
                'span user-agent':     str => this.chalk.gray(str),
                'div screenshot-info': str => str,
                'a screenshot-path':   str => this.chalk.underline(str),
                'code':                str => this.chalk.yellow(str),
                'code step-source':    str => this.chalk.magenta(this.indentString(str, 4)),
                'span code-line':      str => `${str}\n`,
                'span last-code-line': str => str,
                'code api':            str => this.chalk.yellow(str),
                'strong':              str => this.chalk.cyan(str),
                'a':                   str => this.chalk.yellow(`"${str}"`)
            };
        },
		
        reportTaskStart (startTime, userAgents, testCount) {
            this.startTime = startTime;
            this.testCount = testCount;
            this.write(`Running tests in: ${userAgents}`)
                    .newline()
                    .newline();
        },

        reportFixtureStart (name) {
            this.currentFixtureName = name;
        },

        reportTestDone (name, errs) {
            const hasErr = !!errs.length;
            const result = hasErr ? `passed` : `failed`;

            name = `${this.currentFixtureName} - ${name}`;

            const title = `${result} ${name}`;

            this.write(title)
				.newline();
        },

        reportTaskDone (endTime, passed) {
            const durationMs  = endTime - this.startTime;
            const durationStr = this.moment
									.duration(durationMs)
									.format('h[h] mm[m] ss[s]');
            let footer = passed === this.testCount ?
                 `${this.testCount} passed` :
                 `${this.testCount - passed}/${this.testCount} failed`;
			
            footer += `(Duration: ${durationStr})`;

            this.write(footer)
				.newline();
        }
    };
}
