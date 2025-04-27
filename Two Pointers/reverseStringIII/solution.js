function reverseString(s){
  let ptr1 = s.length - 1;
  let result = "";
  let tmp_s = "";

  for (let i = 0; i < s.length; i++){
    if (s[ptr1] != " "){
      tmp_s += s[ptr1--];
    }
    else{
      result = " " + tmp_s + result;
      tmp_s = "";
      ptr1--;
    }
  }

  result = tmp_s + result;
  return result;
}

s = "Let's take LeetCode contest"
console.log(reverseString(s));

s = "Mr Ding"
console.log(reverseString(s));