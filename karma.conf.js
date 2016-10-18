'use strict';

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            'flattenArray-test.js'
        ],
        preprocessors: {
            'flattenArray-test.js': ['webpack', 'sourcemap']
        },
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /.js$/,
                    loader: 'babel-loader',
                    include: [__dirname]
                }]
            }
        },
        webpackServer: {
            stats: {
                colors: true
            }
        },
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        reporters: ['progress'],
        captureTimeout: 60000,
        browserNoActivityTimeout: 60000,
        singleRun: true
    });
};
