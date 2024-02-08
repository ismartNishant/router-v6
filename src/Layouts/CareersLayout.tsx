import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div>
      <h1 className='text-xl'>careers layout comp</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias iste sunt dignissimos repellendus, iusto doloremque unde vero est eveniet voluptate, officiis reiciendis quos quasi fuga rerum assumenda laborum, incidunt repudiandae?</p>
      <Outlet />

    </div>
  )
}

export default CareersLayout
