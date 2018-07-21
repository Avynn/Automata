/*
Closure definitions module.

The aim of this module is to provide an object that represents a clousre
in memory.  This is the core of the program and defines the behavior of
execution of programs.
*/

let closureRef = class {
    constructor(ref, name){
        this.ref = ref;
        this.name = name;
        this.next = null;
        this.args = null;
        this.adjacent = null;
    }

    eval(){
        this.ref = this.ref.evaluate(this.args);
        this.name = this.ref.getName();
    }

    getRef(){
        return this.ref;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getNext(){
        return this.next;
    }

    setNext(next){
        this.next = next;
    }
}


let closure = class {
    constructor(next, func, name){
    /*
    (closure next, any func)->obj<closure>

    The next pointer is used to assemble lists
    and the func pointer either points to a primitive
    or another closure.
    */


    this.next = next;
    this.func = func;
    this.name = name;
    }

    evaluate(args){
        /*
        (closure args)->closure
    
        This function evaluates all parameters
        and then evaluates the closure
        */

        var args;
    
        if(typeof(args) != typeof(null)){
            args = this.evaluateArgs(args);
        }
    
        if(this.name != "buffer"){
            return this.func.evaluate();
        } else {
            return this;
        }
    }

    evaluateArgs(head){
        if(head != null){
            var newHead = new closureRef(head.getRef().evaluate(), null);
            newHead.setName(newHead.getRef().getName())
            newHead.setNext(this.evaluateArgs(head.getNext()));
            return newHead; 
        } else {
            return;
        }
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getNext(){
        return this.next;
    }

    setNext(next){
        this.next = next;         
    }
}


//Module exports
module.exports = closure;