// 5가지 요소 순회 및 탐색 메서드
// 1.forEach
// forEach를 사용하면서 콜백함수를 호출하면 그때는 순서대로 현재 처리중인 요소값, 현재요소의 인덱스, 원본배열을 넘겨주기로 되어있음

let arr1 =[1,2,3];

arr1.forEach(function(item, idx, arr){
    console.log(idx,item *2);
});

// 2.includes 
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 =[1,2,3];
let inInclude = arr2.includes(10) //false

// 3.indexOf
// 특정 요소의 인덱스(위치)를 찾아내 반환하는 메서드
let arr3 =[1,2,3];
let index = arr3.indexOf(2); //1
let index2 = arr3.indexOf(10) // 없는 위치는 -1을 리턴

// 4.findeIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인텍스(위치)를 반환하는 메서드
let arr4=[1,2,3];
arr4.findIndex((item)=>{
    if(item ===2) return true;

})

// indexOf가 있는데 findIndex를 쓰는 이유는 indexOf는 객체배열에서는 값을 못찾아내기 떄문

let objArr = [
    {name:"벤자민"},
    {name:"호나우두"}
];

const findIndex = arr4.findIndex(
(item)=>item.name ==="벤자민"
)

//5.find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 그 요소를 그대로 반환
objArr.find((item)=>item.name==="벤자민"); //인덱스가 아니라 벤자민 객체 그자체를 리턴함