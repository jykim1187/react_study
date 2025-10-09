// Promise (3상태 - pending, fulfiled, rejected)

//프로미스 객체에는 비동기 함수를 매개변수로 전달해야한다
// 이걸 executor함수라 한다. 여기서는 setTimeout
// const promise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     const num = null;

//     if(typeof num ==="number"){
//         resolve(num+10); //promise의 결과값에 num+10을 담음
//     } else{
//         reject("num 이 숫자가 아닙니다")
//     }
//  },2000);
// });

// // then메서드는 promise의 결과값이 resolve로 fulfiled되었을 때 발동되는 메서드임
// promise.then((value)=>{
//     console.log(value);
// })

// // promise의 결과값이 reject로 실패했을 대는 catch가 발동
// promise.catch((error)=>{
//     console.log(error);
// })

// // 어차피 then이나 catch나 다시 promise 객체를 리턴하기 때문에
// // 아래처럼 체이닝 방식으로 한번에 연결해서 사용도 가능하다
// promise
//     .then((value)=>{
//     console.log(value);
// })
//     .catch((error)=>{
//     console.log(error);
// })
// -----------------------------------------

function add10(num){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof num ==="number"){
                resolve(num+10);
            } else{
                reject("num이 숫자가 아닙니다")
            }
        },2000)
    });

    return promise;
}
//아래와 같은 방식이면 콜백지옥없이 깔끔하게 작업이 가능하다
add10(0)
    .then((result)=>{
        console.log(result);
        return add10(result);
    })
    .then((result)=>{
        console.log(result);
        return add10(result);
    })
    .then((result)=>{
        console.log(result);
    })



