// const Button = (props) =>{
//     console.log(props);
//     return <button style={{color:props.color}}>{props.text}-{props.color.toUppercase()}</button>;
// };

// 위의 방식은 props.color가 undefined일때 toUpperCase()에서 오류가 발생. 따라서 color가 없을때 기본값 세팅해줘야하는데 그것은 props를 받는 것을 객체의 구조분해할당법을 이용
// 하여 기본값을 주면 된다.
// 구조분해할당 방법
const Button = ({children,text, color = "black"}) =>{
    const onClickButton = (e) =>{
        console.log(e)
        console.log(text);
    }


    return <button 
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{color: color}}>{text}-{color.toUpperCase()}
    {children}
    </button>;

};



export default Button;