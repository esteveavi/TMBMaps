exports.config = {

  allScriptsTimeout: 99999,

  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // The location of the selenium standalone server .jar file, relative
  // to the location of this config. If no other method of starting selenium
  // is found, this will default to
  // node_modules/protractor/selenium/selenium-server...
  // seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',

  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  seleniumPort: 4444,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },

  // capabilities: {
  //   browserName: 'phantomjs',
  //   version: '',
  //   platform: 'ANY'
  // },

  // protractor protractor.conf.js --suite routes
  suites: {
    directives: [
      'test/e2e/directives/**/*.js'
    ],
    routes: ['test/e2e/routes/**/*.js'],
    hotkeys: [
      'test/e2e/hotkeys-spec.js'
    ]
  },

  // This can be changed via the command line as:
  // --params.login.user 'ngrocks'
  params: {
    developer: {
      login: {
        user: 'developer',
        password: 'developer123'
      }
    },
    gestio: {
      login: {
        user: 'gestio',
        password: 'gestio123'
      }
    },
    operacio: {
      login: {
        user: 'operacio',
        password: 'operacio123'
      }
    },
    admin: {
      login: {
        user: 'administrador',
        password: 'administrador123'
      }
    }
  },

  baseUrl: 'http://localhost:9000/',

  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true
  }
};
