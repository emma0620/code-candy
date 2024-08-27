// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const IDnum = String(vat).split("");
  let logicalnum = [1, 2, 1, 2, 1, 2, 4, 1];

  if (IDnum[6] != "7" || IDnum.length == 8) {
    for (let i = 0; i < 8; i++) {
      logicalnum[i] *= parseInt(IDnum[i]);

      if (logicalnum[i] > 9) {
        logicalnum[i] = logicalnum[i]
          .toString()
          .split("")
          .reduce((acc, numStr) => {
            return acc + parseInt(numStr);
          }, 0);
      }
    }

    logicalnum = logicalnum.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return logicalnum % 5 === 0;
  }
  return false;
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
