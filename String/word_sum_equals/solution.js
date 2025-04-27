var word_map = new Map([["a", "0"], ["b", "1"], ["c", "2"], ["d", "3"],
  ["e", "4"], ["f", "5"], ["g", "6"], ["h", "7"], ["i", "8"], ["j", "9"]]);

function word_sum_equals(first_word, second_word, target_word){
  let first_word_int = "";
  let second_word_int = "";
  let target_word_int = "";

  for (let i = 0; i < first_word.length; i++){
    first_word_int += word_map.get(first_word[i]);
  }

  for (let i = 0; i < second_word.length; i++){
    second_word_int += word_map.get(second_word[i]);
  }

  for (let i = 0; i < target_word.length; i++){
    target_word_int += word_map.get(target_word[i]);
  }

  return (parseInt(first_word_int) + parseInt(second_word_int) == parseInt(target_word_int));

}

first_word = "acb", second_word = "cba", target_word = "cdb"

console.log(word_sum_equals(first_word, second_word, target_word));

first_word = "aaa", second_word = "a", target_word = "aab"

console.log(word_sum_equals(first_word, second_word, target_word));