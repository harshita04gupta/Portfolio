import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactimage from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import expressjs from '../assets/expressjs.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import cpp from '../assets/c-plus-plus-logo.png';
import mongo from '../assets/mongodb.png';
import sql from '../assets/mysql-logo.png';
import Python from '../assets/python.png';

const Skills = () => {

    const techs =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-sky-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactimage,
            title:'REACT',
            style:'shadow-sky-500'
        },
        {
            id:5,
            src:nodejs,
            title:'NodeJs',
            style:'shadow-gray-500'
        },
        {
            id:6,
            src:expressjs,
            title:'ExpressJs',
            style:'shadow-green-400'
        },
        {
            id:7,
            src:github,
            title:'GitHub',
            style:'shadow-gray-400'
        },
        {
            id:8,
            src:mongo,
            title:'MongoDb',
            style:'shadow-green-400'
        },
        
        {
            id:9,
            src:cpp,
            title:'C++',
            style:'shadow-sky-400'
        },
        
        {
            id:10,
            src:sql,
            title:'MySql',
            style:'shadow-orange-400'
        },
        {
            id:11,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:12,
            src:Python,
            title:'Python',
            style:'shadow-yellow-400'
        },
    ];


  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800
    to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4
            border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the Technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4
        gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs.map(({id,src,title,style})=>(

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                       <img src={src} alt="" className='w-20 mx-auto'/>
                       <p className='mt-4'>{title}</p>
                   </div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
