import { NavLink } from "react-router-dom"


const PageNotFound = () => {
  return (
    <div className="relative flex flex-col max-w-xl mx-auto items-top justify-center min-h-[500px] bg-white sm:pt-0">
      <h1 className="text-3xl sm:text-4xl mb-4 ">Page <span className="text-indigo-500 font-bold">Not  </span>Found <span className="text-indigo-500 font-bold" >404</span></h1>
      <h1 className="mb-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident illum ea quos ipsam reprehenderit, nostrum iure officiis numquam error blanditiis omnis, voluptates hic distinctio ut. Atque temporibus adipisci expedita quasi. </h1>
      
      <h1>Go To The <NavLink to="/" className="underline text-indigo-500  rounded-sm font-medium  ms-1">HomePage </NavLink></h1>
    </div>
  )
}

export default PageNotFound
