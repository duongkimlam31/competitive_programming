function duplicate(arr){
  let hash_map = new Map();
  for (let i = 0; i < arr.length; i++){
      if (hash_map.has(arr[i])){
          hash_map.set(arr[i], hash_map.get(arr[i]) + 1);
      }
      else{
          hash_map.set(arr[i], 1);
      }
  }
  for ([key, value] of hash_map){
    if (value > 1){
      console.log("Duplicate: " + key);
    }
  }
}

arr = [1,2,3,6,3,6,1];
duplicate(arr);