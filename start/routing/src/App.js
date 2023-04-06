import './App.css';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Product from './components/Product';
import Shirt from './components/Shirt';
import Jeans from './components/Jeans';
function App() {
  const navigate=useNavigate();
  const navToAbout=(name)=>{
    (name==="Ankit")? navigate('/About') : navigate('/Services');
  }
  // const na=()=>{
  //   navigate('/About');
  // }
  return (
    <>
    <center><Navbar /></center>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/About' element={<About/>} />
      <Route  path='/Services' element={<Services/>} />
      <Route  path='/Contact' element={<Contact/>} />
      < Route path='/Product' element={<Product/>} >
        <Route index element={<Jeans/>}/>
        <Route  path='Shirt' element={<Shirt/>} />
        <Route  path='Jeans' element={<Jeans/>} />
      </Route>
      <Route  path='*' element={<PageNotFound/>} />
    </Routes>
    <button onClick={()=>navToAbout("Ankit")}  >Go to About</button>
    <button onClick={()=>navigate(-1)}  >Go back About</button>
    </>
    
  );
}

export default App;
