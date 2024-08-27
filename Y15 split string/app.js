// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  const splitStr = [];
  let pair = "";

  for (let i = 0; i < str.length; i += 2) {
    pair = str.substring(i, i + 2);

    if (pair.length == 1) {
      pair = pair + "_";
    }
    splitStr.push(pair);
  }
  return splitStr;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []

// const splitStr = [];
//   let pair = "";

//   for (let i = 0; i < str.length; i += 2) {
//     pair = str.substring(i, i + 2);

//     if (pair.length == 1) {
//       pair = pair + "_";
//     }
//     splitStr.push(pair);
//   }
//   return splitStr;
