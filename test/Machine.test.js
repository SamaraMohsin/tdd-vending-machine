const Machine = require('../src/Machine');

describe('the vending machine', () => {
    // 1st AC
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(expected).toEqual(actual);
    });

    // 2nd AC
    it('Display money and Show the menu accordingly', () => {
        // setup
        const machine = new Machine();
        const money = 50;
        const expected = "You have deposited" + money;

        // exercise
        const actual =  machine.displayMenu(money);

        // assert
        expect(expected).toEqual(actual);
    });

});
