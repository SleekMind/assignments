/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {}; // Rename 'spent' to 'categoryTotals' for clarity

  // Iterate through each transaction and sum the prices by category
  for (let transaction of transactions) {
    let category = transaction.category;
    let price = transaction.price;

    // Add the current transaction's price to the existing total or initialize it
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  // Convert the categoryTotals object to an array of objects
  let totalSpentByCategory = []; // Rename 'result' to 'totalSpentByCategory' for clarity

  for (let category in categoryTotals) {
    totalSpentByCategory.push({
      category: category,
      totalSpent: categoryTotals[category]
    });
  }
  
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;

