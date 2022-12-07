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

    // displayMenu(money){

    //     var1 = money;
        
    //     let response = '';
    //     if(money === 10){
            
    //         // console.log(this.items[2])
    //         // console.log("You don't have enough credit to purchase anything")
    //         response = "You have deposited" + money
    //         return response
    //     }
    //     else if (money === 20){
    //         // console.log("You don't have enough credit to purchase anything")
    //         // console.log(this.items[0,2])
    //         // response = "You don't have enough credit to purchase anything"
    //         response = "You have deposited" + money
    //         return response

    //     }
    //     else if(money === 50){
    //         // console.log(this.items[0,1,2])
    //         // console.log("You don't have enough credit to purchase anything")
    //         // response = "You don't have enough credit to purchase anything"
    //         response = "You have deposited" + money
    //         return response

    //     }
    //     else if(money === 100){
    //         // console.log(this.items[0])
    //         response = "You have deposited"+ money
    //         // response = this.items[0]
    //         return response

    //     }
    //     else if (money === 500){
    //         // console.log(this.items[0,2])
    //         // response = this.items[0,2]
    //         response = "You have deposited" + money
    //         return response

    //     }
    //     else{
    //         response = "You have deposited" + money
    //         // check = false;
    //         return response
    //     }

    //     } 

    deposit(denomination){
        this.total_deposit += denomination;
        return "You have deposited Rs "+this.total_deposit;
    }

        additionalMoney(money2){
            let additionalmoney = parseInt(var1)+parseInt(money2);
            return additionalmoney;

        }

        unavailableItem(code){
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