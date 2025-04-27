function replaceAt(s, index, c){
  return s.slice(0,index) + c + s.slice(index+1);
}

let vowels = new Set(["u","e","o","a","i"]);
console.log(vowels);

// This is O of n^2 due to slicing
function reverseVowels(s){
  let ptr1 = 0;
  let ptr2 = s.length-1;

  while (ptr1 < ptr2){
    if (!vowels.has(s[ptr1].toLowerCase())){
      ptr1++;
      continue;
    }
    if (!vowels.has(s[ptr2].toLowerCase())){
      ptr2--;
      continue;
    }
    let tmp = s[ptr1];
    s = replaceAt(s, ptr1, s[ptr2]);
    s = replaceAt(s, ptr2, tmp);
    ptr1++;
    ptr2--;
  }
  return s;
}

// Use this instead
// function reverseVowels(s){
//   const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
//   const arr = s.split('');
//   let left = 0, right = arr.length - 1;

//   while (left < right) {
//       while (left < right && !vowels.has(arr[left])) left++;
//       while (left < right && !vowels.has(arr[right])) right--;
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//   }

//   return arr.join('');
// }

s = "IceCreAm"
console.log(reverseVowels(s));

s = "leetcode"
console.log(reverseVowels(s));