
import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'
import { useEffect } from 'react';
import axios from 'axios';

const BlogList = () => {

  const [menu, setMenu] = useState('All');
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  }
  
  useEffect(() => {
    fetchBlogs();
  },[]) 

  return (
    <div>
    <div className= 'flex justify-center gap-6 my-10'>
    <button onClick={()=>setMenu('All')} className= {menu==="All"?'bg-black text-white py-1 px4 rounded-sm':""}> Categories </button>
    <button onClick={()=>setMenu('Personal')} className= {menu==="Personal"?'bg-black text-white py-1 px4 rounded-sm':""}>Personal</button>
    <button onClick={()=>setMenu('Relationship')} className= {menu==="Relationship"?'bg-black text-white py-1 px4 rounded-sm':""}> Relationship</button>
    <button onClick={()=>setMenu('Marriage')}className= {menu==="Marriage"?'bg-black text-white py-1 px4 rounded-sm':""}>Marriage</button>
    <button onClick={()=>setMenu('Church')}className= {menu==="Church"?'bg-black text-white py-1 px4 rounded-sm':""}>Church</button>
    </div>
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item)=> menu==='All'?true:item.category===menu).map((item,index) => {
            return <BlogItem key={index} id={item.id} image={item.image} title= {item.title} description={item.description} category={item.category}/>
})}

    </div>
    </div>
  )
}

export default BlogList