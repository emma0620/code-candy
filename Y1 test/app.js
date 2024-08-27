// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const vocabulary = input.split("");
  console.log(vocabulary);

  vocabulary.forEach((word) => {
    let scores = word
      .split("")
      .map((char) => char.charCodeAt(0) - 96)
      .reduce((score, char) => {
        return score + char;
      }, 0);

    console.log("word:" + word + "   score:" + scores); // 印出每個字母的分數陣列
  });
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
