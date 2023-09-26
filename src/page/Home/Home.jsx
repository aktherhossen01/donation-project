import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../../component/Header/Banner/Banner";


const Home = () => {
    const cards = useLoaderData()
    // console.log(cards);
    return (
        <div>
            <Banner cards={cards}></Banner>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;