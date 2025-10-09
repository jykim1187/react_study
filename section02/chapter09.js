// 5가지 배열 변형 메서드
// 1.filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
    {name:"이정환", hobby:"테니스"},
    {name:"김효빈", hobby:"테니스"},
    {name:"홍길동", hobby:"독서"}
];

const tennisPeople = arr1.filter(
    (item) => item.hobby ==="테니스"
);

console.log(tennisPeople);

// 2.map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// forEach와 비슷한 문법
//  forEach를 사용하면서 콜백함수를 호출하면 그때는 순서대로 현재 처리중인 요소값, 현재요소의 인덱스, 원본배열을 넘겨주기로 되어있음
let arr2 =[1,2,3];
const mapResult = arr2.map((item,idx,arr)=>{
    console.log(idx,item);
    return item*2;
});

console.log(mapResult)

// map활용사례
let names =  arr1.map((arr)=>arr.name);
console.log(names)

//3.sort
// 배열을 사전 순으로 정렬하는 메서드
// 그런데 arr3가 숫자로 이루어진 배열이라면 sort메서드가 먹히지 않는다. 사전순으로 정렬되는거니까
let arr3 =["b","c","a"];
arr3.sort();
console.log(arr3)

let arr4 =[10,3,5];

arr4.sort((a,b)=>{
    if(a>b){
        //오름차순으로 하려면 양수값반환
        return 1; //b가 먼저 오는 걸의미
    } else if(a<b){
        return -1;
    }else{
        return 0; //자리를 안바꾸는 것을 의미
    }
});

console.log(arr4);

// 4.toSorted 메서드
// sort는 원본 배열을 정렬하는 메서드라면 toSorted는 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c","a","b"]
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5.join메서드
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi","im","winterlood"];
const joined = arr6.join(); //구분자는 기본 컴마고 구분자를 바꾸고 싶다면 ()안에 변수로 '-'이나  ' '(공백)을 주어도 됨
console.log(arr6);