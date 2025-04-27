function isPerfectSquare(n){
  m = Math.sqrt(n);
  return Number.isInteger(m);
}

function perfectSquares(n){
  let memoization = new Map();
  function perfectSquaresHelper(n){
    if (memoization.has(n)){
      return memoization.get(n);
    }
    else if (isPerfectSquare(n)){
      memoization.set(n,1);
      return memoization.get(n);
    }
    else{
      let least_sum = Infinity;
      let i = 1;
      while (i*i < n){
        least_sum = Math.min(least_sum, perfectSquaresHelper(n - i*i) + 1);
        i++;
      }
      memoization.set(n, least_sum);
      return memoization.get(n);
    }
  }
  return perfectSquaresHelper(n);
}


console.log(perfectSquares(56));
console.log(perfectSquares(12));
console.log(perfectSquares(13));