/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Fetches from the graphql endpoint using the query provided
 * @Exports {@function getArticles}
 */

import fetch from 'node-fetch';
// const fetch = require('node-fetch');



const getContent = async (type, tag, page) => {
  const queryArticles = `query {
    articles {
      Title, Source, Description, Image, imageDescription, isHero, articleOrientation, URI, isHero
      tags { 
          Name, Order
      }  
    },
    tags (sort: "Order:asc") {
      Name, Order
    },
    
  }`
  const querySection = `query {
    articles (where: {tags: {Name: "${tag}"}}){
      Title, Source, Description, Image, imageDescription, isHero, articleOrientation, URI, isHero
        
    },
  }`
  const queryTags = `query {
    tags (sort: "Order:asc") {
      Name
    }
  }`
  const queryPage = `query {
    ${page} {
      Page {
        ... on ComponentSectionSection {
          Content
        }
      }	
    }
  }`
  const queryTable = {
    articles: queryArticles,
    tags: queryTags,
    section: querySection,
    page: queryPage
  }
  const response = await fetch(
    'https://nymisojo-back.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: queryTable[type],
      variables: {},
    }),
  })
  const resJson = await response.json();
  
  switch (type) {
    case "articles":
      const articleObjects = resJson.data.articles.reduce((restObj, article) => {
        article.tags.forEach(tag => {
          if (tag.Name in restObj) {
            restObj[tag.Name].articles.push(article);
          } else {
            restObj[tag.Name] = { articles: [], name: tag.Name }
            restObj[tag.Name].articles.push(article);
          }
        });
        return restObj;
      }, {})
      return resJson.data.tags.map(tag => articleObjects[tag.Name])
    case "tags":
      return resJson.data.tags.map(tag => tag.Name)
    case "section":
      // console.log("-----",response.status, response.statusText, page, resJson)
      return resJson.data.articles;
    case "page":
      
      return resJson.data[page].Page
  }
}

// getContent({type: "page",page:"aboutPage"})


export { getContent };