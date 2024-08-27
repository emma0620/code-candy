// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const vocabulary = input.split(" ");
  let maxScore = 0;
  let maxWord = "";

  vocabulary.forEach((word) => {
    const wordScore = word.split("").reduce((score, char) => {
      return score + (char.charCodeAt(0) - 96);
    }, 0);

    if (wordScore > maxScore) {
      maxScore = wordScore;
      maxWord = word;
    }
  });
  return maxWord;
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// 將輸入字串按空格分割成單詞陣列
// let words = input.split(" ");

// // 初始化變數來追蹤最大分數和相應的單詞
// let maxScore = 0;
// let maxWord = "";

// // 迭代處理每個單詞
// for (let word of words) {
//   let wordScore = 0;
//   // 計算當前單詞的分數
//   for (let i = 0; i < word.length; i++) {
//     let charScore = word.charCodeAt(i) - "a".charCodeAt(0) + 1;
//     wordScore += charScore;
//   }
//   // 檢查是否當前單詞的分數更高
//   if (wordScore > maxScore) {
//     maxScore = wordScore;
//     maxWord = word;
//   }
// }

// // 返回分數最高的單詞
// return maxWord;

///--------------------

// / const vocabulary = input.split(" ");
// let maxScore = 0;
// let maxWord = "";

// // 遍歷每個單詞，計算每個單詞的分數並比較得分
// vocabulary.forEach((word) => {
//   const wordScore = word.split("").reduce((score, char) => {
//     return score + (char.charCodeAt(0) - 96);
//   }, 0);

//   // 如果當前單詞的分數比最大分數大，則更新最大分數和對應的單詞
//   if (wordScore > maxScore) {
//     maxScore = wordScore;
//     maxWord = word;
//   }
// });

// // 返回分數最高的單詞
// return maxWord;
