import React from "react";
import PillTab from "../../components/PillTab";
import Project from "../../components/projects/Project";
import Experience from "../../components/projects/Experience";

const tabs = [
    {
        title: "Projects",
        component: <Project />,
    },
    {
        title: "Experiences",
        component: <Experience />,
    },
];

function ProjectPage() {
    return (
        <div className="section-content-holder">
            <PillTab tabs={tabs} />
        </div>
    );
}

export default ProjectPage;
