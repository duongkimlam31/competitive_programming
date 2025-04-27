function combination(arr, k) {
  let result = [];

  function combinationHelper(combination, can_choose, must_choose) {
    if (must_choose == 0) {
      result.push(combination);
    } else {
      for (let i = 0; i < can_choose.length; i++) {
        let tmp_can_choose = can_choose.slice(i + 1); // only elements after current
        let tmp_combination = [...combination, can_choose[i]];
        combinationHelper(tmp_combination, tmp_can_choose, must_choose - 1);
      }
    }
  }

  if(k > 0){
    for (let i = 0; i <= arr.length - k; i++) {
      let tmp_arr = arr.slice(i + 1);
      combinationHelper([arr[i]], tmp_arr, k - 1);
    }
  }

  return result;
}

arr = [1,2,3,4];
k = 2;
console.log(combination(arr,k));

// arr = ["a","b","c","d","e","f","g"];
// k = 3;
// console.log(combination(arr,k));
