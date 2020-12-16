import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/book-min.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span id="color-o">
                                                Wasted
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span>
                                             Youth
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                    Wasted Youth is a fast paced, light-hearted romp that follows one man's attempt to deal with his self-imposed midlife crisis and maybe win back an old flame in the process. Join him and his salty crew as changes in latitudes find them sailing into a hurricane and diving shark-infested waters in search of shipwrecks and treasure.
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner} alt="book"/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;