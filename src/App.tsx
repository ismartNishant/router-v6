import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contactus from './Components/Contactus';
import Github from './Components/Github';
import PageNotFound from './Components/PageNotFound';
import HelpLayout from './Layouts/HelpLayout';
import Faq from './Components/Faq';
import CareersLayout from './Layouts/CareersLayout';
import Careers from './Components/Careers';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutUs />}> </Route>
        <Route path='/contact' element={<Contactus />}> </Route>
        <Route path='/github' element={<Github />}> </Route>
        <Route path='*' element={<PageNotFound />} />
        
        <Route path='/help' element={<HelpLayout />}>
          <Route path='/help/faq' element={<Faq />} />
          <Route path='/help/contact' element={<Contactus />} />
        </Route>
        
        <Route path='/careers' element={<CareersLayout />}>
          <Route index element={<Careers />} />
        </Route>

      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
