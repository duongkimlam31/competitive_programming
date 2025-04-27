function longest_common_prefix(strs){
  let longest_prefix = strs[0]
  let prefix_map = new Map();

  for (let i = 0; i < strs[0].length; i++){
    prefix_map.set(i, strs[0][i]);
  }

  for (let i = 1; i < strs.length; i++){
    let common_prefix = "";
    for (let j = 0; j < strs[i].length; j++){
      if (prefix_map.has(j) && prefix_map.get(j) == strs[i][j]){
        common_prefix += strs[i][j];
      }
      else{
        break;
      }
    }
    if (common_prefix.length < longest_prefix.length){
      longest_prefix = common_prefix;
    }
  }
  return longest_prefix;
}

strs = ["flower","flow","flight"]
console.log(longest_common_prefix(strs));

strs = ["dog","racecar","car"]
console.log(longest_common_prefix(strs));