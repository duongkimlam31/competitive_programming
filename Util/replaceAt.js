// Replace a character of a string with another character given an index

function replaceAt(s, index, c){
  new_s = s.slice(0, index) + c + s.slice(index + 1);;
  return new_s;
}