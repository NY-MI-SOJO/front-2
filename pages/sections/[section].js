/**
* @description Generates the section page
* @author Adit Garg <adit.garg21k@gmail.com>
*/

import Layout from '../../components/Layout';
import Head from 'next/head';
import {getContent} from '../../utils/query';
import {generateArticleList, generateVideoList} from '../../utils/generators';
import {useState, useEffect} from 'react';

function Section({sectionArticles, tagName, footerContent}) {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    if (tagName === "Videos") {
      setArticles(generateVideoList(sectionArticles))
      // console.log(articles, generateVideoList(sectionArticles), sectionArticles)
    } else {
      setArticles(generateArticleList(sectionArticles))
    }
  },[]);
 return (
   <Layout footerContent={footerContent}>
      <Head>
        <title>{tagName} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="The New York & Michigan Solutions Journalism Collaborative (NYMI SOJO) is a group of news, education and media outlets pooling time, talent and resources to cover chronic problems with a solutions lens. It is modeled on other successful news collaboratives supported by the Solutions Journalism Network. 
        Our inaugural project, Invisible Army: Caregiving on the Front Lines, will produce rigorous reporting on successful responses to challenges experienced by caregivers and older adults." />
        <meta name="keywords" content="Solutions Journalism, Caregivers, Caregiving, NYMI SOJO, NY&MI SOJO, New York and Michigan Solutions Journalism Network" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LRC9C3QCYJ" />
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
    // Call an external API endpoint to get tags
    let tags = await getContent("tags");
    const paths = tags.map(tag=> {
      return {params: {section: tag.replace(/ /g,"_")}}
    }); // page paths
    return { paths, fallback: true };
  }

  export async function getStaticProps({params}) {
    const tagName = params.section.replace(/_/g," "); // turn page paths into names
    let videos, sectionArticles;
    if (tagName === "Videos") {
      sectionArticles = await getContent("section", "Videos","Videos"); 
     
      
    }
    else {
      sectionArticles = await getContent("section", tagName);
    }
    // console.log(sectionArticles)
    const footerContent = await getContent("footer","","");
    return {
      props: { sectionArticles,  tagName, footerContent}, // will be passed to the page component as props
    }
  }

export default Section;