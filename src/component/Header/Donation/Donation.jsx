import { useEffect, useState } from "react";
import DonationsCards from "../../../page/DonationCard/DonationsCards";


const Donation = () => {
    const [donation,setDonation]= useState([])
    const [noFound,setNoFound]= useState(false)
    const [isTrue ,setIsTrue] = useState(false)
    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if(donationItem){

            setDonation(donationItem)
        }
        else{
            
            setNoFound('no data found')
        }
    },[])
    // console.log(donation);
    return (
        <div>
            {noFound? <p className="h-[80vh] flex justify-center text-5xl font-bold items-center">{noFound}</p>:
            
            <div>
        
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {donation.map(donetionclub=><DonationsCards key={donetionclub.id} donetionclub={donetionclub}></DonationsCards>)}
                </div>

                <button className="px-5 bg-green-200 block mx-auto">See More</button>
        
                </div>} </div>
    );
};

export default Donation;