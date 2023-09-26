import swal from "sweetalert";

const DonationSingleCard = ({ card }) => {
  const {id, picture, description,title, price,text_color } = card;

const handleClick=()=>{
    const addArray = []
    const donationItem = JSON.parse(localStorage.getItem('donation'))
    if(!donationItem){
        addArray.push(card)
        localStorage.setItem('donation', JSON.stringify(addArray))
        swal("Good job!", "Donation Compleat !!", "success");
    }
    else{

        const isExits = donationItem.find(donCard =>donCard.id === id)
        // console.log(isExits);
        if(!isExits){

            addArray.push(...donationItem,card)
            localStorage.setItem('donation', JSON.stringify(addArray))
            swal("Good job!", "You clicked the button!", "success");
        }
        else{
            swal("error!", "No duplicate", "error");
        }
    }
}

  return (
    <div className="mt-8">
      <div className="flex justify-center items-center ">
        <div>
          <div className="relative">
            <img className="w-full  " src={picture} alt="" />
            <div className="bg-[#4e484e80] rounded-lg absolute bottom-0 left-0 right-0 p-8 ">
                <span onClick={handleClick} style={{background:text_color,color:'white',padding:'12px',borderRadius:'5px',fontFamily:'bold',cursor:'pointer'}}>Price: {price}</span>
            </div>
          </div> 
            <h1 className="text-4xl font-bold py-6">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationSingleCard;
