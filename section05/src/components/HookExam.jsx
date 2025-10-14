import {useState} from "react"
import useInput from "../hooks/useInput";
// 3가지 hook 관련된 팁
// 1.함수컴포넌트, 커스텀 훅 내부에서만 호출이 가능하다
// 2.조건문이나 반복분 안에서는 호출 불가
// 3. 나만의 훅(커스텀 훅을)직접 만들 수 있다.


const HookExam = () =>{
    const [input,onChange] = useInput();
    
    return (
    <div>
       <input value={input} onChange={onChange} /> 
    </div>
    );
};

export default HookExam;