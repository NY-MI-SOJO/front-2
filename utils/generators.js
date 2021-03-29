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
  if (!heroSeen){
    articles[0].isHero = true;
    nArticles[0] = <Article articleObj={articles[0]} key={idx} />
  } 
  return nArticles;
}
 
  const generateSections =  (articlesByTag) => {
    const resultJsx = [];
    for (const articleGroup in articlesByTag) {
      if (articleGroup === "Stories of the day"){
         resultJsx.unshift(
          <section key={articleGroup} id={articleGroup.replace(/ /g,"_")}>
            <h1 className="container-h1">{articleGroup}</h1>
            <section className="article-container">{generateArticleList(articlesByTag[articleGroup])}</section>
          </section>
         )
      }
      else {
        resultJsx.push(
          <section key={articleGroup} id={articleGroup.replace(/ /g,"_")}>
            <h1 className="container-h1">{articleGroup}</h1>
            <section className="article-container">{generateArticleList(articlesByTag[articleGroup])}</section>
          </section>
        );
      }
      
    }
    return resultJsx;
  };

  export {generateSections}