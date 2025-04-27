function climbStairs(n){
  var memoization = new Map([[1,1], [2,2]]);
  function helper(n){
    if (memoization.has(n)){
      return memoization.get(n);
    }
    else{
      let val = helper(n-1) + helper(n-2);
      memoization.set(n, val);
      return memoization.get(n);
    }
  }
  return helper(n);
}

function printStairs(n) {
  const memoization = new Map([
    [1, [[1]]],
    [2, [[1, 1], [2]]]
  ]);

  function helper(n) {
    if (memoization.has(n)) {
      return memoization.get(n);
    }

    let result = [];

    for (let arr of helper(n - 1)) {
      let arrCopy = arr.slice();
      arrCopy.push(1);
      result.push(arrCopy);
    }
    
    for (let arr of helper(n - 2)) {
      let arrCopy = arr.slice();
      arrCopy.push(2);
      result.push(arrCopy);
    }

    memoization.set(n, result);
    return result;
  }
  console.log(memoization);
  return helper(n);
}


// console.log(climbStairs(4));
// console.log(climbStairs(25));
// console.log(climbStairs(500));

console.log(printStairs(5));
// console.log(printStairs(25));
// console.log(climbStairs(500));

