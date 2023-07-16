import React from 'react';

const Buy = () => {
    return (
        <div className="buycontainer">


            {/* Middle Container */}
            <div className="buymidcontainer">
            <div className="buymidcontainerUpper">


            {/* Title, Desc, Socials - Left Box */}
            <div className="buydescTitleSocialsDescBox">
             <div className="gigaChadBuyPageTitle">
             $UGLYPEPE
            </div>
           
            <div className="buyPageDesc">
            
            </div>


            <div className="socialLinksContainer">
            <a href="https://twitter.com/UglyPepeEth"><img src={'../imgs/twitterlogo.png'} className="socialLogos" /></a>
            <a href="https://t.me/UglyPepeCoin"><img src={'../imgs/telegram-seeklogo.com.svg'} className="socialLogos" /></a>
            <a href=""><img src={'../imgs/dextools-seeklogo.com.svg'} className="socialLogos" /></a>
            <a href=""><img src={'../imgs/etherscan-logo-circle.svg'} className="socialLogos" /></a>
            <a href=""><img src={'../imgs/cmmLogo.png'} className="socialLogosCMM" /></a>
            <a href=""><img src={'../imgs/uniswap.png'} className="socialLogos" /></a>
            </div>
            
            </div>



            {/* Logo on the right */}
            <div className="buylogocontainer">
                <div className="buyContainerInner">
            <img src={'../imgs/ROUGHUGLYPEPE_nobg_flip.png'} className="buy-logo" alt="logo" />
            </div>
            </div>

            {/*End Upper Mid */}
            </div>



            {/* Start Lower Mid */}
            <div className="buyBoxUnderneath">
                <div className="uniButtonContainer">
                <a className="uniswapBuyButton" href="">uniswap<img src={'../imgs/uniswap.png'} className="buttonLogos" /></a>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Buy;