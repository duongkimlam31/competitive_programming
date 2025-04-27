function valid_anagram(s, t){
  let hash_map_s = new Map();
  let hash_map_t = new Map();

  for (let i = 0; i < s.length; i++){
    if (hash_map_s.has(s[i])){
      let val = hash_map_s.get(s[i]);
      hash_map_s.set(s[i], val + 1)
    }
    else{
      hash_map_s.set(s[i], 1)
    }
  }

  for (let i = 0; i < t.length; i++){
    if (hash_map_t.has(t[i])){
      let val = hash_map_t.get(t[i]);
      hash_map_t.set(t[i], val + 1)
    }
    else{
      hash_map_t.set(t[i], 1)
    }
  }

  if (hash_map_s.size != hash_map_t.size){
    return false;
  }

  for ([key, val] of hash_map_s){
    if (hash_map_t.has(key) == false){
      return false;
    }
    if (hash_map_t.get(key) != hash_map_s.get(key)){
      return false;
    }
  }

  return true;
}

s = "racecar"
t = "carrace"
console.log(valid_anagram(s,t))

s = "jar"
t = "jam"
console.log(valid_anagram(s,t))

