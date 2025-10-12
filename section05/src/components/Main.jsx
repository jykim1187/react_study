// JSX 주의 사항
// 1.중괄호  내부에는 자바스크립트의 표현식만 넣을 수 있다. if문이나 for문은 불가하다
// 2.숫자열, 문자열, 배열 값만 렌더링 된다
// 3.모든 태그는 닫혀있어야 한다.
// 4.최상위 태그는 반드시 하나여야만 한다.
// ex.return문 아래의 main태그 (혹은 div태그 최상위 태그를 설정하고 싶지않다면 <>빈태그를 사용해도 된다)
import "./Main.css";

const Main = () =>{
    const user = {
        name:"이정환",
        isLogin: true,
    }


    // return (
    // <>
    // {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    // </>
    // )
    if(user.isLogin){
        return <div className="logout">로그아웃</div>;
    } else{
        return <div>로그인</div>;
    }




};

export default Main;