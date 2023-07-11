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
            u.g.l.y<br></br> you ain't got no aliby, you ugly
            </div>


            <div className="socialLinksContainer">
            <a href="https://twitter.com/PepeCoin_OG"><img src={'../imgs/twitterlogo.png'} className="socialLogos" /></a>
            <a href="https://t.me/+iofGyLYyN_pmYmM5"><img src={'../imgs/telegram-seeklogo.com.svg'} className="socialLogos" /></a>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xb5377fd427376e4a795e0dccb97e4370d67e9774"><img src={'../imgs/dextools-seeklogo.com.svg'} className="socialLogos" /></a>
            <a href="https://etherscan.io/address/0x86031d4925b68ae435a627eb52dc7c5507b3a6e1"><img src={'../imgs/etherscan-logo-circle.svg'} className="socialLogos" /></a>
            <a href=""><img src={'../imgs/cmmLogo.png'} className="socialLogosCMM" /></a>
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0x86031d4925b68Ae435a627EB52Dc7C5507B3A6E1"><img src={'../imgs/uniswap.png'} className="socialLogos" /></a>
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
                <a className="uniswapBuyButton" href="https://app.uniswap.org/#/swap?outputCurrency=0x86031d4925b68Ae435a627EB52Dc7C5507B3A6E1">uniswap<img src={'../imgs/uniswap.png'} className="buttonLogos" /></a>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Buy;