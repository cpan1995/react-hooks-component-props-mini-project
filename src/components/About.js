import React from "react";

function About({src = 'https://via.placeholder.com/215', about}){

    return (
        <aside>
            <img src={src} alt={"blog logo"}></img>
            <p>{about}</p>
        </aside>
    )

}

export default About;