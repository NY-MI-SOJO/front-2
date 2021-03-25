/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */
import React from 'react';

const HomePage = ({ sections }) => {
  /**
  * @description Homepage Component
  * @returns Homepage component
  * @example <Homepage />
  * @author Adit Garg <adit.garg21k@gmail.com>
  * @todo FOOTER, DYNAMIC MAIN GEN (NOT DEPENDENT ON MAGIC STRING)
  */
  return (
    <div id="homepage">
      <main>
        {sections}
      </main>
       <aside>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <hr />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <hr />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <hr />
      </aside> 
    </div>
  );
};



export default HomePage;