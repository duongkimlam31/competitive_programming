class ListNode {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

function reverseList(head){
  if (head == null || head.next == null){
    return head;
  }
  else{
    let reverse = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reverse;
  }
}

function isPalindrome(head){
  let count = 0;
  let ptr = head;

  while (ptr != null){
    count++;
    ptr = ptr.next;
  }


  let ptr1 = head;
  let ptr2 = head;

  let tmp_count = Math.ceil(count/2);
  console.log(tmp_count);

  while (tmp_count > 0){
    ptr2 = ptr2.next;
    tmp_count--;  
  }

  ptr2 = reverseList(ptr2);

  tmp_count = count;
  while (ptr2 != null){
    if (ptr1.val != ptr2.val){
      return false;
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return true;
}