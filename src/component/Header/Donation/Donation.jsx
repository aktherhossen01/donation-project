import { useEffect, useState } from "react";
import DonationsCards from "../../../page/DonationCard/DonationsCards";


const Donation = () => {
    const [donation,setDonation]= useState([])
    const [noFound,setNoFound]= useState(false)
    const [isTrue ,setIsTrue] = useState(4)
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
                {donation.slice(0, isTrue).map(donetionclub=><DonationsCards key={donetionclub.id} donetionclub={donetionclub}></DonationsCards>)}
                </div>
               {
                donation.length >=4 && <div style={{textAlign:'center',paddingTop:'15px'}} className={isTrue === donation.length ? "hidden" : ""}
                >
                    <button onClick={()=>setIsTrue(donation.length)} className="px-3 py-2 bg-red-500 rounded-md text-white">See more</button>
                </div>
               }


               
        
                </div>} </div>
    );
};

export default Donation;