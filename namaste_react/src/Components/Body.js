import React, { useState } from 'react'
import Card from './Card';
import rest from "./Data";

function FilterFun(searchTxt,restaurent){
  const fildata=restaurent.filter((restaurant)=>
    restaurant.data.data.name.includes(searchTxt) 
  );
  return fildata;
}
function Body() {
   const cont={
    margin:"50px 100px 50px 100px",
    width:"100%",
    display:"grid",
    gridTemplateRows :"auto",
    gridTemplateColumns :"210px 210px 210px 210px 210px",
    gridGap:"50px 30px"
   }

   const [searchTxt,setSearchTxt]=useState("");
  const [restaurent,setRestaurent]=useState(rest);
  
  return (
    <>
    <input type="text" placeholder={"Search Here"}  value={searchTxt} on onChange={
      (e)=>{
        setSearchTxt(e.target.value);
      }
    }/>
    <button onClick={()=>{
      const data=FilterFun(searchTxt,restaurent);
      setRestaurent(data);
    }}>Search</button>
    <div style={cont}>
      {restaurent.map((obj)=>{
        return <Card {...obj.data.data} key={obj.data.data.id}/>
      })}
    </div>
    </>
  )
}

export default Body
