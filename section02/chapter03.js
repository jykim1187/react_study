// 1.배열의 구조 분해 할당
let arr = [1,2,3];
let [one, two, three, four] = arr;

// 2.객체의 구조 분해 할당
let person = {
    name : "samrok",
    hobby : "watching drama",
    address : "north Korea"
}

let{name, hobby, address} = person;

// 객체의 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name, hobby, address}) =>{
    console.log(name, hobby, address);
}

func(person)