import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationSingleCard from "./DonationSingleCard";


const DonationCard = () => {
    const [card,setCard]= useState({})
    const user = useLoaderData()
    const {id}= useParams()
    const idInt = parseInt(id)
    useEffect(()=>{
        const findUser = user.find(users=>users.id === idInt)
            setCard(findUser)
    },[idInt,user])
console.log(card);

   


   
    return (
        <div>
           <DonationSingleCard card={card}></DonationSingleCard>
        </div>
    );
};

export default DonationCard;