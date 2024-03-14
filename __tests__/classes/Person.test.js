const Person = require("../../classes/Person");
const person1 = new Person("bob", "NY")
describe("Person Tests", () => {
    test('Created an instance of Person', () => {
        // arrange
       
        // act

        // assert
        expect(person1).toBeInstanceOf(Person);
    })

    test("Test name and destination has been assigned", () => {
        // arrange
        let name = 'bob';
        let destination = 'NY';

        // act

        // assert
        expect(person1.name).toBe(name);
        expect(person1.destination).toBe(destination);
    })

    test("Test that bags inits as an empty array", () => {
        // arrange

        // act

        // assert
        expect(person1.getBags().length).toBe(0);
    })

    test("Tests that addBags() adds a bag to the bags array", () => {
        // arrange
        let testBag = "Bag";
        // act
        person1.addBags(testBag);
        // assert
        expect(person1.getBags()[0]).toBe(testBag);
    })
})