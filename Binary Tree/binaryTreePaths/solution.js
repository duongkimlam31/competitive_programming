function listPaths(root, list, path){
  if (root.left == null && root.right == null){
    list.push(path + root.val);
  }
  else{
    let path_string = path + root.val + "->";
    if (root.left != null){
      listPaths(root.left,list,path_string);
    }
    if (root.right != null){
      listPaths(root.right,list,path_string);
    }
  }
}

function binaryTreePaths(root) {
  let list = [];
  listPaths(root, list, "");
  return list;
};