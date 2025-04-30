function uglyNumber(n){
  let memoization = new Map();

  function uglyNumberHelper(n){
    if (memoization.has(n)){
      return memoization.get(n);
    }
    if (n == 0){
      return false;
    }
    if (n == 1){
      return true;
    }
    else{
      let n1 =n/2;
      let n2 = n/3;
      let n3= n/5;

      let res1 = Number.isInteger(n1);
      let res2 = Number.isInteger(n2);
      let res3 = Number.isInteger(n3);

      if (!res1 && !res2 && !res3){
        return false;
      }
      res1 = res1 && uglyNumberHelper(n1);
      res2 = res2 && uglyNumberHelper(n2);
      res3 = res3 && uglyNumberHelper(n3);
      let res =  res1 || res2 || res3;
      memoization.set(n,res);
      return res;
    }
  }
  return uglyNumberHelper(n);
}

n = 6;
console.log(uglyNumber(n));

n = 14;
console.log(uglyNumber(n));