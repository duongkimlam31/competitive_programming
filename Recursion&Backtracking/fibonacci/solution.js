var memoization = new Map([[0, 0], [1, 1]]);

function fibonacci(n){
  if (memoization.has(n)){
    return memoization.get(n);
  }
  else{
    let fib_val = fibonacci(n-2) + fibonacci(n-1);
    memoization.set(n, fib_val);
    return memoization.get(n);
  }
}

n = 2;
console.log(fibonacci(n));

n = 3;
console.log(fibonacci(n));

n = 4;
console.log(fibonacci(n));