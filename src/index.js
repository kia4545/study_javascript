/*
* const、letの変数宣言
*/
// var value1 = "var変数";
// console.log(value1);

// //var変数は上書き可能

// value1 = "var変数は上書き";
// console.log(value1);

// //var変数は再宣言可能
// var value1 = "var変数を再宣言";
// console.log(value1);

// let value2 = "let変数";
// console.log(value2);

// //let変数は上書き可能
// value2 = "let変数を上書き";
// console.log(value2);

// //let変数は再宣言不可能
// let value2 = "let変数を再宣言";
// console.log(value2);

// const value3 = "const変数";
// console.log(value3);

// //const変数が上書き不可能
// // value3 = "const変数を上書き";

// const value3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const value4 = {
//     neme: "aaaaaa",
//     age: 55
// };

// value4.neme = "iiii";
// value4.address = "sirzixv";
// console.log(value4);

//constで定義した配列はプロパティの変更が可能
// const value5 = ['dog', 'cat'];
// value5[0] = "var";
// value5.push("make");
// console.log(value5);

//テンプレート文字列
// const name = "aaaaiiii";
// const age = 58;
// //「私の名前はaaaaiiiiです。年齢は５８歳です」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*
* アロー関数
*
*/
//従来の関数
// function func1(str) {
//     return str;
// }
const func1 = function (str) {
    return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(3,8));
