import { useState, useMemo } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({todos, onUpdate, onDelete}) =>{

    const [search,setSerch] = useState("");
    const onChangeSearch = (e) =>{
        setSerch(e.target.value);
    }

    const getFilterdData = () =>{
        if(search===""){
            return todos;
        }
        return todos.filter((todo)=>
        todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    const filteredTodos =getFilterdData();


    //첫번째 콜백함수의 결과값을 그대로 반환하고, []의존성배열에 담긴 값이 바뀔 때만 리렌더링
    const{totalCount, doneCount, notDoneCount} = useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length
        const notDoneCount = totalCount - doneCount

        return{
            totalCount,
            doneCount,
            notDoneCount
        }
    },[todos]) //배열에 담긴 값이 없으면 제일 처음에만 수행 그러면 todos의 변화가 있어도 값이 안바뀌어지는 문제발생

    return (
        <div className="List">
        <h4>Todo List ❤️</h4>
        <div>total :{totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>

        <input 
        value={search} 
        onChange={onChangeSearch} 
        placeholder="검색어를 입력하세요" />
            <div className="todos_wrapper">
            {filteredTodos.map((todo)=>{
                return <TodoItem 
                key={todo.id} 
                {...todo} 
                onUpdate={onUpdate}
                onDelete ={onDelete}
                />
            })}    
            </div>
        </div>
    );
};

export default List;

