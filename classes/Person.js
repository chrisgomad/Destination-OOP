class Person {
    constructor(name, destination, bags){
        this.name = name;
        this.destination = destination;
        this.bags = [];
    }
    addbag(bag){
        this.bags.push(this);
    }
    getBags(){
        return this.bags;
    }
}


module.exports = Person;