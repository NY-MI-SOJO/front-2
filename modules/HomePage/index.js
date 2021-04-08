/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */
import React, {useEffect} from 'react';

const HomePage = ({ sections }) => {
  /**
  * @description Homepage Component
  * @returns Homepage component
  * @example <Homepage />
  * @author Adit Garg <adit.garg21k@gmail.com>
  * @todo FOOTER, DYNAMIC MAIN GEN (NOT DEPENDENT ON MAGIC STRING)
  */
  useEffect(()=>{
    (function() { let qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
  },[])
  return (
    <div id="homepage">
      <main>
        {sections}
      </main>
        <aside>
        <a className="twitter-timeline" data-width="300" data-height="600" data-theme="light" href="https://twitter.com/NYMIsojo?ref_src=twsrc%5Etfw">Tweets by NYMIsojo</a>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <hr />
        <div className="typeform-widget" data-url="https://form.typeform.com/to/qcIWut6A?typeform-medium=embed-snippet" data-hide-headers="true" data-hide-footer="true" style={{width: 100+"%", height: 500+"px"}}></div> 



      </aside> 
    </div>
  );
};



export default HomePage;