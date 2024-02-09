import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//layouts
import HelpLayout from './Layouts/HelpLayout';
import CareersLayout from './Layouts/CareersLayout';
import RootLayout from './Layouts/RootLayout';

//components
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contactus from './Components/Contactus';
import Github from './Components/Github';
import PageNotFound from './Components/PageNotFound';
import Faq from './Components/Faq';
import Careers, { carrersLoader } from './Components/Careers/Careers';
import CareersDetails, { CareersDeailsLoader } from './Components/Careers/CareersDetails';
import User from './Components/User';
import CareersError from './Components/Careers/CareersError';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >

        <Route index element={<Home />} />
        <Route path='/about' element={<AboutUs />}> </Route>
        <Route path='/contact' element={<Contactus />}> </Route>
        <Route path='/github' element={<Github />}> </Route>

        {/* //error route */}

        <Route path='user/:userid' element={<User />} />

        <Route path='/help' element={<HelpLayout />}>
          <Route path='/help/faq' element={<Faq />} />
          <Route path='/help/contact' element={<Contactus />} />
        </Route>

        <Route path='/Careers' element={<CareersLayout />} errorElement={<CareersError />}>
          <Route
            index
            element={<Careers />}
            loader={carrersLoader}
          />
          <Route
            path=':id'

            element={<CareersDetails />}
            loader={CareersDeailsLoader}
          />
        </Route>
        <Route path='*' element={<PageNotFound />} />

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
