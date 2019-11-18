// 05-generics
// 不用泛型
// interface Result {
//   ok: 0 | 1;
//   data: Feature[];
// }

// 使用泛型
interface Result<T> {
  ok: 0 | 1;
  data: T;
}

// 泛型方法
function getResult<T>(data: T): Result<T> {
  return { ok: 1, data };
}
// 用尖括号方式指定T为string
getResult<string>("hello");
// 用类型推断指定T为number
getResult(1);

// 进一步约束类型变量
interface Foo {
  foo: string;
}
// 约束T必须兼容Foo
function getResult2<T extends Foo>(data: T): Result<T> {
  return { ok: 1, data };
}
// 这样上面的两个调用就非法了
getResult2({foo:'foo', bar:'bar'})