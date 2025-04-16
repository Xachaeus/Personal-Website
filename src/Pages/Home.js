import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import '../Style/app.css';
import '../Style/Home.css';

import BackgroundImage from '../Images/profile.jpg';

export function Home() {

    const OpeningText = "Meet The Greatest Programmer Who Ever Lived";
    const P1 = "I'm Zachariah Sollenberger, an undergraduate sophomore student at the University of Delaware. " + 
               "I'm currently pursuing a Bachelor's Degree in Computer Science, and I'm a High-Performance Computing researcher " + 
               "for UD's Computational Research and Programming Lab.";
    const P2 = "Learn more about my experience and background on the About page, " + 
               "look at some of my previous personal projects and research papers on the Projects page, " +
               "and catch up with recent news and projects on my Blog. " + 
               "Take a look below for more information about me.";

    return (
        <div>
            <BrowserView>
                <div className="MobilePictureContainer">
                    <div className="MobilePictureText">
                        <h1>{OpeningText}</h1>
                        <p>{P1}</p>
                        <p>{P2}</p>
                    </div>
                    <img className="MobilePictureBackground" src={BackgroundImage} alt="Profile"/>
                </div>

                <div className="ExploreSection">

                    <h1>Explore</h1>
                    <p>Take a look at my experience, projects, and accomplishments!</p>

                    <div className="ExploreTile">
                        <h1>About</h1>
                        <div className="ExploreDesc">
                            <p>Take a look at my background and some of my notable achievements!</p>
                            <Link to="/about">{"Go ->"}</Link>
                        </div>
                    </div>

                    <div className="ExploreTile">
                        <h1>Projects</h1>
                        <div className="ExploreDesc">
                            <p>See some of my personal and professional engineering projects!</p>
                            <Link to="/projects">{"Go ->"}</Link>
                        </div>
                    </div>

                    <div className="ExploreTile">
                        <h1>Blog</h1>
                        <div className="ExploreDesc">
                            <p>Catch up with my recent projects and goals!</p>
                            <Link to="/blog">{"Go ->"}</Link>
                        </div>
                    </div>

                </div>

            </BrowserView>
            <MobileView>

                <div className="PictureBackgroundContainer">
                    <div className="PictureBackgroundText">
                        <h1>Meet The Greatest Programmer Who Ever Lived</h1>
                        <p>{P1}</p>
                        <p>{P2}</p>
                    </div>
                </div>
                <div className="ExploreSection">

                    <h1>Explore</h1>
                    <p>Take a look at my experience, projects, and accomplishments!</p>

                    <div className="ExploreTile">
                        <h1>About</h1>
                        <div className="ExploreDesc">
                            <p>Take a look at my background and some of my notable achievements!</p>
                            <Link to="/about">{"Go ->"}</Link>
                        </div>
                    </div>

                    <div className="ExploreTile">
                        <h1>Projects</h1>
                        <div className="ExploreDesc">
                            <p>See some of my personal and professional engineering projects!</p>
                            <Link to="/projects">{"Go ->"}</Link>
                        </div>
                    </div>

                    <div className="ExploreTile">
                        <h1>Blog</h1>
                        <div className="ExploreDesc">
                            <p>Catch up with my recent projects and goals!</p>
                            <Link to="/blog">{"Go ->"}</Link>
                        </div>
                    </div>

                </div>

            </MobileView>
        </div>
    )

}