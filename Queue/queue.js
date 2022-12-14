/**
 * Number of operations to be implemented on a queue
 * enqueue(element): add an element to the queue.
 * dequeue: remove the oldest element from the queue.
 * peek(): get the value of the front of queue without removing it.
 * isEmpty(): check if the queue is empty.
 * size(): get the number of elements in the queue.
 * print(): visualize the elements in the queue.
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.peek());
queue.enqueue(10);
queue.enqueue(5);
queue.enqueue(23);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.size());
queue.print();
