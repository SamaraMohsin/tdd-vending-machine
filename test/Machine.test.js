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
        const money = 100;
        const expected = "You have deposited" + money;

        // exercise
        const actual =  machine.displayMenu(money);

        // assert
        expect(expected).toEqual(actual);
    });

    // 3rd AC
    it('Additional Money', () => {
        // setup
        const machine = new Machine();
        const money = 100;
        const money2 = 50;
        const expected =  money+ money2;

        // exercise
        const actual =  machine.additionalMoney(money2);

        // assert
        expect(expected).toEqual(actual);
    });

});
