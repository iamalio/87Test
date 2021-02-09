import React from 'react'
import "./Team.css"
import blue from "../images/faceblue.png"
import burgundy from "../images/faceburgundy.png"
import green from "../images/facegreen.png"
import yellow from "../images/faceyellow.png"
import red from "../images/facered.png"
import orange from "../images/faceorange.png"
import purple from "../images/facepurple.png"

const Team = () => {
    return (
        <section className="team">
            <button className="team__blue"><img src={blue} /></button>
            <button className="team__burgundy"><img src={burgundy} /></button>
            <button className="team__green"><img src={green} /></button>
            <button className="team__yellow"><img src={yellow} /></button>
            <h1>Meet The Team</h1>
            <button className="team__red"><img src={red} /></button>
            <button className="team__orange"><img src={orange} /></button>
            <button className="team__purple"><img src={purple} /></button>
        </section>
    )
}

export default Team
