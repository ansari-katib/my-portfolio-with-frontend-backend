import React from 'react';
import { Link } from 'react-router-dom';
import "../Routes/Home.css";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MY_IMAGE from '../assets/myimage.jpg';
import { BackgroundBeamsDemo } from '../background-animation/Bg';
import { TimelineDemo } from '../Components/ScrollComp';

function Home() {
  return (
    <>
      <BackgroundBeamsDemo />
      <Navbar />

      {/* Main Section */}
      <div className="relative z-10 min-h-[81vh]  w-full py-12">
        <div className='flex items-center justify-center min-h-full '>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 md:px-16 lg:px-20">
            {/* Image Section */}
            <div className="flex justify-center items-center order-first md:order-last">
              <div className="border-gradient p-2 rounded-lg animate-border">
                <img
                  className="myimg rounded-lg h-[16rem] sm:h-[18rem] md:h-[22rem] lg:h-[24rem] w-auto object-cover"
                  src={MY_IMAGE}
                  alt="Katib Ansari"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="mx-auto md:ml-10 text-center md:text-left ">
              <h1 className="text-gray-400 heading mb-6 text-3xl md:text-4xl lg:text-5xl font-bold overflow-hidden whitespace-nowrap border-r-4 border-indigo-600 pr-4">
                Hello there, my name is <br />
                <span className="text-indigo-600 font-extrabold animate-typing">Katib Ansari</span>
              </h1>

              <p className="text-lg sm:text-base lg:text-xl text-gray-400 mb-4">
                Hi, I'm <span className="font-bold text-gray-300">Katib Ansari</span>, a passionate and dedicated software developer with a strong foundation in web development technologies like <strong> React, Node.js, Express.js , and MongoDB. </strong>I love creating interactive and user-friendly web applications that help solve real-world problems.
              </p>
              <p className="text-lg sm:text-base lg:text-xl text-gray-400 mb-4">
                I pursued my <strong>BSc in Computer Science</strong> and have been building various projects using modern web development frameworks. I enjoy collaborating on projects, learning new technologies, and continuously improving my skills.
              </p>
              <p className="text-lg sm:text-base lg:text-xl text-gray-400">
                My goal is to become a successful software engineer, building impactful applications that improve user experience and provide innovative solutions. When I'm not coding, I enjoy exploring new tech trends, reading, and connecting with fellow developers.
              </p>

              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  to="/about"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-indigo-600 transition-all duration-300"
                >
                  About Me
                </Link>
                <Link
                  to="/contact"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-indigo-600 transition-all duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimelineDemo />
      <Footer />
    </>
  );
}

export default Home;
