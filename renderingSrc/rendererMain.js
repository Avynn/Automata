// const ClosureElm = require("elements.js");

function graphAccessException() {
    /*
    Exception description:

    This a simiple exception to be thrown when the window manager asks for 
    an object that does not exist within the graph.
    */

    this.message = "Either negative values were chosen for get element or index is out of range";
}

function TwoVector(x, y){
    /*
    Class Description:
    
    A simple class(more like a structure) 
    representing a vector which can be usefull 
    for plotting transitions of elements
    on the page.
    */

    this.x = x;
    this.y = y;
}

function addTwoVectors(vec1, vec2){
    /*
    (TwoVector vec1, TwoVector vec2)->TwoVector
    
    This function takes in two vectors and adds them
    component-wise and returning a new vector which is the
    component-wise sum.
    */

    return new TwoVector((vec1.x + vec2.x),(vec1.y + vec2.y));
}


class windowManager {
    /*
    Class Description:

    This is a prototype class which is a graph representing the 
    objects being displayed in any given window.  It handles
    drawing, moving, and any other function involving two
    objects interacting with each other on the graph.
    */


    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.head = null;
    }

    getElementById(id, head){
        if(head ==  null){
            throw new graphAccessException();
        } else if(head.id == id){
            return head;
        } else {
            return this.getElementById(id, head.getNext());
        }
    }

    getElementByIndex(index, head){
        if(head == null){
            throw new graphAccessException();
        } else if(index == 0){
            return head;
        } else {
            return this.getElementByIndex((index - 1), head.getNext());
        }
    }

    displaceElement(xyVector, element){
        element.setPos(addTwoVectors(xyVector, element.getPos));
    }

    drawAll(){
        if(this.head == null){
            return;
        } else {
            this.drawAllInner(head);
        }    
    }

    drawAllInner(head){
        if(head.getNext() == null){
            head.draw();
        } else {
            head.draw();
            this.drawAllInner(head.getNext());
        }
    }

    addNewElement(elm){
        if(this.head == null){
            this.head = elm;
        } else {
            this.addNewElementInner(elm, this.head);
        }
    }

    addNewElementInner(elm, head){
        if(head.getNext() == null){
            head.setNext(elm);
        } else {
            addNewElementInner(elm, head.getNext());
        }

    }
}

function init(){
    console.log("hello!");
}

window.onload = init;