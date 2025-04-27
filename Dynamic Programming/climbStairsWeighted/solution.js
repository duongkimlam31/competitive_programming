function climbStairsWeighted(cost) {
  let memoization = new Map();
  function helper(cost, n){
  if (n == 0 || n == 1){
      memoization.set(n, cost[n]);
      return cost[n];
  }
  else if (memoization.has(n)){
      return memoization.get(n);
  }
  else{
      let current_cost = 0;
      if (n < cost.length){
      current_cost = cost[n];
      }
      let res = Math.min(current_cost + helper(cost,n-1), current_cost + helper(cost,n-2));
      memoization.set(n, res);
      return res;
  }
  }
  return helper(cost, cost.length);

}

let cost = [10, 15, 20];
console.log(climbStairsWeighted(cost));

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(climbStairsWeighted(cost));