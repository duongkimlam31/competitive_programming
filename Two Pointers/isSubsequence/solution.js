function isSubsequence(s, t){
  let ptr1 = 0;
  
  for (let i = 0; i < t.length; i++){
    if (t[i] == s[ptr1]){
      ptr1++;
    }
  }

  return (ptr1 == s.length);
}

s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t));

s = "axc", t = "ahbgdc"
console.log(isSubsequence(s, t));

