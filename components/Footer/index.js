/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the Footer Component
 * @Exports {@component Footer}
 */
 import React from 'react';

 const Footer = () => {
   
   return (
     <footer>
       <div>
       <h1>Talk to us.</h1>
       <p className="p-content">
        Do you have a tip, question or comment? Follow us on <a href="https://www.facebook.com/NYMIsojo" target="_blank" tag="nymisojo.com">Facebook</a> or <a href="https://twitter.com/NYMIsojo" target="_blank" tag="nymisojo.com">Twitter</a> (or both) and send us a direct message, or send us an email at karen@solutionsjournalism.org. 
       </p>
        <nav>
          <a href="https://www.solutionsjournalism.org/" target="_blank">Solutions Journalism</a>
        </nav>
        <p className="p-content">	&#169; New York and Michigan Solutions Journalism Collaborative.</p>
       </div>
        
     </footer>
   );
 };
 
 export default Footer;
 