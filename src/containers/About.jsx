import React from 'react';

const About = () => {
  return (
    <main>
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-11 px-0 mt-3 mt-sm-4 mt-md-5">
                <div className="row">
                    <div className="col-12 col-lg-8 card-container">
                        <div className="card">
                            <div className="card-body" id="about-me-card">
                                <h1 className="card-title">About Me</h1>
                                <hr />
                                <img id="about-me-image" src="images/zackface.jpg" alt="face pic" />
                                <p className="card-text">Hi, and welcome to my About Me page. While I am a software
                                    developer by trade, it has always been interested in technology. I made my first
                                    webpage in only HTML when I was 12 (Does anyone remember Geocities?). Since
                                    then, I got interested in various scripting languages -- such as scripting for
                                    mIRC. I eventually moved up to reading a book on Java 1.1 during the summer
                                    between 7th and 8th grade. Once I discovered MUDs (homework for the reader), I
                                    learned the scripting languages necessary to customize the client, and I have
                                    since been writing code for Mudlet as a hobby.</p>
                                <p className="card-text">Fast forward. My career in software development has been
                                    rewarding. I have been able to learn many technologies over the years, and I
                                    never tire of learning new tech.</p>
                                <p className="card-text">Today, I am a student of the Georgia Tech Coding Bootcamp to
                                    continue my passion for learning new technolgies and frameworks. It is
                                    challenging, but I am learning so much. In a few months, I will be able to
                                    confidently call myself a "full stack" developer.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  );
};

export default About;