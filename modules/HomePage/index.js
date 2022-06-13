/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */
import React, {useEffect} from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { generateEventsList } from '../../utils/generators';

const HomePage = ({ sections, embedLinks, carouselSlides, events}) => {
  /**
  * @description Homepage Component
  * @returns Homepage component
  * @example <Homepage />
  * @author Adit Garg <adit.garg21k@gmail.com>
  */
  useEffect(()=>{
    (function() { let qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
  },[])
  const eventListJSX = generateEventsList(events);
  return (
    <div id="homepage">
    <section id='carouselSec'>
          <section className="article-container videos-container">
          </section>
          <Carousel className='caraousel' autoPlay={true} infiniteLoop={true}  showStatus={false} showThumbs={false}>
            {carouselSlides}
          </Carousel>
    </section>
      <main>
        {sections}
      </main>
        <aside>
          <section id="resource_guide">
            <a href='https://sites.google.com/view/caregiving-resource-guide/home' target='_blank' >
              <div>Resource <br />Guide</div><img src="/arrow.png" width={46} height={22}/>
            </a>
            <p className="p-content">The resource guide features
              resources for caregivers that 
              empower and enable them to
              do what they love with the
              help of the resources they need</p>
          </section>
          <hr />
          <section>

            <h1>Upcoming events</h1>
            {eventListJSX}
          </section>
          <hr />
        {embedLinks.twitterEmbed.visible && <>
          <a className="twitter-timeline" data-width="300" data-height="600" data-theme="light" href={embedLinks.twitterEmbed.url}>Tweets by NYMIsojo</a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          <hr />
        </>}
        {embedLinks.typeformEmbed.visible && 
          <div className="typeform-widget" data-url={embedLinks.typeformEmbed.data_url} data-hide-headers="true" data-hide-footer="true" style={{width: 100+"%", height: 500+"px"}}></div> 
        }
      </aside> 
    </div>
  );
};



export default HomePage;