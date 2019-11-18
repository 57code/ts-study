let var1: string; // 类型注解
var1 = "aa"; //ok
// var1 = 1;//wrong

//类型推断
let var2 = true;

// 原始类型：string, boolean, number, symbol

// 数组
let arr: string[];
arr = ["tom"];

// 任意类型
let varAny: any;
varAny = 1;
varAny = "abc";

// any用于数组
let arrAny: any[];
arrAny = [1, "abc"];

// 元组
let tupple: [string, number];
tupple = ["tom", 1];

// 函数中类型约束
function greet(person: string): string {
  return "hello," + person;
}
greet("abc"); // ok

function warn(): void {}

// 对象类型object：不是原始类型就是对象类型
function fn1(o: object) {}
fn1({ prop: 0 }); // ok
// fn1(1); // wrong

function fn2(o: { prop: number }) {}
fn2({ prop: 0 }); // ok
// fn2({prop2:0}); // wrong

// 类型别名type：自定义类型
type Prop = { prop: number };
// 增强可读性
function fn3(o: Prop) {}

// 类型断言：某些情况下用户比较确定值的类型，可以直接断言
// 语法as
const someValue: any = "this is a string";
const strLenth = (someValue as string).length;
// 断言是把比较范的类型断言为更具体的类型

// 联合类型
let union: string | number;
union = "1";
union = 1;

// 交叉类型
type First = { first: number };
type Second = { second: number };
type FirstAndSecond = First & Second;
function fn4(params: FirstAndSecond): FirstAndSecond {
  return { first: 1, second: 2 };
}
fn4({ first: 1, second: 2 })
