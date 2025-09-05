import blog_pic_1 from './blog_pic_1.png';
import blog_pic_2 from './blog_pic_2.png';
import blog_pic_3 from './blog_pic_3.png';
import blog_pic_4 from './blog_pic_4.png';
import blog_pic_5 from './blog_pic_5.png';
import blog_pic_6 from './blog_pic_6.png';
import blog_pic_7 from './blog_pic_7.png';
import blog_pic_8 from './blog_pic_8.png';
import blog_pic_9 from './blog_pic_9.png';
import blog_pic_10 from './blog_pic_10.png';
import blog_pic_11 from './blog_pic_11.png';
import blog_pic_12 from './blog_pic_12.png';
import blog_pic_13 from './blog_pic_13.png';
import blog_pic_14 from './blog_pic_14.png';
import blog_pic_15 from './blog_pic_15.png';
import blog_pic_16 from './blog_pic_16.png';
import facebook_icon from './facebook_icon.png'
import googleplus_icon from './googleplus_icon.png'
import twitter_icon from './twitter_icon.png'
import profile_icon from './profile_icon.png'
import logo from './logo.png'
import arrow from './arrow.png'
import logo_light from './logo_light.png'
import blog_icon from './blog_icon.png'
import add_icon from './add_icon.png'
import email_icon from './email_icon.png'
import upload_area from './upload_area.png'

export const assets = {
    facebook_icon,
    googleplus_icon,
    twitter_icon,
    profile_icon,
    logo,
    arrow,
    logo_light,
    blog_icon,
    add_icon,
    email_icon,
    upload_area
    }

    export const blog_data = [{
        id:1,
        title:"Is the weight of your sin so heavy that you feel like praying is pointless?",
        description:"Take a look into this testimony of a young lady who thought her sin was too big for God to forgive her. But God had other plans...",
        image:blog_pic_1,
        date:Date.now(),
        category:"Personal",
        author:"Joseney Jean Pierre",
        author_img:profile_icon
    },
    {
        id:2,
        title:"You have faith, you believe in Jesus but don't see why church is neccesary?",
        description:"Let's take a look into this reading and understand the importance of our church attendance as believers in Christ.",
        image:blog_pic_2,
        date:Date.now(),
        category:"Church",
        author:"Joseney Jean Pierre",
        author_img:profile_icon
    },
    {
        id:3,
        title:"Do you long for a true intimate relationship with God? But think you have to give up your lifestyle first then you can seek Him?",
        description:"Have you forgotten that Jesus says come as you are?",
        image:blog_pic_3,
        date:Date.now(),
        category:"Personal",
        author:"Joseney Jean Pierre",
        author_img:profile_icon
    },
    {
        id:4,
        title:"You desire marriage but do you understand what God's plan and purpose for marriage is?",
        description:"Read this piece to gain insight on the true meaning of marriage.",
        image:blog_pic_4,
        date:Date.now(),
        category:"Marriage",
        author:"Joseney Jean Pierre",
        author_img:profile_icon
    },
   /*   {
        id:5,
        title:"Enhancing your skills and capturing memorable moments",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_5,
        date:Date.now(),
        category:"Personal",
        author:"Joseney Jean Pierre",
        author_img:profile_icon
    },
    {
        id:6,
        title:"Maximizing returns by minimizing resources in your startup",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_6,
        date:Date.now(),
        category:"Church",
        author:"Joseney Jean Pierre",
        author_img:profile_icon
    },
    {
        id:7,
        title:"Technology for Career advancement in development",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_7,
        date:Date.now(),
        category:"Relationship",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:8,
        title:"A comprehensive roadmap for effective lifestyle management",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_8,
        date:Date.now(),
        category:"Relationship",
        author:"Joseney Jean Pierre",
        author_img:profile_icon
    },
  {
        id:9,
        title:"Achieving maximum returns with minimal resources",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_9,
        date:Date.now(),
        category:"Personal",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:10,
        title:"Beyond the Ordinary: Crafting Your Exceptional Lifestyle",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_10,
        date:Date.now(),
        category:"Personal",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:11,
        title:"Unveiling the Secrets of Successful Startups in Technolgy",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_11,
        date:Date.now(),
        category:"Personal",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:12,
        title:"How to design an online Learning Platform today",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_12,
        date:Date.now(),
        category:"Personal",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:13,
        title:"Tomorrow's Algorithms: Shaping the Landscape of Future AI",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_13,
        date:Date.now(),
        category:"Personal",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:14,
        title:"Balance & Bliss: Navigating Life's Journey with Style",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_14,
        date:Date.now(),
        category:"Relationship",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:15,
        title:"Exploring the Evolution of social networking in the Future",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_15,
        date:Date.now(),
        category:"Church",
        author:"Alex Bennett",
        author_img:profile_icon
    },
    {
        id:16,
        title:"Shaping the Future of statup ecosystem in the world",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
        image:blog_pic_16,
        date:Date.now(),
        category:"Marriage",
        author:"Alex Bennett",
        author_img:profile_icon
    }, */
]