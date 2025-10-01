// 1.객체 생성 방법 2가지
let obj1 = new Object() //객체 생성자
let obj2 ={};//객체 리터럴 (대부분은 이 객체 리터럴 방식을 사용한다)

//2.name,age,hobby와 같은 속성은 객체 프로퍼티라고 한다.
// 그리고 프로퍼티는 ket와 value로 표현된다
// key값은 문자열 혹은 숫자만 사용가능하다
// 그런데 key값에 띄어쓰기가 들어가면 예외적으로 쌍따옴표로 감싼다. like cat처럼
let person = {
    name: "이정환",
    age:28,
    hobby:"테니스",
    "like cat" :true
}

// 3.객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name; 
console.log(name)

let age = person["age"]
console.log(age)

// 3-2. 새로운 프로퍼티를 추가하는 방법(마찬가지로 점표기법, 괄호표기법 사용하면 된다)
person.job = "fe developer";
person["favoriteFood"] ="떡볶이"

// console.log(person);

// 3-3. 프로퍼티 수정하는 방법(추가하는 방법이랑 비슷하다)
person.job = "educator"
console.log(person)

// 3-4.프로퍼티 삭제하는 방법(delete 연산자 사용)
delete person.job;
console.log(person)

// 3-5.프로퍼티의 존재 유뮤를 확인하는 방법(in연산자)
let result1 = "name" in person;
console.log(result1);
