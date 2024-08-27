// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和

//陣列排序, 取二個小最小值
function sumOfSmallestValues(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[0] + arr[1];
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1));
console.log(sumOfSmallestValues(list2));

// let min = Math.min(...arr)
// arr = arr.filter(item => item !== min)
// min = min+ Math.min(...arr)
// return min

// let arrNew=arr          //取第一次陣列
// let min1=Math.min(...arr) //在第一次陣列中找最小值1號
// arrNew=arr.filter(item=>item !==min1) //把第一個陣列最小值刪掉後, 加入新陣列
// let min2=Math.min(...arrNew) //在新陣列中, 找最小值2號
// return min1+min2//加總回傳
