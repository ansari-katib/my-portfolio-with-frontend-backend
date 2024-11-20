// Experience Component (Experience.js)
import React from "react";
import { Link } from "react-router-dom";

function Experience() {
  const experiences = [
    {
      title: "MERN-stack Developer Intern",
      company: "tann mann foundation",
      duration: "november 2024 - on going ",
      description: "Worked on the development of a full-stack application using the MERN stack (MongoDB, Express, React, Node.js). Implemented user authentication with JWT, worked with REST APIs, and collaborated in an agile environment.",
      techStack: ["MERN Stack", "JWT", "Node.js", "Express", "MongoDB", "React", "Git"],
    },
    
    // Add more experience entries as needed
  ];

  return (
    <section id="experience" className="py-12 bg-gray-500">
      <div className="absolute top-2 left-4 ">
          {/* Back to Home Button */}
          <Link
            to="/"
            className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
          >
            {/* Font Awesome Icon */}
            <i className="fas fa-arrow-left "></i>
          </Link>
        </div>
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Experience</h2>
      <div className="container mx-auto w-[90%] ">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-300 rounded-lg shadow-lg mb-8 p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-gray-700 font-medium">{exp.company} | <span className="text-gray-500">{exp.duration}</span></p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
            <div className="mt-4">
              <strong>Tech Stack:</strong>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                {exp.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
