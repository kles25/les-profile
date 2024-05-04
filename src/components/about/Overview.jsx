import React from "react";
import { SiFramework } from "react-icons/si";
import { HiMiniCommandLine } from "react-icons/hi2";
import { PiDevices } from "react-icons/pi";

function Overview() {
    return (
        <div className="pages-row">
            <div className="pages-col-4">
                <div className="title-content">
                    <h1>Overview</h1>
                    <h4>Introduction</h4>
                    <p>
                        My role involves collaborating closely with designers
                        and back-end developers to bridge the gap between
                        concept and execution. I excel at crafting responsive,
                        user-friendly interfaces that prioritize both
                        functionality and aesthetics. Whether it's building a
                        sleek landing page or a complex web application, I
                        thrive on the challenge of turning ideas into reality.
                    </p>
                </div>
            </div>
            <div className="pages-col-8">
                <div
                    className="main-content"
                    style={{ backgroundColor: "transparent" }}
                >
                    <div className="pages-row">
                        <div className="pages-col-4">
                            <div className="content-column">
                                <SiFramework />
                                <h4>Framework</h4>
                            </div>
                        </div>
                        <div className="pages-col-4">
                            <div className="content-column">
                                <HiMiniCommandLine />
                                <h4>Command Line</h4>
                            </div>
                        </div>
                        <div className="pages-col-4">
                            <div className="content-column">
                                <PiDevices />
                                <h4>Responsive</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
