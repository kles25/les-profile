import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import LesLogo from "../../assets/images/Logo-LI2.png";
import { motion } from "framer-motion";

function GuestPage() {
    const [activeSection, setActiveSection] = useState("about-section");
    const [scrollProgress, setScrollProgress] = useState(0);

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
        console.log("scrollProgress:", scrollProgress);
        const progressCircle = document.querySelector(".progress");
        progressCircle.style.strokeDasharray = `${scrollProgress}, 1335`;
    }, [scrollProgress]);

    useEffect(() => {
        const sectionIds = [
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
        <div className="pages-container">
            <div className="pages-holder">
                <div className="pages-row">
                    <div className="pages-col-12">
                        <div className="pages-row">
                            <div className="pages-col-12">
                                <div className="home-header-holder">
                                    <img src={LesLogo} alt="" />
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
                                            pathLength="1335"
                                            className="bg"
                                        />
                                        <motion.circle
                                            cx="50"
                                            cy="50"
                                            r="30"
                                            pathLength="1335"
                                            className="progress"
                                        />
                                    </motion.svg>
                                </div>
                            </div>
                            <div className="pages-col-12">
                                <div className="pages-row">
                                    <div className="pages-col-1">
                                        <div className="home-navigation-holder">
                                            {sections.map((section) => (
                                                <button
                                                    key={section.id}
                                                    onClick={() =>
                                                        scrollToSection(
                                                            section.id
                                                        )
                                                    }
                                                    className={
                                                        activeSection ===
                                                        section.id
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
                                    <div className="pages-col-11">
                                        <div className="home-section-holder">
                                            {sections.map((section) => (
                                                <section
                                                    key={section.id}
                                                    className={`section-container ${
                                                        activeSection ===
                                                        section.id
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
                            </div>
                        </div>
                    </div>
                    <div className="pages-col-12">
                        <div className="home-footer-holder"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestPage;
