class ListNode {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

function removeElements(head, val){
  let dummyNode = new ListNode(-1, head);
  let ptr = dummyNode;

  while (ptr.next != null){
    if (ptr.next.val == val){
      ptr.next = ptr.next.next;
    }
    else{
      ptr = ptr.next;
    }
  }
  return dummyNode.next;
}