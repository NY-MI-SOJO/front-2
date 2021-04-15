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
      <Head>
        <title>{tagName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1KJQRCHQ4M"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <section key={tagName.replace(/ /g,"_")} id={tagName.replace(/ /g,"_")}>
        <div className="section-page-h1-div">
          <a href="/"><img className="back-arrow" src="/back.png"/></a>
          <h1 className="container-h1 section-page-ch1">{tagName}</h1>
        </div>
      
          <section className=" section-page article-container">{articles}</section>
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
    const sectionArticles = await getContent("section", tagName, "");

    return {
      props: { sectionArticles,  tagName}, // will be passed to the page component as props
    }
  }

export default Section