function valid_parentheses(str){
  let stack = [];
  stack.push(str[0]);
  
  for (let i = 1; i < str.length; i++){
    let last_item = stack[stack.length - 1];
    if (last_item == "[" && str[i] == "]"){
      stack.pop();
    }
    else if (last_item == "{" && str[i] == "}"){
      stack.pop();
    }
    else if (last_item == "(" && str[i] == ")"){
      stack.pop();
    }
    else{
      stack.push(str[i]);
    }
  }

  return (stack.length == 0);
}

let s = "[]";
console.log(valid_parentheses(s));

s = "([{}])";
console.log(valid_parentheses(s));

s = "[(])";
console.log(valid_parentheses(s));