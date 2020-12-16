import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-photo.png'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Frank Gilbertson"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                
                                <span className="ata-span-fx">
                                    "A man with a plan is a dangerous man"
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                            I was born in 1955, dead smack in the middle of the baby boom era to the greatest generation of American's that had ever lived. Back then we liked "Ike" and "Mom, baseball and apple pie" were a way of life. My early childhood can only be described as an episode of "Leave it to Beaver". My family had dinner together every night and went to church on Sunday's. We did our chores and our homework. We sang in the school choir and said the pledge of allegiance. Life was much simpler back then and we played outside until well after dark.
                            </p>

                            <p>
                            My teen years weren't nearly as idyllic. After all they shot John, murdered Martin, assassinated Bobby and force fed us the Vietnam war on television. The "Summer of Love" was the way we answered they're treachery and to an impressionable twelve-year old boy "Sex, drugs and rock & roll" seemed like a mighty fine way of life. I was wrong and my intermediate school years were completely wasted. I got into the drug culture much, much too young, grew my hair long and by the time I was to enter high school I was on the verge of being a societal failure. Praise the Lord it never happened that way and I can say something about my high school years that most people can't. I had the absolute time of my life in those four-years. I had high school so wired and cruised through so easily it was almost criminal. Some people actually thought it was. Unfortunately, back in my day when a young man graduated, he was expected to move out of his parent's house and start making his own way in life and that is exactly what I did.
                            </p>

                            <p>
                            I spent the first six years of adulthood being anything but I did what every young boy needs to do in order to grow into a man. I sewed my wild oats and I did a hell of a good job at it. I spent those years surfing and partying in places like north county San Diego, Lahaina, Maui and my hometown of Hacienda Heights. Then I met this girl. There had been other girl's but I knew from the very start this one was different. We were together for two years when I suggested we have a baby. Three weeks later Barbara was pregnant and in November 1981 our daughters was born. Best day of my life. It took me six months of down on my knees begging and she finally caved-in. On May 27th 1982 we were married in the Santa Ana, CA courthouse and life has been real ever since. Real life is tough and rarely goes the way you'd like it too but Barb and I never lost sight of the real reason we were alive. To enjoy life. We never got rich with money but we are the wealthiest people I know simply because we enjoyed the ride to its fullest. As time runs down, I have no regrets, wouldn't change a thing and I'm so damn glad I was here.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Frank Gilbertson
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;