var itemNames:string[] = ["コーヒー","紅茶","ほうじ茶"];
// var itemNames = ["コーヒー","紅茶","ほうじ茶"];
console.log(itemNames);

var item1 = {
    id: 1,
    name: "コーヒー",
    price: 350
};

var item2 = {
    id: 2,
    name: "紅茶",
    price: 400
};

var item3 = {
    id: 3,
    name: "ほうじ茶",
    price: 300
};

var items = [item1,item2,item3];
//var items:Object[] = [item1,item2,item3];
console.log(items);

var borderPrice = 350;
var filteredItems = items.filter((item) => item.price <= borderPrice);
console.log(filteredItems);


function calcTotalPrice(price:number,amount:number):number {
    var totalPrice = price * amount;
    return totalPrice;
    
}

var amount = 5;
calcTotalPrice(item1.price,amount);