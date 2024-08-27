// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

function bankersRounding(num, digits = 0) {
  // 將數字調整到指定的小數位數
  const factor = Math.pow(10, digits);
  let rounded = Math.round(num * factor);
  console.log("factor: " + factor + "  rounded:" + rounded);

  // 檢查是否因為 '5' 而需要特殊處理
  if (Math.abs(rounded % 10) === 5) {
    const isEven = Math.floor(num * factor) % 2 === 0;
    // 如果 '5'後面沒有數字或者數字是偶數，則向下捨入
    if (rounded % 2 === 0 || num * factor === Math.floor(num * factor)) {
      rounded = Math.floor(num * factor);
    } else {
      // 如果 '5'後面有數字，則無論奇偶都向上捨入
      rounded = Math.ceil(num * factor);
    }
  }

  // 將捨入後的數字除以因數，以還原小數位數
  return rounded / factor;
  // 官方文件指出 RoundTo 使用的是「Banker's rounding（銀行家捨入法）/四捨五入六成雙」。這種方法的規則依據 Wiki 上寫道：
  // 保留位數的後一位如果是4，則捨去。
  // 保留位數的後一位如果是6，則進位。
  // 保留位數的後一位如果是5，而且5後面不再有數，要根據尾數5的前一位決定是捨去還是進入：如果是奇數則進入，如果是偶數則捨去。
  // 要求保留位數的後一位如果是5，而且5後面仍有數，則無論奇偶都要進入。
}

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2
