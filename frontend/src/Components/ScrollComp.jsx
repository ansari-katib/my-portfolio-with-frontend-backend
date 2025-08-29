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
                        Pursuing BSc in Computer Science at Abeda Inamdar Senior College. This phase of my life taught me to navigate diverse experiences and interact with people from different backgrounds, enriching both my academic and personal growth.
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
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Completed my first internship, gaining valuable hands-on experience. I worked with a supportive team and learned to collaborate effectively, manage tasks on GitHub, and communicate within a professional environment. This experience significantly improved my teamwork and project management skills.
                    </p>
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
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Completed an internship as a MERN Stack Developer, where I built a feature-rich learning platform. This experience enhanced my full-stack development skills and provided practical exposure to developing real-world applications.
                    </p>

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
