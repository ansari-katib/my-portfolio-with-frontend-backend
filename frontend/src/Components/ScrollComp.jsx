import React from "react";
import { Timeline } from "../Components/ui/Scroll";
import anglo from "../assets/anglo.jpg";
import abeda from "../assets/abeda.jpg";
import sppu from "../assets/sppu.jpg";
import tmgf from "../assets/tmgf.jpg";
import ten from "../assets/tena.jpg";
import ten1 from "../assets/ten.jpg";

export function TimelineDemo() {
    const data = [
        {
            title: "2020 - 2022",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Completed my schooling from Anglo Urdu Boys High School & Junior College. This period laid the foundation for my academic and personal growth.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={anglo}
                            alt="Anglo Urdu Boys High School"
                            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                        />
                        <img
                            src={sppu}
                            alt="SPPU"
                            className="h-20 w-full rounded-lg object-cover object-top shadow-md md:h-44 lg:h-72"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022 - 2025",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Pursuing BSc in Computer Science at Abeda Inamdar Senior College (affiliated
                        to SPPU). This phase of my life has taught me to navigate diverse experiences
                        and interact with people from different backgrounds, enriching both my
                        academic and personal growth.
                    </p>

                    {/* Core Subjects */}
                    <strong className="text-white">Core Subjects : </strong>
                    <ul className="mb-4 list-disc pl-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <li>Data Structures & Algorithms</li>
                        <li>Database Management Systems (DBMS)</li>
                        <li>Operating Systems</li>
                        <li>Computer Networks</li>
                        <li>Web Development (HTML, CSS, JavaScript)</li>
                        <li>Software Engineering</li>
                        <li>Java & Object-Oriented Programming (OOPs)</li>
                    </ul>

                    {/* Experience */}
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>Experience:</strong> Worked on academic and personal
                        projects, including building web applications using the MERN stack,
                        developing responsive websites with React, and implementing database-driven
                        systems. These experiences enhanced my problem-solving, teamwork, and
                        project management skills.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={sppu}
                            alt="SPPU College"
                            className="h-20 w-full rounded-lg object-cover object-top shadow-md md:h-44 lg:h-72"
                        />
                        <img
                            src={abeda}
                            alt="Abeda Inamdar Senior College"
                            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                        />
                    </div>
                </div>

            ),
        },
        {
            title: "First Internship",
            content: (
                <div>
                    <div className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 ">
                        <h1 className="my-2">💻 Worked as a MERN full-stack Developer :</h1>
                        <p>
                            <p>As a MERN Stack Developer Intern, I focused on reviewing code to understand application functionality and architecture while contributing to development tasks. My responsibilities included:</p>

                            <ul className="list-disc ml-5 py-2 flex flex-col gap-1">
                                <li> Analyzing existing codebases to gain insights into system flow and functionality.
                                </li>
                                <li> Assisting in developing frontend features with React.js.
                                </li>
                                <li>  Collaborating with the team to learn best practices in clean code and version control.
                                </li>
                            </ul>
                            <p> This experience gave me a strong foundation in reading, understanding, and contributing to real-world codebases, while sharpening my problem-solving and development skills. 🚀
                            </p>
                        </p>
                    </div>
                    <img
                        src={tmgf}
                        alt="Tann Mann Gaadi Foundation Internship"
                        className="h-20 w-full rounded-lg object-cover object-top shadow-md md:h-44 lg:h-72"
                    />
                </div>
            ),
        },
        {
            title: "Second Internship",
            content: (
                <div>
                    <div className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 ">
                        <h1 className="my-2">💻 Worked as a MERN full-stack Developer :</h1>
                        <p>
                            <p>As a MERN Stack Developer Intern, i contributed to design and developing full-stack application. My responsibilities included:</p>

                            <ul className="list-disc ml-5 py-2 flex flex-col gap-1">
                                <li> Building responsive and user-friendly frontend components with React.js
                                </li>
                                <li> Collaborating with the team to debug and test features
                                </li>
                                <li>  Working with Git/GitHub for version control and agile developement practices
                                </li>
                            </ul>
                            <p> This Internship help me strengthen my skills in full-stack developement , problem-solving , and real-world project Collaboration. , understanding, and contributing to real-world codebases, while sharpening my problem-solving and development skills. 🚀
                            </p>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={ten}
                            alt="Learning Platform Project"
                            className="h-20 w-full rounded-lg object-cover object-center shadow-md md:h-44 lg:h-60"
                        />
                        <img
                            src={ten1}
                            alt="Learning Platform Project"
                            className="h-20 w-full rounded-lg object-cover object-center shadow-md md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
