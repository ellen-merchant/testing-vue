require('jsdom-global')()

global.expect = require('expect')

window.Date = Date //Fixes: TypeError: Super expression must either be null or a function