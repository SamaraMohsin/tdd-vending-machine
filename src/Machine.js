let var1;
// let price1 =70;
// let price2 =100;
// let proce3 =350;
module.exports = class Machine {
    constructor() {
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        this.total_deposit = 0;

    }
    
    seeSelections() {
        return this.items;
    }

    // 2nd AC, 3rd AC
    deposit(denomination){
        this.total_deposit += denomination;
        return `You have deposited Rs ${this.total_deposit}`;
    }

    // 4TH CASE
    selectItem(code){
            // 1 for crisps 
            // 2 for chocolate
            // 3 for mints
            if(code === 1){
                return('Crisps are available')

            }
            else if(code === 2){
                return('Chocolate are unavailable')

            }
            else{
                return('Mints are available')
            }

        }


        // 5th case in progress
        selectItem(code){
            if(code ===1){
                if (money3<100){
                    let mymoney = price1
                    return "Your deposit is insufficient.  Please add"+ mymoney +"for this item"
                }
            else if(code ===2){
                    let mymoney = price2
                    return "Your deposit is insufficient.  Please add"+ mymoney +"for this item"
                }
            else if(code ===3){
                let mymoney = price2
                    return "Your deposit is insufficient.  Please add"+ mymoney +"for this item"
            }    
            }
            else if(code === 2){
                return('Chocolate are unavailable')

            }
            else{
                return('Mints are available')
            }
           
        }

};