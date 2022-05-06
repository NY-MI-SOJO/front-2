/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the HeaderNav Component
 * @Exports {@component HeaderNav}
 */
import {useReducer, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {getContent} from '../../utils/query';



const HeaderNav = () => {
  /** 
  * @description Generate headernav via at render links via gql query
  * @returns returns an array of response objects
  * @author Adit Garg <adit.garg21k@gmail.com>
  */
  const [pageLinks, setPageLinks] = useState();
  useEffect(()=>{
    const fetchTags = async () => {
      const tags = await getContent("tags", "", "");
      const links = tags.map((tag, idx) => {
        return <Link key={idx} href={`/#${tag}`.replace(/ /g,"_")} >{tag}</Link> // anchor links to h1s for sections
      });
      setPageLinks(links);
    };
    fetchTags();
  },[])


  function init(){ // default initial state
    return {isMenuVisible: false};
  }
  function reducer (state) { 
    // if (!state.isMenuVisible) {
    //   document.querySelector(".nav-header").style.position ="sticky";
    //   document.querySelector(".nav-header").style.height ="100vh";
    // } else {
    //   document.querySelector(".nav-header").style.position ="static";
    //   document.querySelector(".nav-header").style.height ="100%";
    // }
    return {isMenuVisible: !state.isMenuVisible }
  }
  const [state, dispatch] = useReducer(reducer, {isMenuVisible: false}, init);
 

  return (
    <header className="nav-header">
      <a href="/"> <h1>New York and Michigan Solutions Journalism Collaborative</h1> </a>
      <div id="mobile-section-1">
        <a className="mobile-logo" href="/"><Image  src="/NYMISOJO.png" alt="New York and Michigan Solution Journalism Collaborative Logo" width={69} height={55}/></a>
        <button className="hamburger-btn" onClick={()=>{dispatch()}}>
          <img className="hamburger-icon" src={state.isMenuVisible ? "/closeMenu.png" : "/menu.png"} alt="menu button" width="36" height="36" />
        </button>
      </div>
      {state.isMenuVisible && <>
        <hr className='hamburger-hr' />
        <nav className="hamburger-menu">
          {pageLinks}
          <Link href="/archive">Archive</Link>
          <Link href="/contact">Contact us</Link>
        <Link href="/about">About us</Link>
          {/* <Link href="/contact">Contact us</Link>
          <Link href="/about">About us</Link> */}
          {/* <button onClick={()=>{dispatch()}}>
            <img className="hamburger-icon" src="/closeMenu.png"  alt="menu button" width="36" height="36" />
          </button> */}
        </nav>
      </>}
      <nav id="right-nav">
        <Link href="/contact">Contact us</Link>
        <Link href="/about">About us</Link>
      </nav>
      <nav id="left-nav">
        
        <button  className="hamburger-btn"  onClick={()=>{dispatch()}}>
          <img className="hamburger-icon" src={state.isMenuVisible ? "/closeMenu.png" : "/menu.png"} alt="menu button" width="36" height="36" />
        </button>
      </nav>
      
    </header>
  )};

export default HeaderNav;
