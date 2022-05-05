import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

import './Footer.css';
import FooterColumns from "./FooterColumns";
import {Button} from "./Button";


const Footer = () =>{
    const data = {
        "IKEA Family":["Login","Join Ikea Family","Member Offers","Workshop & Events"],
        "Services":["Design your room","Delivery Service","Installation Service","Assembly Service","Kitchen Planning","Measuring Service","Customer Service","Recycle Program","Track Your Order"],
        "Help":["How to Shop","Return Policy","Prices and Price Tags","Contact us","FAQ's","Planners","Size guide - Beds &mattresses","Buying Guides","Gift Card","Feedback"],
        "About IKEA":["This is IKEA","Working at IKEA","Newsroom","Sustainability","IKEA Stores","IKEA Restaurants","IKEA for Business"],
    }

    const raiseFabClicked = () =>{
        const url = 'https://www.facebook.com/IKEAIndia';
        window.open(url, '_blank');
    }
    const raiseInstaClicked = () =>{
        const url = 'https://www.instagram.com/accounts/login/?next=/ikea.india/';
        window.open(url, '_blank');
    }
    const raiseTwitClicked = () =>{
        const url = 'https://twitter.com/IKEAIndia';
        window.open(url, '_blank');
    }
    const raiseYouClicked = () =>{
        const url = 'https://www.youtube.com/channel/UClQOVyyaLLXOx4YrpQLE01g';
        window.open(url, '_blank');
    }

   
    return (
        
        <div className="main-boxFooter">
        <div className="content-box">
         <div className="footbox1">
             <div>
                 <h4>Join IKEA Family</h4>
                 <p>Get exclusive offers, inspiration, and <br /> lots more to help bring your ideas to <br />life. All for free.</p>
                 <Button >Join Us</Button>
             </div>
             <div>{Object.keys(data).map((e)=><FooterColumns head={e} array={data[e]}/>)}</div>
         </div>
         <div className="footbox2">
             <div className="footIcons hover">
               <div onClick={raiseFabClicked}>
               <p><FaFacebook /></p>
               </div>
               <div onClick={raiseInstaClicked}>
                <p><FaInstagram/></p>
               </div>
               <div onClick={raiseTwitClicked}>
                <p><FaTwitter/></p>
               </div>
               <div onClick={raiseYouClicked}>
                <p><FaYoutube/></p>
               </div>
             </div>
             <div>
                 <p><IoIosGlobe/></p>
                 <h3>Change Country</h3>
             </div>
         </div>
         <hr />
         <div className="footbox3">
             <div className="copyRight">
                 <p>© Inter IKEA Systems B.V. 2000-2022</p>
             </div>
             <div className="policies">
                 <p>Privacy policy</p>
                 <p>Cookie policy</p>
                 <p>Cookie settings</p>
                 <p>Terms and Conditions</p>
             </div>
         </div>
        </div>
        </div>
    )
}

export default Footer