/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */
import { useState, useEffect } from "react"
import Footer from '../Footer';

import HeaderNav from '../HeaderNav';

function Layout(props) {
  
  const [date, setDate] = useState();
  useEffect(()=>{
    const tempDate = new Date(Date.now());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDate(tempDate.toLocaleDateString(undefined, options));
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'G-1KJQRCHQ4M', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: window.document.title,
    });
  },[])
  return (
    <>
      <div id="app">
        <HeaderNav />
        <span id="date-span">{date}</span>
        {props.children}
      </div>
      <div id="footer-clear" />
      <Footer />
    </>
  )
}


export default Layout;