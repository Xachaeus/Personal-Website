import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import '../Style/app.css';
import '../Style/Home.css';

import BackgroundImage from '../Images/profile.jpg';

export function Home() {

    const OpeningText = "Meet The Greatest Programmer Who Ever Lived";
    const P1 = "This site is still in production.";

    return (
        <div>
            <BrowserView>
                <div className="PictureBackgroundContainer">
                    <div className="PictureBackgroundText">
                        <h1>{OpeningText}</h1>
                        <p>{P1}</p>
                        <p>Come back later to see the full site!</p>
                    </div>
                    <img className="PictureBackgroundImage" src={BackgroundImage} alt="Profile"/>
                </div>

                <div className="ExploreSection">

                    <h1>Explore</h1>
                    <p>Take a look at my experience, projects, and thoughts!</p>

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
                            <p>Catch up with my recent projects and thoughts!</p>
                            <Link to="/blog">{"Go ->"}</Link>
                        </div>
                    </div>

                </div>

            </BrowserView>
            <MobileView>

                <div className="PictureBackgroundContainer">
                    <div className="PictureBackgroundText">
                        <h1>Meet The Greatest Programmer Who Ever Lived</h1>
                        <p1>This site is still in production.</p1>
                        <p2>Come back later to see the full site!</p2>
                    </div>
                </div>
                <div className="ExploreSection">
                    <h1>Explore</h1>
                </div>
            </MobileView>
        </div>
    )

}