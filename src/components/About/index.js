import React from 'react';
import coverImage from "/Users/kareemmagdy/Desktop/GW-Challenges/KR-React-Portofolio-Ch20/kr-portofolio/src/assets/cover/kareem.png";


function About() {
    return (
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
            <p>
            Full stack developer with a passion for programming and information technology; currently open to work. With a web development certification from George Washington University and nearly 10 years experience as a journalist and translator. Open to both front-end and back-end positions. What's more important is finding the right team and building something great.
            </p>
            </div>
        </section>
    );
}

export default About;