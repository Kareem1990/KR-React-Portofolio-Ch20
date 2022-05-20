import React from "react";

import image1 from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/projects/project-1.png";
import image2 from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/projects/project-2.png";
import image3 from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/projects/project-3.png";
import image4 from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/projects/project-4.png"

function Projects(props) {
    return (
        <section className="container" >
        <h1>Projects</h1>

                <div className="row"  >

                    <div className="pro col" href="https://lit-thicket-52493.herokuapp.com/">
                        <h1 className="titleStyling">Woof Woof</h1>
                        <img src={image4} alt="Woof Woof" className="projectImg" />
                        <p className="descStyling" >Woof Woof foundation is a local pet rescue and adoption agency.
                        </p>
                        <a className="gitHubStyling" href="https://lit-thicket-52493.herokuapp.com/">Deployed url</a>
                        -
                        <a className="urlStyling" href="https://lit-thicket-52493.herokuapp.com/">Github</a>

                    </div>
                    <div className="pro col" href="https://maryjezek.github.io/travel-optimizer/">
                        <h1 className="titleStyling">Travel Optimizer</h1>
                        <img src={image2} alt="memes" className="projectImg" />
                        <p className="descStyling" >An app allows travelers to quickly plug their destination into the search to pull</p>
                        <a className="gitHubStyling" href="https://maryjezek.github.io/travel-optimizer/">Deployed url</a>
                        -
                        <a className="urlStyling" href="https://github.com/Kareem1990/-travel-optimizer-KMS">Github</a>
                    </div>

                    <div className="pro col" href="https://maryjezek.github.io/travel-optimizer/">
                        <h1 className="titleStyling">Meme Masters</h1>
                        <img src={image1} alt="travel" className="projectImg" />
                        <p className="descStyling" >An app to send strictly memes to friends. Sign up or log in and start sharing the laughs.</p>
                        <a className="gitHubStyling" href="https://maryjezek.github.io/travel-optimizer/">Deployed url</a>
                        -
                        <a className="urlStyling" href="https://github.com/Kareem1990/meme-masters">Github</a>

                    </div>

                    <div className="pro col" href="https://kareem1990.github.io/Runner-mobile-version/">
                        <h1 className="titleStyling">Run Buddy</h1>
                        <img src={image3} alt="Password generator" className="projectImg" />
                        <p className="descStyling" >A website to connect between clients and professional coaches.</p>
                        <a className="gitHubStyling" href="https://kareem1990.github.io/Runner-mobile-version/">Deployed url</a>
                        -
                        <a className="urlStyling" href="https://github.com/Kareem1990/Runner-mobile-version">Github</a>
                    </div>
                </div>
        </section>
    );
}
export default Projects;