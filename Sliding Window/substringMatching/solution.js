function subStringMatching(s,p){
  let subStrings = p.split("*");
  if (subStrings[0] == ""){
    return s.includes(subStrings[1]);
  }
  if (subStrings[1] == ""){
    return s.includes(subStrings[0]);
  }
  else{
    let subString1 = subStrings[0];
    let subString2 = subStrings[1];

    let firstOccurrence = s.indexOf(subString1);
    let lastOccurrence = s.lastIndexOf(subString2);
    if (firstOccurrence < 0 || lastOccurrence < 0){
        return false;
    }

    return (firstOccurrence+subString1.length <= lastOccurrence);
  }
}

s = "luck", p = "u*"
console.log(subStringMatching(s,p));

s = "leetcode", p = "ee*e"
console.log(subStringMatching(s,p));