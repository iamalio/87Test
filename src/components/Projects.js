import React from 'react';
import "./Projects.css" 
import dashboard from "../images/dashboard.png";
import ecstacy from "../images/ecstacy.png";
import devblog from "../images/devblog.png";


const Projects = () => {
    return (
        <section className="projects">
            <h1>Latest Projects</h1>
            <section className="projects__carousel">
                <button className="projects__item"><img src={dashboard} /></button>
                <button className="projects__item"><img src={ecstacy} /></button>
                <button className="projects__item"><img src={devblog} /></button>
            </section>
            <section className="projects__buttons">
                <button className="projects__viewBtns">View Themes</button>
                <button className="projects__viewBtns">View Apps</button>
            </section>

        </section>
    )
}

export default Projects
