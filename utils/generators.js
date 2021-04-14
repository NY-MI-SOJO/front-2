/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */

import React from 'react';
import Article from '../components/Article/Article';

const generateArticleList = (articles, limit = 0) => {
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