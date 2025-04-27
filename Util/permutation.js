function permutation(arr, k) {
  let result = [];

  function permutationHelper(permutation, can_choose, must_choose) {
    if (must_choose == 0) {
      result.push(permutation);
    } else {
      for (let i = 0; i < can_choose.length; i++) {
        let tmp_can_choose = [...can_choose];
        let to_add = tmp_can_choose.splice(i,1);
        let tmp_permutation = [...permutation, to_add[0]];
        permutationHelper(tmp_permutation, tmp_can_choose, must_choose - 1);
      }
    }
  }

  if(k > 0){
    permutationHelper([], arr, k);
  }

  return result;
}

arr = [1,2,3,4];
k = 4;
console.log(permutation(arr,k));

// arr = ["a","b","c","d","e","f","g"];
// k = 3;
// console.log(permutation(arr,k));
