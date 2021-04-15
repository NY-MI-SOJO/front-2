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
 
  const generateSections =  (articlesByTag, limit) => {
    /** 
    * @description organizes sections and its articles into an list and returns it
    * @example [Featured Content,section, section, ...]
    * @param {object} articles
    * @param {number} limit
    * @returns returns a list of section components
    * @author Adit Garg <adit.garg21k@gmail.com>
    */
    const resultJsx = [];
    for (const articleGroup in articlesByTag) {
      const tagNameURL = articlesByTag[articleGroup].name.replace(/ /g,"_");
      resultJsx.push(
        <section key={articleGroup} id={tagNameURL}>
          <a href={`sections/${tagNameURL}`}><h1 className="container-h1">{articlesByTag[articleGroup].name}</h1></a>
          <section className="article-container">{generateArticleList(articlesByTag[articleGroup].articles, limit)}</section>
        </section>
      );
    }
    return resultJsx;
  };

  export {generateSections, generateArticleList}