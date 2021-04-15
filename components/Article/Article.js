/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the Article
 * @Exports {@component Article}
 */

import React from 'react';

const Article = ({ articleObj }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  articleObj.classNames = `${articleObj.isHero ? 'hero tl-article' : 't-article'} `;
  articleObj.classNames += `${
    articleObj.articleOrientation === 'Vertical' ? 'v-article' : 'h-article'
  } `;

  return (
    <article className={articleObj.classNames}>
      <section className="img-container">
        <img
          className="t-img"
          src={articleObj.Image}
          alt={articleObj.imgAlt}
        />
      </section>

      <section className="type-container">
        <h1><a href={articleObj.URI}>{articleObj.Title}</a></h1>
        <p className="subheading"><a href={articleObj.URI}>{articleObj.Source}</a></p>
        <p className="p-content">
          {articleObj.Description} <a href={articleObj.URI} target="_blank">Read more...</a>
        </p>
      </section>
    </article>
  );
};

export default Article;
