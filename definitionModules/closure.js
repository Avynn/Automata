/*
Closure definitions module.

The aim of this module is to provide an object that represents a clousre
in memory.  It will require a unique "toString" "method", in order to write it to code
and a probably even more complex "fromString" "Method", This may cause problems in the future
because there is a possibility that the rules for the writing of code in the standard usable
by autmata may cause it to become too restrictive to write to code.
*/


function closure (adjHead, next, func){
    this.adjHead = adjHead;
    this.next = next;
    this.func = func;
}

closure.evaluate = function(args){
    
}

function head(closure){
    return closure;
}

function rest(closure){
    return closure.next;
}



