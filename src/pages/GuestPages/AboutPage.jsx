import React from "react";
import PillTab from "../../components/PillTab";
import Overview from "../../components/about/Overview";
import TechSkills from "../../components/about/TechSkills";
import Certificates from "../../components/about/Certificates";

const tabs = [
    {
        title: "Overview",
        component: <Overview />,
    },
    {
        title: "Tech Skills",
        component: <TechSkills />,
    },
    {
        title: "Certificates",
        component: <Certificates />,
    },
];

function AboutPage() {
    return (
        <div className="section-content-holder">
            <PillTab tabs={tabs} />
        </div>
    );
}

export default AboutPage;
