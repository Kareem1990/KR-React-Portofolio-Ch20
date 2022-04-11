import React from "react";

import image1 from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/projects/project-1.png";
import image2 from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/projects/project-2.png";
import image3 from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/projects/project-3.png";


function Projects(props) {
    return (
        <section style={{ display: "flex" }}>
            <div class="card">
                
                <a href="https://github.com/Kareem1990/meme-masters">
                <h1>Memes Masters</h1>
                    <img src={image1} alt="memes" class="projectImg" />
                </a>

                <a href="https://maryjezek.github.io/travel-optimizer/">
                    <h1>Travel Optimizer</h1>
                    <img src={image2} alt="travel" class="projectImg" />
                </a>
                
                <a href="https://kareem1990.github.io/Runner-mobile-version/">
                <h1>Run Buddy</h1>                
                    <img src={image3} alt="Password generator" class="projectImg" />
                </a>
            </div>
        </section>
    );
}
export default Projects;