class Machine {
  constructor() {
    this.items = [{ crisps: 100 }, { chocolate: 350 }, { mints: 70 }];
    this.total_deposit = 0;
    this.excepted_amount = [10, 20, 50, 100, 500];
    this.change = [];
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
    if (this.items[code] === undefined) {
      return "The item you selected is unavailable";
    }
    // 5th case
    const ItemPrice = Object.values(this.items[code])[0];
    if (ItemPrice > this.total_deposit) {
      var differece = ItemPrice - this.total_deposit;
      return `Your deposit is insufficient.  Please add Rs ${differece} for this item`;
    }
    this.total_deposit -= ItemPrice;
    const ItemName = Object.keys(this.items[code])[0];
    for (let i = this.excepted_amount.length - 1; i >= 0; i--) {
      if (this.total_deposit >= this.excepted_amount[i]) {
        var Possible = true;
        while (Possible) {
          this.change.push(this.excepted_amount[i]);
          this.total_deposit -= this.excepted_amount[i];
          if (this.total_deposit < this.excepted_amount[i]) {
            Possible = false;
          }
        }
      }
    }
    return { item: ItemName, change: this.change };
  }
}
module.exports = Machine;
