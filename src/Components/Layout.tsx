import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import "../App.css"
import Header from './Header'

const Layout = () => {
    return (
        <div className='p-4 md:p-8'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
