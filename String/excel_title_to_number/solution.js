var column_map = new Map();

for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(65 + i); // 65 is 'A'
  column_map.set(letter, i + 1);
}


function excel_title_to_number(column_title){
  let multiplier = 0;
  let number = 0;
  for (let i = column_title.length - 1; i >= 0; i--){
    number += (26**multiplier) * column_map.get(column_title[i]);
    multiplier++;
  }
  return number;
}

column_title = "A"
console.log(excel_title_to_number(column_title));

column_title = "AB"
console.log(excel_title_to_number(column_title));

column_title = "ZY"
console.log(excel_title_to_number(column_title));