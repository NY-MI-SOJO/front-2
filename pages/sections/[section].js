/*
* @author Adit Garg <adit.garg21k@gmail.com>
*/

import Layout from '../../components/Layout';
import Head from 'next/head';
import {getContent} from '../../utils/query';
import {generateArticleList} from '../../utils/generators';
import {useState, useEffect} from 'react';

function Section({sectionArticles, tagName}) {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    setArticles(generateArticleList(sectionArticles))
  },[])
 return (
   <Layout>
      
      <section key={tagName} id={tagName}>
        <div className="section-page-h1-div">
          <a href="/"><img className="back-arrow" src="/back.png"/></a>
          <h1 className="container-h1 section-page-ch1">{tagName}</h1>
        </div>
      
          <section className="section-page article-container">{articles}</section>
        </section>
   </ Layout>
 )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    let tags = await getContent("tags")
    const paths = tags.map(tag=> {
      return {params: {section: tag.replace(/ /g,"_")}}
    })
    return { paths, fallback: true }
  }

  export async function getStaticProps({params}) {
    const tagName = params.section.replace(/_/g," ");
    const sectionArticles = await getContent("section", tagName);
    console.log(tagName)
    return {
      props: { sectionArticles,  tagName}, // will be passed to the page component as props
    }
  }

export default Section