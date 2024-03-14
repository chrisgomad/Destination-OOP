const Plane = require('.\classes\Plane.js');
const plane1 = new Plane("company1", "origin1", "destination1");
describe('correct assigned values', () => {
    test('correct company', () => {
        expect(Plane1.company).toBe("company1");
    })
    test("correct origin" , () => {
        expect(Plane1.origin).toBe("origin1");
    })
    test ("correct desitination", () => {
        expect(Plane1.destination).toBe("destination1");
    })
})

describe('passenger initializes as empty array', () => {
    test('empty array', () => {
        expect(Plane1.passengers).toBe([]);
    })
})

describe('addPassenger() adds person', () => {
    test('adds to array', () => {
        expect(Plane1.addPassenger()).toBe([person])
    })
})