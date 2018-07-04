let closure = require('./closure.js');

class numBuff extends closure {
    constructor(next, number){
        super(next, number, "numBuff");
    }
}

class addClosures extends closure {
    constructor(){
        super(null, null, "Operation: add");
    }

    evaluate(){
        if(typeof(this.args[0]) != typeof(undefined)){
            let curr = this.args.pop().evaluate();
            this.args.push(curr);
        }

        if(this.args.length != 2){
            //TODO: throw exception


            console.log("wrong args error goes here");
            return;
        }

        return new numBuff(null, (this.args[0].func + this.args[1].func));
    }
}

class multClosures extends closure {
    constructor(){
        super(null, null, "Operation: add");
    }

    evaluate(){
        if(typeof(this.args[0]) != typeof(undefined)){
            let curr = this.args.pop().evaluate();
            this.args.push(curr);
        }

        if(this.args.length != 2){
            //TODO: throw exception


            console.log("wrong args error goes here");
            return;
        }

        return new numBuff(null, (this.args[0].func * this.args[1].func));
    }
}

module.exports = {
    numBuff: numBuff,
    add: addClosures,
    multiply: multClosures
}