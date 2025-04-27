function next_greatest_letter(letters, target){
  let l = 0;
  let h = letters.length - 1;
  let mid;

  while (l <= h){
    mid = Math.floor((l + h)/2);
    console.log(l,h,mid);
    if (target >= letters[mid]){
      l = mid + 1;
    }
    else{
      h = mid - 1;
    }
  }
  if (l == -1 || l >= letters.length){
    l = 0;
  }
  return letters[l];
}

letters = ["c","f","j"], target = "a"
console.log(next_greatest_letter(letters, target));

letters = ["c","f","j"], target = "c"
console.log(next_greatest_letter(letters, target));

letters = ["x","x","y","y"], target = "z"
console.log(next_greatest_letter(letters, target));
