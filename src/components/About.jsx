import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-gradient-to-b
    from-gray-800 to-black text-white'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>
        ABOUT </p>
        </div>

        <p className='text-xl mt-15 leading-loose'>
        Hello!👋 I'm Harshita Gupta, a final year B.Tech student at Bhagwan Parshuram Institute of Technology (affiliated to GGSIPU), 
        majoring in Information Technology with a minor degree in Software Engineering. As a passionate and dedicated 
        full-stack web developer, I combine my technical expertise with a strong foundation in data structures, 
        algorithms, and data analysis to create innovative and efficient solutions. 
        </p>
        <br/>

        <p className='text-xl w-full leading-loose'>
        I specialize in:<br/>
        <br/>
        Full-Stack Web Development: Building responsive and user-friendly web applications using technologies 
        like HTML, CSS, JavaScript, React, Node.js,MongoDb,Express,Tailwind.<br/>
        
        Data Structures and Algorithms:(Programming languages: C++,Python) Designing efficient algorithms and leveraging 
        data structures to optimize performance and solve complex problems.<br/>
        
        Data Analysis: Analyzing data to derive meaningful insights, utilizing tools such as Python,SQL,PowerBi,Excel 
        and various other data visualization libraries.
        </p>
      </div>
    </div>
  )
}

export default About

