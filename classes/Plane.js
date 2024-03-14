class Plane {
    constructor(company, origin, destination) {
        this.company = company;
        this.destination = destination;
        passengers = [];
    }

    static origin = Airport.airportCode;
    getPassengers() {
        return this.passengers;
    }
    addPassenger(passenger){
        return Plane.passengers.push(this);
    }

}


module.exports = Plane;