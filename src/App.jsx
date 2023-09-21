import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Info from './Info';
import Navbar from './Navbar';
import Error404 from './Error404';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
   <BrowserRouter>
   
   <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<Info/>}/>
        <Route path='/Info' element={<About/>}/> 
        <Route path='/Contact' element={<Contact/>}/> 
        <Route element={<Error404/>}/> 
       </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
