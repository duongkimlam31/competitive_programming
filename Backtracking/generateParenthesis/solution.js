function generateParenthesis(n){
  let res = [];

  function generateParenthesisHelper(n,s,stack){
    if (n == 0){
      res.push(s);
    }
    else{
      let tmp_stack;
      if (stack.length < n){
        tmp_stack = [...stack];
        tmp_stack.push("(");
        generateParenthesisHelper(n,s + "(", tmp_stack);
      }
      if (stack.length > 0){
        tmp_stack = [...stack];
        tmp_stack.pop();
        generateParenthesisHelper(n-1,s + ")", tmp_stack);
      }
    }
  }

  let stack = [];
  generateParenthesisHelper(n,"",stack);
  return res;
}


console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));