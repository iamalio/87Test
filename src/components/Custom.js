import React from 'react'
import "./Custom.css"
import shopping from "../images/shopping.png";
import girlatmac from "../images/girlatmac.png"

const Custom = () => {
    return (
        <section className="custom">
            <h1>Need A Custom Solution?</h1>
            <section className="custom__split">
                <div className="custom__leftHalf">
                    <ul className="custom__workTypesList">
                        <li className="custom__workTypesItem"><span>01 </span> Install Theme</li>
                        <li className="custom__workTypesItem"><span>02 </span> Landing Page</li>
                        <li className="custom__workTypesItem"><span>03 </span> Build Online Store</li>
                        <li className="custom__workTypesItem"><span>04 </span> Custom Theme</li>
                        <li className="custom__workTypesItem"><span>05 </span> Custom Web Site</li>
                        <li className="custom__workTypesItem"><span>06 </span> Marketing Assets</li>
                    </ul>
                </div>
                <div className="custom__rightHalf">
                    <div className="custom__rightHalfBanner">
                        <div className="custom__rightHalfTab"><h2>Install Theme</h2></div>
                    </div>
                    <div className="custom__tabContent">
                        <div className="custom__tabContentText">
                            <p>Having trouble with installing any of our themes? 
                                Well we can help you by installing the theme for you!</p>
                        </div>
                        <div className="custom__tabContentExamples">
                            <img src={shopping} />
                            <img src={girlatmac} />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Custom
