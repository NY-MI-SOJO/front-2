/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */

import Head from 'next/head';
import HomePage from '../modules/HomePage/index';
import {getArticles} from '../utils/query';
import {generateSections} from '../utils/generators';

export default function Home({articlesByTag}) {
  const sections = generateSections(articlesByTag);
  return (
    <>
      <HomePage sections={sections}/>
    </>
    
  )
}

export async function getStaticProps(context) {
  const articlesByTag = await getArticles();
  return {
    props: { articlesByTag }, // will be passed to the page component as props
  }
}
