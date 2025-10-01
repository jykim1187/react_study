//1.Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 ="";
let f7 = 0n //빅인티저

// 2.Truthy 한값
// 위의 7가지 Falsy한 값들 제외한 나머지 값들은 모두 Truthy하다
let t1 ="hello";
let t2 =123;
let t3 = [];
let t4 = {};
let t5 = () => {};

//3.활용 사례