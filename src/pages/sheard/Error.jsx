import React from 'react';
import error  from '../../assets/error.svg'
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className='p-4'>
            <figure className='flex justify-center py-20'>
                <img src={error} alt="This is a Error Image" />
            </figure>
           <Link to="/">
            <div className='flex justify-center'>
                <button className='bg-[#60E5AE] w-1/3 p-2 rounded-md'>Back To Home</button>
            </div>
           </Link>
        </div>
    );
};

export default Error;