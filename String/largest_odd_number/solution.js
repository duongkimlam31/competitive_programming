function largest_odd_number(s){
  for (let i = s.length - 1; i >= 0; i--) {
    if (parseInt(s[i]) % 2 !== 0) {
      return s.slice(0, i + 1);
    }
  }
  return "";
}

s = "52";
console.log(largest_odd_number(s));

s = "4206";
console.log(largest_odd_number(s));

s = "35427";
console.log(largest_odd_number(s));

s = "239537672423884969653287101";
console.log(largest_odd_number(s));
