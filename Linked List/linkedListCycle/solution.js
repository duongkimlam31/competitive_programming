class ListNode {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

function linkedListCycle(head) {
  let slow_ptr = head;
  let fast_ptr = head;

  while (fast_ptr !== null && fast_ptr.next !== null) {
    slow_ptr = slow_ptr.next;
    fast_ptr = fast_ptr.next.next;

    if (slow_ptr === fast_ptr) {
      return true;
    }
  }

  return false;
}