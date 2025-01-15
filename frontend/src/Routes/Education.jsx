import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Education() {
  const educationDetails = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Savitribai Phule University Pune",
      duration: "2022 - Present",
      description:
        "Studying core subjects related to computer science including algorithms, data structures, web development, databases, and software engineering.",
      relevantCourses: [
        "Data Structures",
        "Algorithms",
        "Web Development",
        "Database Management",
        "Operating Systems",
      ],
    },
    {
      degree: "High School",
      institution: "Anglo Urdu Boys High School",
      duration: "2020 - 2022",
      description: "Completed high school with a focus on mathematics and physics.",
      relevantCourses: ["Mathematics", "Physics"],
    },
    // Add more education entries as needed
  ];

  return (
    <>
      <Navbar />
      <section id="education" className="py-12 bg-gray-900 text-gray-200">
        <div className="absolute top-2 left-2">
          {/* Back to Home Button */}
          <Link
            to="/"
            className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
          >
            {/* Font Awesome Icon */}
            <i className="fas fa-arrow-left "></i>
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Education</h2>
        <div className="container mx-auto w-[90%]">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg mb-8 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-400">{edu.degree}</h3>
              <p className="text-gray-400 font-medium">
                {edu.institution} |{" "}
                <span className="text-gray-500">{edu.duration}</span>
              </p>
              <p className="text-gray-300 mt-2">{edu.description}</p>
              <div className="mt-4">
                <strong className="text-indigo-400">Relevant Courses:</strong>
                <ul className="list-disc list-inside ml-4 text-gray-400">
                  {edu.relevantCourses.map((course, i) => (
                    <li key={i}>{course}</li>
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

export default Education;
