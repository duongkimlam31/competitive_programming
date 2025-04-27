// function array_string_equal(arr1, arr2){
//   let w1 = "";
//   let w2 = "";

//   for (let i = 0; i < arr1.length; i++){
//     w1 += arr1[i];
//   }

//   for (let i = 0; i < arr2.length; i++){
//     w2 += arr2[i];
//   }

//   return (w1 == w2);
// }

function array_string_equal(arr1, arr2){
  let global_ptr1 = 0;
  let global_ptr2 = 0;

  let local_ptr1 = 0;
  let local_ptr2 = 0;

  let s1_length = 0;
  let s2_length = 0;

  for (let i = 0; i < arr1.length; i++){
    s1_length += arr1[i].length;
  }

  for (let i = 0; i < arr2.length; i++){
    s2_length += arr2[i].length;
  }

  if (s1_length != s2_length){
    return false;
  }

  while (global_ptr1 < arr1.length && global_ptr2 < arr2.length){
    let s1 = arr1[global_ptr1];
    let s2 = arr2[global_ptr2];

    if (local_ptr1 >= s1.length){
      global_ptr1++;
      local_ptr1 = 0;
      continue;
    }

    if (local_ptr2 >= s2.length){
      global_ptr2++;
      local_ptr2 = 0;
      continue;
    }

    let c1 = s1[local_ptr1];
    let c2 = s2[local_ptr2];

    if (c1 != c2){
      return false;
    }
    local_ptr1++;
    local_ptr2++;
  }
  return true;
}

word1 = ["a", "bc"]
word2 = ["ab", "c"]

console.log(array_string_equal(word1, word2));

word1  = ["abc", "d", "defg"]
word2 = ["abcddefg"]

console.log(array_string_equal(word1, word2));

word1 = ["abc","d","defg"]
word2 = ["abcddef"]

console.log(array_string_equal(word1, word2));