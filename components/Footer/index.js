/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the Footer Component
 * @Exports {@component Footer}
 */
 import React from 'react';
 import Markdown, {compiler} from 'markdown-to-jsx';
 import {useEffect, useState} from 'react';

 const Footer = ({footerContent}) => {
  const markdownOptions = {
    wrapper: "div",
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
          tag: "https://nymisjo.com",
          rel: "noopener"
        }
      }
    }
  }
  const [jsxSections, setjsxSections] = useState();
  useEffect(()=>{
    setjsxSections(compiler(footerContent.footer.Content, markdownOptions))
  },[])
   return (
     <footer>
       {jsxSections}
     </footer>
   );
 };
 
 export default Footer;
 