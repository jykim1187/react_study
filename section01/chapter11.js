// 함수선언
// function +함수명 +() +{}
function greeting(){
    console.log("안녕하세요");
}

//함수호출
greeting();

//매개변수있는 함수선언
//funtion + 함수명 + () 이 소괄호안에서는 const나 let선언 없이 그냥 변수이름만 적으면 된다 +{}
function getArea(width, height){
    let area = width * height;
    return area;
}
let arear1 = getArea(120,200);
console.log(arear1);

//다른 언어에서는 함수 선언이 먼저나오고 호출이 가능한데
// 자바 스크립트에서는 선언문이 호출문보다 아래에 있어도 작동에 문제가 없다
// 이것은 자바스크립트의 호이스팅(끌어올리다)기능 때문