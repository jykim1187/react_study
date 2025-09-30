// 1.Number Type;
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

// NaN = Not a Number  이 NaN이 있기 때문에 이상한 계산으로 에러가나도 프로그램이 멈추는것이 방지된다
let nan = NaN;
console.log(1*"hello");

// 2.String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myLocation + myName;
console.log(introduce);

//백틱 - 템플릿 리터럴 문법
let introduceText =`${myName}은 ${myLocation}에 거주합니다`
console.log(introduceText);

// 3.Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4.Null Type
let empty = null;

//5. Undefined Type
// 변수를 선언하고 어떠한 값도 할당하지 않을 때 자동으로 들어가는 값 undefined
// null은 우리(개발자)가 null이라고 직접 할당하는 것