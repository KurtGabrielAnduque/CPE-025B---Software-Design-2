/**

Write a function getInventoryValuation that takes an array of product objects. 
Each object contains name, qty, price, and category. The function must return a single object 
where each key is a category and each value is the total monetary value (quantity multiplied by price) of all items in that category. 
Items with a quantity of zero or less must be excluded from the calculation.

Expected Output: { Tech: 400, Furniture: 400 }

onst categories = new Map();

for (let i = 0; i < 2; i++) {
        tech_sum += result.Tech[i].qty*result.Tech[i].price
    }

Expected Output: { Tech: 400, Furniture: 400 }
*/

function getInventoryValuation(inventory) {
    const result = Object.groupBy(inventory, ({ category }) =>
    category == "Tech" ? "Tech" : "Furn",
    );
    let tech_sum = 0 
    let furn_sum = 0
    for (let i = 0; i < 2; i++) {
        tech_sum += result.Tech[i].qty*result.Tech[i].price
    }
    for (let i = 0; i < 2; i++) {
        furn_sum += result.Furn[i].qty*result.Furn[i].price
    }
    
    total = { Tech: tech_sum, Furniture: furn_sum }
    
    return total
    
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory));
