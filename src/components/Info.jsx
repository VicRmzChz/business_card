import React from "react";


export function Info() {
    return (
        <div className="info_section">
            <img src={require("../images/Face.png")} alt="face of cat" className="info--img" />
            <div className="info--titles">
                <h1>Blue</h1>
                <h2>Frontend Developer WannaBe</h2>
                <a href="#">Frontend WannaBe.com</a>
            </div>
        </div>
    );
}