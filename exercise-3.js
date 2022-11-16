// Import the inventory list from exercise-3-data.js and sort it by priority using the array below as reference. See exercise-3-output.txt for the exepected output.
const { inventory } = require("./exercise-3-data.js");

const brandPriority = [
  { brand: "GOODYEAR", priority: 0 },
  { brand: "DUNLOP", priority: 1 },
  { brand: "TOYO", priority: 2 },
  { brand: "CONTINENTAL", priority: 3 },
  { brand: "MAXXIS", priority: 4 },
  { brand: "DOUBLESTAR", priority: 5 },
];
const brand = [];

for (i = 0; i < brandPriority.length; i++) {
  brand.push(brandPriority[i].brand);
}

let sortedInventory = inventory.sort(
  (a, b) => brand.indexOf(a.brand) - brand.indexOf(b.brand)
);

console.log("Sorted Inventory: ", sortedInventory);
