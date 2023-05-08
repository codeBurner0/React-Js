import React,{useState} from 'react'
function Counter() {
  var [varible,setVarible]=useState("Hello");
  var [isHello,setIsHello]=useState(true);
    function Change(){
      if(isHello){
        setVarible("Bye"); 
      }else{
        setVarible("Hello");
      }
      setIsHello(!isHello)
    }
  return (
    <div>
      <h1>{varible}</h1>
      <button onClick={Change}>Hello</button>
    </div>
  )
}
export default Counter