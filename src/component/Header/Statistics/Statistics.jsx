import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";



const Statistics = () => {
    const users = useLoaderData({})
    
    const [donet , setDonet]= useState()
    const [totalDonet, setTotalDonet]= useState()
    console.log(donet);
    // console.log(totalDonet);
    // console.log(users);
    useEffect(()=>{
        
    const donationsItems = users?.reduce((previesVallue, currentValue)=>previesVallue + currentValue.price, 0)
    const donetd = JSON.parse(localStorage.getItem('donation'))
    console.log(donetd);
    const donetdTotal = donetd?.reduce((preValue, currentValuei)=>preValue + currentValuei.price,0)
// console.log(donationsItems - donetdTotal);
// console.log(donationsItems);
        setDonet(donetdTotal)

        setTotalDonet(donationsItems - donetdTotal )
    },[users])
     const data = [
        ["Task", "Hours per Day"],
        ["Eat", donet],
        ["Work", totalDonet]

      ];
       const options = {
        title: "My Daily Activities",
      };
      
    return (
        <div>
             <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
    );
};

export default Statistics;