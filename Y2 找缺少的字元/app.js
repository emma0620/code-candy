// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

//將數值轉成unicode, 依序比對缺失的字母
//如果沒有漏掉的字回傳null值
const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  const firstCode = chars[0].charCodeAt();
  for (let i = 0; i < chars.length; i++) {
    if (firstCode + i !== chars[i].charCodeAt()) {
      return String.fromCharCode(firstCode + i);
    }
  }
  return null;
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

// function missingChar(chars) {
//   for (let i = 0; i < chars.length - 1; i++) {
//       const currentCode = chars[i].charCodeAt()
//       const nextCode = chars[i+1].charCodeAt()
//       if (nextCode - currentCode > 1) {
//           return String.fromCharCode(currentCode+1)
//       }

//   }
//   return null
// }
/*
運用for迴圈 一個一個用unicode编码對照出漏掉的英文字母
return null 是 如果找不到漏掉的字回傳null值，沒寫會是undefind
*/

//------------------------------------
// let letter = chars[0];
//   let code = letter.charCodeAt(0);

//   for (let i = 0; i < chars.length; i++) {
//     if (chars.indexOf(letter) === -1) {
//       return String.fromCharCode(code);
//     } else {
//       letter = chars[i];
//       code = letter.charCodeAt(0) + 1;
//       letter = String.fromCharCode(code);
//     }
//   }

///-----------------------------------
// let code = chars[0].charCodeAt();
//   for (let i = 0; i < chars.length; i++) {
//     if (code == chars[i].charCodeAt()) {
//       code++;
//     } else {
//       return String.fromCharCode(code);
//     }
//   }
