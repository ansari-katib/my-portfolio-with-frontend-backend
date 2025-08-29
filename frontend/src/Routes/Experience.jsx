import React from "react";
import { Verified } from "@mui/icons-material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { BackgroundBeamsDemo } from '../background-animation/Bg';
import ten2 from '../assets/tena.jpg';
import tmgf from '../assets/tmgf.jpg';

function Experience() {
  const experiences = [
    {
      title: "MERN-stack Developer Intern",
      company: "Tann Mann Foundation",
      duration: "November 2024 - April 2025",
      status: "Completed",
      description: "Worked on the development of a full-stack application using the MERN stack (MongoDB, Express, React, Node.js). Implemented user authentication with JWT, worked with REST APIs, and collaborated in an agile environment.",
      techStack: ["MERN Stack", "Node.js", "Express", "MongoDB", "Code Review", "React", "Git/GitHub"],
      certificate : tmgf
    },
    {
      title: "MERN-stack Developer Intern",
      company: "The Entrepreneurship Network",
      duration: "May 2024 - August 2025",
      status: "Completed",
      description: "Worked on the development of a full-stack application using the MERN stack (MongoDB, Express, React, Node.js). Implemented user authentication with JWT, worked with REST APIs, and collaborated in an agile environment.",
      techStack: ["MERN Stack", "Aceternity UI", "React JS", "Git/GitHub"],
      certificate : ten2
    }
  ];

  return (
    <>
      <Navbar />
      <BackgroundBeamsDemo />

      <section className="py-12 min-h-[80vh] text-gray-200">
        <h2 className="text-5xl font-bold text-center text-indigo-500 mb-8">Experience</h2>
        <div className="container mx-auto w-[90%] grid gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-indigo-500/20 rounded-2xl shadow-lg overflow-hidden">
              
            <img src={exp.certificate} className=" h-72 " />

              {/* Text Section */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-300">{exp.title}</h3>
                  <p className="text-gray-400 font-medium">{exp.company} | <span className="text-gray-500">{exp.duration}</span></p>
                  <p className="text-gray-400 font-medium flex items-center gap-1">
                    <Verified className="text-green-400" /> Status: {exp.status}
                  </p>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="bg-indigo-500 text-white px-3 py-1 rounded-xl text-sm flex items-center gap-1">
                      <Verified fontSize="small" /> {tech}
                    </span>
                  ))}
                </div>
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
