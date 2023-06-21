const { makeAutoObservable } = require("mobx");

class  CartStore{
    shoppingCartCount = 0;
    shoppingCartArr = [];


    constructor(){
        makeAutoObservable(this)
    }

    postToShoppingCart = (title,img,amount,price,id,category) => {
        const foundElement = this.shoppingCartArr.find(element => element.id === id);
        if(foundElement){
            foundElement.amount += amount;
            foundElement.price += price;
        }else{
            this.shoppingCartCount += 1;
            this.shoppingCartArr.push({
            title: title,
            img: img,
            amount: amount,
            price: price,
            id: id,
            category: category
            })
        }
            
        

        
    }
    removeProduct = (valueToRemove) =>{
        
        if (valueToRemove > -1) {
            this.shoppingCartArr.splice(valueToRemove, 1); // Используйте splice для удаления элемента
            this.shoppingCartCount -= 1;
          }
    }
}

export default new CartStore();