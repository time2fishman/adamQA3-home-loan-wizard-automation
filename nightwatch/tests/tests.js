const selectors = require('../test_data/selectors')
const data = require('../test_data/data')
const functions = require('../test_data/functions')

module.exports = {

    beforeEach: function(browser) {
        browser.url('http://localhost:3000')
    },
    after: function(browser) {
        browser.end()
    },
    'UI test': browser => {
        functions.uiTestFunc(browser)
    }
}