function len_last_word(s){
  let len = 0;
  let saved_len = len;
  for (let i = 0; i < s.length; i++){
    if (s[i] != " "){
      len++;
    }
    else{
      if (len > 0){
        saved_len = len;
      }
      len = 0;
    }
  }
  if (len > 0){
    saved_len = len;
  }
  return saved_len;
}

s = "Hello World";
console.log(len_last_word(s));

s = "   fly me   to   the moon  ";
console.log(len_last_word(s));

s = "luffy is still joyboy";
console.log(len_last_word(s));