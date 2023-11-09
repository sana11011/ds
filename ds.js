function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function filterPeopleOver30(people) {
  return people.filter((person) => person.age > 30);
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

function uniqueElements(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  return [...new Set(combinedArray)];
}

let person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

let numbers = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(numbers));

let peopleArray = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 },
];
console.log(filterPeopleOver30(peopleArray));

let myStack = new Stack();
myStack.push("Item 1");
myStack.push("Item 2");
console.log(myStack.peek());

let myQueue = new Queue();
myQueue.enqueue("Person 1");
myQueue.enqueue("Person 2");
console.log(myQueue.front());

let text = "Hello, World!";
console.log(removeVowels(text));

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(uniqueElements(array1, array2));

console.log(person);
