// 必选参数
function greeting(person: string, msg?: string, age=20): string {
  return "Hello, " + person;
}
greeting("tom");
// greeting() //wrong

// 函数重载：先声明在实现
// watch(fn)
function watch(cb1: ()=>void):void;//重载1
function watch(cb1: ()=>void, cb2: (v1:any,v2:any)=>void):void;//重载2
// 实现
function watch(cb1: ()=>void, cb2?: (v1:any,v2:any)=>void) {
    if (cb1 && cb2) {
        console.log('执行watch重载2');
    } else {
        console.log('执行watch重载1');
    }
}
watch(()=>{})