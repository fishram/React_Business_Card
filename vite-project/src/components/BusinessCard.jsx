import React from "react"
import PersonalInfo from "./PersonalInfo"
import Biography from "./Biography"
import headshot from '../assets/headshot.jpeg';

export default function BusinessCard() {
    return (
        <div className="business-card">
            <img className="headshot" src={headshot} alt="Headshot"></img>
            <PersonalInfo />
            <Biography />
        </div>
    )
}