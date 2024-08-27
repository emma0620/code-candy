// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

//把數字0用filter取出, 再合併到陣列後方
let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const findzeroArr = arr.filter((item) => item === 0);
  return arr.filter((item) => item !== 0).concat(findzeroArr);

  // const findzeroArr = arr.filter((item) => item === 0);
  // arr = arr.filter((item) => item !== 0);
  // const newArr = arr.concat(findzeroArr);
  // return newArr;
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
