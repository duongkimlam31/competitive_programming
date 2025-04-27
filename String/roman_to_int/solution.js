// test = new Map([["I", 1], ["V", 5]]);
// console.log(test);

var roman_map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);

function roman_to_int(s){
  let val = 0;
  let i = 0;
  while (i < s.length){
    let roman_num_1 = s[i];
    roman_num_1 = roman_map.get(roman_num_1);

    let roman_num_2 = 0;
    if (i+1 < s.length){
      roman_num_2 = roman_map.get(s[i+1]);
    }
    if (roman_num_1 < roman_num_2){
      val += (roman_num_2 - roman_num_1);
      i += 2;
    }
    else{
      val += roman_num_1;
      i++;
    }
  }
  return val;
}

s = "III"
console.log(roman_to_int(s));

s = "LVIII"
console.log(roman_to_int(s));

s = "MCMXCIV"
console.log(roman_to_int(s));