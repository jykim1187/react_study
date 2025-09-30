// 1.null 병합 연산자
// ->존재하는 값을 추려내는 기능  즉. null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; //10
let var5 = var1 ?? var3; //20
let var6 = var2 ?? var3; //10 null이나 undefined랑 비교를 안하면 그냥 왼쪽 값이 나옴
console.log(var6)

// 2.typeof 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7
console.log(t1)

//3.삼항 연산자
//->항을 3개 사용하는 연산자

let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝수면 ->"짝" 홀수면 ->"홀"
let res = var8%2===0?"짝":"홀"
console.log(res);