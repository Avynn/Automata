/*
Closure tests:

These tests are meant to ensure that the closure class can be used just
as a closure within normal JS.
*/

let closure = require('../definitionModules/closure.js');
let ops = require('../definitionModules/ops.js');
var assert = require('assert');

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

//Closure eval tests


function oneClosureEvaluatesTheOther(){
    var buff = new ops.numBuff(null, 4);

    var mainFunc = new closure(null, buff, "mainFunc");

    return assertEqual(mainFunc.evaluate(), buff, testCompare);
}

function passingArgumentstoadd(iterations){
    let randOne = (Math.random() * 10000) - 5000;
    let randTwo = (Math.random() * 10000) - 5000; 
    let numOne = new ops.numBuff(null, randOne);
    let numTwo = new ops.numBuff(null, randTwo)
    let func = new ops.add();
    func.addArg(numOne, 0);
    func.addArg(numTwo, 1);

    var mainfunc = new closure(null, func, "main");
    
    if(iterations == 0){
        return assertEqual(mainfunc.evaluate(), new ops.numBuff(null, (randOne + randTwo)), testCompare);
    } else {
        return assertEqual(mainfunc.evaluate(), new ops.numBuff(null, (randOne + randTwo)), testCompare) && passingArgumentstoadd(iterations - 1);
    }   
}

function passingArgumentstoMult(iterations){
    let randOne = (Math.random() * 10000) - 5000;
    let randTwo = (Math.random() * 10000) - 5000; 
    let numOne = new ops.numBuff(null, randOne);
    let numTwo = new ops.numBuff(null, randTwo)
    let func = new ops.multiply();
    func.addArg(numOne, 0);
    func.addArg(numTwo, 1);

    var mainfunc = new closure(null, func, "main");
    
    if(iterations == 0){
        return assertEqual(mainfunc.evaluate(), new ops.numBuff(null, (randOne * randTwo)), testCompare);
    } else {
        return assertEqual(mainfunc.evaluate(), new ops.numBuff(null, (randOne * randTwo)), testCompare) && passingArgumentstoMult(iterations - 1);
    }   
}


describe('closure', function (){
    describe('one closure evaluatates the other', function(){
        it("should return true as part of the assert equal func", function(){
            assert.equal(oneClosureEvaluatesTheOther(), true);
        });
    });
    describe('passingArgumentstoadd', function(){
        it('should return true as part of the assert equal func', function(){
            assert.equal(passingArgumentstoadd(100), true);
        });
    });
});