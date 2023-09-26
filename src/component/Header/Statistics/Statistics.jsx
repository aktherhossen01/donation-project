import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
    const users = useLoaderData({})
    console.log(users);
    useEffect(()=>{
        
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Statistics;