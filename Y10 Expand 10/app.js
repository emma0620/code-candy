// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  const numStr = String(num).split("");
  const expanded = [];

  numStr.forEach((digitChar, index, arr) => {
    const digit = parseInt(digitChar, 10);
    const placeValue = Math.pow(10, arr.length - 1 - index);

    if (digit !== 0) {
      if (placeValue > 1) {
        expanded.push(`${placeValue} x ${digit}`);
      } else {
        expanded.push(digit);
      }
    }
  });
  return expanded.join(" + ");
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

// function expandedForm(num) {
//     return String(num)
//       .split("")
//       .map((digitChar, index, array) => {
//         let digit = parseInt(digitChar, 10);
//         let placeValue = Math.pow(10, array.length - 1 - index);
//         return digit !== 0 ? `${placeValue} x ${digit}` : null;
//       })
//       .filter(item => item !== null)
//       .join(" + ");
//   }

// // 使用 forEach 方法遍歷每個數字的位數
// numStr.split("").forEach((digitChar, index, array) => {
//     let digit = parseInt(digitChar, 10); // 將字符轉換為數字
//     let placeValue = Math.pow(10, array.length - 1 - index); // 計算位數值

//     if (digit !== 0) {
//       expanded.push(`${placeValue} x ${digit}`); // 將非零位數的展開式部分添加到 expanded 陣列中
//     }
//   });

//   return expanded.join(" + "); // 將 expanded 陣列連接成最終的展開式字串

// const numturnStr = String(num).split("");
// const expanded = [];

// for (let i = 0; i < numturnStr.length; i++) {
//   let digit = parseInt(numturnStr[i], 10);
//   let placeValue = Math.pow(10, numturnStr.length - 1 - i);
//   console.log("digit:" + digit + "  placevalue:" + placeValue);
//   if (digit !== 0) {
//     expanded.push(`${placeValue} x ${digit}`);
//   }
// }
