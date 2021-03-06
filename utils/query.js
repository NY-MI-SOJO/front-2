/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Fetches from the graphql endpoint using the query params provided
 * @Exports {@function getContent}
 */

import fetch from 'node-fetch';
// const fetch = require('node-fetch');



const getContent = async (type, tag, page) => {
  /** 
  * @description execute gql query based on params passed in
  * @param {string} type must be section, page, or articles
  * @param {string} tag must be a type that exists in strapi
  * @param {string} page aboutPage or contactPage
  * @returns returns an array of response objects
  * @author Adit Garg <adit.garg21k@gmail.com>
  */
  const queryArticles = `query { 
    tags (sort: "Order:asc") {
      Name, Order
     articles (sort: "createdAt:desc"){
      Title, Source, Description, createdAt, Image, imageDescription, isHero, articleOrientation, URI, isHero
    },
    },
  }`;
  const queryEmbedLinks = `query {
    twitterEmbed {
      url, visible
    }
  	typeformEmbed {
      data_url, visible
    }
  }`;
  const queryFooter = `query {
    footer {
      Content  
    },
  }`;
  const querySection = `query {
    articles (where: {tags: {Name: "${tag}"}}){
      Title, Source, Description, Image, imageDescription, isHero, articleOrientation, URI, isHero  
    },
  }`;
  const queryTags = `query {
    tags (sort: "Order:asc") {
      Name
    }
  }`;
  const queryPage = `query {
    ${page} {
      Page {
        ... on ComponentSectionSection {
          Content
        }
      }	
    }
  }`;
  const queryTable = { 
    articles: queryArticles,
    tags: queryTags,
    section: querySection,
    page: queryPage,
    embedLinks:  queryEmbedLinks,
    footer: queryFooter
  };
  const response = await fetch(
    'https://admin.nymisojo.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: queryTable[type],
      variables: {},
    }),
  });
  const resJson = await response.json();
  switch (type) {
    case "articles":
      return resJson.data.tags;
    case "tags":
      // returns an array of tag names
      return resJson.data.tags.map(tag => tag.Name)
    case "section":
      // returns articles for that tag
      return resJson.data.articles;
    case "page":
      // returns markdown content for the page
      return resJson.data[page].Page;
    case "embedLinks":
      // returns embedded links for typeform and twitter w/ visibility
      return resJson.data;
    case "footer":
      return resJson.data;
  }
}

// getContent({type: "page",page:"aboutPage"})
export { getContent };