import './App.css'
import AboutUs from './Components/AboutUs';
import Contactus from './Components/Contactus';
import Github from './Components/Github';
import Home from './Components/Home';
// import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-24 ">
        <Routes >
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<AboutUs />}> </Route>
          <Route path='/contact' element={<Contactus />}> </Route>
          <Route path='/github' element={<Github />}> </Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
