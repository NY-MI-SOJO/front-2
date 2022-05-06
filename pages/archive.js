/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */

 import Layout from '../components/Layout'
 import Image from 'next/image';
 import Markdown, {compiler} from 'markdown-to-jsx';
 import Head from 'next/head';
 import {getContent} from '../utils/query';
 import {useEffect, useState} from 'react';
 import {generateAllArticleList} from '../utils/generators'
 
 function archive({allArticles, footerContent}) {
  const jsxArticles = generateAllArticleList(allArticles)
   return (
     <Layout footerContent={footerContent}>
       <Head>
         <title>NYMISOJO: archive</title>
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
       <main id="archive-page">
         {jsxArticles}
 
       </main>
     </ Layout>
   )
 }
 
 export async function getServerSideProps() {
   const allArticles = await getContent("allArticles", "", "");
   const footerContent = await getContent("footer","","");
   (allArticles)
   return {
     props: { allArticles, footerContent }, // will be passed to the page component as props
   }
 }
 
 export default archive