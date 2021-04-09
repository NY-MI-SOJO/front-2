/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */

import Head from 'next/head';
import HomePage from '../modules/HomePage/index';
import Layout from '../components/Layout';
import {getContent} from '../utils/query';
import {generateSections} from '../utils/generators';

export default function Home({articlesByTag}) {
  const sections = generateSections(articlesByTag);
  return (
    <>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1KJQRCHQ4M"></script>
      </Head>
      <Layout>
        <HomePage sections={sections}/>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const articlesByTag = await getContent("articles");
  return {
    props: { articlesByTag }, // will be passed to the page component as props
  }
}
