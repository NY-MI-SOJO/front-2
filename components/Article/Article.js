/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the Article
 * @Exports {@component Article}
 */

import React from 'react';

/** 
* @description Scrapes all meta tags and 
* @param {string} uri must be valid
* @returns returns 2d array of name and content of tags
* @example metaScraper(www.abc.com) returns [[nameOfTag, ContentOfTag],[nameOfTag, ContentOfTag]...]
* @author Adit Garg <adit.garg21k@gmail.com>
*/
const Article = ({ articleObj, isArchive }) => {
  // const myLoader = ({ src, width, quality }) => {
  //   return `${src}?w=${width}&q=${quality || 75}`
  // }
  if (isArchive) {
    articleObj.classNames = 'h-article';
  } else {
    articleObj.classNames = `${articleObj.isHero ? 'hero tl-article' : 't-article'} `;
    articleObj.classNames += `${
      articleObj.articleOrientation === 'Vertical' ? ' v-article' : ' h-article'
    } `;
  
  }
  
  

  return (
    <article className={articleObj.classNames}>
      <section className="img-container">
      <a href={articleObj.URI} target="_blank" tag="https://nymisojo.com" rel="noopener">
        <img
          className="t-img"
          src={articleObj.Image}
          alt={articleObj.imageDescription}
        />
        </a>
      </section>

      <section className="type-container">
        <h1><a href={articleObj.URI} target="_blank" tag="https://nymisojo.com" rel="noopener">{articleObj.Title}</a></h1>
        <p className="subheading"><a href={articleObj.URI} target="_blank" tag="https://nymisojo.com" rel="noopener">{articleObj.Source}</a></p>
        <p className="p-content">
          {articleObj.Description} <a href={articleObj.URI} tag="https://nymisojo.com" target="_blank" rel="noopener">Read more...</a>
        </p>
      </section>
    </article>
  );
};

export default Article;
