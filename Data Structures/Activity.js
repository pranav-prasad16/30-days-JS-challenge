class Node {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) current = current.next;
    current.next = newNode;
  }
  removeNode() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      const temp = this.head.val;
      this.head = null;
      return temp;
    }
    let current = this.head;
    let previous = null;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    const temp = current.val;
    if (previous !== null) previous.next = null;
    return temp;
  }
  printList() {
    if (this.head === null) {
      console.log(`Empty list`);
      return;
    }
    let current = this.head;
    let listString = ``;
    while (current !== null) {
      listString += current.val + `->`;
      current = current.next;
    }
    console.log(listString + 'null');
  }
}

const newList = new LinkedList();
newList.printList();
newList.addNode(5);
newList.printList();
newList.addNode(10);
newList.printList();
newList.addNode(9);
newList.printList();
newList.addNode(30);
newList.printList();
newList.removeNode();
newList.printList();
newList.removeNode();
newList.printList();
newList.removeNode();
newList.printList();
newList.removeNode();
newList.printList();

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
    console.log(`${item} has been pushed in the stack`);
  }
  pop() {
    if (this.items.length === 0) {
      console.log(`Underflow`);
      return;
    }
    const lastElement = this.items[this.items.length - 1];
    this.items.pop();
    console.log(`${lastElement} has been popped out from the stack`);
    return lastElement;
  }
  peek() {
    if (this.items.length === 0) {
      return `The stack is empty`;
    }
    return this.items[this.items.length - 1];
  }
}

const str = 'hello';
let reverseStr = '';
const newStack = new Stack();
for (let index = 0; index < str.length; index++) {
  newStack.push(str[index]);
}
console.log(`${newStack.peek()} is the top-most element of the stack`);
for (let index = 0; index < str.length; index++) {
  const element = newStack.pop(str[index]);
  reverseStr += element;
}
console.log(`${newStack.peek()} is the top-most element of the stack`);
console.log(str);
console.log(reverseStr);

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
    console.log(`${item} has been enqueued in the queue`);
  }
  dequeue() {
    if (this.items.length === 0) {
      console.log(`Underflow`);
      return;
    }
    const lastElement = this.items[0];
    this.items.shift();
    console.log(`${lastElement} has been dequeued out from the queue`);
    return lastElement;
  }
  front() {
    if (this.items.length === 0) {
      return `The stack is empty`;
    }
    return this.items[0];
  }
}

const list = [1, 30, 8, 20, 100, 21, 88];
const newQueue = new Queue();
console.log('The queue is:', list);
list.forEach((element) => {
  newQueue.enqueue(element);
});
console.log(`${newQueue.front()} is the front-most element of the queue`);
newQueue.dequeue();
console.log(`${newQueue.front()} is the front-most element of the queue`);
newQueue.dequeue();
console.log(`${newQueue.front()} is the front-most element of the queue`);
newQueue.dequeue();
console.log(`${newQueue.front()} is the front-most element of the queue`);

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertVal(val) {
    const newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this._insertNode(this.root, newNode);
  }
  _insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) node.left = newNode;
      else this._insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this._insertNode(node.right, newNode);
    }
  }
  inOrderTraversal() {
    if (this.root === null) {
      console.log(`Empty binary tree`);
      return;
    }
    this._inOrderTraversalHelper(this.root);
  }
  _inOrderTraversalHelper(node) {
    if (node !== null) {
      this._inOrderTraversalHelper(node.left);
      console.log(node.val);
      this._inOrderTraversalHelper(node.right);
    }
  }
}

const newTree = new BinaryTree();
newTree.insertVal(60);
newTree.insertVal(70);
newTree.insertVal(10);
newTree.insertVal(89);
newTree.insertVal(57);
newTree.insertVal(49);
newTree.insertVal(150);
newTree.inOrderTraversal();
