/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.total = 0;
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    this.total += val; //update total for faster average. 
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return null;

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (prevNode) {
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;

    const removedNode = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return false;

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    currentNode.val = val;

    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      this.unshift(val);
      return true;
    }

    if (idx === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    while (currentIndex !== idx) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    prevNode.next = newNode;
    newNode.next = currentNode;

    this.length++;

    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    return this.total / this.length || 0;
  }
}

module.exports = LinkedList;
