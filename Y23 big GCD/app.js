// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因數

function calcGCD(...numbers) {
  const GCDOfTwo = (a, b) => {
    while (b > 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  let findGCD = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    findGCD = GCDOfTwo(findGCD, numbers[i]);
  }

  return findGCD;
}

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4

// 遍歷每個數字，依次計算與結果的最大公因數
// const findGCD = numbers.reduce((acc, curr) => {
//   console.log("acc: " + acc + "  curr:" + curr);
//   return GCDOfTwo(acc, curr);
// });
