const Bag = require('../../classes/Bag.js');

const bag1 = new Bag(30, 3333);

describe ('a bag test', () => {
    test('can create instance of bag class', () => {
        //arrange
        
        //act

        //assert
        expect(bag1).toBeInstanceOf(Bag);
    })
    test('weight and id have been assigned correctly', () => {
        expect(bag1.weight).toBe(30);
        expect(bag1.id).toBe(3333);
    })
    test('owner initialized with null', () => {
        expect(bag1.getOwner()).toBe(null)
    })

    test('updates owner with Person assigned to bag', () => {
        
        //arrange
        

        //act
        bag1.assignOwner('chris')

        //assert
        expect(bag1.getOwner()).toBe('chris');
    })
})

