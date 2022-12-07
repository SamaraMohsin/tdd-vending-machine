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
        const expected = "You have deposited Rs " + money;

        // exercise
        const actual =  machine.deposit(money);

        // assert
        expect(expected).toEqual(actual);
    });

    // 3rd AC
    it('Additional Money', () => {
        // setup
        const machine = new Machine();
        const money= 100;
        machine.deposit(money)
        // machine.deposit(50)
        const actual = "You have deposited Rs 150"
        // exercise
        const expected =  machine.deposit(50);

        // assert
        expect(expected).toEqual(actual);
    });

    // // 4th AC
    // it('Unavailable Item', () => {
    //     // setup
    //     const machine = new Machine();
    //     const expected =  'Chocolate are unavailable';
    //     const code = 2;

    //     // exercise
    //     const actual =  machine.unavailableItem(code);

    //     // assert
    //     expect(expected).toEqual(actual);
    // });


});
