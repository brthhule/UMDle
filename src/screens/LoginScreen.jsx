import '../styles/LoginScreen.css'
import { Link } from "react-router-dom";

import MarylandLeft from '../assets/maryland-flag-left.png'
import MarylandRight from '../assets/maryland-flag-right.png'


const Welcome = () => {
    const title="UMDle";

    return (
        <div id="main-container">
            <img src={MarylandLeft} alt="Left side of the Maryland flag"id="left-image"/>
            <div id="title-container">
                <h1>{title}</h1>

                <div></div>
                
                <Link to="/homescreen">
                    <button className="clickable">ENTER</button>
                </Link>
            </div>
            <img src={MarylandRight} alt="Right side of the Maryland flag" id="right-image"/>
        </div>
    );
}


export default Welcome;