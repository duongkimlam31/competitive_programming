// function combination(n,k){
//   let res = [];
//   let nums = [];
//   for (let i = 0; i < n; i++){
//     nums.push(i+1);
//   }

//   function combinationHelper(combination,can_choose,must_choose){
//     if (must_choose == 0){
//       res.push(combination);
//     }
//     else{
//       for (let i = 0; i < can_choose.length; i++){
//         let tmp_can_choose = can_choose.slice(i+1);
//         let tmp_combination = [...combination,can_choose[i]];
//         combinationHelper(tmp_combination, tmp_can_choose, must_choose-1);
//       }
//     }
//   }

//   if (k > 0){
//     for (let i = 0; i < n + k - 1; i++){
//       let tmp_nums = [...nums];
//       tmp_nums = tmp_nums.slice(i+1);
//       combinationHelper([nums[i]],tmp_nums, k-1);
//     }
//   }
//   return res;

// }

// No copy
function combination(n,k){
  let res = [];

  function combinationHelper(start, path) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    
    for (let i = start; i <= n; i++) {
      path.push(i);
      combinationHelper(i + 1, path);
      path.pop();
    }
  }

  combinationHelper(1, []);
  return res;
};

n = 4, k = 2;
console.log(combination(4,2));