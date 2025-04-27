function twosum(nums, target){
  let results = [];
  let hash_map = new Map();

  for (let i = 0; i < nums.length; i++){
      if (hash_map.has(target - nums[i])){
          results.push(hash_map.get(target - nums[i]));
          results.push(i);
          break;
      }
      hash_map.set(nums[i], i);
  }
  return results;
}

nums = [2,7,11,15];
target = 9;
console.log(twosum(nums, target));

nums = [3,2,4];
target = 6;
console.log(twosum(nums, target));

nums = [3,3];
target = 6;
console.log(twosum(nums, target));