var number_map = new Map();

for (let i = 0; i < 26; i++) {
  number_map.set(i, String.fromCharCode(65 + i));
}

function excel_number_to_title(number) {
  let title = "";

  while (number > 0) {
    number--; // Adjust to 0-based index
    let remainder = number % 26;
    title = number_map.get(remainder) + title;
    number = Math.floor(number / 26);
  }

  return title;
}

// Test cases
console.log(excel_number_to_title(1));   // A
console.log(excel_number_to_title(28));  // AB
console.log(excel_number_to_title(701)); // ZY
