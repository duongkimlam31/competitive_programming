function reverseString(s){
  let ptr1 = 0;
  let ptr2 = s.length - 1;

  while (ptr1 < ptr2){
    let tmp = s[ptr1];
    s[ptr1] = s[ptr2];
    s[ptr2] = tmp;
    ptr1++;
    ptr2--;
  }

  return s;
}

s = ["h","e","l","l","o"]
console.log(reverseString(s));

s = ["H","a","n","n","a","h"]
console.log(reverseString(s));