class Machine {
  constructor() {
    this.items = [{ crisps: 100 }, { chocolate: 350 }, { mints: 70 }];
    this.total_deposit = 0;
  }

  seeSelections() {
    return this.items;
  }

  // 2nd AC, 3rd AC
  deposit(denomination) {
    this.total_deposit += denomination;
    return `You have deposited Rs ${this.total_deposit}`;
  }

  // 4TH CASE
  selectItem(code) {
    // this.items.push({});
    // if (JSON.stringify(this.items[code]) === "{}")
    if (this.items[code] === undefined) {
      return "The item you selected is unavailable";
    }
    // 5th case
    else {
    }
  }
}

module.exports = Machine;

// ob = new Machine();
// ob.items.push({});
// console.log(ob.items);
