const node1 = {
  data: 345
}

const node2 = {
  data: 23
}

console.log(node1);

node1.next = node2;
console.log(node1);

//using class to design the structure of the nodes of a linke list
class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

let node3 = new Node("kimathi");

