'use client';

import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/Components/Footer';
import axios from 'axios';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blogs',{
    params:{
      id: params.id
    }
  })

  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (data?<>
    <div className= 'bg-gray-200 py-5 px-5 md:px-12 lg:px-12 lg:px-28'>
      <div className='flex justify-between items-center mb-10'>
      <Image src={assets.logo} width={130} alt='logo' className='w-[60px]'/>
      <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:py-3 sm:px-6 border-black shadow-[-7px_7px_0px_#000000]'> 
        Get Started <Image src={assets.arrow} alt=''/>
        </button>
        </div>
        <div className='text-center my-24'>
            <h1 className= 'text-2x1 sm:text-5x1 font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt=''/>
      <p className= 'mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4  border-white' src={data.image} width={1280} height={720} alt='' />


        <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>
  



<div className='my-24'>
    <p className='text-black font-semibold my-4'> Share this testimony p.s. add social media </p> 
</div>

    </div>
    <Footer/>
    </>:<></>
  );
};

export default Page;
