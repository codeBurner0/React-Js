import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Api() {
  const API="http://localhost:3000/trains";
  const [product, setProduct]=useState([]);
  const [error,setError]=useState('');
  
    useEffect(() => {
        const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODIwMDE4MjUsImNvbXBhbnlOYW1lIjoiRHJlYW1BQVdvcmtzIiwiY2xpZW50SUQiOiJjNTg3YTUyNi0xYzkxLTQyNmYtYjgyOS05MjVmNDAxZjEyN2UifQ.poCDYSitBO9xK1LUpECsqvHjr8f5Bgc14Fc6FMR_I98' };
        fetch('http://localhost:3000/trains', { headers })
            .then(response => response.json())
            .then(data => setProduct(data));
    }, []);



  return (
    <div>
      {(error!=="" && <h1>{error}</h1>)}
      {
        product.trainName
        // product.map((e,i)=>{
        //   const {trainName,trainNumber,departureTime}=e;

          
        //   return <div key={i}>
        //     <h1>{trainName}</h1>
        //     {/* <h2>{trainNumber}</h2> */}
        //   </div>
        // })
      }
    </div>
  )
}

export default Api
