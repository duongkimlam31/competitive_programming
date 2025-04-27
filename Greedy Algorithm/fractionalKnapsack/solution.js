function fractionalKnapsack(val, wt, capacity){
  let greedy_val = [];
  for (let i = 0; i < val.length; i++){
    greedy_val.push([wt[i], val[i]]);
  }
  greedy_val.sort((a, b) => (b[1] / b[0]) - (a[1] / a[0]));

  let max_val = 0;

  for (let i = 0; i < greedy_val.length;i ++){
    let w = greedy_val[i][0];
    let v = greedy_val[i][1];

    if (capacity == 0){
      break;
    }
    if (w <= capacity){
      max_val += v;
      capacity -= w;
    }
    else{
      let fraction = capacity / w;
      let fractional_w = fraction * w;
      let fractional_v = fraction * v;
      capacity -= fractional_w;
      max_val += fractional_v;
    }

  }

  return max_val;

}


val = [60, 100, 120], wt = [10, 20, 30], capacity = 50;
console.log(fractionalKnapsack(val,wt,capacity));

val = [500], wt = [30], capacity = 10;
console.log(fractionalKnapsack(val,wt,capacity));

// Heart of greedy algorithm: greedy value = profit / drawback
