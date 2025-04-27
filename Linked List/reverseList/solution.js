class ListNode {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

// Iteration
function reverseList(head){
  let ptr = head;
  let reverse = null;
  while (ptr != null){
    let tmp = new ListNode(ptr.val, reverse);
    reverse = tmp;
    ptr = ptr.next;
  }
  return reverse;
}

// Recursion
// function reverseList(head){
//   if (head == null || head.next == null){
//     return head;
//   }
//   else{
//     let reverse = reverseList(head.next);
//     reverse.next = head;
//     head.next = null;
//   }
// }

list = new ListNode(1, new ListNode(2, new ListNode(4, null)));
console.log(reverseList(list));

list = new ListNode(1, null);
console.log(reverseList(list));