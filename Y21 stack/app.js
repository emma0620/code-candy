// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    this.numItem = [];
  }

  push(data) {
    if (data !== undefined) {
      this.numItem.push(data);
    }
  }

  pop() {
    return this.numItem.pop();
  }

  get size() {
    return this.numItem.length;
  }
}

// 測試代碼
const stack = new Stack();
stack.push(123);
stack.push(456);
stack.push(); // 試圖推入一個 undefined
console.log(stack.size); // 應該印出 2

const item = stack.pop(); // 取出元素
console.log(item); // 應該印出 456

stack.pop(); // 繼續取出元素
console.log(stack.size); // 應該印出 0
