// 1.Date객체를 생성하는 방법
let date1 = new Date();
console.log(date1);

let date2 = new Date("1994-08-18/10:00:00");
console.log(date2);

// 2.타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초(세계협정시. UTC)"로부터 몇 ms가 지났는지를 의미하는 숫자값
// getTime()은 타임스탬프값을 리턴하는 메서드
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3.시간 요소들을 추출하는 방법
let year = date1.getFullYear();
// 자바에서 month는 인덱스처럼 나와서 +1을 해주어야함
let month = date1.getMonth()+1;
let date = date1.getDate();
let hour =date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4.시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //실제론 3월 
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(56);
date1.setSeconds(56);

// 5.시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //시간을 제외하고 날자만
console.log(date1.toLocaleString()); //우리나라에 맞는 시간 표기
