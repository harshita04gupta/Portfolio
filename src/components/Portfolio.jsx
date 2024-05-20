
import React from "react";
import pic1 from "../assets/portfolio/pic1.png";
import pic2 from "../assets/portfolio/pic2.png";
import pic3 from "../assets/portfolio/pic4.png";
import pic4 from '../assets/portfolio/pic3.png';

function Portfolio() {
  const portfolioLinks = [
    {
      id: 1,
      img: pic1,
      name: "CreatiVision",
      demo: "https://aiimagegeenerator.netlify.app/",
      code: "https://github.com/harshita04gupta/AI-IMAGE-GENERATOR",
    },
    
    {
      id: 2,
      img: pic2,
      name: "ResumeCraft",
      demo: "https://ressumemaker.netlify.app/",
      code: "https://github.com/harshita04gupta/resume_builder",
    },
    {
      id: 3,
      img: pic3,
      name: "Portfolio",
      code: "https://github.com/ayush-gupta2002/fund-me",
      demo: "https://github.com/ayush-gupta2002/fund-me",
    },
    {
      id: 4,
      img: pic4,
      name: "Reaso.nablejewellery",
      demo: "https://aiimagegeenerator.netlify.app/",
      code: "https://github.com/harshita04gupta/AI-IMAGE-GENERATOR",
    },
  ];

  const renderedCards = portfolioLinks.map((p) => {
    return (
      <div key={p.id} className="shadow-md shadow-gray-600 rounded-lg">
        <h1 className="text-center font-semibold text-2xl mb-4">{p.name}</h1>
        <img
          src={p.img}
          alt={p.name}
          className="h-[180px] rounded-md hover:scale-105 duration-300 cursor-pointer w-screen"
        ></img>
        <div className="items-center justify-center flex w-full">
          <a
            href={p.demo}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex justify-end"
          >
            Demo
          </a>
          <a
            href={p.code}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
          >
            Code
          </a>
        </div>
      </div>
    );
  });

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 pt-20 mx-auto flex flex-col justify-center w-screen h-screen">
        <div className="pb-5 pt-7">
          <p className="pt-20 text-4xl  font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 sm:px-0">
          {renderedCards}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
