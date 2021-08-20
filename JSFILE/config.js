"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var reporter = require('chercher-tech-jasmine-reporter');
exports.config = {
    directConnect: true,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'args': ['incognito', '--start-maximized'],
            //'args': [ "--headless","--disable-gpu", "--window-size=800,600" ]
        },
    },
    // specs:['./spec/POM/signin.js'],
    //  specs:['./spec/POM/connection.js'],
    specs: ['./spec/POM/applicationcreation.js'],
    // specs:['./spec/POM/ConnectionRDBMS.js'],
    //  suites:
    //   {
    //     specs: ['./spec/POM/signin.js','./spec/POM/connection.js','./spec/POM/applicationcreation.js'],
    //   },
    onPrepare: function () {
        var ChercherTechJasmineReporter = reporter.ChercherTechJasmineReporter;
        jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
            screenshotOnFail: true,
            showSkipped: false,
            browser: protractor_1.browser,
            showLineChart: true
            // browser.manage().window().setSize(1600, 1000);
        }));
    },
    onComplete: function () {
        reporter.write_consolidated();
    },
    afterLaunch: function () {
        return new Promise(function (resolve) {
            reporter.processResults();
            return 0;
        });
    }
};
