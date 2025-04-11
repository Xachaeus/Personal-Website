import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import '../Style/app.css';
import '../Style/Home.css';

import BackgroundImage from '../Images/profile.jpg';

export function Home() {

    const OpeningText = "Meet The Greatest Programmer Who Ever Lived";
    const P1 = "This site is still in production.";

    const ExploreP1 = "Take a look at some of my projects and recent accomplishments!";

    return (
        <div>
            <BrowserView>
                <div className="PictureBackgroundContainer">
                    <div className="PictureBackgroundText">
                        <h1>{OpeningText}</h1>
                        <p1>{P1}</p1>
                        <p2>Come back later to see the full site!</p2>
                    </div>
                    <img className="PictureBackgroundImage" src={BackgroundImage} alt="Profile"/>
                </div>

                <div className="ExploreSection">
                    <h1>Explore</h1>
                    <p>{ExploreP1}</p>
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
                    <p>{ExploreP1}</p>
                </div>
            </MobileView>
        </div>
    )

}