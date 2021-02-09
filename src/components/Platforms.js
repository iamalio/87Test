import React from 'react';
import "./Platforms.css";
import shopify from "../images/Rectangle10.png";
import wordpress from "../images/Rectangle11.png";
import bigcommerce from "../images/Rectangle12.png";
import wix from "../images/Rectangle13.png";

const Platforms = () => {
    return (
       <section className="platforms">
           <p>Platforms</p>
           <ul className="platforms__list">
               <li><img src={shopify} /></li>
               <li><img src={wordpress} /></li>
               <li><img src={bigcommerce} /></li>
               <li><img src={wix} /></li>
           </ul>
       </section>
    )
}

export default Platforms
