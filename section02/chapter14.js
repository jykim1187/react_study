// async 
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드



function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:"이정환",
                id:"winterlood"
            });
        },1500);
    })
}

// 원래라면

// function printData(){
//     getData().then((result)=>{
//         console.log(result)
//     });
// }
// 그런데
// await를 사용하면 동기작업을 처리하듯이 간결한 코드를 사용할 수 있다.
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
   await getData().then((result)=>{
        console.log(result)
    });
}

printData();