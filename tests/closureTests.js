/*
Closure tests:

These tests are meant to ensure that the closure class can be used just
as a closure within normal JS.
*/

let closure = require('../definitionModules/closure.js');

function testMain(){
    if(!baseCaseEvaluationTest()){
        console.log("test failed.");
        return
    } else if(!oneClosureEvaluatesTheOther()) {
        console.log("test failed.");
        return
    } else {
        console.log("all tests passed");
        return
    }
}

//Closure eval tests

function baseCaseEvaluationTest(){
    var inst = new closure(null, 0);
    inst.evaluate();

    return 0 == inst.func;
}

function oneClosureEvaluatesTheOther(){
    var numbuff = new closure(null, 4, "numbuff");

    var mainFunc = new closure(null, numbuff, "mainFunc");

    return mainFunc.evaluate() === numbuff;
}

function passingArguments(){
    var numbuff = new closure(null, 4, "numbuff");

    var helperFunc = new closure(null, null, "helper");

    var mainfunc = new closure(null, );
}

testMain();