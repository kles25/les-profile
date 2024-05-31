import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import LesLogo from "../../assets/images/Logo-LI2.png";
import { motion } from "framer-motion";
import HomePage from "./HomePage";
import BGImage from "../../assets/images/bg/bg.jpg";
import AnimatedBackground from "../../components/animation/AnimatedBackground";

function GuestPage() {
    const [activeSection, setActiveSection] = useState("about-section");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    useEffect(() => {
        const section = document.querySelector(".home-section-holder");

        const handleScroll = () => {
            const scrollTop = section.scrollTop;
            setScrollProgress(scrollTop);
        };

        section.addEventListener("scroll", handleScroll);

        return () => {
            section.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // console.log("scrollProgress:", scrollProgress);
        const progressCircle = document.querySelector(".progress");
        progressCircle.style.strokeDasharray = `${scrollProgress}, 2002`;
    }, [scrollProgress]);

    useEffect(() => {
        const sectionIds = [
            "home-section",
            "about-section",
            "project-section",
            "contact-section",
        ];

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            handleIntersection,
            observerOptions
        );

        sectionIds.forEach((sectionId) => {
            const target = document.getElementById(sectionId);
            if (target) {
                observer.observe(target);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const sections = [
        { id: "home-section", label: "HOME", component: <HomePage /> },
        { id: "about-section", label: "ABOUT", component: <AboutPage /> },
        {
            id: "project-section",
            label: "PROJECTS",
            component: <ProjectPage />,
        },
        { id: "contact-section", label: "CONTACT", component: <ContactPage /> },
    ];

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    return (
        <div
            className="pages-container"
            style={{ backgroundImage: `url(${BGImage})` }}
        >
            <AnimatedBackground />
            <div className="pages-holder">
                <div className="home-header-holder">
                    <img src={LesLogo} alt="" />
                    <div className="righ-header">
                        <div className="contacts-info">
                            <a href="mailto:i.lesterjohnrodney@gmail.com">
                                i.lesterjohnrodney@gmail.com
                            </a>
                            <p>+63 0908 9076587</p>
                        </div>
                        <div
                            className={
                                click
                                    ? "hb-icon-holder active"
                                    : "hb-icon-holder"
                            }
                            onClick={handleClick}
                        >
                            <div className="hb-icon-one"></div>
                            <div className="hb-icon-two"></div>
                            <div className="hb-icon-three"></div>
                        </div>
                    </div>
                </div>
                <div className="pages-row">
                    <div
                        className={click ? "pages-col-1 active" : "pages-col-1"}
                    >
                        <div className="home-navigation-holder">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={
                                        activeSection === section.id
                                            ? "active"
                                            : ""
                                    }
                                >
                                    <ArrowBackIosIcon />
                                    <p>{section.label}</p>

                                    <ArrowForwardIosIcon />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div
                        className={
                            click ? "pages-col-11 active" : "pages-col-11"
                        }
                    >
                        <div className="home-section-holder">
                            {sections.map((section) => (
                                <section
                                    key={section.id}
                                    className={`section-container ${
                                        activeSection === section.id
                                            ? "active"
                                            : ""
                                    }`}
                                    id={section.id}
                                >
                                    <div
                                        className={`${section.id}-section-holder`}
                                    >
                                        {section.component}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="home-footer-holder">
                    <motion.svg
                        width="60"
                        height="60"
                        viewBox="0 0 100 100"
                        className="progress-wheel"
                    >
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="2002"
                            className="bg"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="2002"
                            className="progress"
                        />
                    </motion.svg>
                    <div>
                        <a
                            href="https://github.com/kles25"
                            title="GitHub"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://vercel.com/kles25-projects"
                            title="Vercel"
                            target="_blank"
                        >
                            <SiVercel />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestPage;
