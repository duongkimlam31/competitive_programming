function replaceAt(s, index, c) {
  return s.slice(0, index) + c + s.slice(index + 1);
}

function buddy_strings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  
  let diff1 = -1;
  let diff2 = -1;

  if (s == goal){
    let seen = new Set();
    for (let i = 0; i < s.length; i++){
      if (seen.has(s[i])){
        return true;
      }
      seen.add(s[i]);
    }
    return false;
  }

  for (let i = 0; i < goal.length; i++){
    if (s[i] != goal[i]){
      if (diff1 == -1){
        diff1 = i;
      }
      else if (diff2 == -1){
        diff2 = i;
      }
      else{
        return false;
      }
    }
  }

  if (diff2 == -1){
    return false;
  }

  let c = s[diff1];
  s = replaceAt(s, diff1, s[diff2]);
  s = replaceAt(s, diff2, c);

  return (s == goal);

}
s = "ab"
goal = "ba"
console.log(buddy_strings(s, goal));

s = "ab"
goal = "ab"
console.log(buddy_strings(s, goal));

s = "aa"
goal = "aa"
console.log(buddy_strings(s, goal));

s = "abcd"
goal = "cbad"
console.log(buddy_strings(s, goal));

s = "abab"
goal = "abab"
console.log(buddy_strings(s, goal));
