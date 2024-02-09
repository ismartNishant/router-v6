import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-3xl text-indigo-500 mb-2  sm:mb-4'>Careers </h1>
      <p className='sm:mb-4 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias iste sunt dignissimos repellendus, iusto doloremque unde vero est eveniet voluptate, officiis reiciendis quos quasi fuga rerum assumenda laborum, incidunt repudiandae?</p>
      <Outlet />

    </div>
  )
}

export default CareersLayout
