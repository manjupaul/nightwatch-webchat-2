const headless = process.env.IS_HEADLESS

module.exports = {
  "src_folders" : ["./tests/e2e/nightwatch"],

  "disable_colors": false,
  "test_workers" : false,

  "webdriver": {
      "start_process": true,
      "host": "localhost",
      "port": 4444
  },

  "test_settings" : {
    "default" : {
        "silent": true,
        "disable_colors": false,
        "screenshots": {
            "enabled": false,
            "on_failure": true,
            "on_error": false,
            "path": "tests/output/screenshots"
          },
        "request_timeout_options": {
            "timeout": 60000,
            "retry_attempts": 5
        }
    },

    "firefox" : {
        "selenium": {
            "start_process": true,
            "server_path": "node_modules/selenium-server/lib/runner/selenium-server-standalone-3.141.59.jar",
            "host": "127.0.0.1",
            "port": 4444,
            "cli_args": {
              "webdriver.gecko.driver": "node_modules/.bin/geckodriver"
            }
          },
        "desiredCapabilities" : {
            "browserName" : "firefox",
            "acceptInsecureCerts" : true,
            "moz:firefoxOptions": {
                "args": [
                    "-headless"
                ]
            }
        }
    },

    "chrome" : {
        "webdriver": {
            "start_process": true,
            "port": 9515,
            "default_path_prefix": "",
            "server_path": "./node_modules/.bin/chromedriver",
            "cli_args": [
            "--verbose"
            ]
        },
        "desiredCapabilities" : {
            "browserName" : "chrome",
            "chromeOptions": headless ? {"args": ['--headless']} : {}
        }
    },

    
    "mocha" : {
        "src_folders" : ["./tests/e2e/bdd"],
        "webdriver" : {
            "start_process": true,
            "port": 9515,
            "default_path_prefix": "",
            "server_path": "./node_modules/.bin/chromedriver",
            "cli_args": [
            "--verbose"
            ]
        },
        "desiredCapabilities" : {
            "browserName" : "chrome",
            "chromeOptions": {
                "args": [
                    "--headless"
                ]
            }
        },
        "test_runner" : {
            "type" : "mocha"
        }
    }
  }
}