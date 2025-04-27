function isAlphanumeric(c){
  if (("A".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0))
      || ("a".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0))
      || ("0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0))){
    return true;
  }
  return false;
}

function validPalindrome(s){
  let start_index = 0;
  let end_index = s.length - 1;
  

  while (start_index < end_index){
    let c1 = s[start_index];
    let c2 = s[end_index];

    if (!isAlphanumeric(c1)){
      start_index++;
      continue;
    }
    if (!isAlphanumeric(c2)){
      end_index--;
      continue;
    }

    if (c1.toLowerCase() == c2.toLowerCase()){
      start_index++;
      end_index--;
    }

    else{
      return false;
    }
  }
  return true;
}

s = "A man, a plan, a canal: Panama";
console.log(validPalindrome(s));

s = "race a car";
console.log(validPalindrome(s));

s = " ";
console.log(validPalindrome(s));