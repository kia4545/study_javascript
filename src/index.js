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
const value5 = ['dog', 'cat'];
value5[0] = "var";
value5.push("make");
console.log(value5);
