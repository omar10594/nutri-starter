'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		autoWatchBatchDelay: 300,
		browserNoActivityTimeout: 60000,
		files: [
			'./dist/test/spec.js',
			'./dist/test/main.js',
			'./dist/test/index.js'
		],
		reporters: [
			'spec', 'coverage', 'karma-remap-istanbul'
		],

		preprocessors: {
			'./dist/test/main.js': ['coverage']
		},

		coverageReporter: {
			type: 'html',
			dir: 'dist/test',
			subdir: 'coverageNoRemap'
		},

		remapIstanbulReporter: {
			reports: {
				html: 'dist/test/coverage'
			}
		}
	});
};