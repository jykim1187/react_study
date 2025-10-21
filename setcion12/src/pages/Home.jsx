import { useSearchParams } from "react-router-dom";

const Home = () =>{
    const [params,serParams] = useSearchParams();


    return <div>Home</div>
}

export default Home;