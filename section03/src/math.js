// math 모듈
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// es모듈시스템  혹은 아래처럼 안쓰고 위의 함수 앞에 export키워드를 붙여도 된다.
// export {add, sub};

// export defalut는 기본으로 내보내기
// 한 파일당 1개만 가능하면 기존에 다른곳에서 import할때는 중괄호 사용했던 걸 기본으로 내보내지는 것은 import 바로 name하면 된다.
export default function multiply(a,b){
    return a*b
}