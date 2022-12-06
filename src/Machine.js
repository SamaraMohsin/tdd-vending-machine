module.exports = class Machine {
    constructor() {
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

    }
    
    seeSelections() {
        // console.log(this.items)
        // const vendingMachineStorage = items.length;
        // console.log(33)
        return this.items;
    }
};