module.exports = function (config) {
	config.set({
		testRunner: 'karma',
		testFramework: 'jasmine',
		karmaConfigFile: 'karma.conf.js',
		mutate: [
			'dist/test/main.js'
		],
		reporter: [
			'html',
			'progress',
			'clear-text',
			'dots',
			'event-recorder'
		],
		eventReporter: { baseDir: 'dist/reports' },
		htmlReporter: {
			baseDir: 'dist/reports/html'
		},
		coverageAnalysis: 'perTest',
		logLevel: 'off',
		timeoutMs: 20000,
		karmaConfig: {
			reporters: [
				'spec', 'coverage'
			]
		}
	});
}