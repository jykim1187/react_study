// 상수 객체
const animal ={
    type:"고양이",
    name:"나비",
    color:"black"
};

// const 상수로 선언해도
// 프로퍼티를 추가하거나 수정하거나 삭제하는 것은 가능하다
// 프로퍼티 추가 수정 삭제가 새로운 객체를 할당하는 것은 아니니까
animal.age =2; //추가
animal.name ="까망이"; //수정
delete animal.color; //삭제

//2.메서드
//->값이 함수인 프로퍼티를 말함
// const person ={
//     name : "이정환",
//     sayHi : ()=>{console.log("안녕")}
// }

const person ={
    name : "이정환",
    // 메서드 선언
    sayHi() {
        onsole.log("안녕")
    },
};

person.sayHi();

