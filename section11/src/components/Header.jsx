import "./Header.css";
import {memo} from "react"

const Header = () =>{
    return <div className="Header">
    <h3>오늘은 😊</h3>
    <h1>{new Date().toDateString()}</h1>

    </div>
};
//컴포넌트를 메모로
// const memoizedHeader = memo(Header)
// export default memoizedHeader;

export default memo(Header);
