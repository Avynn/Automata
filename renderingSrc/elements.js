class element {
    /* 
    class description:

    this is a prototype class defining the basic feilds
    and function of an element to be drawn in canvas.
    */

    constructor(pos, manager){
        this.pos = pos;
        this.ctx = manager.ctx;
        this.id = Math.floor((Math.random() * 1000000));
    }

    draw(){
        /*
        (void)->void

        null return from a draw function to define something
        to be called even if an element doesn't have a draw function.
        */
        return null;
    }

    setAdjacent(elm){
        if(this.head == null){
            this.head = elm;
        } else {
            this.setAdjacentInner(elm, this.head);
        }
    }

    setAdjacentInner(elm, head){
        if(head.getNext() ==  null){
            head.setNext(elm);
        } else {
            this.setAdjacentInner(elm, head.getNext());
        }
    }

    getAdjacentHead(){
        return this.adj;
    }

    setNext(elm){
        this.next = elm;
    }

    getNext(){
        return this.next;
    }

    setPos(pos){
        this.pos = pos;
    }
    
    getPos(){
        return this.pos;
    }
}

class elementRef {
    /* 
    Class description:

    This class is a simple container used to hold references
    to nodes on the graph.  These reference objects are constructed
    into a linked list and placed on the this.adj feild.
    */

    constructor(ref){
        this.ref = ref;
        this.next = null;
    }

    getNext(){
        return this.next;
    }

    setNext(next){
        this.next = next;
    }
}

class closureElement extends element{
    /*
    Class description:
    
    This class represents a closure on the screen
    it inherits from the element class and has a special
    draw function.

    TODO: 
    -Add parameter functionality
    -Add run functionality
    -Add "window" to object.
    */

    constructor(pos, manager){
        super(pos, manager);

        this.height = 100;
        this.width = 200;
        this.adj = null;
        this.next = null;
    }

    draw(){
        /*
        (void)->void
        DESC: this function defines the 
        style of a closure element. 
        */
        super.draw();

        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
        this.ctx.lineTo(pos.x, pos.y + height);
        this.ctx.lineTo(pos.x + width, pos.y + height);
        this.ctx.lineTo(pos.x + width, pos.y);
        this.ctx.fill();
    }
}
