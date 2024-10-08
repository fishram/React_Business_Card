import React from "react"
import email_icon from "../assets/email_icon.png"

export default function PersonalInfo() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:fishram@unc.edu?subject=Hello%20Fisher&body=I%20would%20like%20to%20get%20in%20touch.';
    };
    return (
        <div className="personal-info-box">
            <h1>Fisher Ramsey</h1>
            <h3>Computer Science @ UNC</h3>
            <button onClick={handleEmailClick}><img src={email_icon} className="email-icon"></img>Email</button>
        </div>
    )
}