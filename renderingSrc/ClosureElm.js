module.exports = class {
    constructor(pos, context){
        this.pos = pos;
        this.ctx = context;

        this.height = 100;
        this.width = 200;
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(pos.x, pos.y + height);
        ctx.lineTo(pos.x + width, pos.y + height);
        ctx.lineTo(pos.x + width, pos.y);
        ctx.fill();
    }
}