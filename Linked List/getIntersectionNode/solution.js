class ListNode {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

function getIntersectionNode(headA, headB){
  let ptrA = headA;
  let ptrB = headB;

  let countA = 0;
  let countB = 0;

  while (ptrA != null){
    countA++;
    ptrA = ptrA.next;
  }

  while (ptrB != null){
    countB++;
    ptrB = ptrB.next;
  }

  ptrA = headA;
  ptrB = headB;
  let to_skip = 0;

  if (countA > countB){
    to_skip = countA - countB;
    while (to_skip > 0){
      to_skip--;
      ptrA = ptrA.next;
    }
  }
  if (countA < countB){
    to_skip = countB - countA;
    while (to_skip > 0){
      to_skip--;
      ptrB = ptrB.next;
    }
  }

  let intersection = null;
  while (ptrA != null && ptrB != null){
    if (ptrA == ptrB){
      intersection = ptrA;
      break;
    }
    ptrA = ptrA.next;
    ptrB = ptrB.next;
  }
  return intersection;
}