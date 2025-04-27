function catalanNumber(n){
  let memoization = new Map([[0,1],[1,1]]);
  function catalanNumberHelper(n){
    if (memoization.has(n)){
      return memoization.get(n);
    }
    else{
      let catalan = 0;
      let n1 = n-1;
      let n2 = 0;
      while (n2 <= n-1){
        catalan += catalanNumberHelper(n1--)*catalanNumberHelper(n2++);
      }
      memoization.set(n,catalan);
      return memoization.get(n);
    }
  }
  return catalanNumberHelper(n);
}

console.log(catalanNumber(3));
console.log(catalanNumber(5));
console.log(catalanNumber(6));
console.log(catalanNumber(50));