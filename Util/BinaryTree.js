class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Inorder Traversal (Left, Root, Right)
function inorder(node) {
  if (node !== null) {
    inorder(node.left);
    console.log(node.val);
    inorder(node.right);
  }
}

// Preorder Traversal (Root, Left, Right)
function preorder(node) {
  if (node !== null) {
    console.log(node.val);
    preorder(node.left);
    preorder(node.right);
  }
}

// Postorder Traversal (Left, Right, Root)
function postorder(node) {
  if (node !== null) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.val);
  }
}

// Example usage:
const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.right = new TreeNode('F');

// Example usage:
//       A
//      / \
//     B   C
//    / \   \
//   D   E   F

console.log("Inorder:");
inorder(root);      // D B E A C F

console.log("Preorder:");
preorder(root);     // A B D E C F

console.log("Postorder:");
postorder(root);    // D E B F C A
