// 스코프
// ->전역 스코프(전체 영역에서 접근 가능) /지역 스코프(특정 영역(블록)에서만 접근 가능)

let a =1; //전역 스코프

function funA(){
    let b =2 //지역스코프
    console.log(a);
}

funA();
// console.log(b)

if(true){
    let c =1; //지역스코프
}

for(let i =0; i<10; i++){
    let d =1;
}

