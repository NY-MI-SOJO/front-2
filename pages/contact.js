/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */

import Layout from '../components/Layout'
import Image from 'next/image';
import Markdown, {compiler} from 'markdown-to-jsx';
import Head from 'next/head';
import {getContent} from '../utils/query';
import {useEffect, useState} from 'react';

function contact({markdownSections, footerContent}) {
  const markdownOptions = {
    wrapper: "section",
    forceBlock: true,
    forceWrapper: true,
    overrides: {
      p: {
        props: {
          className: "p-content"
        }
      },
      a: {
        props: {
          target: "_blank",
          tag: "https://nymisjo.com"
        }
      }
    }
  }
  const [jsxSections, setjsxSections] = useState();
  useEffect(()=>{
    setjsxSections(markdownSections.map((section)=>{
      return compiler(section.Content, markdownOptions);
    }))
  },[])
  return (
    <Layout footerContent={footerContent}>
      <Head>
        <title>Engage with us </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      <main id="contact-page">
        {jsxSections}

      </main>
    </ Layout>
  )
}

export async function getServerSideProps() {
  const markdownSections = await getContent("page", "", "contactPage");
  const footerContent = await getContent("footer","","");
  return {
    props: { markdownSections, footerContent }, // will be passed to the page component as props
  }
}

export default contact