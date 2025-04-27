function maxSegmentsCut(n,x,y,z){
  let memoization = new Map();
  function helper(n,x,y,z){
    if (n == 0){
      return 0;
    }
    if (n < 0){
      return -1;
    }
    if (memoization.has(n)){
      return memoization.get(n);
    }
    else{
      let cutx = 0;
      let cuty = 0;
      let cutz = 0;
      cutx = helper(n-x,x,y,z);
      cuty = helper(n-y,x,y,z);
      cutz = helper(n-z,x,y,z);

      let cut = Math.max(cutx, cuty, cutz);
      if (cut == -1){
        memoization.set(n,-1);
        return -1;
      }
      memoization.set(n,cut+1);
      return memoization.get(n);
    }
  }
  let cut = helper(n,x,y,z);
  if (cut == -1){
    return 0;
  }
  return cut;
}

let n = 4; 
let x = 2;
let y = 1;
let z = 1;
console.log(maxSegmentsCut(n,x,y,z));

n = 7; 
x = 5;
y = 5;
z = 2;
console.log(maxSegmentsCut(n,x,y,z));

n = 7; 
x = 8;
y = 9;
z = 10;
console.log(maxSegmentsCut(n,x,y,z));