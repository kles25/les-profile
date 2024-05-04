import React from "react";
import Paramount from "../../assets/images/projects/paramount-modified.png";
import MRIA from "../../assets/images/projects/mria-modified.png";
import HCamp from "../../assets/images/projects/h-camp-modified.png";

function Project() {
    return (
        <div className="pages-row">
            <div className="pages-col-4">
                <div className="title-content">
                    <h1>Projects</h1>
                    <h4>Case Studies</h4>
                    <p>
                        Each of these projects showcases my skills, creativity,
                        and attention to detail as a front-end web developer.
                        Whether you're looking for an immersive shopping
                        experience, a sleek portfolio showcase, or a practical
                        productivity tool, these projects demonstrate my ability
                        to bring ideas to life and deliver exceptional results.
                    </p>
                </div>
            </div>
            <div className="pages-col-8">
                <div className="main-content-two">
                    <div className="pages-row">
                        <div className="pages-col-4">
                            <a
                                href="https://paramount-app.vercel.app/"
                                target="_blank"
                            >
                                <div className="content-project-holder">
                                    <img src={Paramount} alt="" />
                                    <div></div>
                                    <h2>PARAMOUNT</h2>
                                </div>
                            </a>
                        </div>
                        <div className="pages-col-4">
                            <a
                                href="https://memoryridgeint.com/"
                                target="_blank"
                            >
                                <div className="content-project-holder">
                                    <img src={MRIA} alt="" />
                                    <div></div>
                                    <h2>MRIA</h2>
                                </div>
                            </a>
                        </div>
                        <div className="pages-col-4">
                            <a
                                href="https://lms-application-orpin.vercel.app/"
                                target="_blank"
                            >
                                <div className="content-project-holder">
                                    <img src={HCamp} alt="" />
                                    <div></div>
                                    <h2>HCAMP</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
