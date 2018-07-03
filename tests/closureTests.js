/*
Closure tests:

These tests are meant to ensure that the closure class can be used just
as a closure within normal JS.
*/

let closure = require('../definitionModules/closure.js');

function testMain(){
    if(!baseCaseEvaluationTest()){
        console.log("test failed.");
    };
}

//Closure eval tests

function baseCaseEvaluationTest(){
    var inst = new closure(null, 0);
    inst.evaluate();

    return 0 == inst.func;
}

testMain();