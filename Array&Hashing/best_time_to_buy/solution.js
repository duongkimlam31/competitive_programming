function best_time_to_buy(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      } else {
          maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      }
  }

  return maxProfit;
};

prices = [7,1,5,3,6,4];
console.log(best_time_to_buy(prices));

prices = [7,6,4,3,1];
console.log(best_time_to_buy(prices));