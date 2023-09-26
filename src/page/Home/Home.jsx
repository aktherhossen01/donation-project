import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";


const Home = () => {
    const cards = useLoaderData()
    // console.log(cards);
    return (
        <div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;