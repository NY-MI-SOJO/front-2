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
  const [pageLinks, setPageLinks] = useState();
  useEffect(()=>{
    const fetchTags = async () => {
      
      const tags = await getContent("tags");
      const links = tags.slice(1, 3).map((tag, idx) => {
        return <Link key={idx} href={`/#${tag}`.replace(/ /g,"_")} >{tag}</Link>
      });
      setPageLinks(links);
    };
    fetchTags();
  },[])


  function init(){
    return {isMenuVisible: false};
  }
  function reducer (state) {
    if (!state.isMenuVisible) {
      document.querySelector(".nav-header").style.position ="sticky";
      document.querySelector(".nav-header").style.height ="100vh";
    } else {
      document.querySelector(".nav-header").style.position ="static";
      document.querySelector(".nav-header").style.height ="100%";
    }
    return {isMenuVisible: !state.isMenuVisible }
  }
  const [state, dispatch] = useReducer(reducer, {isMenuVisible: false}, init);
 

  return (
    <header className="nav-header">
      <a href="/"> <h1>New York and Michigan Solutions Journalism Collaborative</h1> </a>
      <div id="mobile-section-1">
        <Link className="mobile-logo" href="/"><Image  src="/NYMISOJO.svg" alt="New York and Michigan Solution Journalism Collaborative Logo" width={55} height={55}/></Link>
        <button onClick={()=>{dispatch()}}>
          <img className="hamburger-icon" src={state.isMenuVisible ? "/closeMenu.png" : "/menu.png"} alt="menu button" width="36" height="36" />
        </button>
      </div>
      {state.isMenuVisible && <nav className="hamburger-menu">
        {pageLinks}
        <Link href="/contact">Engage with us</Link>
        <Link href="/about">About us</Link>
        <button onClick={()=>{dispatch()}}>
          <img className="hamburger-icon" src="/closeMenu.png"  alt="menu button" width="36" height="36" />
        </button>
      </nav>}
      <nav id="right-nav">
        <Link href="/contact">Engage with us</Link>
        <Link href="/about">About us</Link>
      </nav>
      <nav id="left-nav">
        {pageLinks}
      </nav>
    </header>
  )};

export default HeaderNav;
