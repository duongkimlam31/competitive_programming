function binary_search(arr, target){
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high){
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == target){
      return mid;
    }
    else if (target > arr[mid]){
      low = mid + 1;
    }
    else{
      high = mid - 1;
    }
  }
  return -1;
}
