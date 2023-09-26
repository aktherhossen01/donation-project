/* eslint-disable react/prop-types */

import { useState } from "react";


const Banner = ({cards}) => {
    const [setdata,setSetdata]= useState()
    const cardItem = cards.filter(data =>data.category === setdata)
    console.log(cardItem);
    
    const handleClick= (e)=>{
        
        e.preventDefault()
        
        console.log('ami');
        setSetdata(e.target.text.value)
    }
  return (
    <div className="  ">
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: `url('https://i.ibb.co/rxCFbfd/Rectangle-4281-1.png?fbclid=IwAR22o6dRJVxJAMANis2UsBLjOqAua5cBoxJE1iecWO2LhSkeNlyOpZL78ZU')`,
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-white"></div>
        <div className="hero-content text-center ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
            
            <div>
           <form onSubmit={handleClick}>
           <input  type="text" name="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-2xl" />
           <input className="btn btn-primary" type="submit" value="Submit" />
           </form>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
