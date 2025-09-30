// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것


let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2.명시적 형 변환
// ->프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// ->문자열 ->숫자
let str1 = "10";
let strToNum1 = Number(str1)
console.log(10+strToNum1);

// parseInt 내장함수를 쓰면 10개 와 같이 숫자가 앞에있고 문자열이 붙어있는 애매한 것들도 
// 숫자로 형변환(타입캐스팅)이 된다. 만약 이때 단순  Number내장함수를 썼더라면 '개' 때문에 형변환x
let str2 ="10개"
let strToNum2 = parseInt(str2);
console.log(strToNum2);


// ->숫자 ->문자열
let num1 = 20;
let numToStr = String(num1);

console.log(numToStr + "입니다");