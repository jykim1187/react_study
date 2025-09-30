//일단 함수 funA를 만든다
function funcA(){
    console.log("funcA")
}
//자바스크립트에서는 함수자체를 변수에 담을 수 있다
//그러면 그 변수로 함수를 호출 할 수 있음!
let varA = funcA;
varA();

//그래서 아래와 같은 방법으로도 함수를 만들 수 있다.
//함수를 선언하자마자 변수에 초기화 하는 것인데 이런 경우에는 함수를 선언했다고하지는 않는다.
//그래서 funcB()라고 하면 함수가 호출되지 않고 무조건 varB()로만 호출해야한다.
let varB = function funcB(){
    console.log("funcB");
}
varB();

//그래서. 함수를 선언하는 것이 아니고 funcB()는 사용할 수 없이 varB()로만 사용이 가능하니,
// 이런 함수는 값으로만 취급되는 것이다!
// 따라서 함수 이름이 사실상 필요없어 아래처럼 만들 수 도 있다.
// 이런경우에는 호이스팅의 대상이 되질 않는다
// 그리고 이런 것을 함수 표현식이라고 한다.

let varC = function(){
    console.log("funcC")
}

varC();


//2.화살표 함수
// 화살표 함수는 함수표현식을 더 간단하게 쓰기 위한 방법으로 function을 떼고 () => {}로 사용
let varD = () => {
    return 1;
}

//그리고 화살표함수도 단순히 return문만 있다면 더 축약하여 사용가능하다
let varE = () => 1;
console.log(varE());

//거기에다 매개변수가 필요하다면
let varF =(value) => value +10;
console.log(varF(30))

//단순히 return이 아니라 중간 과정이 더 필요하다면
let varG = (value) =>{
    console.log("화살표 함수 공부 중이야")
    return value+40;
}

console.log(varG(30));
