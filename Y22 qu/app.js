// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

class Queue {
  constructor() {
    this.numItem = [];
  }

  enqueue(data) {
    if (data !== undefined) {
      this.numItem.push(data);
    }
  }

  dequeue() {
    return this.numItem.shift();
  }

  get length() {
    return this.numItem.length;
  }
}

// 測試代碼
const queue = new Queue();
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue(); // 試圖加入一個 undefined
console.log(queue.length); // 應該印出 2

const item = queue.dequeue(); // 取出元素
console.log(item); // 應該印出 123

queue.dequeue(); // 繼續取出元素
console.log(queue.length); // 應該印出 0

//stack 後進先出
//queue 先進先出
//pop 刪除陣列中最後一個元素
//shift 刪除陣列中第一個元素
