let var1;
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

    customerCredit(){
        cashList = [10,20,50,70,100];

    }


    displayMenu(money){

        var1 = money;
        
        let response = '';
        if(money === 10){
            
            // console.log(this.items[2])
            // console.log("You don't have enough credit to purchase anything")
            response = "You have deposited" + money
            return response
        }
        else if (money === 20){
            // console.log("You don't have enough credit to purchase anything")
            // console.log(this.items[0,2])
            // response = "You don't have enough credit to purchase anything"
            response = "You have deposited" + money
            return response

        }
        else if(money === 50){
            // console.log(this.items[0,1,2])
            // console.log("You don't have enough credit to purchase anything")
            // response = "You don't have enough credit to purchase anything"
            response = "You have deposited" + money
            return response

        }
        else if(money === 100){
            // console.log(this.items[0])
            response = "You have deposited"+ money
            // response = this.items[0]
            return response

        }
        else if (money === 500){
            // console.log(this.items[0,2])
            // response = this.items[0,2]
            response = "You have deposited" + money
            return response

        }
        else{
            response = "You have deposited" + money
            // check = false;
            return response
        }

        } 



        additionalMoney(money2){
            let additionalmoney = parseInt(var1)+parseInt(money2);
            return additionalmoney;

        }


};