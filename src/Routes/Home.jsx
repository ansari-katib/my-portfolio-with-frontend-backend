import React from 'react';
import MyImg from "../assets/myImg.jpg";
import { Link } from 'react-router-dom';
import "../Routes/Home.css"

function Home() {
  return (
    <>
      <div className='Home-page pb-10 bg-black text-white grid grid-cols-1 md:grid-cols-2 items-center h-auto md:h-screen '>
        {/* Image Section (First on mobile) */}
        <div className="right flex justify-center items-center order-first md:order-last mt-10 mb-10 sm:mt-6 sm:mb-6">
          <div className="border-gradient p-1 rounded-lg animate-border">
            <img
              className="myimg bg-center rounded-lg h-[19rem] w-auto sm:h-[15rem] md:h-[18rem] lg:h-[19rem] object-cover"
              src={MyImg}
              alt="Kaitb Ansari"
            />
          </div>
        </div>


        {/* Text Section */}
        <div className="left mx-6 md:ml-40 order-last md:order-first">
          <h1 className="heading mb-10 text-3xl md:text-5xl overflow-hidden whitespace-nowrap border-r-4 border-indigo-600 pr-4">
            hello there, my name is <br></br>  <span className="text-indigo-600 animate-typing font-bold">Kaitb Ansari</span>
          </h1>

          <p className="text-lg text-gray-500 mb-6">
            Hi, I'm <span className="font-bold text-gray-300">Kaitb Ansari</span>, a passionate and dedicated software developer with a strong foundation in web development technologies like React, Node.js, and MongoDB. I love creating interactive and user-friendly web applications that help solve real-world problems.
          </p>
          <p className="text-lg text-gray-500 mb-6">
            I am currently pursuing my BSc in Computer Science and have been building various projects using modern web development frameworks. I enjoy collaborating on projects, learning new technologies, and continuously improving my skills.
          </p>
          <p className="text-lg text-gray-500">
            My goal is to become a successful software engineer, building impactful applications that improve the user experience and provide innovative solutions. When I'm not coding, I enjoy exploring new tech trends, reading, and connecting with fellow developers.
          </p>
          <p className='mt-5 '>
            <Link to={'/about'} className='bg-slate-300 mr-2 text-black px-4 py-2 rounded-lg font-bold ' > About Me </Link>
            <Link to={'/contact'} className='bg-slate-300 text-black px-4 py-2 rounded-lg font-bold ' > Contact me </Link>
          </p>
          
        </div>


      </div>
    </>
  );
}

export default Home;
