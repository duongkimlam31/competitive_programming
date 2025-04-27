class TreeNode{
  constructor(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function mirror(p, q){
  if (p == null && q == null){
    return true;
  }
  else if (p == null || q == null){
    return false;
  }
  else if (p.val != q.val){
    return false;
  }
  else{
    return true && mirror(p.left, q.right) && mirror(p.right, q.left);
  }
}

function isSymmetric(root){
  return mirror(root.left, root.right);
}