class Node {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  add(node){
    let ptr = this.head;
    if (ptr == null){
      this.head = node;
    }
    else{
      while (ptr.next != null){
        ptr = ptr.next;
      }
      ptr.next = node;
    }
  }
  remove_first(val){
    let ptr = this.head;

    if (ptr.val == val){
      this.head = this.head.next;
    }
    else{
      while (ptr.next != null){
        if (ptr.next.val == val){
          ptr.next = ptr.next.next;
          break;
        }
        ptr = ptr.next;
      }
    }
  }
  length(){
    let count = 0;
    let ptr = this.head;
    while (ptr != null){
      count++;
      ptr = ptr.next;
    }
    return count;
  }
  print_list(){
    let ptr = this.head;
    while (ptr != null){
      console.log(ptr.val);
      ptr = ptr.next;
    }
  }
}

let node_1 = new Node(1, null);
let node_2 = new Node(2, null);
let node_3 = new Node(3, null);
let list = new LinkedList();

list.add(node_1);
list.add(node_2);
list.add(node_3);
list.print_list();

console.log("Size: " + list.length());

list.remove_first(3);
list.print_list();