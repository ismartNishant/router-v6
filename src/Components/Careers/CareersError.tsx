import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

interface RouteError {
    message: string;
}
const CareersError = () => {
    const error = useRouteError() as RouteError;

    return (
        <div className='my-10'>
            <h1 className='text-5xl mb-2 text-center text-red-500 font-medium '>Error</h1>
            <p className='mb-2'>{error.message}</p>
            <Link to="/" className='font-medium hover:underline text-indigo-500'>Back to Home Page</Link>
        </div>
    )
}

export default CareersError
