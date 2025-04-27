class ListNode {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  let ptr1 = list1;
  let ptr2 = list2;

  let dummyNode = new ListNode(-1, null);
  let ptr3 = dummyNode;

  while (ptr1 != null && ptr2 != null){
    if (ptr1.val < ptr2.val){
      ptr3.next = new ListNode(ptr1.val, null);
      ptr1 = ptr1.next;
    }
    else{
      ptr3.next = new ListNode(ptr2.val, null);
      ptr2 = ptr2.next;
    }
    ptr3 = ptr3.next;
  }
  if (ptr1 != null){
    ptr3.next = ptr1;
  }
  else{
    ptr3.next = ptr2;
  }
  return dummyNode.next;
}


list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
list2 = new ListNode(3, null);
console.log(mergeTwoLists(list1, list2));