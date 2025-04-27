function longestPalindrome(s){
  let hash_map = new Map();
  let length_palindrome = 0;
  for (let i = 0; i < s.length; i++){
    if (!hash_map.has(s[i])){
      hash_map.set(s[i],1);
    }
    else{
      let tmp = hash_map.get(s[i]);
      if (tmp == 1){
        length_palindrome += 2;
        hash_map.set(s[i],0);
      }
      else{
        hash_map.set(s[i],1);
      }
    }
  }

  for ([key, val] of hash_map){
    if (val == 1){
      return length_palindrome + 1;
    }
  }

  return length_palindrome;
}

s = "abccccdd";
console.log(longestPalindrome(s));

s = "a";
console.log(longestPalindrome(s));