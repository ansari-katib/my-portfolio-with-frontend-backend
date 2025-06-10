import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { BackgroundBeamsDemo } from '../background-animation/Bg';

function Experience() {
  const experiences = [
    {
      title: "MERN-stack Developer Intern",
      company: "Tann Mann Foundation",
      duration: "November 2024 - Ongoing",
      description: "Worked on the development of a full-stack application using the MERN stack (MongoDB, Express, React, Node.js). Implemented user authentication with JWT, worked with REST APIs, and collaborated in an agile environment.",
      techStack: ["MERN Stack", "JWT", "Node.js", "Express", "MongoDB", "React", "Git"],
    },
    // Add more experience entries as needed
  ];

  return (
    <>
      <Navbar />
      <BackgroundBeamsDemo />
      <section id="experience" className="py-12 bg-gray-900 text-gray-200 min-h-[80vh]">
        
        {/* <div className="absolute top-2 left-2">
          <Link
            to="/"
            className="bg-indigo-700 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-500 transition-all duration-300 flex items-center space-x-2"
          >
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div> */}
        
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Experience</h2>
        <div className="container mx-auto w-[90%]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg mb-8 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-400">{exp.title}</h3>
              <p className="text-gray-400 font-medium">
                {exp.company} | <span className="text-gray-500">{exp.duration}</span>
              </p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
              <div className="mt-4">
                <strong className="text-indigo-400">Tech Stack:</strong>
                <ul className="list-disc list-inside ml-4 text-gray-400">
                  {exp.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Experience;
