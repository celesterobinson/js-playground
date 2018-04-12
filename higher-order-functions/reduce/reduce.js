let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

//ES6
let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

//Normal Callback
let totalAmount = orders.reduce(function(sum, order){
    return sum + order.amount
}, 0)

//For Loop
var totalAmount = 0;
for  (let i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}

console.log(totalAmount);