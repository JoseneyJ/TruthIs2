import { assets }  from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {

  const [email,setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email',email);
    const response = await axios.post('/api/email',formData);
    if(response.data.success){
    toast.success(response.data.msg);
    setEmail('');
    } 
    else {
        toast.error('Subscription failed. Please try again.')

    }

  }


  return (
<div className='py-5 px-5 md:px-12 lg:px-12 lg:px-28'> 
    <div className='flex justify-between items-center'> 
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-20' /> 
        <button className= 'flex  items-center gap-2 font-medium py-1 px-3 sm:py-6 border border-solid border-black shawdow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} /></button>
    </div>
    <div className='text-center my-10'>
        <h1 className='text-3xl sm:text-5x1 font-medium'> Latest Testimonies</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs'> Subscribe to our website below to receive a notification anytime a new testimony is posted! </p>
        <form onSubmit={onSubmitHandler}className='flex justify-between max-w-[500px] scale-75 sm:sca;e-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='w-full px-3 py-2 outline-none' />
            <button type= 'submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white cursor-pointer'> Subscribe </button>

        </form>

    </div>
</div>
  )
}

export default Header