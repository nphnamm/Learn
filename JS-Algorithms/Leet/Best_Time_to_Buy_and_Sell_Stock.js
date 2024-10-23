function maxProfit(prices) {
  let minPrice = Infinity; // Set initial minimum price to infinity
  let maxProfit = 0; // Initialize max profit to 0
  console.log("infinity", Infinity);
  console.log(Infinity > prices[0]);
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update the minimum price
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice; // Update the maximum profit
    }
  }
  console.log("min", minPrice);

  return maxProfit;
}

const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5
