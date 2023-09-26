import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Component/Home';
import Card from './Component/Card';
import Navbar from './Navbar';
import Error404 from './Error404';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MakeCard from './Component/MakeCard';
function App() {
  return (
   <>
   <BrowserRouter>
   
   <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MakeCard' element={<MakeCard/>}/>
        <Route path='/About' element={<About/>}/> 
        <Route path='/Contact' element={<Contact/>}/> 
        <Route element={<Error404/>}/> 
       </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
