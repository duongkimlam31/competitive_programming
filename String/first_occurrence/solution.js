function first_occurrence(haystack, needle){
  let first_occurrence_index = -1;
  for (let i = 0; i < haystack.length; i++){
    let matching = 0;
    for (let j = 0; j < needle.length; j++){
      if (haystack[i+j] == needle[j]){
        matching++;
      }
    }
    if (matching == needle.length){
      first_occurrence_index = i;
      break;
    }
  }
  return first_occurrence_index;
}

haystack = "sadbutsad"
needle = "sad"
console.log(first_occurrence(haystack, needle))

haystack = "leetcode"
needle = "leeto"
console.log(first_occurrence(haystack, needle))

haystack = "mississippi"
needle = "issip"
console.log(first_occurrence(haystack, needle))