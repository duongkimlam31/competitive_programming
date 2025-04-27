// function is_palindrome_recursion(s){
//   if (s.length == 0 || s.length == 1){
//     return true;
//   }
//   else{
//     if (s[0] != s[s.length - 1]){
//       return false;
//     }
//     else{
//       return (true && is_palindrome_recursion(s.slice(1,s.length-1)));
//     }
//   }
// }


function is_palindrome_iteration(s){
  let start_index = 0;
  let end_index = s.length -1;

  while (end_index >= 0 && start_index < s.length){
    if (s[start_index] == s[end_index]){
      start_index++;
      end_index--;
    }
    else{
      break;
    }
  }
  return (start_index > end_index);
}

s = "abba"
console.log(is_palindrome_iteration(s));

s = "racecar"
console.log(is_palindrome_iteration(s));

s = "abc"
console.log(is_palindrome_iteration(s));

s = "a"
console.log(is_palindrome_iteration(s));

s = "acbca"
console.log(is_palindrome_iteration(s));