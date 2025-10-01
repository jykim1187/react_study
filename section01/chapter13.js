// 콜백 함수란?
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
// function main(value){
//     value();
// }

//위 코드를 보면 main함수에 함수를 매개변수로 써서 즉 콜백함수를 썼음.
// 그러면 아래 위호 1,2,end찍은 로그 사이에 value()를 실행시키는데
// 이렇게 콜백함수를 메인함수 내에서 원하는 타이밍에 사용할 수 있다는 것이 장점임

// function sub(){
//     console.log("i am sub")
// }

// main(sub);

// 2번째 다른 표현방법
// 메인 함수 내에 바로 함수표현식을 써도 된다
// main(()=>{console.log("i am sub")})

// 2.콜백함수의 활용

// function repeat(count){
//     for(let idx = 1; idx<=count; idx++){
//         console.log(idx)
//     }
// }

// function repeatDouble(count){
//     for(let idx = 1; idx<=count; idx++){
//         console.log(idx*2)
//     }
// }

// function repeatTriple(count){
//     for(let idx = 1; idx<=count; idx++){
//         console.log(idx*3)
//     }
// }

// repeat(5)
// repeatDouble(5);
// repeatTriple(5);

// function repeatFormat(count,callBack){
//     for(let idx=1; idx<=count; idx++){
//         callBack(idx)
//     }
// }

// repeatFormat(5, (idx) => {
//     console.log(idx * 2)
// });




