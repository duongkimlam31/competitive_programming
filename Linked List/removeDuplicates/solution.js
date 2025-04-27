class ListNode {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

function removeDuplicates(head){
  let seen = new Set();
  let dummyNode = new ListNode(-1, head);
  ptr = dummyNode;

  while (ptr.next != null){
    if (!seen.has(ptr.next.val)){
      seen.add(ptr.next.val);
      ptr = ptr.next;
    }
    else{
      ptr.next = ptr.next.next;
    }
  }
  return dummyNode.next;
}

list = new ListNode(1, new ListNode(2, new ListNode(2, null)));
console.log(removeDuplicates(list));
