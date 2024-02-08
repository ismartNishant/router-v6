import { Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div>
      <h1 className='text-xl'>help layout comp</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil ipsum cumque quisquam odit modi adipisci doloribus nesciunt ullam sint voluptate eos fuga debitis, sed architecto repellendus numquam, nulla commodi.</p>
      <Outlet />
    </div>
  )
}

export default HelpLayout
