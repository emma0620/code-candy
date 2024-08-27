// 編號：CANDY-024
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

function calcLCM(...numbers) {
  const GCDOfTwo = (a, b) => {
    while (b > 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const LCM = (a, b) => Math.abs(a * b) / GCDOfTwo(a, b);

  let currentLCM = 1;

  for (let i = 0; i < numbers.length; i++) {
    currentLCM = LCM(currentLCM, numbers[i]);
  }

  return currentLCM;
}

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184

// 使用 reduce 將數字縮減為最小公倍數
// return numbers.reduce((acc, num) => findLCM(acc, num), 1);
