import React from 'react';

const RoadMap = () => {
    return (
        <div className="roadMapContainer">
            
            <div className="roadmapInnerContainer">
                <div className="midUpperContainer">
                <div className="upperMidLeft">
                <img src={'../imgs/ROUGHUGLYPEPE_nobg.png'} className="roadmapUpperLeftLogo" alt="logo" />
                </div>
                <div className="upperMidMid" >
                <div className="roadmapTitleContainer">
                    <div className="roadmapTitle">roadmap</div>
                </div>
                    <div className="roadmapUnderTitle" >
                        <div className="roadmapUnderTitleBox">
                            <div className="roadmapUpperText">Phase 1: meme </div>
                            <div className="roadmapUpperText">Phase 2: HODL </div>
                            <div className="roadmapUpperText">Phase 3: ugly pepe takes over</div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="upperMidRight" >
                <img src={'../imgs/ROUGHUGLYPEPE_nobg_flip.png'} className="roadmapUpperRightLogo" alt="logo" />
                </div>
                </div>

                <div className="midMidContainer">

                <div className="roadmapMidText">
                    here is a rough sketch of ugly pepe's journey ahead. We are commited to continuously bringing new tech and exciting features as the crypto world evolves.
                </div>

                </div>

                <div className="midLowerContainer">
                    <div className="roadmapLowerLeft">
                       <div className="roadmapLowerTitle">
                        Phase  1
                       </div>
                       <ul>
                       <li className="roadmapLowerBoxText">Launch</li>
                       <li className="roadmapLowerBoxText">Marketing</li>
                       <li className="roadmapLowerBoxText">100+ Holders</li>
                       <li className="roadmapLowerBoxText">CoinMarketCap Listing</li>
                       </ul>
                    </div>
                    <div className="roadmapLowerMid">
                        <div className="roadmapLowerTitle">
                        Phase  2
                        </div>

                        <ul>
                       <li className="roadmapLowerBoxText">Get #UGLYPEPE Trending On Twitter</li>
                       <li className="roadmapLowerBoxText">Find Meaningful Community Partnerships</li>
                       <li className="roadmapLowerBoxText">1,000+ Holders</li>
                       </ul>

                       

                    </div>
                    <div className="roadmapLowerRight">
                        <div className="roadmapLowerTitle">
                        Phase  3
                        </div>

                        <ul>
                       <li className="roadmapLowerBoxText">Begin Planning For Next Phase Of Development - Based On Community Feedback</li>
                       <li className="roadmapLowerBoxText">Community Events</li>
                       <li className="roadmapLowerBoxText">CEX Listing</li>
                       </ul>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default RoadMap;