/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Fetches from the graphql endpoint using the query params provided
 * @Exports {@function generateSections, @function generateArticleList}
 */

import React from 'react';
import Article from '../components/Article/Article';


const generateArticleList = (articles, limit = 0) => {
   /** 
  * @description organizes aticles into an list and retuns it
  * @example [HEROARTICLE, article, article, ...]
  * @param {object} articles
  * @param {number} limit
  * @returns returns an list of article components
  * @author Adit Garg <adit.garg21k@gmail.com>
  */
  let heroSeen = false;
  let nArticles = [];
  let idx = 0;
  for (let article of articles) {
  
    if (article.isHero) {
      article.isHero = !heroSeen;
      heroSeen = true;
      if (article.isHero) {
        nArticles.unshift(<Article articleObj={article} key={idx} />)
      } else {
        nArticles.push(<Article articleObj={article} key={idx} />)
      }
    } else {
      nArticles.push(<Article articleObj={article} key={idx} />)
    }
    idx += 1;
  }
  if (limit > 0 ){
    return nArticles.slice(0, 5);
  } else {
    return nArticles;
  }
  
}

const generateVideoList = (videos, limit = 0) => {
  /** 

 * @author Adit Garg <adit.garg21k@gmail.com>
 */
  let idx = 0;
  const videoList = []
  for (let video of videos) {     
    videoList.push(<div dangerouslySetInnerHTML={{__html: video.EmbedVideo}} />)
    idx += 1;
  }
 if (limit > 0 ){
   return videoList.slice(0, 5);
 } else {
   return videoList;
 }
 
}

const generateAllArticleList = (articles) => {
  let idx = 0;
  const resultJsx = [];
  for (let article of articles) {
    resultJsx.push(<Article articleObj={article} isArchive={true} key={idx} />);
    idx++;
  }
  return resultJsx;
}
 
  const generateEventsList = (eventsData, limit = 0) => {
    const resultJsx = [];
    const options = {month: 'short', day: 'numeric' };
    
    for (let oneEvent of eventsData?.events){
      let tempDate = new Date(oneEvent.StartDateTime);
      
      let eventDate = tempDate.toLocaleDateString(undefined,options).toUpperCase().split(' ');
      resultJsx.push(
        <a href={oneEvent.EventURL} target="_blank">
          <section className='calendar-event-card'>
            <div className="left-date"><h2>{eventDate[1]}</h2><span>{eventDate[0]}</span></div>
            <div className="right-info"><h1>{oneEvent.Name}</h1><p className='p-content'>{oneEvent.Description}</p></div>
          </section>
        </a>
      )
    }
    return resultJsx;
  }
  const generateSections =  (articlesByTag, limit, videos) => {
    /** 
    * @description organizes sections and its articles into an list and returns it
    * @example [Featured Content,section, section, ...]
    * @param {object} articles
    * @param {number} limit
    * @returns returns a list of section components
    * @author Adit Garg <adit.garg21k@gmail.com>
    */
    const resultJsx = [];
    for (const articleGroup of articlesByTag) {
      const tagNameURL = articleGroup.Name.replace(/ /g,"_");
      if (tagNameURL=== "Videos") {
        resultJsx.push(
          <section key="Videos" id="Videos" className='videos_container'>
          <a href={"sections/Videos"}><h1 className="container-h1">Videos</h1></a>
          <section className="article-container">{generateVideoList(videos, limit)}</section>
        </section>
        )
      } else {
        resultJsx.push(
          <section key={articleGroup.Name} id={tagNameURL}>
            <a href={`sections/${tagNameURL}`}><h1 className="container-h1">{articleGroup.Name}</h1></a>
            <section className="article-container">{generateArticleList(articleGroup.articles, limit)}</section>
          </section>
        );
      }
    }
    return resultJsx;
  };

  const generateCarouselSlides = (slides) => {
    const resultJsx = [];
    console.log(slides)
    for (const slide of slides) {
      
      resultJsx.push(
        <a href={slide.URL} target="_blank">
          <div>
            <img alt="" src={`https://admin.nymisojo.com${slide.image.url}`} />
          </div>
        </a>
        
      );
    }
    return resultJsx;
  }

  export {generateSections, generateArticleList, generateAllArticleList, generateCarouselSlides, generateVideoList, generateEventsList}