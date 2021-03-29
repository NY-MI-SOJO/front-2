/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the HeaderNav Component
 * @Exports {@component HeaderNav}
 */
import React, {useReducer} from 'react';
import Link from 'next/link';
import Image from 'next/image';



const HeaderNav = ({isMobile}) => {
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

  const [state, dispatch] = useReducer(reducer, {isMenuVisible: false}, init)
  return (
    <header className="nav-header">

      <h1>New York and Michigan Solutions Journalism Collaborative</h1>
      
      {/* <div className="lang-select">
        <Link href="">English</Link>
        <Link href="">Español</Link>
      </div> */}
      
      <div id="mobile-section-1">
        <Link className="mobile-logo" href="/"><Image  src="/NYMISOJO.svg" alt="" width={55} height={55}/></Link>
        <button onClick={()=>{dispatch()}}>
          <img className="hamburger-icon" src={state.isMenuVisible ? "/closeMenu.png" : "/menu.png"} alt="menu button" width="36" height="36" />
        </button>
      </div>
      
      {state.isMenuVisible && <nav className="hamburger-menu">
        <Link  href="/Family_Caregivers" >Family Caregivers</Link>
        <Link href="/Paid_Caregivers">Paid Caregivers</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/About">About</Link>
        <button onClick={()=>{dispatch()}}>
          <img className="hamburger-icon" src="/closeMenu.png"  alt="menu button" width="36" height="36" />
        </button>
      </nav>}
      
        <nav id="right-nav">
          <Link href="/Contact">Contact</Link>
          <Link href="/About">About</Link>
        </nav>
        <nav id="left-nav">
          <Link href="/#Paid_Caregivers">Paid Caregivers</Link>
          <Link href="/#Unpaid_Caregivers">Family Caregivers</Link>
          <Link href="/#Poverty">Poverty</Link>
          
        </nav>
      
      
    </header>
  )};

export default HeaderNav;
