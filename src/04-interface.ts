// 接口：约束结构，类似于type
interface Person {
  firstName: string;
  lastName: string;
}
interface Human extends Person{
    fullName:string
}

// greeting函数通过Person接口约束参数解构
function greeting(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
greeting({ firstName: "Jane", lastName: "User" }); // 正确
// greeting({ firstName: "Jane" }); // 错误
