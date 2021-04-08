/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */

import React from 'react';
import Article from '../components/Article/Article';

const generateArticleList = (articles) => {
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

  return nArticles;
}
 
  const generateSections =  (articlesByTag) => {
    const resultJsx = [];
    for (const articleGroup in articlesByTag) {
      resultJsx.push(
        <section key={articleGroup} id={articlesByTag[articleGroup].name.replace(/ /g,"_")}>
          <h1 className="container-h1">{articlesByTag[articleGroup].name}</h1>
          <section className="article-container">{generateArticleList(articlesByTag[articleGroup].articles)}</section>
        </section>
      );
    }
    return resultJsx;
  };

  export {generateSections}