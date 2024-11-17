const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];
let nextOrderID = 1;

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(a, b) {
  let name = a;
  let price = b;
  let meal = { name: `${name}`, price: price };
  menu.push(meal);
}

addNewPizza("Supreme", 15);

console.log(menu);

function addNewPizzaa(pizzaObj) {
    menu.push(pizzaObj)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
    let selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    cashInRegister += selectedPizza.price;
    let newOrder = {id: nextOrderID++, pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

placeOrder("Veggie");

console.log("cashInRegister",cashInRegister);
console.log(" orderQueue",orderQueue);

/**
 * Challenge: write another utility function, completeOrder, 
 * that takes an orderId as a parameter
 * finds the correct order in the orderQueue, 
 * and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs 
 * to our orders when we create new orders. 
 * You can use a global `nextOrderId` variable and increment 
 * it every time a new order is created to simulate real IDs 
 * being managed for us by a database.
 */

function completeOrder(orderID){
    let order = orderQueue.find(order => order.id === orderID);
    order.status = "completed";
    return order;
}

completeOrder(1);

console.log("cashInRegister",cashInRegister);
console.log(" orderQueue",orderQueue);



addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);