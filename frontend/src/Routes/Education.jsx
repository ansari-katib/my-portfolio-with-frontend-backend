import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { BackgroundBeamsDemo } from '../background-animation/Bg';

function Education() {
  const educationDetails = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Savitribai Phule University Pune",
      duration: "2022 - 2025 ",
      description:
        "Studying core subjects related to computer science including algorithms, data structures, web development, databases, and software engineering.",
      achievement: "First Rank Holder in Tug of War - showcases teamwork and leadership skills",
      subject: [
        "Data Structures",
        "Algorithms",
        "Web Development",
        "Database Management",
        "Operating Systems",
        "JAVA - JAVA Advance",
        "SQL",
        "DBMS - RDBMS",
        
      ],
    },
    {
      degree: "High School",
      institution: "Anglo Urdu Boys High School",
      duration: "2020 - 2022",
      description: "Completed high school with a focus on mathematics and science.",
      subject: ["Mathematics", "Physics", "PCMB"],
    },
  ];

  return (
    <>
      <Navbar />
      <BackgroundBeamsDemo />
      <section id="education" className="py-12 text-gray-200">
        <h2 className="text-5xl font-bold text-center text-indigo-500 mb-8">Education</h2>
        <div className="container mx-auto w-[90%] grid grid-cols-1 gap-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col">
                {/* Degree & Institution */}
                <h3 className="text-2xl font-semibold text-indigo-400">{edu.degree}</h3>
                <p className="text-gray-300 font-medium">
                  {edu.institution} | <span className="text-gray-300">{edu.duration}</span>
                </p>

                {/* Description */}
                <p className="mt-2 text-gray-400 font-medium ">Description : </p>
                <p className="text-gray-200">{edu.description}</p>
                <p className="mt-2 text-gray-400 font-medium">Achivement : </p>
                {edu.achievement && (
                  <p className="text-gray-200 italic">🎖 {edu.achievement}</p>
                )}

                {/* Relevant Courses */}
                <div className="mt-4">
                  <strong className="text-indigo-400">Subjects :</strong>
                  <div className="ml-4 flex flex-wrap gap-2 mt-2">
                    {edu.subject.map((course, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-indigo-700 to-blue-500 px-4 py-2 rounded-xl"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
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

export default Education;
