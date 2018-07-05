class element {
    constructor(pos, manager){
        this.pos = pos;
        this.ctx = manager.ctx;
    }

    draw(){
        return null;
    }

    setAdjacent(elm){
        this.adj = elm;
    }

    getAdjacent(){
        return this.adj;
    }

    setNext(elm){
        this.next = elm;
    }

    getNext(){
        return this.next;
    }
}

class closureElement extends element{
    constructor(pos, manager){
        super(pos, manager);

        this.height = 100;
        this.width = 200;
        this.adj = null;
        this.next = null;
    }

    draw(){
        super.draw();

        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(pos.x, pos.y + height);
        ctx.lineTo(pos.x + width, pos.y + height);
        ctx.lineTo(pos.x + width, pos.y);
        ctx.fill();
    }
}