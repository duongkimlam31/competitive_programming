function divisorGame(n){
  let memoization = new Map();
  function divisorGameHelper(n, t){
    if (memoization.has(n)){
      return memoization.get(n);
    }
    if (n == 1){
      if (t == "B"){
        return true
      }
      return false;
    }
    else{
      let alice_wins = false;
      for (let x = 1; x < n; x++){
        if (n % x == 0){
          if (t == "A"){
            alice_wins = true && divisorGameHelper(n-x,"B");
          }
          else{
            alice_wins = divisorGameHelper(n-x,"A");
          }
        }
        if (alice_wins){
          break;
        }
      }
      memoization.set(n,alice_wins);
      return alice_wins;
    }
  }
  return divisorGameHelper(n,"A");
}

console.log(divisorGame(1));
console.log(divisorGame(2));
console.log(divisorGame(3));
console.log(divisorGame(4));
console.log(divisorGame(5));
