/* eslint-disable react/prop-types */
import Card from "./Card";


const Cards = ({cards}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 lg:grid-cols-4 gap-6">
            {cards?.map(card =><Card key={card.id} card={card}></Card>)}
        </div>
    );
};

export default Cards;