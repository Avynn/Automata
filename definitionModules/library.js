/*
libaray definition module:

this module is meant to define the object that will hold the closures until execution.  It will act as the
'loader' for the graphs defined by closures.
*/

let AvlTree = require('@tyriar/avl-tree');

function compareNodes(a, b){
    if (a.value < b.value){
        return -1;
    } else if(a.value > b.value) {
        return 1;
    } else {
        return 0;
    }
}

class node{
    constructor(closure){
        this.left = null;
        this.right = null;
        this.closure = closure;
        this.value = closure.name;
    }
}

class library extends AvlTree {
    /*
    Class Description:

    this class describes the basic structure of a program in Behavior.  closures are stored in memory as a tree
    and their graphs are defined by the linkages within the closures themselves.  However their initial referrences
    are stored here.
    */

    constructor(){
        super(compareNodes);
    }
}

module.exports = library;