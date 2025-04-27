class BinaryNode{
  constructor(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q){
  if (p == null && q == null){
    return true;
  }
  if (p == null || q == null){
    return false;
  }
  else{
    return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}

