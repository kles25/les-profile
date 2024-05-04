import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiGitlab } from "react-icons/fi";
import { TbBrandVercel } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

const techSkills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <IoLogoCss3 />, name: "CSS" },
    { icon: <TbBrandJavascript />, name: "JavaScript" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <FaReact />, name: "React JS" },
    { icon: <IoLogoVue />, name: "Vue JS" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FiGithub />, name: "GitHub" },
    { icon: <FiGitlab />, name: "GitLab" },
    { icon: <TbBrandVercel />, name: "Vercel App" },
    { icon: <IoLogoFirebase />, name: "Firebase" },
];

function TechSkills() {
    return (
        <div className="pages-row">
            <div className="pages-col-4">
                <div className="title-content">
                    <h1>My Skills</h1>
                    <h4>Technologies</h4>
                    <p>
                        In the realm of technology, I bring a robust arsenal of
                        skills and expertise that empower me to tackle a wide
                        range of challenges and drive innovation. With a focus
                        on front-end web development, I possess a strong
                        foundation in the following key areas:
                    </p>
                </div>
            </div>
            <div className="pages-col-8">
                <div className="main-content">
                    <div className="pages-row">
                        {techSkills.map((skill, index) => (
                            <div key={index} className="pages-col-2">
                                <div className="content-tech-skill">
                                    {skill.icon}
                                    <h5>{skill.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechSkills;
