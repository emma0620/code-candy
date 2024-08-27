// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  let findOdd = 0;
  for (let num of numbers) {
    findOdd ^= num;
  }
  return findOdd;
}

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

// XOR 原理：兩個數值比對, 相同回傳 0；相異回傳 1
// 1 ^ 1 = 0
// 0 ^ 0 = 0
// 0^ 1 = 1
// 任何數與自己做 XOR 的結果為 0：即 a ^ a = 0。
// 任何數與 0 做 XOR 的結果仍是該數本身：即 a ^ 0 = a。
// 如果一個數字出現偶數次，則兩次 XOR 後會消除影響，結果仍然是 0。
// 如果一個數字出現奇數次，則最終 findOdd 將保留該數字的值，因為其他出現偶數次的數字都被抵消了。
