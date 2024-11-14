// 0; //two sum
// const twoSum = (sums, target) => {
//   let map = new Map();
//   for (let i = 0; i < sums.length; i++) {
//     num1 = sums[i];
//     num2 = target - num1;
//     if (map.has(num2)) {
//       return [i, map.get(num2)];
//     }
//     map.set(num1, i);
//   }

//   return [];
// };
// console.log(twoSum([2, 7, 11, 15], 9));

// 0.1; // Duplicate Integer
// const hasDuplicate = (arr) => {
//   let set = new Set();

//   for (let num of arr) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(num);
//   }
//   return false;
// };

// console.log(hasDuplicate([1, 1, 2, 3]));

// 0.2; //group anagrams

// const groupAnagrams = (strs) => {
//   let sorted = strs.map((str) => str.split("").sort().join(""));
//   let map = new Map();
//   for (let i = 0; i < sorted.length; i++) {
//     if (!map.has(sorted[i])) {
//       map.set(sorted[i], [strs[i]]);
//     } else {
//       map.get(sorted[i]).push(strs[i]);
//     }
//   }
//   console.log(map);
// };
// console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));

// 1; //reverse
// const reverse = (str) => {
//   // const strToArray = str.split("");
//   // strToArray.reverse();

//   // return strToArray.join("");
//   return str.split("").reverse().join("");
// };
// // const reverse = (str) => {
// //   let reversed = "";
// //   // for (let i = 0; i < str.length; i++) {
// //   //   reversed = str[i] + reversed;
// //   // }
// //   for (let char of str) {
// //     reversed = char + reversed;
// //   }
// //   return reversed;
// // };
// console.log(reverse("hello"));

// 2; // Palindrome
// const palindrome = (str) => {
//   const reversed = str.split("").reverse().join("");
//   // if (str === reversed) {
//   //   return true;
//   // }
//   // return false;
//   return str === reversed;
// };

// console.log(palindrome("kayak"));

// 4;
// const maxChar = (str) => {
//   let map = new Map();
//   let maxNum = 0;
//   let maxChar = "";
//   // for (let i = 0; i < str.length; i++) {
//   //   if (map.has(str[i])) {
//   //     map.set(str[i], map.get(str[i]) + 1);
//   //   } else {
//   //     map.set(str[i], 1);
//   //   }
//   // }
//   for (let char of str) {
//     if (map.has(char)) {
//       map.set(char, map.get(char) + 1);
//     } else {
//       map.set(char, 1);
//     }
//   }

//   for (const [key, value] of map) {
//     if (value > maxNum) {
//       maxNum = value;
//       maxChar = key;
//     }
//   }
//   return maxChar;
// };

// console.log(maxChar("abccccccccd"));

// 5; // Array Chunking

// const chunk = (arr, size) => {
//   const result = [];
//   let index = 0;

//   while (index < arr.length) {
//     const temArr = arr.slice(index, index + size);
//     result.push(temArr);
//     index += size;
//   }

//   return result;
// };

// console.log(chunk([1, 2, 3, 4, 5], 2));

// 6; //capitalize

// const capitalize = (str) => {
//   const tempArr = str.split(" ");
//   // let result = [];

//   // for (let word of tempArr) {
//   //   result.push(word[0].toUpperCase() + word.slice(1));
//   // }

//   // return result.join(" ");
//   return tempArr
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// };

// console.log(capitalize("this is ryan from taiwan"));

// 7; //anagrams
// function isAnagrams(stringA, stringB) {
//   let sorted1 = stringA.split("").sort().join("").toLowerCase();
//   let sorted2 = stringB.split("").sort().join("").toLowerCase();

//   return sorted1 === sorted2;
// }

// console.log(isAnagrams("RAIL SAFETY", "fairy tales"));

// 8; // number of vowels

// const vowels = (str) => {
//   const vowelsArr = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let char of str) {
//     if (vowelsArr.includes(char.toLowerCase())) count++;
//   }
//   return count;
// };

// console.log(vowels("Coding Money"));

// 9; //fizz buzz

// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(15);

// 10; //steps

// const steps = (n) => {
//   for (let row = 0; row < n; row++) {
//     let line = "";
//     for (let clo = 0; clo < n; clo++) {
//       if (clo <= row) {
//         line += "#";
//       } else {
//         line += " ";
//       }
//     }
//     console.log(line);
//   }
// };

// console.log(steps(3));

// 11; //Fibonacci

// const fibonacci = (n) => {
//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return fib;
// };

// console.log(fibonacci(7));

// Recursive Fibonacci Sequence
// const recursiveFibonacci = (n) => {
//   if (n < 2) {
//     return n;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// };
// console.log(recursiveFibonacci(6));

// 12; //Factorial of a Number

// const factorial = (n) => {
//   let fact = 1;

//   for (let i = n; i > 0; i--) {
//     fact *= i;
//   }
//   return fact;
// };

// console.log(factorial(4));

// Recursive Factorial of a Number

// const recursiveFactorial = (n) => {
//   if (n === 0) {
//     return 1;
//   }

//   return n * recursiveFactorial(n - 1);
// };
// console.log(recursiveFactorial(5));

// 13; //Power of Two
// const isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n /= 2;
//   }
//   return true;
// };

// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(5));

// write a function that takes a string as a param and returns the number of unique substrings in the string.
// If the input string is "abcab", the unique substrings are as follows: ["a", "b", "c", "ab", "bc", "ca", "abc", "bca", "cab", "abca", "bcab", "abcab"]

// const uniqueSubstring = (str) => {
//   const set = new Set();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       set.add(str.slice(i, j));
//     }
//   }

//   return set.size;
// };

// console.log(uniqueSubstring("abcab"));

// // 2 parameters - array - no size limit
// // return boolean true or false
// // nested for loop will have time complexity O(a*b) - cuz two inputs may have different size
// const arr1 = ["a", "b", "c", "x"];
// const arr2 = ["d", "e", "f"];
// function containsCommonItems(arr1, arr2) {
//   // loop through first array and create an object where properties === items in the array
//   let map = {};
//   for (let i of arr1) {
//     map[i] = true;
//   }

//   // loop through second array and check if each element is included in object's properties, if yes return true, other wise, false
//   for (let j of arr2) {
//     if (map[j]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(containsCommonItems(arr1, arr2));

// // better solution that uses build-in function
// const containsCommonItems2 = (arr1, arr2) => {
//   return arr1.some((item) => arr2.includes(item));
// };
// console.log(containsCommonItems2(arr1, arr2));

// const mergeSortedArrays = (arr1, arr2) => {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//     return "invalid input";
//   }
//   if (arr1.length < 1) {
//     return arr2;
//   }
//   if (arr2.length < 1) {
//     return arr1;
//   }

//   // for (let n of arr2) {
//   //   arr1.push(n);
//   // }
//   // return arr1.sort((a, b) => a - b);

//   const sortedArray = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       sortedArray.push(arr1[i]);
//       i++;
//     } else {
//       sortedArray.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i < arr1.length) {
//     sortedArray.push(arr1[i]);
//   }
//   if (j < arr2.length) {
//     sortedArray.push(arr2[j]);
//   }
//   return sortedArray;
// };

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   } // O(1)

//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     // console.log(value);
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     } // O(1) or O(n)
//     return undefined;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("apples", 9);
// console.log(myHashTable.get("grapes"));

// const recursiveNum = (arr) => {
//   const set = new Set();
//   for (let i of arr) {
//     if (!set.has(i)) {
//       set.add(i);
//     } else {
//       return i;
//     }
//   }
//   return undefined;
// };

// console.log(recursiveNum([1, 2, 1, 4]));

// 10 -> 5 -> 16
// let myLinkList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// SinglyLinked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check if index is out of bounds
    if (index < 0 || index >= this.length) {
      console.log("Index out of bounds");
      return this;
    }
    //check params
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    if (index === this.length - 1) {
      this.tail = leader;
      this.tail.next = null;
      this.length--;
      return this;
    } else {
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
    }

    return this;
  }
  reverse() {
    if (this.length === 1) return list;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      // the element's didn't change the position, just the pointer point to the opposite side
      let temp = second.next;
      second.next = first; //Reverse the link between second and first. Now second points back to first instead of forward.
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

// //DoublyLinkedList
// // class Node2 {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //     this.prev = null;
// //   }
// // }
// // class DoublyLinkedList {
// //   constructor(value) {
// //     this.head = {
// //       value: value,
// //       next: null,
// //       prev: null,
// //     };
// //     this.tail = this.head;
// //     this.length = 1;
// //   }
// //   append(value) {
// //     const newNode = new Node2(value);
// //     newNode.prev = this.tail;
// //     this.tail.next = newNode;
// //     this.tail = newNode;
// //     this.length++;
// //     return this;
// //   }
// //   prepend(value) {
// //     const newNode = new Node2(value);
// //     newNode.next = this.head;
// //     this.head.prev = newNode;
// //     this.head = newNode;
// //     this.length++;
// //     return this;
// //   }
// //   printList() {
// //     let arr = [];
// //     let currentNode = this.head;
// //     while (currentNode !== null) {
// //       arr.push(currentNode.value);
// //       currentNode = currentNode.next;
// //     }
// //     return arr;
// //   }
// //   insert(index, value) {
// //     //check params
// //     if (index >= this.length) {
// //       return this.append(value);
// //     }
// //     if (index === 0) {
// //       return this.prepend(value);
// //     }
// //     const newNode = new Node2(value);
// //     const leader = this.traverseToIndex(index - 1);
// //     const follower = leader.next;
// //     leader.next = newNode;
// //     newNode.prev = leader;
// //     newNode.next = follower;
// //     follower.prev = newNode;
// //     this.length++;
// //   }
// //   traverseToIndex(index) {
// //     let counter = 0;
// //     let currentNode = this.head;
// //     while (counter !== index) {
// //       currentNode = currentNode.next;
// //       counter++;
// //     }
// //     return currentNode;
// //   }
// //   remove(index) {
// //     //check params
// //     if (index === 0) {
// //       this.head = this.head.next;
// //       this.prev = null;
// //       this.length--;
// //       return this;
// //     }
// //     const leader = this.traverseToIndex(index - 1);
// //     if (index === this.length - 1) {
// //       this.tail = leader;
// //       this.tail.next = null;
// //       this.length--;
// //       return this;
// //     } else if (index >= this.length) {
// //       console.log("length exceeded");
// //     } else {
// //       const unwantedNode = leader.next;
// //       leader.next = unwantedNode.next;
// //       leader.next.prev = leader;
// //       this.length--;
// //     }

// //     return this;
// //   }
// // }
const list = new LinkedList(10);
// // const list = new DoublyLinkedList(10);
list.append(5);
list.append(77);
list.append(16);
// list.prepend(1);
// // list.insert(1, 200);
// // console.log(list.printList());
// // list.remove(4);
// console.log(list.printList());
list.reverse();
console.log(list.printList());

//Stack with LinkedList
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peak() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.bottom = newNode;
//       this.top = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//       // alternative
//       // newNode.next = this.top;
//       // this.top = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) return null;
//     if (this.length === 1) {
//       this.top = null;
//       this.bottom = null;
//       this.length = 0;
//     } else {
//       this.top = this.top.next;
//       this.length--;
//     }
//     return this;
//   }

//   isEmpty() {
//     if (this.length === 0) {
//       return true;
//     }
//     return false;
//   }
//   printList() {
//     let arr = [];
//     let currentNode = this.top;
//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return arr;
//   }
// }

// Stack with array
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.stackArr = [];
//     this.top = null;
//     this.bottom = null;
//   }

//   peek() {
//     if (!this.stackArr.length) return null;
//     return this.stackArr[this.stackArr.length - 1];
//   }

//   push(value) {
//     this.stackArr.push(value);
//   }

//   pop() {
//     this.stackArr.pop();
//   }

//   //isEmpty
// }

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(5);
// myStack.push(16);
// console.log(myStack);
// console.log(myStack.printList());
// console.log(myStack.peak());
// myStack.pop();
// console.log(myStack.printList());

// Queue
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     if (!this.first) {
//       return null;
//     } else {
//       return this.first;
//     }
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//   }
//   dequeue() {
//     if (!this.first) return null;
//     if (this.first === this.last) {
//       this.first = null;
//       this.last = null;
//     } else {
//       this.first = this.first.next;
//     }
//     this.length--;
//   }
//   printList() {
//     let arr = [];
//     let currentNode = this.first;
//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return arr;
//   }
//   //isEmpty;
// }

// const myQueue = new Queue();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// myQueue.enqueue("Samir");
// console.log(myQueue);
// console.log(myQueue.printList());
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue);
// console.log(myQueue.printList());

// BST
// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (!this.root) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while (true) {
//         if (value < currentNode.value) {
//           //left
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else {
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) return false;
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (value === currentNode.value) {
//         return currentNode;
//       }
//     }
//     return false;
//   }

//   // skip!
//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         //We have a match, get to work!

//         //Option 1: No right child:
//         if (currentNode.right === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {
//             //if parent > current value, make current left child a child of parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.left;

//               //if parent < current value, make left child a right child of parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.left;
//             }
//           }

//           //Option 2: Right child which doesnt have a left child
//         } else if (currentNode.right.left === null) {
//           currentNode.right.left = currentNode.left;
//           if (parentNode === null) {
//             this.root = currentNode.right;
//           } else {
//             //if parent > current, make right child of the left the parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.right;

//               //if parent < current, make right child a right child of the parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.right;
//             }
//           }

//           //Option 3: Right child that has a left child
//         } else {
//           //find the Right child's left most child
//           let leftmost = currentNode.right.left;
//           let leftmostParent = currentNode.right;
//           while (leftmost.left !== null) {
//             leftmostParent = leftmost;
//             leftmost = leftmost.left;
//           }

//           //Parent's left subtree is now leftmost's right subtree
//           leftmostParent.left = leftmost.right;
//           leftmost.left = currentNode.left;
//           leftmost.right = currentNode.right;

//           if (parentNode === null) {
//             this.root = leftmost;
//           } else {
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = leftmost;
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = leftmost;
//             }
//           }
//         }
//         return true;
//       }
//     }
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.remove(170);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(170));
// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

// Graph
// class Graph {
//   constructor() {
//     this.numberOfNodes = 0;
//     this.adjacentList = {};
//   }
//   addVertex(node) {
//     this.adjacentList[node] = [];
//     this.numberOfNodes++;
//   }
//   addEdge(node1, node2) {
//     //undirected Graph
//     this.adjacentList[node1].push(node2);
//     this.adjacentList[node2].push(node1);
//   }
//   showConnections() {
//     const allNodes = Object.keys(this.adjacentList);
//     for (let node of allNodes) {
//       let nodeConnections = this.adjacentList[node];
//       let connections = "";
//       let vertex;
//       for (vertex of nodeConnections) {
//         connections += vertex + " ";
//       }
//       console.log(node + "-->" + connections);
//     }
//   }
// }

// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("1", "0");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("6", "5");
// myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

// Recursion
// Factorial
// function findFactorialRecursive(number) {
//   // O(n)
//   //code here
//   if (number < 2) {
//     return 1;
//   }

//   return number * findFactorialRecursive(number - 1);
// }

// function findFactorialIterative(number) {
//   // O(n)
//   //code here
//   let answer = number;
//   for (let i = number - 1; i > 0; i--) {
//     answer *= i;
//   }
//   return answer;
// }

// console.log(findFactorialRecursive(3));
// console.log(findFactorialIterative(3));

// Fibonacci
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// function fibonacciIterative(n) {
//   // O(n)
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 2] + arr[i - 1];
//   }

//   return arr[n];
// }

// function fibonacciRecursive(n) {
//   // O(2^n)
//   if (n < 2) {
//     return n;
//   }

//   return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
// }
// console.log(fibonacciIterative(9));
// console.log(fibonacciRecursive(9));

// Bubble sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// // function bubbleSort(array) {
// //   for (let i = 0; i < array.length; i++) {
// //     for (let j = i + 1; j < array.length; j++) {
// //       if (array[i] > array[j]) {
// //         let temp = array[i];
// //         array[i] = array[j];
// //         array[j] = temp;
// //       }
// //     }
// //   }
// // }
// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (array[j] > array[j + 1]) {
//         //Swap the numbers
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
// }
// bubbleSort(numbers);
// console.log(numbers);

// // Selection sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     // Set current index as minimum
//     let minIndex = i;

//     // Check the rest of the array to find the smallest number
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j; // Update minIndex if a smaller number is found
//       }
//     }

//     // Swap the minimum value with the value at the current index
//     if (minIndex !== i) {
//       let temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
// }

// selectionSort(numbers);
// console.log(numbers);

// Insertion sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     if (array[i] < array[0]) {
//       // Move number to the first position
//       array.unshift(array.splice(i, 1)[0]);
//     } else {
//       // Find where number should go
//       for (let j = 1; j < i; j++) {
//         if (array[i] > array[j - 1] && array[i] < array[j]) {
//           // Move number to the right spot
//           array.splice(j, 0, array.splice(i, 1)[0]);
//         }
//       }
//     }
//   }

//   return array;
// }

// console.log(insertionSort(numbers));

// Merge sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array) {
//   if (array.length <= 1) {
//     return array; // Base case: if array has 1 or 0 elements, it's already sorted
//   }

//   // Divide the array into two halves
//   const middle = Math.floor(array.length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   // Recursively sort both halves
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Merge the two arrays in sorted order
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Concatenate any remaining elements
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// console.log(mergeSort(numbers));

// Quick sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(array, left, right) {
//   const len = array.length;
//   let pivot;
//   let partitionIndex;

//   if (left < right) {
//     pivot = right;
//     partitionIndex = partition(array, pivot, left, right);

//     //sort left and right
//     quickSort(array, left, partitionIndex - 1);
//     quickSort(array, partitionIndex + 1, right);
//   }
//   return array;
// }

// function partition(array, pivot, left, right) {
//   let pivotValue = array[pivot];
//   let partitionIndex = left;

//   for (let i = left; i < right; i++) {
//     if (array[i] < pivotValue) {
//       swap(array, i, partitionIndex);
//       partitionIndex++;
//     }
//   }
//   swap(array, right, partitionIndex);
//   return partitionIndex;
// }

// function swap(array, firstIndex, secondIndex) {
//   var temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// }

// //Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);

// *comparison sort*
// Insertion Sort: used for only with "few" almost sorted items
// Bubble Sort& Selection Sort: for teaching purpose
// Merge Sort: the best overall (TC:O(nlogn)), but don't use if you worry about memory (SC:O(n)). It's good if you have external memory to process sorting data.
// Quick Sort: TC:O(nlogn), SC(O(logn)), the down side is when you don't pick the pivot properly, the worst case of TC is O(n^2).
// *non-comparison sort*
// Radix Sort& Counting Sort: only work with numbers(integer!) that are within a certain range

// #1 - Sort 10 schools around your house by distance: xx Radix Sort or Counting Sort xx -> Insertion Sort

// #2 - eBay sorts listings by the current Bid amount: xx Quick Sort xx -> Radix Sort or Counting Sort (a bit on eBay usually numbers within a certain range)

// #3 - Sport scores on ESPN: xx Radix Sort or Counting Sort xx -> Quick Sort (there are lots of sports and scores)

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data: xx Quick Sort xx -> Merge Sort (not going to sort in the memory, will sort the data in external memory)

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews: xx Radix Sort or Counting Sort xx -> Insertion Sort

// #6 - Temperature Records for the past 50 years in Canada: Radix Sort or Counting Sort (if all integer); Quick Sort (decimal)

// #7 - Large user name database needs to be sorted. Data is very random: Merge Sort (if have enough memory); Quick Sort (if not too worry about the worst case and if I can pick a good pivot)

// #8 - You want to teach sorting for the first time: Bubble Sort; Selection Sort

//Key Distinction between DFS and BFS:
// BFS: Uses a queue to explore all nodes at the current level before moving to the next level. This can require storing all nodes at a given depth in memory, leading to O(n) space complexity in the worst case.
// DFS: The algorithm visits nodes along a path from the root to a leaf before exploring other branches, using a stack (or recursion). The space complexity is based on the depth of the tree, which is O(h), where h is the tree's height.

// BFS: Pros: [Shortest path, Closest nodes], Cons: [More memory]
// DFS: Pros: [Less memory, Does the path exist?], Cons: [Can get slow]

/* 
The terms in-order, pre-order, and post-order apply specifically to Depth-First Search (DFS) traversal in trees.
1. In-order Traversal (Left, Root, Right): In a binary search tree (BST), in-order traversal returns the nodes in ascending order.
2. Pre-order Traversal (Root, Left, Right): Pre-order is useful for creating a copy of the tree or for prefix expression notation.
3. Post-order Traversal (Left, Right, Root): Post-order is helpful for deleting or freeing nodes in a tree because it processes child nodes before their parent.

** Why These Apply Only to DFS **
* These traversal methods focus on recursively visiting each node's descendants before moving up or across the tree, which is characteristic of DFS.
* In Breadth-First Search (BFS), nodes are visited level by level from top to bottom, which doesn’t align with the concepts of “in-order,” “pre-order,” or “post-order,” since BFS is horizontal, not depth-based. Instead, BFS traversal is commonly referred to simply as level-order traversal.

*/

// *for finding shortest path(weighted graphs)*
// Bellman-Ford: can handle negative weight, but take long time to run O(n^2)
// Dijkstra: faster, but can't handle negative weight

//If you know a solution is not far from the root of the tree: breadth first search

//If the tree is very deep and solutions are rare: breadth first search

//If the tree is very wide: breadth first search xx -> DFS (a lot of nodes, so BFS will need too much memory)

//If solutions are frequent but located deep in the tree: depth first search
//Determining whether a path exists between two nodes: depth first search

//Finding the shortest path: breadth first search

// BFS & DFS
// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while (true) {
//         if (value < currentNode.value) {
//           //Left
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else {
//           //Right
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return null;
//   }
//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         //We have a match, get to work!

//         //Option 1: No right child:
//         if (currentNode.right === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {
//             //if parent > current value, make current left child a child of parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.left;

//               //if parent < current value, make left child a right child of parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.left;
//             }
//           }

//           //Option 2: Right child which doesnt have a left child
//         } else if (currentNode.right.left === null) {
//           currentNode.right.left = currentNode.left;
//           if (parentNode === null) {
//             this.root = currentNode.right;
//           } else {
//             //if parent > current, make right child of the left the parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.right;

//               //if parent < current, make right child a right child of the parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.right;
//             }
//           }

//           //Option 3: Right child that has a left child
//         } else {
//           //find the Right child's left most child
//           let leftmost = currentNode.right.left;
//           let leftmostParent = currentNode.right;
//           while (leftmost.left !== null) {
//             leftmostParent = leftmost;
//             leftmost = leftmost.left;
//           }

//           //Parent's left subtree is now leftmost's right subtree
//           leftmostParent.left = leftmost.right;
//           leftmost.left = currentNode.left;
//           leftmost.right = currentNode.right;

//           if (parentNode === null) {
//             this.root = leftmost;
//           } else {
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = leftmost;
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = leftmost;
//             }
//           }
//         }
//         return true;
//       }
//     }
//   }
//   //BFS, on the other hand, uses a queue that holds all the nodes at the current depth level before moving to the next level.
//   breadthFirstSearch() {
//     let currentNode = this.root;
//     let list = [];
//     let queue = [];
//     queue.push(currentNode);

//     while (queue.length > 0) {
//       currentNode = queue.shift();
//       // console.log(currentNode.value);
//       list.push(currentNode.value);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     return list;
//   }
//   breadthFirstSearchR(queue, list) {
//     if (!queue.length) {
//       return list;
//     }
//     let currentNode = queue.shift();
//     list.push(currentNode.value);
//     if (currentNode.left) {
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right) {
//       queue.push(currentNode.right);
//     }
//     return this.breadthFirstSearchR(queue, list);
//   }
//   //DFS uses a stack (either explicitly or through recursion) to keep track of the nodes to be visited. This stack only holds the nodes along the current path being explored.
//   DFSInOrder() {
//     return traverseInOrder(this.root, []);
//   }
//   DFSPostOrder() {
//     return traversePostOrder(this.root, []);
//   }
//   DFSPreOrder() {
//     return traversePreOrder(this.root, []);
//   }
// }

// function traverseInOrder(node, list) {
//   console.log(node.value);
//   if (node.left) {
//     traverseInOrder(node.left, list);
//   }
//   list.push(node.value);
//   if (node.right) {
//     traverseInOrder(node.right, list);
//   }
//   return list;
// }

// function traversePreOrder(node, list) {
//   console.log(node.value);
//   list.push(node.value);
//   if (node.left) {
//     traversePreOrder(node.left, list);
//   }

//   if (node.right) {
//     traversePreOrder(node.right, list);
//   }
//   return list;
// }

// function traversePostOrder(node, list) {
//   console.log(node.value);
//   if (node.left) {
//     traversePostOrder(node.left, list);
//   }

//   if (node.right) {
//     traversePostOrder(node.right, list);
//   }
//   list.push(node.value);
//   return list;
// }
// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.remove(170);
// JSON.stringify(traverse(tree.root));
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchR([tree.root], []));

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

// Memoization
// const memoizedAddTo80 = () => {
//   let cache = {};
//   return (n) => {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       console.log("long time");
//       cache[n] = n + 80;
//       return cache[n];
//     }
//   };
// };
// const memoized = memoizedAddTo80();

// console.log(memoized(5));
// console.log(memoized(5));
// console.log(memoized(6));

// fibonacci
// const fibonacci = (n) => {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(4));
// TC: O(2^n)

// fibonacci with dynamic programming
// 1.
// const fibonacci = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 1) return n;
//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   return memo[n];
// };
// console.log(fibonacci(50));

// // 2.
// const fibMaster = () => {
//   let cache = {};
//   return function fib(n) {
//     if (n in cache) return cache[n];
//     if (n <= 1) return n;
//     cache[n] = fib(n - 1) + fib(n - 2);
//     return cache[n];
//   };
// };

// const fasterFib = fibMaster();
// console.log(fasterFib(50));
// TC: O(n)
