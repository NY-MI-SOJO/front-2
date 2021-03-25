import React from 'react';
import Article from '../components/Article/Article';

const generateArticleList = (articles) => {
    let heroSeen = false;
    return articles.map((article, idx) => {
      if (article.isHero) {
        article.isHero = !heroSeen;
        heroSeen = true;
      }
      return <Article articleObj={article} key={idx} />
    })
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