class N_aryTree{
  constructor(val, children){
    this.val = val;
    this.children = children;
  }
}

var maxDepth = function(root) {
  if (root == null){
      return 0;
  }
  if (root.children.length == 0){
      return 1;
  }
  else{
      let maximum = 0;
      for (let i = 0; i < root.children.length; i++){
          maximum = Math.max(maximum, 1 + maxDepth(root.children[i]));
      }
      return maximum;
  }
};