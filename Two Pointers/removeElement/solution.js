function removeElement(nums, val){
  let replace_ptr = 0;

  for (let i = 0; i < nums.length; i++){
    if (nums[i] != val){
      let tmp = nums[i];
      nums[i] = nums[replace_ptr];
      nums[replace_ptr++] = tmp;
    }
  }
  console.log(nums);
  return replace_ptr;
}

nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val));

nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val));