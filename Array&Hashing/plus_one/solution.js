function plus_one(digits){
  digits[digits.length - 1] = digits[digits.length - 1] + 1;

  let carrier = 0;
  let i = -1;
  if (digits[digits.length - 1] == 10){
    digits[digits.length - 1] = 0;
    carrier = 1;
    i = digits.length - 2;
  }

  while (carrier == 1 && i >= 0){
    digits[i] += 1;
    if (digits[i] != 10){
      carrier = 0;
    }
    else{
      digits[i--] = 0;
    }
  }

  if (carrier == 1 && i < 0){
    digits.unshift(1);
  }

  return digits;
}

digits = [1,2,3];
console.log(plus_one(digits));

digits = [4,3,2,1];
console.log(plus_one(digits));

digits = [1,9];
console.log(plus_one(digits));

digits = [9,9];
console.log(plus_one(digits));