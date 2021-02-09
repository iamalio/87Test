import React from 'react';
import "./Jumbo.css";
import playbutton from "../images/playbtn1.png";

const Jumbo = () => {
    return (
        <section className="jumbo">
            <section className="jumbo__left">
                <h1 className="jumbo__leftPitch">We Give Your Business an Edge Over Your Competitors!</h1>
                <h2 className="jumbo__leftSubtext">Everything you need for your business: Themes, Apps, Assets and More..</h2>
                <input type="email" placeholder="Enter your email address"></input>
                <button>Get Started</button>
            </section>
            <section className="jumbo__right">
                <div className="jumbo__rightImg">
                    <button>
                        <img src={playbutton} />
                    </button>
                    
                </div>
            </section>
        </section>
    )
}

export default Jumbo
