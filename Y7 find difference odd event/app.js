// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  const oddCount = numbers.filter((num) => num % 2 !== 0);
  const evenCount = numbers.filter((num) => num % 2 == 0);

  if (oddCount.length > evenCount.length) {
    return parseInt(evenCount);
  } else {
    return parseInt(oddCount);
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// 根据大多数数字的类型，找出不合群的数字
//   if (oddCount > evenCount) {
// 大多数是奇数，找出唯一的偶数
//     return arr.find((num) => num % 2 === 0);
//   } else {
// 大多数是偶数，找出唯一的奇数
// return arr.find((num) => num % 2 !== 0);
