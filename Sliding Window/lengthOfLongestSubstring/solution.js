function lengthOfLongestSubstring(s){
  if (s.length == 0 || s.length == 1){
    return s.length;
  }
  let hash_map = new Map();
  let longest_length = 0;
  let tmp_length = 0;
  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr2 < s.length){
    longest_length = Math.max(longest_length, tmp_length);
    if (!hash_map.has(s[ptr2])){
      hash_map.set(s[ptr2],ptr2);
      ptr2++;
      tmp_length++;
    }
    else{
      let remove_to = hash_map.get(s[ptr2]) + 1;
      while (ptr1 < remove_to){
        hash_map.delete(s[ptr1++]);
      }
      hash_map.set(s[ptr2],ptr2);
      tmp_length = ptr2 - ptr1 + 1; // better to recompute
      ptr2++;
      
    }
  }

  longest_length = Math.max(longest_length, tmp_length);
  return longest_length;
}

s = "a";
console.log(lengthOfLongestSubstring(s));

s = "ab";
console.log(lengthOfLongestSubstring(s));

s = "bbbbbbb";
console.log(lengthOfLongestSubstring(s));

s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

s = "pwwkew"
console.log(lengthOfLongestSubstring(s));