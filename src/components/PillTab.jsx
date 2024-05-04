import React, { useState } from "react";
const PillTab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <>
            <div className="pages-header-holder">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={index === activeTab ? "active" : ""}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div>{tabs[activeTab].component}</div>
        </>
    );
};

export default PillTab;
