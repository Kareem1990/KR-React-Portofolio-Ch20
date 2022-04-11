import React from 'react';
import coverImage from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/cover/kareem.png";


function About() {
    return (
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
            <p>
                A novice web developer, designer, and journalist for 8 years with a special passion for coding
                and IT. Seeking a job as a front-end developer with knowledge and practical skills in HTML,
                CSS, JavaScript, Git, and Github. Currently pursuing my passion for expanding my capabilities
                at George Washington University’s web development bootcamp.
            </p>
            </div>
        </section>
    );
}

export default About;