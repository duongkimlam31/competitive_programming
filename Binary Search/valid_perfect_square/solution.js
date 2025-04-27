function valid_perfect_square(num){
  let l = 1;
  let h = num;
  let mid;

  while (l <= h){
    mid = Math.floor((l+h)/ 2);
    let sq = mid**2;

    if (sq == num){
      return true;
    }
    else if (sq > num){
      h = mid - 1;
    }
    else{
      l = mid + 1;
    }
  }
  return false;
}

num = 16
console.log(valid_perfect_square(num));

num = 14
console.log(valid_perfect_square(num));