let var1;
// let price1 =70;
// let price2 =100;
// let proce3 =350;
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
    this.items.push(0);
    if (JSON.stringify(this.items[code]) === "{}") {
      return "The item you selected is unavailable";
    }
  }
}

module.exports = Machine;

// ob = new Machine();
// ob.items.push({});
// console.log(ob.items);
