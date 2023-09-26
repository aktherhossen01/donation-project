import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../../component/Header/Banner/Banner";
import { useState } from "react";


const Home = () => {
    const cards = useLoaderData()
    
    const [setdata,setSetdata]= useState()
    const [alldisplay, setAlldisplay] = useState(false) 
    const cardItem = cards.filter(data =>data.category?.toLowerCase() === setdata?.toLowerCase())
    console.log(setdata);
    
    const handleClick= (e)=>{
        e.preventDefault()
        setSetdata(e.target.text.value)
        setAlldisplay(true)
    }
    return (
        <div>
            <Banner handleClick={handleClick}></Banner>
            {!alldisplay && cardItem ?<Cards cards={cards}></Cards>:<Cards cards={cardItem}></Cards>}
            
        </div>
    );
};

export default Home;