import React from 'react'
import netflixImg from "../assets/netflix.png";
import tour_travel_image from "../assets/tour_travel.png";
import resturant_app_image from "../assets/resturant_app.png";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from 'react-router-dom';

const MyProject = () => {


    const projects = [
        {
            title: "Tour and Travel Website",
            description:
                "A dynamic and visually appealing frontend travel website that allows users to explore destinations, tour packages, and travel guides. Built with React and styled with modern CSS techniques, the platform provides smooth navigation, responsive layouts, and engaging content presentation for a seamless browsing experience.",
            techStack: ["React", "JavaScript", "CSS", "HTML"],
            link: "https://tour-an-travel.netlify.app/",
            img: tour_travel_image,
        },
        {
            title: "Netflix Frontpage Clone",
            description:
                "A pixel-perfect replica of the Netflix landing page, designed entirely with HTML and CSS. This project demonstrates mastery of responsive design, flexbox, and grid layout, ensuring accurate styling and adaptability across all screen sizes, closely mirroring the original Netflix UI.",
            techStack: ["HTML", "CSS"],
            link: "https://nf-web.netlify.app/",
            img: netflixImg,
        },
        {
            title: "Restaurant App",
            description:
                "An interactive restaurant web application built with React that showcases a modern food ordering experience. Features include animated page transitions with Framer Motion, smooth navigation using React Router, reusable UI components styled with Accernity UI, and an elegant user interface powered by React Icons. Designed to provide users with an engaging and appetizing digital dining experience.",
            techStack: ["React.js", "Framer Motion", "React Router", "Motion", "Accernity UI", "React Icons"],
            link: "https://ansari-resturant.netlify.app/",
            img: resturant_app_image,
        },
    ]

    const iconMap = {
        React: <FaReact size={16} className="text-blue-300" />,
        "React.js": <FaReact size={16} className="text-blue-300" />,
        Node: <FaNodeJs size={16} className="text-green-500" />,
        Nodejs: <FaNodeJs size={16} />,
        HTML: <FaHtml5 size={16} className="text-orange-500" />,
        CSS: <FaCss3Alt size={16} className="text-blue-300" />,
        JavaScript: <FaJsSquare size={16} className="text-yellow-300" />,
        MongoDB: <SiMongodb size={16} className="text-green-500" />,
        Express: <SiExpress size={16} />,
        "Tailwind CSS": <SiTailwindcss size={16} />,
        Git: <FaGitAlt size={16} />,
    };

    return (
        <>
            <section id="projects" className="py-12 text-gray-200">
                <h2 className="text-5xl font-bold text-center text-indigo-500 mb-8">Projects</h2>
                <div className="container mx-auto grid grid-cols-1 w-[90%] md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group max-w-2xl rounded-2xl p-[3px] bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-500 shadow-xl hover:scale-105 transition-transform duration-200"
                        >
                            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-2 h-full flex flex-col">
                                {/* Project Image */}
                                {project.img && (
                                    <img src={project.img} alt={project.title} className="rounded-lg mb-4 w-full object-cover" />
                                )}

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{project.title}</h3>

                                {/* Tech Stack */}
                                <div className="mb-4 h-auto">
                                    <strong className="text-indigo-400">Tech Stack :</strong>
                                    <div className="ml-4 text-gray-300 flex flex-wrap gap-2 text-sm">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-gradient-to-r from-indigo-700 to-blue-500 px-2 py-1 rounded-xl flex items-center gap-1"
                                            >
                                                {iconMap[tech] || <CodeIcon fontSize="small" />}
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <strong className="text-indigo-400">Description :</strong>
                                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                                {/* Link Button */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex justify-center items-center w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 to-blue-800 text-white py-2 px-4 font-medium hover:opacity-90 transition-all duration-300 gap-2"
                                >
                                    View Project <OpenInNewIcon fontSize="small" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-5 md:mt-10 pl-6 md:pl-32'>
                    <a href={'/projects'} className='text-indigo-500 font-medium text-xl' >
                        See More of my project ...
                    </a>
                </div>
            </section>
        </>
    );
}


export default MyProject
