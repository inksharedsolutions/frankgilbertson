import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book-min.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'frank-gilbertson',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Frank Gilbertson"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Wasted `,
                                    spanTitle: 'Youth',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `Wasted Youth is a fast paced, light-hearted romp that follows one man's attempt to deal with his self-imposed midlife crisis and maybe win back an old flame in the process. Join him and his salty crew as changes in latitudes find them sailing into a hurricane and diving shark-infested waters in search of shipwrecks and treasure. Relax and play a little afternoon golf or let it all ride on a longshot but make sure you have enough quarters for the jukebox. With humor and insight, you will gain valuable lessons in love, loss, family and friends and discover that the destination is well worth the journey.
                                    `,
                                    
                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/wasted-youth/',
                                        barnes: 'https://www.barnesandnoble.com/w/wasted-youth-frank-gilbertson/1008619329?ean=9781643458861',
                                        amazon :'https://www.amazon.com/Wasted-Youth-Frank-Gilbertson-ebook/dp/B08FPCD5YM/ref=sr_1_1?dchild=1&keywords=9781643458861&qid=1597777519&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Wasted-Youth-Frank-Gilbertson/dp/1643458841/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1597777519&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/wasted-youth-frank-gilbertson/1008619329?ean=9781643458847',
                                        booksamillion:'https://www.booksamillion.com/p/Wasted-Youth/Frank-Gilbertson/9781643458847?id=8079271834425',
                                    }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;