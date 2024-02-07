import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import "../App.css"

const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
