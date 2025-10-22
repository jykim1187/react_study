import { useState,useContext } from "react";

import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
import { DiaryStateContext } from "../App";



const getMonthlyData = (pivotDate, data) =>{
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
    const endtime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1,0,23,59,59).getTime();
    return data.filter((item) => item.createdDate >=beginTime && item.createdDate <=endtime )
}

const Home = () =>{
    const data =useContext(DiaryStateContext);
    const[pivotDate, setPivotDate] = useState(new Date());

    const onIncreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth() +1))
    }

    const onDecreaseMonth = () =>{
            setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth() -1))
    }

    return <div> 
    <Header 
    title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
    leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
    rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
    />
    <DiaryList />
    </div>
}

export default Home;