import React from 'react';
import MyImg from "../assets/myImg.png";
import { Link } from 'react-router-dom';
import "../Routes/Home.css";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <div className="Home-page pb-10 pt-10 bg-black text-white grid grid-cols-1 md:grid-cols-2 items-center h-auto md:h-screen gap-10 px-6">
        {/* Image Section */}
        <div className="right flex justify-center items-center order-first md:order-last mt-10 md:mt-0">
          <div className="border-gradient p-2 rounded-lg animate-border">
            <img
              className="myimg rounded-lg h-[16rem] sm:h-[18rem] md:h-[22rem] lg:h-[24rem] w-auto object-cover"
              src={MyImg}
              alt="Katib Ansari"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="left mx-auto md:ml-10 text-center md:text-left">
          <h1 className="heading mb-6 text-3xl md:text-4xl lg:text-5xl font-bold overflow-hidden whitespace-nowrap border-r-4 border-indigo-600 pr-4 ">
            Hello there, my name is <br />
            <span className="text-indigo-600 font-extrabold animate-typing">Katib Ansari</span>
          </h1>

          <p className="text-lg sm:text-base lg:text-lg text-gray-400 mb-4">
            Hi, I'm <span className="font-bold text-gray-300">Katib Ansari</span>, a passionate and dedicated software developer with a strong foundation in web development technologies like React, Node.js, and MongoDB. I love creating interactive and user-friendly web applications that help solve real-world problems.
          </p>
          <p className="text-lg sm:text-base lg:text-lg text-gray-400 mb-4">
            I am currently pursuing my BSc in Computer Science and have been building various projects using modern web development frameworks. I enjoy collaborating on projects, learning new technologies, and continuously improving my skills.
          </p>
          <p className="text-lg sm:text-base lg:text-lg text-gray-400">
            My goal is to become a successful software engineer, building impactful applications that improve user experience and provide innovative solutions. When I'm not coding, I enjoy exploring new tech trends, reading, and connecting with fellow developers.
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
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
      <Footer />
    </>
  );
}

export default Home;
