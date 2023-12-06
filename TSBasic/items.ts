import { Item } from './types'

var itemNames:string[] = ["コーヒー","紅茶","ほうじ茶"];
// var itemNames = ["コーヒー","紅茶","ほうじ茶"];
console.log(itemNames);

var item1:Item = {
    id: 1,
    name: "コーヒー",
    price: 350
};

var item2:Item = {
    id: 2,
    name: "紅茶",
    price: 400
};

var item3:Item = {
    id: 3,
    name: "ほうじ茶",
    price: 300
};

var items:Item[] = [item1,item2,item3];
//var items = [item1,item2,item3];
console.log(items);

var borderPrice = 350;
var filteredItems = items.filter((item) => item.price <= borderPrice);
console.log(filteredItems);


// function calcTotalPrice(price:number,amount:number):number {
//     var totalPrice = price * amount;
//     return totalPrice; 
// }

// const calcTotalPrice = function(price:number,amount:number):number {
//     var totalPrice = price * amount;
//     return totalPrice
// }

const calcTotalPrice = (price:number,amount:number):number => {
    var totalPrice = price * amount;
    return totalPrice
}

function findItem(id:number) {
    return items.find((item) => item.id == id);
}

var amount = 5;
var totalPrice = calcTotalPrice(item1.price,amount);
console.log(totalPrice);

var itemId = 1;
var selectedItem = findItem(itemId);
console.log(selectedItem);