function remove_dup_sorted_arr(nums){
  let seen = new Set();
  let k = 0;

  for (let i = 0; i < nums.length; i++){
    if (!seen.has(nums[i])){
      nums[k++] = nums[i];
      seen.add(nums[i]);
    }
  }
  return k;
}

nums = [1,1,2];
console.log(remove_dup_sorted_arr(nums));

nums = [0,0,1,1,1,2,2,3,3,4];
console.log(remove_dup_sorted_arr(nums));

