import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <ul className = "list1">
                <li>&copy; FIT STUDIO  {new Date().getFullYear()}</li>
                <li>
                    <ul className = "list2">
                        <li>More Info</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Footer;