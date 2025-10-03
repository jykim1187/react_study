// 1.Spread연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3]
let arr2 = [4,...arr1,5,6]
console.log(arr2)


let obj1 = {
    a:1,
    b:2
};

let obj2 = {
    ...obj1,
    c:3,
    d:4
}

console.log(obj2)

function funcA(p1,p2,p3){
    console.log(p1,p2,p3)
}

funcA(...arr1);

// 2.Rest 매개변수
//함수의 매개변수에 사용되어, 남은 인자들을 배열로 모으는 것
// js에서 ...은 2가지로 나뉨 spread와 rest파라미터
// 즉, spread는 배열이나 객체를 하나씩 펼쳐서 복사하거나 합칠 때 사용한다면,
// rest파라미터는 함수의 매개변수에 사용되어, 남은 인자들을 배열로 모으는 것이다.

// function funcB(...rest){
//     console.log(rest);
// }

// funcB(...arr1)

function printNumbers(a, b, ...rest) {
  console.log(a);    // 첫 번째 인자
  console.log(b);    // 두 번째 인자
  console.log(rest); // 나머지 인자들을 배열로 모음
}

printNumbers(1, 2, 3, 4, 5);
// a = 1
// b = 2
// rest = [3, 4, 5]
