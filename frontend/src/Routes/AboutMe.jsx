import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MY_IMAGE from '../assets/myimage.jpg';
import { BackgroundBeamsDemo } from '../background-animation/Bg';

function AboutMe() {

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Git' , 'GitHub', 'Core Java' , 'Material UI' ,'ShadeCN',  'socket.io' ];


  return (
    <>
      <Navbar />
      <BackgroundBeamsDemo />

      <section id="about-me" 
      className=" h-full py-16 bg-black flex justify-center items-center min-h-[540px] ">
        <div className="container mx-auto text-center">

          {/* <div className="absolute top-2 left-2 ">
            <Link
              to="/"
              className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
            >
              <i className="fas fa-arrow-left "></i>
            </Link>
          </div> */}
          
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Left Section (Profile Picture and Bio) */}
            <div className="flex justify-center items-center mb-8 md:mb-0 md:w-1/3">
              <div className="rounded-full overflow-hidden w-60 h-60 mb-4 shadow-lg">
                <img
                  src={MY_IMAGE} // Replace with your image URL
                  alt="Kaitb Ansari"
                  className="object-contain w-full h-full bg-white"
                />
              </div>
            </div>

            {/* Right Section (Description and Skills) */}
            <div className="md:w-2/3 text-left px-4  ">
              <p className="text-lg text-gray-500 mb-4">
                Hello! I'm <span className="font-bold text-indigo-600">Katib Ansari</span>, a passionate web
                developer with a focus on front-end and full-stack development. I enjoy building beautiful and
                user-friendly websites and applications that make a difference. I have experience working with modern
                technologies such as <span className="font-bold text-white" >React, Node.js, express and MongoDB.</span>
              </p>

              <p className="text-lg text-gray-500 mb-4">
                With a background in computer science and a drive for continuous learning, I am always looking for
                new challenges and opportunities to grow my skill set. My goal is to create impactful web applications
                that enhance user experiences and solve real-world problems.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Skills & Technologies</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700">
                  {skills.map((item, index) => {
                    return (
                      <li className="bg-white p-4 rounded-lg shadow-md text-center" key={index}>
                        <h4 className="font-bold text-indigo-600">{item}</h4>
                      </li>
                    )
                  }
                  )}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutMe;
