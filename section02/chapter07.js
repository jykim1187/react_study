// 6가지 요소 조작 메서드

// 1.push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 그런데 리턴값으로는 배열의 길이를 리턴하기 떄문에 변수로 받아 사용가능하다
let arr1 = [1,2,3];
const newLenght = arr1.push(4,5,6,7);

// 2.pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 =[1,2,3];
const poppedItem = arr2.pop(); //3

//3.shift
// 배열에서 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();//1

// 4.unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1,2,3];
const newLenght2 = arr4.unshift(0); //arr4는 [0,1,2,3]이 되고, 배열의 길이를 리턴하여 newLenght2 =4가 된다

// 5.slice
// 가위 처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 =[1,2,3,4,5];
let slice = arr5.slice(2,5); //2번째 인덱스부터 5번째 인덱스전까지 삭제한다. //
// slice를 사용한다고 해서 원본 배열이 변화되는 것은 아니다.
// 그런데 어차피 끝까지 잘라내는 거면 시작점만 인수로 줘도 된다. arr5.slice(2)이렇게
console.log(slice) //3,4,5
console.log(arr5) //1,2,3,4,5
let sliced3 = arr5(-3) //3,4,5 ->음수값을 주면 뒤에서부터 자른다. 여기서는 뒤에서부터 3개

// 6.concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1,2];
let arr7 =[3,4];

let concatArr = arr6.concat(arr7); //1,2,3,4

