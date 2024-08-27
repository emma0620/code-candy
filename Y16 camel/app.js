// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  str = str.split("_");

  const camelCaseString =
    str[0] +
    str
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  return camelCaseString;
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore


// ap(word => { return word.charAt(0).toUpperCase() + word.slice(1); })：

// .map() 方法是数组的方法，用于对数组中的每个元素执行指定的函数，并返回一个新数组，其中包含每个元素按指定函数处理后的结果。
// word => { ... } 是一个箭头函数，它接受数组中的每个元素（这里是每个单词）作为参数 word。
// word.charAt(0).toUpperCase() 获取单词的首字母并将其转换为大写。
// word.slice(1) 获取单词除了第一个字符以外的剩余部分。
// word.charAt(0).toUpperCase() + word.slice(1) 将首字母大写化的字符和剩余部分拼接在一起，形成一个首字母大写的单词。
// 综合起来，splitStr.slice(1).map(word => { return word.charAt(0).toUpperCase() + word.slice(1); }) 的作用是对 splitStr 数组中除了第一个元素之外的每个元素（即除了第一个单词之外的每个单词）执行以下操作：

// 将单词的首字母转换为大写。
// 将首字母大写化后的单词与其余部分拼接起来。
// 最终返回一个新的数组，其中包含所有单词首字母大写化后的结果。
// 这个处理步骤非常适合将 snake_case 格式的字符串转换为 camelCase 格式，确保每个单词的首字母都是大写的，以符合 camelCase 命名规范。