// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

// 將數值轉成字串, 拆出每個位數進行平方運算，並組合成新數字字串
function squareDigits(num) {
  const numturnStr = String(num);
  const squareNum = numturnStr
    .split("")
    .map((x) => Math.pow(parseInt(x), 2))
    .join("");
  return parseInt(squareNum);
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

// num.toString()：將數字轉換為字串。
// .split('')：將字串拆分為字元陣列，每個字元代表一個位數。
// .map(digit => digit * digit)：對每個位數進行平方運算，digit * digit 直接計算每個位數的平方。
// .join('')：將平方後的數字陣列組合成一個新的字串
