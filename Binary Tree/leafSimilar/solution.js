function getLeafSequence(root, arr){
  if (root.left == null && root.right == null){
      arr.push(root.val);
  }
  else{
      if (root.left != null){
          getLeafSequence(root.left, arr);
      }
      if (root.right != null){
          getLeafSequence(root.right, arr);
      }
  }
}

function leafSimilar(root1, root2) {
  let list1 = [];
  let list2 = [];
  getLeafSequence(root1, list1);
  getLeafSequence(root2, list2);
  
  return (JSON.stringify(list1) == JSON.stringify(list2));
};