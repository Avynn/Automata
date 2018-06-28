/*
Closure definitions module.

The aim of this module is to provide an object that represents a clousre
in memory.  This is the core of the program and defines the behavior of
execution of programs.
*/

//constructor definition

function closure (next, func){
    /*
    (closure next, any func)->obj<closure>

    The next pointer is used to assemble lists
    and the func pointer either points to a primitive
    or another closure.
    */

    this.args = [];
    this.next = next;
    this.func = func;
}

//closure evaluator function and helpers.

closure.evaluate = function(){
    /*
    (closure args)->closure

    This function evaluates all parameters
    and then evaluates the closure
    */

    //TODO: add check that arguments are continuous accross the list.

    if(args[0]){
        let curr = args.pop().evaluate();
        this.args.push(curr);
    } 

    if(!(typeof(this.func) == typeof(closure))){
        this.evaluated = this.func.evaluate()
    }
    
}

closure.addArg = function(closure, pos){
    /*
    (closure closure, int pos)->null

    This function adds an argument reference
    to the closure in position pos
    */

    this.args[pos] = closure;
}


//primitives 



//Utitlity/debugging functions bandaids for now


closure.setNext = function(closure){
    this.next = closure;
}

function head(closure){
    return closure;
}

function rest(closure){
    return closure.adjHead;
}



