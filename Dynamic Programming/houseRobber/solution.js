// O(n^2)
// function houseRobber(nums){
//   let memoization = new Map();

//   function houseRobberHelper(nums,l,h){
//     if (memoization.has(l+","+h)){
//       return memoization.get(l+","+h);
//     }
//     if (l > nums.length - 1 || h < 0 || l > h){
//       return 0;
//     }
//     if (l == h){
//       memoization.set(l+","+h, nums[l]);
//       return memoization.get(l+","+h);
//     }
//     else{
//       let maxProfit = -Infinity;
//       for (let i = l; i < h + 1; i++){
//         let profit = nums[i] + houseRobberHelper(nums,i+2,h) + houseRobberHelper(nums,l,i-2);
//         maxProfit = Math.max(profit,maxProfit);
//       }
//       memoization.set(l+","+h, maxProfit);
//       return maxProfit;
//     }
//   }
//   return houseRobberHelper(nums,0,nums.length-1);
// }

function houseRobber(nums){
  let memoization = new Map();

  function houseRobberHelper(nums, l, h){
    if (memoization.has(l+","+h)){
      return memoization.get(l+","+h);
    }
    if (l == h){
      memoization.set(l+","+h, nums[l]);
      return memoization.get(l+","+h);
    }
    if (l > h){
      return 0;
    }
    else{
      let maxProfit = -Infinity;
      maxProfit = Math.max(maxProfit, nums[l] + houseRobberHelper(nums,l+2,h));
      maxProfit = Math.max(maxProfit, houseRobberHelper(nums,l+1,h));
      memoization.set(l+","+h,maxProfit);
      return maxProfit;
    }
  }
  return houseRobberHelper(nums,0,nums.length-1);
}

nums = [1,2,3,1];
console.log(houseRobber(nums));

nums = [1];
console.log(houseRobber(nums));

nums = [2,1,1,2];
console.log(houseRobber(nums));

nums = [2,7,9,3,1];
console.log(houseRobber(nums));