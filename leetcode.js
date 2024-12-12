// //53. Maximum Subarray
// https://www.youtube.com/watch?v=S-5nVIHXHv0
// const maxSubArray = (nums) => {
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// TC: O(n)
// SC: O(1)

// //283. Move Zeroes
// //https://www.youtube.com/watch?v=aayNRwUN3Do
// const moveZeroes = (nums) => {
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== 0) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//     }
//   }
//   return nums;
// };
// console.log(moveZeroes([0, 0, 1, 0, 3, 12]));
// TC: O(n);
// SC: O(1);

//189. Rotate Array
//https://www.youtube.com/watch?v=BHr381Guz3Y&ab_channel=NeetCode
// const rotate = (nums, k) => {
//   if (!Array.isArray(nums)) console.log("invalid input");
//   k = k % nums.length;
//   if (k === 0) return nums;

//   // Helper function to reverse part of the array
//   const reverse = (arr, start, end) => {
//     while (start < end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
//       start++;
//       end--;
//     }
//   };

//   // Reverse the entire array
//   reverse(nums, 0, nums.length - 1);
//   // Reverse the first k elements
//   reverse(nums, 0, k - 1);
//   // Reverse the rest of the array
//   reverse(nums, k, nums.length - 1);
//   return nums;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2));
// TC: O(n) We reverse the array three times, but each reversal is O(n).
// SC: O(1) This solution rotates the array in place without using extra space.
// way2:
// const rotate = (nums, k) => {
//   let newK = k % nums.length;
//   nums.unshift(...nums.splice( - newK)); // Move last newK elements to the front
// };
// TC: O(n);
// SC: O(k);

//232. Implement Queue using Stacks
//https://www.youtube.com/watch?v=d0h0E8CuibU&ab_channel=AndyGala
// class MyQueue {
//   constructor() {
//     this.pushStack = [];
//     this.popStack = [];
//   }
//   peek() {
//     if (!this.popStack.length) {
//       for (let i = this.pushStack.length - 1; i >= 0; i--) {
//         this.popStack.push(this.pushStack[i]);
//       }
//       this.pushStack = [];
//     }
//     return this.popStack[this.popStack.length - 1];
//   }
//   push(value) {
//     this.pushStack.push(value);
//   }
//   pop() {
//     if (!this.popStack.length) {
//       for (let i = this.pushStack.length - 1; i >= 0; i--) {
//         this.popStack.push(this.pushStack[i]);
//       }
//       this.pushStack = [];
//     }

//     return this.popStack.pop();
//   }
//   empty() {
//     // if (this.pushStack.length === 0 && this.popStack.length === 0) {
//     //   return true;
//     // } else {
//     //   return false;
//     // }
//     return !this.pushStack.length && !this.popStack.length;
//   }
// }

// const que = new MyQueue();
// que.push(1);
// que.push(2);
// console.log(que);
// console.log(que.peek());
// console.log(que);
// console.log(que.pop());
// console.log(que);
// console.log(que.empty());

// TC for push: O(1).
// TC for peek: O(1) amortized (O(n) in the worst case).
// TC for pop: O(1) amortized (O(n) in the worst case).
// TC for empty: O(1).
// SC for the queue: O(n).

// 98. Validate Binary Search Tree
// https://www.youtube.com/watch?v=i1m-rywzw68&ab_channel=AlgoJS
// const isValidBST = function (root) {
//   // Helper function that checks the validity of the BST
//   function validate(node, min, max) {
//     // Base case: An empty node (null) is a valid BST
//     if (!node) return true;

//     // The current node's value must be within the range (min < node.val < max)
//     if (node.val <= min || node.val >= max) {
//       return false;
//     }

//     // Recursively validate the left subtree with an updated max
//     // and the right subtree with an updated min
//     return (
//       validate(node.left, min, node.val) && validate(node.right, node.val, max)
//     );
//   }

//   // Start the validation from the root with infinite boundaries
//   return validate(root, -Infinity, Infinity);
// };

//Time Complexity:
// O(n) where n is the number of nodes in the tree. We visit each node exactly once.
// Space Complexity:
// O(h) where h is the height of the tree. In the worst case (for a skewed tree), the recursion stack will take O(n) space.

// 198. House Robber
// https://www.youtube.com/watch?v=Q_nBUVnfcD8
// https://www.youtube.com/watch?v=VXqUQYGMnQg&ab_channel=NikhilLohia
// const rob = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   let dp = [];
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
//   }
//   return dp[dp.length - 1];
// };
// // TC: O(n)
// // SC: O(n)
// console.log(rob([2, 7, 3, 1, 4, 2, 1, 8]));

// // Space-Optimized Solution (O(1) space complexity):
// const rob2 = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   let prev2 = nums[0];
//   let prev1 = Math.max(nums[0], nums[1]);

//   for (let i = 2; i < nums.length; i++) {
//     let current = Math.max(prev2 + nums[i], prev1);
//     prev2 = prev1;
//     prev1 = current;
//   }
//   return prev1;
// };
// TC: O(n)
// SC: O(1)
// console.log(rob2([2, 7, 3, 1, 4, 2, 1, 8]));

// 70. Climbing Stairs
// https://www.youtube.com/watch?v=Ifek5h5VqJw
// https://www.youtube.com/watch?v=Y0lT9Fck7qI
// var climbStairs = function (n) {
//   if (n <= 2) return n;
//   let dp = [];
//   dp[1] = 1;
//   dp[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[dp.length - 1];
// };
// TC: O(n)
// SC: O(n)
// var climbStairs = function (n) {
//   if (n <= 2) return n;
//   let first = 1;
//   let second = 2;
//   for (let i = 3; i <= n; i++) {
//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   return second;
// };
// console.log(climbStairs(6));
// TC: O(n)
// SC: O(1)

// 121. Best Time to Buy and Sell Stock
// https://www.youtube.com/watch?v=1pkOgXD63yU&t=345s&ab_channel=NeetCode
// var maxProfit = function (prices) {
//   if (prices.length <= 1) return 0;
//   let left = 0; // left = buy, right = sell
//   let right = 1;
//   let maxProfit = 0;
//   while (right < prices.length) {
//     if (prices[right] > prices[left]) {
//       maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
//     } else if (prices[right] < prices[left]) {
//       left = right;
//     }
//     right += 1;
//   }

//   return maxProfit;
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// TC: O(n)
// SC: O(1)

// 287. Find the Duplicate Number
// var findDuplicate = function (nums) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], nums[i]);
//     } else {
//       return map.get(nums[i]);
//     }
//   }
// };
// console.log(findDuplicate([1, 3, 4, 2, 2]));
// TC: O(n)
// SC: O(n)

// Floyd's Cycle (hard)
// https://www.youtube.com/watch?v=wjYnzkAhcNk
// var findDuplicate = function (nums) {
//   let slow = nums[0];
//   let fast = nums[0];

//   // Phase 1: Detect the cycle
//   do {
//     slow = nums[slow]; // Move slow by 1 step
//     fast = nums[nums[fast]]; // Move fast by 2 steps
//   } while (slow !== fast);

//   // Phase 2: Find the start of the cycle (duplicate number)
//   slow = nums[0]; // Reset slow to the start
//   while (slow !== fast) {
//     slow = nums[slow]; // Move both pointers by 1 step
//     fast = nums[fast];
//   }

//   return slow;
// };
// TC: O(n)
// SC: O(1)

// Arrays & Hashing
//217. Contains Duplicate
// const containsDuplicate = (nums) => {
//   const set = new Set();

//   for (let i of nums) {
//     if (!set.has(i)) {
//       set.add(i);
//     } else {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(containsDuplicate([1, 2, 3, 1]));
// TC: O(n)
// SC: O(n)

// 242. Valid Anagram
//1.
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   s = s.toLowerCase().split("").sort().join("");
//   t = t.toLowerCase().split("").sort().join("");
//   return s === t;
// };
// // TC: O(nlogn)
// // SC: O(1)
// //2.
// var isAnagram = function(s, t) {
//   if (s.length !== t.length) return false;

//   const counts = new Array(26).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     counts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//   }

//   return counts.every(count => count === 0);
// };
// console.log(isAnagram("anagram", "nagaram"));
// // TC: O(n)
// // SC: O(1)

// 1. Two Sum
// var twoSum = function (nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     let num2 = target - num1;
//     if (map.has(num2)) {
//       return [map.get(num2), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// };
// console.log(twoSum([2, 7, 11, 15], 9));
// TC: O(n)
// SC: O(n)

// 49. Group Anagrams
// var groupAnagrams = function (strs) {
//   const map = {};
//   let sortedStrs = strs.map((str) => str.split("").sort().join(""));
//   for (let i = 0; i < strs.length; i++) {
//     if (!map[sortedStrs[i]]) {
//       map[sortedStrs[i]] = [strs[i]];
//     } else {
//       map[sortedStrs[i]].push(strs[i]);
//     }
//   }
//   return Object.values(map);
// };
// use new Map()
// function groupAnagrams(strs) {
//   const map = new Map();

//   // Create sorted keys for each string
//   const newArr = strs.map(s => s.split('').sort().join(''));

//   // Populate the map
//   for (let i = 0; i < strs.length; i++) {
//       if (map.has(newArr[i])) {
//           map.get(newArr[i]).push(strs[i]);
//       } else {
//           map.set(newArr[i], [strs[i]]); // Initialize as an array
//       }
//   }

//   // Return grouped anagrams as an array of arrays
//   return Array.from(map.values());
// }
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// TC: O(n * klogk) n: n strings; k: Sorting a string of average length k
// SC: O(n * k) n: n strings; k: k keys

// 347. Top K Frequent Elements (Bucket Sort)
// https://www.youtube.com/watch?v=87f9RVChpzY&ab_channel=AlgoJS
// var topKFrequent = function (nums, k) {
//   const freqMap = new Map();
//   const bucket = [];
//   const result = [];

//   for (let num of nums) {
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
//   }
//   for ([key, value] of freqMap) {
//     if (!bucket[value]) {
//       bucket[value] = [key];
//     } else {
//       bucket[value].push(key);
//     }
//   }
//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i]) result.push(...bucket[i]);
//     if (result.length === k) break;
//   }
//   return result;
// };
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// TC: O(n)
// SC: O(n)

// 271. Encode and Decode Strings
// easy way
// const encode = (strs) => {
//   if (!strs.length) return null;
//   return strs.join("-encodeStr-");
// };
// const decode = (str) => {
//   if (str === null) return [];
//   return str.split("-encodeStr-");
// };

// GPT - better
// const encode = (strs) => {
//   if (!strs.length) return null;
//   return strs.map((s) => `${s.length}#${s}`).join("");
// };

// const decode = (str) => {
//   if (str === null) return [];

//   const decoded = [];
//   let i = 0;

//   while (i < str.length) {
//     // Find the delimiter position to get the length of the next string
//     const j = str.indexOf("#", i);
//     const length = parseInt(str.slice(i, j));
//     // Extract the string of that length
//     const s = str.slice(j + 1, j + 1 + length);
//     decoded.push(s);
//     // Move the index to the next part of the encoded string
//     i = j + 1 + length;
//   }

//   return decoded;
// };
// // TC: O(n)
// // SC: O(n)
// console.log(decode(encode(["leet", "code", "love", "you"])));

// 238. Product of Array Except Self
// O(n) -> https://www.youtube.com/watch?v=G9zKmhybKBM&ab_channel=NikhilLohia
// O(1) -> https://www.youtube.com/watch?v=bNvIQI2wAjk&t=350s&ab_channel=NeetCode
// var productExceptSelf = function (nums) {
//   let length = nums.length;
//   let prefix = new Array(length);
//   let postfix = new Array(length);
//   prefix[0] = 1;
//   postfix[length - 1] = 1;
//   let result = [];

//   for (let i = 1; i < length; i++) {
//     prefix[i] = prefix[i - 1] * nums[i - 1];
//   }

//   for (let i = length - 2; i >= 0; i--) {
//     postfix[i] = postfix[i + 1] * nums[i + 1];
//   }

//   for (let i = 0; i < length; i++) {
//     result[i] = prefix[i] * postfix[i];
//   }

//   return result;
// };
// console.log(productExceptSelf([1, 2, 3, 4]));
// TC: O(n)
// SC: O(n)

// var productExceptSelf = function (nums) {
//   let result = [];
//   result[0] = 1;
//   let postNum = 1;
//   // store prefix into the result array
//   for (let i = 1; i < nums.length; i++) {
//     result[i] = result[i - 1] * nums[i - 1];
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] = result[i] * postNum;
//     postNum *= nums[i];
//   }

//   return result;
// };
// console.log(productExceptSelf([1, 2, 3, 4]));
// TC: O(n)
// SC: O(1) (disregarding the output array 'result')

// 128. Longest Consecutive Sequence
// https://www.youtube.com/watch?v=W61fIEQ9KhE&ab_channel=AlgoJS
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;

//   const numSet = new Set(nums);
//   let longestStreak = 0;

//   for (const num of numSet) {
//     // Check if it's the start of a sequence
//     if (!numSet.has(num - 1)) {
//       let currentNum = num;
//       let currentStreak = 1;

//       // Count the sequence length
//       while (numSet.has(currentNum + 1)) {
//         currentNum += 1;
//         currentStreak += 1;
//       }

//       // Update longest streak if current streak is longer
//       longestStreak = Math.max(longestStreak, currentStreak);
//     }
//   }

//   return longestStreak;
// };
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// p.s. Streak1: 1->2->3->4, Streak2: 100, Streak3: 200
// TC: O(n)
// SC: O(n)

// 125. Valid Palindrome
// Way1
// var isPalindrome = function (s) {
//   if (s.length === 0) return true;
//   let cleanS = s
//     .toLowerCase()
//     .split("")
//     .filter((ch) => {
//       const code = ch.charCodeAt(0);
//       return (
//         (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
//         (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
//       );
//     })
//     .join("");

//   return cleanS === cleanS.split("").reverse().join("");
// };
// console.log(isPalindrome("0P"));
// TC: O(n)
// SC: O(n)
// Way2
// var isPalindrome = function (s) {
//   if (s.length === 0) return true;
//   const regex = /[^a-zA-Z0-9]/g;
//   const cleanStr = s.replace(regex, "").toLowerCase();
//   let left = 0;
//   let right = cleanStr.length - 1;
//   while (left < right) {
//     if (cleanStr[left] === cleanStr[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// TC: O(n)
// SC: O(n)

// The 0/1 Knapsack Problem
// https://www.youtube.com/watch?v=xCbYmUPvc2Q&ab_channel=BackToBackSWE
// https://www.youtube.com/watch?v=cJ21moQpofY&ab_channel=WilliamFiset
// bottom - up
// const knapsack = (weight, profit, capacity) => {
//   const n = weight.length;
//   const dp = Array(n + 1)
//     .fill(0)
//     .map(() => Array(capacity + 1).fill(0));

//   for (let i = 1; i <= n; i++) {
//     // Get the weight and value of the item
//     let w = weight[i - 1];
//     let v = profit[i - 1];

//     for (let j = 0; j <= capacity; j++) {
//       if (w <= j) {
//         // Max((include the current item + previous items), exclude the current item)
//         dp[i][j] = Math.max(v + dp[i - 1][j - w], dp[i - 1][j]);
//       } else {
//         // Exclude the current item
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }

//   return dp[n][capacity];
// };
// console.log(knapsack([4, 5, 1], [1, 2, 3], 4));
// TC: O(n*w)
// SC: O(n*w)

// Recursion Approach
// https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10
// const knapsack = (weight, profit, capacity, n) => {
//   // Base case
//   if (capacity === 0 || n === 0) return 0;

//   // If weight of the nth item is more than Knapsack capacity, then this item cannot be included in the optimal solution

//   if (weight[n - 1] > capacity) {
//     return knapsack(weight, profit, capacity, n - 1);
//   } else {
//     // Return the maximum of two cases:
//     // (1) nth item included
//     // (2) not included
//     return Math.max(
//       profit[n - 1] + knapsack(weight, profit, capacity - weight[n - 1], n - 1),
//       knapsack(weight, profit, capacity, n - 1)
//     );
//   }
// };
// console.log(knapsack([4, 5, 1], [1, 2, 3], 4, 3));
// TC: O(2^n)
// SC: O(2^n)

// 15. 3Sum
// use too much space
// var threeSum = function (nums) {
//   const set = new Set();
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum > 0) {
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         set.add(JSON.stringify([nums[i], nums[left], nums[right]]));
//         // JSON.stringify([-1, 0, 1]) results in "[-1,0,1]".
//         // JSON.stringify([0, 1, -1]) also results in "[-1,0,1]".
//         // This is because JSON serialization maintains the order of elements within an array.
//         right--;
//         left++;
//       }
//     }
//   }
//   return Array.from(set).map(JSON.parse);
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// TC: O(n^2)
// SC: O(n^2)
// handle duplicates
// https://www.youtube.com/watch?v=5KeHApBsxG4&ab_channel=JSDev
// var threeSum = function (nums) {
//   const result = [];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     // Skip duplicate values for the first element
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum > 0) {
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         result.push([nums[i], nums[left], nums[right]]);
//         left++;

//         // Skip duplicate values for the second element
//         while (left < right && nums[left] === nums[left - 1]) left++;
//         // https://www.youtube.com/watch?v=jzZsG8n2R9A
//         // *can only check left, explain for 10:00*
//       }
//     }
//   }
//   return result;
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// TC: O(n^2)
// SC: O(1)(not counting the output space)

// 11. Container With Most Water
// #Brute force
// var maxArea = function (height) {
//   let max = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     let currentHeight = height[i];
//     for (let j = i + 1; j < height.length; j++) {
//       let right = height[j];
//       let area = 0;
//       if (currentHeight > right) {
//         area = right * (j - i);
//         max = Math.max(area, max);
//       } else {
//         area = currentHeight * (j - i);
//         max = Math.max(area, max);
//       }
//     }
//   }
//   return max;
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// TC: O(n^2)
// SC: O(1)

//https://www.youtube.com/watch?v=UuiTKBwPgAo&ab_channel=NeetCode
// var maxArea = function (height) {
//   let max = 0;
//   let left = 0;
//   let right = height.length - 1;
//   while (left < right) {
//     let area = (right - left) * Math.min(height[left], height[right]);
//     max = Math.max(area, max);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return max;
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// TC: O(n^2)
// SC: O(1)

// 3. Longest Substring Without Repeating Characters
// https://www.youtube.com/watch?v=i1edO6FkGm0&t=172s
// var lengthOfLongestSubstring = function (s) {
//   const set = new Set();
//   let maxValue = 0;
//   let left = 0;
//   let right = 0;
//   while (right < s.length) {
//     if (!set.has(s[right])) {
//       set.add(s[right]);
//       maxValue = Math.max(maxValue, set.size);
//       right++;
//     } else {
//       // delete element at left pointer
//       set.delete(s[left]);
//       left++;
//     }
//   }
//   return maxValue;
// };
// console.log(lengthOfLongestSubstring("abcabcbb"));
// TC: O(n)
// SC: O(n)

// 727. Minimum Window Subsequence (hard)
// https://www.youtube.com/watch?v=jSto0O4AJbM
// const minWindow = (s, t) => {
//   if (t.length === 0) return "";
//   const window = new Map();
//   const countT = new Map();

//   for (let i = 0; i < t.length; i++) {
//     countT.set(t[i], (countT.get(t[i]) || 0) + 1);
//   }

//   let have = 0;
//   let need = countT.size;
//   let left = 0;
//   let right = 0;
//   let result = [-1, -1];
//   let resultLen = Infinity;
//   while (right < s.length) {
//     let current = s[right];
//     window.set(current, (window.get(current) || 0) + 1);
//     if (countT.has(current) && window.get(current) === countT.get(current)) {
//       have++;
//     }
//     // Update our result when we have a valid window
//     while (have === need) {
//       if (right - left + 1 < resultLen) {
//         result = [left, right];
//         resultLen = right - left + 1;
//       }
//       // Pop from the left of window (Shrink the window from the left)
//       window.set(s[left], window.get(s[left]) - 1);
//       if (countT.has(s[left]) && window.get(s[left]) < countT.get(s[left])) {
//         have -= 1;
//       }
//       left++;
//     }
//     right++;
//   }
//   const [l, r] = result;
//   return s.slice(l, r + 1);
// };
// console.log(minWindow("OUZODYXAZV", "XYZ"));
// TC: O(n)
// SC: O(n)

// 20. Valid Parentheses
// var isValid = function (s) {
//   if (s.length === 0) return true;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
//       stack.push(s[i]);
//     } else {
//       if (s[i] === "}" && stack[stack.length - 1] === "{") {
//         stack.pop();
//       } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
//         stack.pop();
//       } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
//         stack.pop();
//       } else {
//         // If it does not match or stack is empty (meaning there's no opening bracket to match with), push the closing bracket onto stack.
//         stack.push(s[i]);
//       }
//     }
//   }
//   return stack.length === 0;
// };
// console.log(isValid("]"));
// TC: O(n)
// SC: O(n)

// 153. Find Minimum in Rotated Sorted Array
// https://www.youtube.com/watch?v=xGbGYLFwNyg
// var findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return nums[left];
// };
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// TC: O(logn)
// SC: O(1)

// 33. Search in Rotated Sorted Array
// https://www.youtube.com/watch?v=2bJLNgYrHR8
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     // Check if mid element is the target
//     if (nums[mid] === target) return mid;

//     // Determine which half is sorted
//     if (nums[left] <= nums[mid]) {
//       // Left half is sorted
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1; // Target is in the left sorted half
//       } else {
//         left = mid + 1; // Target is in the right half
//       }
//     } else {
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1; // Target is in the right sorted half
//       } else {
//         right = mid - 1; // Target is in the left half
//       }
//     }
//   }
//   return -1;
// };
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// TC: O(logn)
// SC: O(1)

// 206. Reverse Linked List
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// function arrayToLinkedList(arr) {
//   let dummyHead = new ListNode();
//   let current = dummyHead;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummyHead.next;
// }

// function linkedListToArray(head) {
//   let result = [];
//   let current = head;
//   while (current !== null) {
//     result.push(current.val);
//     current = current.next;
//   }
//   return result;
// }

// **the answer is this function**
// var reverseList = function (head) {
//   let prev = null; // Tracks the previous node (will become the new head)
//   let curr = head; // Starts at the head of the list

//   while (curr !== null) {
//     let next = curr.next; // Temporarily store the next node
//     curr.next = prev; // Reverse the pointer of the current node
//     prev = curr; // Move prev up one node
//     curr = next; // Move curr up one node
//   }

//   return prev; // prev will be the new head of the reversed list
// };

// // Convert array to linked list, reverse it, then convert back to array
// const inputArray = [1, 2, 3, 4, 5];
// const linkedList = arrayToLinkedList(inputArray);
// const reversedLinkedList = reverseList(linkedList);
// console.log(linkedListToArray(reversedLinkedList)); // Output should be [5, 4, 3, 2, 1]
// TC: O(n)
// SC: O(1)

// 21. Merge Two Sorted Lists
// https://www.youtube.com/watch?v=cXxf46pbvOI
// var mergeTwoLists = function (list1, list2) {
//   let dummy = new ListNode();
//   let current = dummy;
//   while (list1 !== null && list2 !== null) {
//     if (list1.val <= list2.val) {
//       current.next = list1;
//       list1 = list1.next;
//     } else {
//       current.next = list2;
//       list2 = list2.next;
//     }
//     current = current.next;
//   }

//   // Append the remaining nodes in l1 or l2, if any
//   if (list1 !== null) current.next = list1;
//   if (list2 !== null) current.next = list2;

//   return dummy.next;
// };
// TC: O(n+m)
// SC: O(1)

// 143. Reorder List
// https://www.youtube.com/watch?v=B1SM38reP28
// var reorderList = function (head) {
//   if (!head || !head.next) return; // Edge case: empty list or single node

//   // Step 1: Find the middle of the list
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next; // Move slow one step
//     fast = fast.next.next; // Move fast two steps
//   }

//   // Step 2; Break linked list
//   let curr = slow.next; // ps. the second half list not starts form slow
//   slow.next = null;

//   // Step 3: Reverse the second half of the list
//   let prev = null;

//   while (curr) {
//     let nextTemp = curr.next; // Store next node
//     curr.next = prev; // Reverse the link
//     prev = curr; // Move prev one step
//     curr = nextTemp; // Move curr one step
//   }

//   // Step 4: Merge the two halves
//   let first = head;
//   let second = prev; // Second half is now reversed

//   while (second) {
//     let temp1 = first.next; // Store next node of the first half
//     let temp2 = second.next; // Store next node of the second half

//     first.next = second; // Link first node to second
//     second.next = temp1; // Link second node to the next first node

//     first = temp1; // Move first pointer
//     second = temp2; // Move second pointer
//   }
// };
// TC: O(n)
// SC: O(1)

// 19. Remove Nth Node From End of List
// https://www.youtube.com/watch?v=XVuQxVej6y8
// var removeNthFromEnd = function (head, n) {
//   let dummy = new ListNode();
//   dummy.next = head;
//   let left = dummy;
//   let right = head;

//   while (n > 0 && right) {
//     right = right.next;
//     n--;
//   }

//   while (right) {
//     left = left.next;
//     right = right.next;
//   }

//   // delete
//   left.next = left.next.next;

//   return dummy.next;
// };
// TC: O(L) where L is the length of the list.
// SC: O(1)

// 141. Linked List Cycle
// https://www.youtube.com/watch?v=gBTe7lFR3vc
// var hasCycle = function (head) {
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (fast === slow) return true;
//   }
//   return false;
// };
// TC: O(n)
// SC: O(1)

// 23. Merge k Sorted Lists (hard)
// https://www.youtube.com/watch?v=q5a5OiGbT6Q
// var mergeKLists = function (lists) {
//   if (!lists || lists.length === 0) return null;

//   while (lists.length > 1) {
//     // Relies on shift() and push() for pairing lists. This approach works well but can slightly impact performance since shift() re-indexes the entire array every time.
//     // let list1 = lists.shift();
//     // let list2 = lists.shift();

//     let mergedLists = []; // Store merged pairs of lists
//     for (let i = 0; i < lists.length; i += 2) {
//       let list1 = lists[i];
//       let list2 = lists[i + 1] || null; // Handle the case where we have an odd number of lists
//       // Setting list2 to null keeps it clear that you’re working with lists, and null better implies an "absent" list compared to undefined, which might imply an uninitialized or unintended state.
//       let merged = mergeTwoLists(list1, list2);
//       mergedLists.push(merged);
//     }

//     lists = mergedLists; // Replace original lists with merged lists
//   }

//   return lists[0];
// };

// // helper function
// const mergeTwoLists = function (l1, l2) {
//   let dummy = new ListNode();
//   let current = dummy;
//   while (l1 !== null && l2 !== null) {
//     if (l1.val <= l2.val) {
//       current.next = l1;
//       l1 = l1.next;
//     } else {
//       current.next = l2;
//       l2 = l2.next;
//     }
//     current = current.next;
//   }

//   if (l1 !== null) current.next = l1;
//   if (l2 !== null) current.next = l2;

//   return dummy.next;
// };
// TC: O(Nlogk) where 𝑁 is the total number of nodes across all lists and 𝑘 is the number of lists.
// SC: O(1)

// 226. Invert Binary Tree
// Recursive Solution (DFS)
// https://www.youtube.com/watch?v=OnSn2XEQ4MY
// var invertTree = function (root) {
//   if (!root) return null;

//   // swap the children
//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;

//   invertTree(root.left);
//   invertTree(root.right);

//   return root;
// };
// TC: O(n) (p.s. see the explanation from line 1142)
// SC: O(h): This is the height of the tree due to the recursive call stack. In the worst case (a highly unbalanced tree that resembles a linked list), the space complexity is O(n). In the best case (a balanced binary tree), the space complexity is O(logn).

// Iterative Solution (Using a Queue) (BFS)
// var invertTree = function (root) {
//   if (root === null) return null;

//   const queue = [root];

//   while (queue.length > 0) {
//     const node = queue.shift();

//     // Swap the left and right children
//     const temp = node.left;
//     node.left = node.right;
//     node.right = temp;

//     // Add children to queue if they exist
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }

//   return root;
// };
// TC: O(n)
// SC: O(w), where w is the maximum width of the tree. This is because, in the worst case, the queue will hold all the nodes at the maximum level of the tree. For a balanced binary tree, this width is approximately n/2, leading to a space complexity of O(n).

/* Q: I thought Recursive's Time Complexity always 2^n? 
Not necessarily! Returning a recursive function itself doesn’t automatically imply O(n2) or exponential time complexity. The time complexity of a recursive function depends on:
1. The number of recursive calls per function invocation.
2. The amount of work done at each function call.

Example 1: Linear Recursion (O(n))
In functions that return a recursive call only once, the complexity is often linear, O(n), because each recursive call does a constant amount of work, and there is only one recursive branch. For example:

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
Here, there’s a single recursive call per function call, so the complexity is O(n)

Example 2: Exponential Recursion (O(2^n))
When each function call makes two recursive calls (like in the Fibonacci sequence), the complexity becomes exponential because the number of calls grows as a power of 2. For example:

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
This function has O(2^n) complexity because each call generates two additional recursive calls, leading to exponential growth.

Example 3: Quadratic Time Complexity (O(n^2))
Quadratic complexity O(n 2) can occur in recursive functions where each call performs a linear amount of work while also making recursive calls. A classic example is a function with nested loops in recursion, or functions that modify a structure like an array and make recursive calls across multiple elements.

Example with two recursive branches with overlapping work, generating a roughly quadratic complexity:
function sumToN(n) {
  if (n <= 1) return n;
  
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i; // Linear amount of work
  }
  return sum + sumToN(n - 1); // Recursive call
}
*/

// 104. Maximum Depth of Binary Tree (3 ways)
// https://www.youtube.com/watch?v=hTM3phVI6YQ&t=551s
// Recursive Solution (DFS)
// var maxDepth = function (root) {
//   if (!root) return 0;

//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };
// TC: O(n)
// SC: O(h) hight of the tree; will be O(n) in the worst case if the tree is not balance

// Iterative BFS
// var maxDepth = function (root) {
//   if (!root) return 0;

//   let level = 0;
//   const queue = [root];

//   while (queue.length > 0) {
//     let levelSize = queue.length;

//     // Process each node at the current level
//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift();

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     // Increment level after finishing processing all nodes in the current level
//     level++;
//   }

//   return level;
// };
// TC: O(n) where n is the number of nodes in the tree, since each node is visited exactly once.
// SC: O(w) where w is the maximum width of the tree (number of nodes at the largest level).

// Iterative Depth-First Search (DFS) approach with a stack, this is pre-order traversal, process the current node before moving to its children, which is what we’re doing here by updating maxDepth as soon as we pop a node from the stack (before any child nodes are processed).
// var maxDepth = function (root) {
//   if (!root) return 0;

//   let maxDepth = 0;
//   const stack = [{ node: root, depth: 1 }]; // Start with the root node at depth 1

//   while (stack.length > 0) {
//     const { node, depth } = stack.pop(); // Pop the current node and its depth

//     if (node) {
//       // Update maxDepth if the current depth is greater
//       maxDepth = Math.max(maxDepth, depth);

//       // Push the child nodes onto the stack with their respective depths
//       if (node.right) stack.push({ node: node.right, depth: depth + 1 });
//       if (node.left) stack.push({ node: node.left, depth: depth + 1 });
//     }
//   }

//   return maxDepth;
// };
// TC: O(n) where n is the number of nodes in the tree, since each node is visited exactly once.
// SC: O(h) where h is the height of the tree. In the worst case (completely unbalanced tree), h = n.

// 100. Same Tree
// Iterative DFS
// var isSameTree = function (p, q) {
//   const pStack = [p];
//   const qStack = [q];
//   let pStr = "";
//   let qStr = "";
//   while (pStack.length > 0) {
//     const node = pStack.pop();
//     if (node) {
//       pStr += node.val;
//       pStack.push(node.right);
//       pStack.push(node.left);
//     } else {
//       pStr += "null";
//     }
//   }
//   while (qStack.length > 0) {
//     const node = qStack.pop();
//     if (node) {
//       qStr += node.val;
//       qStack.push(node.right);
//       qStack.push(node.left);
//     } else {
//       qStr += "null";
//     }
//   }
//   return pStr === qStr;
// };
// TC: O(n)
// SC: O(n)

// Recursive DFS
// https://www.youtube.com/watch?v=vRbbcKXCxOw
// var isSameTree = function (p, q) {
//   // Base case: if both nodes are null, they are identical in structure
//   if (!p && !q) return true;

//   // If one is null and the other is not, or their values differ, they’re not the same
//   if (!p || !q) return false;
//   if (p.val !== q.val) return false; // check the value if both nodes are not null

//   // Why Explicit if(p.val === q.val) return true Isn’t Needed?
//   // If p.val === q.val, it only means that the current nodes in each tree are identical in value—not that the entire trees are the same. The code must go deeper and recursively check all corresponding nodes in both left and right subtrees.

//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };
// TC: O(n)
// SC: O(h), which is O(logn) for balanced trees and O(n) for unbalanced trees.

// 572. Subtree of Another Tree
// https://www.youtube.com/watch?v=E36O5SWp-LE
// var isSubtree = function (root, subRoot) {
//   // Helper function to check if two trees are identical
//   function isSameTree(s, t) {
//     if (!s && !t) return true; // Both are null, so they are identical
//     if (!s || !t) return false; // One is null and the other isn't, not identical
//     if (s.val !== t.val) return false; // Values are different, not identical
//     return isSameTree(s.left, t.left) && isSameTree(s.right, t.right); // Recursively check children
//   }

//   if (!root) return false; // If root is null, no subtree can exist
//   if (isSameTree(root, subRoot)) return true; // Check if current node's subtree is identical to subRoot
//   return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot); // Check left and right children
// };
// TC: O(m * n) where m is the number of nodes in root and n is the number of nodes in subRoot. This is because, in the worst case, we compare subRoot with each subtree in root, taking O(n) time for each comparison.
// SC: O(h), where h is the height of the root tree. This is due to the recursive stack used during the traversal of root.
// 235. Lowest Common Ancestor of a Binary Search Tree
// https://www.youtube.com/watch?v=fehixeGZY9k
// var lowestCommonAncestor = function(root, p, q) {
//   // Start from the root of the tree
//   while (root) {
//     // If both p and q are greater than root, go right
//     if (p.val > root.val && q.val > root.val) {
//         root = root.right;
//     }
//     // If both p and q are less than root, go left
//     else if (p.val < root.val && q.val < root.val) {
//         root = root.left;
//     } else {
//         // If the current node is between p and q, it's the LCA
//         return root;
//     }
// }
// return null; // If root is null
// };
// TC: O(h)  where h is the height of the tree
// SC: O(1)

// Recursive way
// https://www.youtube.com/watch?v=gs2LMfuOR9k
// var lowestCommonAncestor = function (root, p, q) {
//   // Base case: if root is null, return null
//   if (!root) return null;

//   // If both p and q are greater than root, search in the right subtree
//   if (p.val > root.val && q.val > root.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   }
//   // If both p and q are less than root, search in the left subtree
//   else if (p.val < root.val && q.val < root.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }
//   // Otherwise, root is the lowest common ancestor
//   return root;
// };
// TC: O(h)  where h is the height of the tree
// SC: O(h), due to the recursive call stack. In a recursive function, each function call adds a new frame to the call stack, which consumes memory.

// 102. Binary Tree Level Order Traversal
// *My solution*
// var levelOrder = function (root) {
//   if (!root) return [];

//   const queue = [{ node: root, level: 0 }];
//   const result = [];
//   while (queue.length > 0) {
//     const { node, level } = queue.shift();
//     if (node) {
//       if (result[level]) {
//         result[level].push(node.val);
//       } else {
//         result[level] = [node.val];
//       }
//       if (node.left) queue.push({ node: node.left, level: level + 1 });
//       if (node.right) queue.push({ node: node.right, level: level + 1 });
//     }
//   }

//   return result;
// };

// https://www.youtube.com/watch?v=6ZnyEApgFYg
// var levelOrder = function (root) {
//   if (!root) return [];
//   const queue = [root];
//   const result = [];
//   while (queue.length > 0) {
//     let length = queue.length;
//     let level = [];
//     for (let i = 0; i < length; i++) {
//       let node = queue.shift();
//       if (node) {
//         level.push(node.val);
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//       }
//     }
//     result.push(level);
//   }

//   return result;
// };
// TC: O(n)
// SC: O(n)
// 1. For a complete binary tree, the last level can have up to n/2 nodes, leading to an O(n) space complexity for the queue.
// 2. For the result array: This array stores each level’s node values, so it also has O(n) space complexity.

// 98. Validate Binary Search Tree
// https://www.youtube.com/watch?v=s6ATEkipzow (should include '=')
// var isValidBST = function (root) {
//   var valid = (node, left, right) => {
//     if (node === null) return true;
//     // Need '=' to ensure node's value is strictly within the bounds
//     if (node.val <= left || node.val >= right) return false;
//     return (
//       valid(node.left, left, node.val) && valid(node.right, node.val, right)
//     );
//   };

//   return valid(root, -Infinity, Infinity);
// };
// TC: O(n)
// SC: O(n)

// 230. Kth Smallest Element in a BST
// Recursive Approach
// var kthSmallest = function (root, k) {
//   var recur = (node, arr) => {
//     if (node.left) {
//       recur(node.left, arr);
//     }
//     arr.push(node);
//     if (node.right) {
//       recur(node.right, arr);
//     }
//     return arr;
//   };
//   const arr = recur(root, []);
//   return arr[k - 1].val;
// };
// TC: O(n) Each node is visited exactly once, so the traversal has a time complexity of O(n), where n is the number of nodes in the tree.
// SC: O(n) Recursive Call Stack: The recursion depth is O(h), where h is the height of the tree. This can be O(log n) for a balanced tree or O(n) for a skewed tree.

// Iterative Approach
// https://www.youtube.com/watch?v=5LUXSvjmGCw
// var kthSmallest = function (root, k) {
//   let n = 0;
//   const stack = [];
//   let current = root;
//   while (current !== null || stack.length > 0) {
//     // Reach the leftmost node of the current node
//     while (current !== null) {
//       stack.push(current);
//       current = current.left;
//     }
//     // Current is now the leftmost node, pop it
//     current = stack.pop();
//     n += 1;
//     if (n === k) return current.val;

//     // Move to the right child
//     current = current.right;
//   }
//   return null; // in case k is out of bounds
// };
// TC: O(H+k) where H is the height of the tree and k is the number of elements to traverse.
// SC: O(H) due to the stack that holds nodes.

// 105. Construct Binary Tree from Preorder and Inorder Traversal
// https://www.youtube.com/watch?v=ihj4IQGZ2zc
// var buildTree = function (preorder, inorder) {
//   if (preorder.length === 0 || inorder.length === 0) return null;

//   const root = new TreeNode(preorder[0]);
//   let mid = inorder.indexOf(preorder[0]);
//   root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
//   root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

//   return root;
// };
/* TC: O(n^2) Each recursive call processes arrays using slice and indexOf:
   1. Number of Recursive Calls: n (one for each node).
   2-1. slice: O(m), where m is the size of the current array.
   2-2. indexOf: O(m).
   Given that there are n recursive calls, and for each call you have O(2m) operations, the total time complexity will be: O(n * 2m) => O(n * m)
*/
/* SC: O(n) not O(n^2)
   Call Stack: The recursion depth is O(h), where h is the height of the tree. In the worst case (skewed tree), h=n, leading to O(n).
   Subarrays: The slice operations create new arrays, contributing an additional O(n) space in total.
   At each recursion level, a new subarray is created using slice, consuming additional memory. However, these subarrays are not all stored simultaneously in memory. Each recursive call creates subarrays, processes them, and releases them as the function unwinds.
*/

// 124. Binary Tree Maximum Path Sum
// https://www.youtube.com/watch?v=EK0A__Ri2Ms
// var maxPathSum = function (root) {
//   let max = -Infinity;
//   var dfs = function (root) {
//     if (!root) return 0;

//     const left = Math.max(0, dfs(root.left));
//     const right = Math.max(0, dfs(root.right));

//     const currentMax = left + root.val + right;
//     max = Math.max(max, currentMax);

//     return root.val + Math.max(left, right);
//   };
//   dfs(root);
//   return max;
// };
// TC: O(n)
// Each node in the binary tree is visited exactly once during the traversal.
// The recursive calls do not "redo" work; they simply traverse the tree in a structured way (post-order traversal).
// SC: O(h)

// 297. Serialize and Deserialize Binary Tree
// BFS
// var serialize = function (root) {
//   if (!root) return "[]";
//   const result = [];
//   const queue = [root];

//   while (queue.length > 0) {
//     const node = queue.shift();

//     if (node) {
//       result.push(node.val);

//       if (node.left) {
//         queue.push(node.left);
//       } else {
//         queue.push(null);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       } else {
//         queue.push(null);
//       }
//     } else {
//       result.push(null);
//     }
//   }
//   // if use join: console.log(result.join(',')); // "1,2,3,,,4,5"
//   return JSON.stringify(result);
// };
// TC: O(n)
// SC: O(n)
// var deserialize = function (data) {
//   const treeArr = JSON.parse(data);
//   if (treeArr.length === 0 || treeArr[0] === null) return null;
//   const root = new TreeNode(treeArr.shift()); // root points to { val: 1, left: null, right: null }
//   const queue = [root]; // current also points to { val: 1, left: null, right: null }

//   while (queue.length > 0) {
//     const current = queue.shift();
//     // The root variable remains a reference to the same tree, even as you build it by modifying current.

//     const leftVal = treeArr.shift();
//     if (leftVal !== null) {
//       current.left = new TreeNode(leftVal); // Modifies the same object in memory
//       // Now root is { val: 1, left: { val: 2, left: null, right: null }, right: null }
//       queue.push(current.left);
//     }

//     const rightVal = treeArr.shift();
//     if (rightVal !== null) {
//       current.right = new TreeNode(rightVal);
//       queue.push(current.right);
//     }
//   }

//   return root;
// };
// TC: O(n)
// SC: O(n)

// Recursive (Preorder Traversal)
// var serialize = function (root) {
//   function dfs(node) {
//     if (!node) {
//       result.push(null);
//       return;
//     }
//     result.push(node.val);
//     dfs(node.left);
//     dfs(node.right);
//   }

//   const result = [];
//   dfs(root);
//   return JSON.stringify(result);
// };
// TC: O(n)
// SC: O(n)
// var deserialize = function (data) {
//   const treeArr = JSON.parse(data); // treeArr = [1, 2, null, null, 3, 4, null, null, 5, null, null];
//   let index = 0; // Pointer to track the current position in the array

//   function buildTree() {
//     if (index >= treeArr.length || treeArr[index] === null) {
//       index++; // Skip the null value and move to the next element
//       return null;
//     }
//     const node = new TreeNode(treeArr[index++]); // Create a new TreeNode with the current value, then increase 1
//     node.left = buildTree();
//     node.right = buildTree();
//     return node;
//   }
//   return buildTree();
// };
// TC: O(n)
// SC: O(n)

// 295. Find Median from Data Stream
// https://www.youtube.com/watch?v=itmhHWaHupI
// class MedianFinder {
//   constructor() {
//     this.small = new MaxHeap();
//     this.large = new MinHeap();
//   }

//   addNum(num) {
//     // add to small first
//     this.small.insert(num);

//     // make sure every num in small is <= every num in large
//     if (
//       this.small.size() > 0 &&
//       this.large.size() > 0 &&
//       this.small.peek() > this.large.peek()
//     ) {
//       this.large.insert(this.small.extractMax());
//     }

//     // uneven size?
//     if (this.small.size() > this.large.size() + 1) {
//       this.large.insert(this.small.extractMax());
//     }
//     if (this.large.size() > this.small.size() + 1) {
//       this.small.insert(this.large.extractMin());
//     }
//   }

//   findMedian() {
//     if (this.small.size() > this.large.size()) return this.small.peek();
//     if (this.large.size() > this.small.size()) return this.large.peek();

//     return (this.small.peek() + this.large.peek()) / 2;
//   }
// }
// // TC: addNum: O(logn), findMedian: O(1)
// // SC: O(n)

// // Helper class: Min Heap (ignore)
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   insert(val) {
//     this.heap.push(val);
//     this._heapifyUp();
//   }

//   extractMin() {
//     if (this.heap.length === 1) return this.heap.pop();
//     const min = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this._heapifyDown();
//     return min;
//   }

//   peek() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }

//   _heapifyUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[index] >= this.heap[parentIndex]) break;
//       [this.heap[index], this.heap[parentIndex]] = [
//         this.heap[parentIndex],
//         this.heap[index],
//       ];
//       index = parentIndex;
//     }
//   }

//   _heapifyDown() {
//     let index = 0;
//     const length = this.heap.length;
//     while (true) {
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
//       let smallest = index;

//       if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
//         smallest = leftChild;
//       }
//       if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
//         smallest = rightChild;
//       }
//       if (smallest === index) break;
//       [this.heap[index], this.heap[smallest]] = [
//         this.heap[smallest],
//         this.heap[index],
//       ];
//       index = smallest;
//     }
//   }
// }

// // Helper class: Max Heap (ignore)
// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   insert(val) {
//     this.heap.push(val);
//     this._heapifyUp();
//   }

//   extractMax() {
//     if (this.heap.length === 1) return this.heap.pop();
//     const max = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this._heapifyDown();
//     return max;
//   }

//   peek() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }

//   _heapifyUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[index] <= this.heap[parentIndex]) break;
//       [this.heap[index], this.heap[parentIndex]] = [
//         this.heap[parentIndex],
//         this.heap[index],
//       ];
//       index = parentIndex;
//     }
//   }

//   _heapifyDown() {
//     let index = 0;
//     const length = this.heap.length;
//     while (true) {
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
//       let largest = index;

//       if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
//         largest = leftChild;
//       }
//       if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
//         largest = rightChild;
//       }
//       if (largest === index) break;
//       [this.heap[index], this.heap[largest]] = [
//         this.heap[largest],
//         this.heap[index],
//       ];
//       index = largest;
//     }
//   }
// }

// 39. Combination Sum
// https://www.youtube.com/watch?v=mYqNn4dL1co
// var combinationSum = function (candidates, target) {
//   const result = [];

//   function backTrack(remaining, start, currentCombination) {
//     // Base case: when remaining sum is 0, add the combination(copy) to the result
//     if (remaining === 0) {
//       result.push([...currentCombination]);
//       return;
//     }
//     // Base case: stop exploring this path if remaining sum < 0
//     if (remaining < 0) return;

//     // Iterate through the candidates starting from `start` index
//     for (let i = start; i < candidates.length; i++) {
//       // Add the candidate to the current combination
//       currentCombination.push(candidates[i]);

//       // Recurse: use the current candidate again (unlimited times allowed)
//       backTrack(remaining - candidates[i], i, currentCombination);

//       // Backtrack: remove the last added number to try other combinations
//       currentCombination.pop();
//     }
//   }

//   backTrack(target, 0, []);
//   return result;
// };
// TC: O(2*T) https://www.youtube.com/watch?v=GBKI9VSKdGg
// SC: O(n)

// 79. Word Search (DFS recursive)
// https://www.youtube.com/watch?v=_bGRNR3D92s
// var exist = function (board, word) {
//   const rows = board.length;
//   const cols = board[0].length;
//   function dfs(row, col, index) {
//     // Base case: all characters in the word are matched
//     if (index === word.length) return true;

//     // Out of bounds or mismatch
//     if (
//       row < 0 ||
//       col < 0 ||
//       row >= rows ||
//       col >= cols ||
//       board[row][col] !== word[index]
//     )
//       return false;

//     // Save the current value and mark the cell as visited
//     const temp = board[row][col];
//     board[row][col] = "#";

//     // Explore all 4 directions
//     const found =
//       dfs(row + 1, col, index + 1) ||
//       dfs(row - 1, col, index + 1) ||
//       dfs(row, col + 1, index + 1) ||
//       dfs(row, col - 1, index + 1);

//     // Restore the cell
//     board[row][col] = temp;

//     return found;
//   }

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (dfs(row, col, 0)) return true;
//     }
//   }

//   return false;
// };
// TC: O(N * 4^L)
// N: Total cells in the board
// L: Length of the word
// 4: Each cell can have up to 4 recursive calls (directions).
// SC: O(L) Maximum recursion depth equals the length of the word L.
