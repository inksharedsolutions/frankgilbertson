import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author-photo.png'

const UpperMain =()=>{

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Frank Gilbertson</h1>
                                <span>Author & Writer</span>

                                <p>
                                    I was born in 1955, dead smack in the middle of the baby boom era to the greatest generation of American's that had ever lived. Back then we liked "Ike" and "Mom, baseball and apple pie" were a way of life. My early childhood can only be described as an episode of "Leave it to Beaver". My family had dinner together every night and went to church on Sunday's. We did our chores and our homework. We sang in the school choir and said the pledge of allegiance. Life was much simpler back then and we played outside until well after dark.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain