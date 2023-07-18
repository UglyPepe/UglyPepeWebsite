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
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x1d1fc8527bca7798804b2aa3922bd4a0c32074d1"><img src={'../imgs/dextools-seeklogo.com.svg'} className="socialLogos" /></a>
            <a href="https://etherscan.io/token/0xba25bfbfc596c88576dfe0d4d95a87b34a291f45"><img src={'../imgs/etherscan-logo-circle.svg'} className="socialLogos" /></a>
            <a href=""><img src={'../imgs/cmmLogo.png'} className="socialLogosCMM" /></a>
            <a href="https://app.uniswap.org/#/tokens/ethereum/0xba25bfbfc596c88576dfe0d4d95a87b34a291f45"><img src={'../imgs/uniswap.png'} className="socialLogos" /></a>
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
                <a className="uniswapBuyButton" href="https://app.uniswap.org/#/tokens/ethereum/0xba25bfbfc596c88576dfe0d4d95a87b34a291f45">uniswap<img src={'../imgs/uniswap.png'} className="buttonLogos" /></a>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Buy;