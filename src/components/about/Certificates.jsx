import React from "react";
import KGCertificate from "../../assets/images/certificates/KodegoCert.png";

function Certificates() {
    return (
        <div className="pages-row">
            <div className="pages-col-4">
                <div className="title-content">
                    <h1>Certificates</h1>
                    <p>
                        These certificates demonstrates my commitment to
                        continuous learning and professional development as a
                        front-end web developer.
                    </p>
                </div>
            </div>
            <div className="pages-col-8">
                <div className="main-content-two">
                    <img src={KGCertificate} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Certificates;
