// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

// 比對陣列中數值找出不同
function findDifferent(numbers) {
  const findDiffer = numbers.filter(
    (item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item)
  );
  return parseInt(findDiffer);
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

//將不同數值分類到不同陣列, 列出長度最小的陣列
//const firstcode = numbers[0];
// const arr1 = numbers.filter((item) => item == firstcode);
// const arr2 = numbers.filter((item) => item !== firstcode);
// if (arr1.length > arr2.length) {
//   return arr2[0];
// } else {
//   return arr1[0];
// }

// 計算每個數值的出現次數,找出次數1的數值
//  let counter = {};
// numbers.forEach(function (num) {
//   if (counter[num]) {
//     counter[num] += 1;
//   } else {
//     counter[num] = 1;
//   }
// });

// let differNum = [];
// for (let num in counter) {
//   if (counter[num] === 1) {
//     differNum.push(parseInt(num));
//   }
// }
// return differNum[0];
