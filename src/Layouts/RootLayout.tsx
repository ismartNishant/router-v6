import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import "../App.css"
import Header from '../Components/Header'

const RootLayout = () => {
    return (
        <div className='p-4 md:p-8'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout
