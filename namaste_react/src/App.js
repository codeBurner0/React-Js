import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
function App() {

  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

// hooks are normal func by which we can achieve two way data binding 
// but react has one way data binding
// React doesnot know what happenened with your llocal variables and 
// it does not keep record of local variables 
// so, if we update the local variable then it doesnot change in the ui so we create state variable bacause react kep the records 
// of the state variables anf rerender them when they change
export default App



 // const color={
  //   backgroundColor:"red",
  //   border:'2px solid black'
  // }
// {/* <h1 style={color}>This is App component</h1>  one way to give css in react*/}
// {/* <h1 style={{backgroundColor:"red"}}>Hello</h1>  second way to give css*/}