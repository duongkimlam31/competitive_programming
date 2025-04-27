function subsets(nums){
  let all_subsets = []
  function subsetsHelper(nums,nums2){
    if (nums.length == 0){
      all_subsets.push(nums2);
    }
    else{
      let to_add = nums[0];
      nums = nums.slice(1);
      let new_nums2 = nums2.slice();
      let new_nums3 = nums2.slice();
      new_nums3.push(to_add);
      subsetsHelper(nums,new_nums2);
      subsetsHelper(nums,new_nums3);
    }
  }
  subsetsHelper(nums,[]);
  return all_subsets;
}

console.log(subsets([1,2,3]));