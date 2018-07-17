var Application = require('spectron').Application;
var assert = require('assert');
var electronPath = require('electron');
var path = require('path');
// var elements = require('../renderingSrc/elements');
// var managers = require('../renderingSrc/rendererMain');

describe('Application launch', function () {
    this.timeout(10000);

    beforeEach(function() {
        /*
        BeforeEach hook desc:
        
        this function gives us our application object that we can test with.
        */

        this.app = new Application({
            path: electronPath,
            args: [path.join(__dirname, '..')]
        });
        return this.app.start();
    });

    afterEach(function(){
        /*
        afterEach hook desc:
        
        this function teears down our application object when we've completed a test.
        */
        if(this.app && this.app.isRunning()){
            return this.app.stop();
        }
    });

    it('shows an initial window', function(){
        return this.app.client.getWindowCount().then(function (count) {
            assert.equal(count, 2);
        });
    });
})