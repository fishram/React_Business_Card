import React from "react"

export default function Biography() { 
    return (
        <div className="biography">
            <h2>About Me</h2>
            <p>I'm a Junior at UNC Chapel Hill studying both computer science and economics.
               In my free time I like to snowboard and travel.
            </p>
            <div className="skills-container">
                <div className="languages">
                    <h3>Languages</h3>
                    <ul className="skills-list">
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="Technologies">
                    <h3>Technologies</h3>
                        <ul className="skills-list">
                            <li>React</li>
                            <li>RESTful API</li>
                            <li>Git</li>
                            <li>Flask</li>
                            <li>JSON</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}