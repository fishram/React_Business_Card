import React from "react"
import email_icon from "../assets/email_icon.png"

export default function PersonalInfo() {
    return (
        <div className="personal-info-box">
            <h1>Fisher Ramsey</h1>
            <h3>Computer Science @ UNC</h3>
            <button><img src={email_icon} className="email-icon"></img>Email</button>
        </div>
    )
}