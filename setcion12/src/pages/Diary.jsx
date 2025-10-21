import { useParams } from "react-router-dom";

const Diary = () =>{
//    URL 파라미터를 가져오는 훅 useParams. *쿼리스트링을 가져오는 훅은 useSearchParams
    const params = useParams();
  
    return <div>{params.id}번 일기입니다</div>
}

export default Diary;