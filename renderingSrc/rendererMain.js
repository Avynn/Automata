const ClosureElm = require("ClosureElm.js");

function graphAccessException() {
    this.message = "Either negative values were chosen for get element or index is out of range";
}

let windowManager = class {
    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.head = null;
    }

    getElement(row, col, head){
        if(row < 0 || col < 0 || head == null){
            throw new graphAccessException();
        } else if(row == 0 && col ==0){
            return head;
        } else if(col == 0) {
            return this.getElement(row - 1, 0, head.getAdjacent());
        } else {
            return this.getElement(row, col - 1, head.getNext());
        }
    }
}