/*
Closure tests:

These tests are meant to ensure that the closure class can be used just
as a closure within normal JS.
*/

let closure = require('../definitionModules/closure.js');
let ops = require('../definitionModules/ops.js');

function testException(value, expected, actual){
    this.value = value;
    this.expected = expected;
    this.actual = actual;
    this.toString = function(){
        return this.value + "\n" +"expected:" + this.expected.toString() + "\n actual:" + this.actual.toString();
    }
}

function assertTrue(expr){
    let result = expr();

    if(result){
        return true;
    } else {
        throw new testException("Assertion failed", "true", "expression resolved to false");
    }
}

function assertEqual(arg1, arg2, compare){
    let cmp  = compare(arg1, arg2);

    if(cmp == 0){
        return true;
    } else {
        throw new testException("Assertion failed", 0, cmp);
    }
}

function testCompare(closOne, closTwo){
    return closOne.func - closTwo.func;
}

function testMain(){
    if(!oneClosureEvaluatesTheOther()) {
        console.log("test failed.");
        return
    } else if(!passingArgumentstoadd(0)){
        console.log("test failed");
    } else {
        console.log("all tests passed");
        return
    }
}

//Closure eval tests


function oneClosureEvaluatesTheOther(){
    var buff = new ops.numBuff(null, 4);

    var mainFunc = new closure(null, buff, "mainFunc");

    return assertEqual(mainFunc.evaluate(), buff, testCompare);
}

function passingArgumentstoadd(iterations){
    let randOne = Math.floor(Math.random() * 10000) - 5000;
    let randTwo = Math.floor(Math.random() * 10000) - 5000; 
    let numOne = new ops.numBuff(null, randOne);
    let numTwo = new ops.numBuff(null, randTwo)
    let func = new ops.add();
    func.addArg(numOne, 0);
    func.addArg(numTwo, 1);

    var mainfunc = new closure(null, func, "main");
    
    if(iterations == 0){
        return assertEqual(mainfunc.evaluate(), new ops.numBuff(null, (randOne + randTwo)), testCompare);
    } else {
        return assertEqual(mainfunc.evaluate(), new ops.numBuff(null, (randOne + randTwo)), testCompare); // && passingArgumentstoadd(iterations - 1);
    }   
}

testMain();