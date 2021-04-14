/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 */

import Layout from '../components/Layout'
import Image from 'next/image';
function contact() {
  return (


    <Layout>

      <main id="contact-page">
        <section>
          <h1 id="contact-us">Contact Us</h1>
          <p className="p-content">The New York &amp; Michigan Solutions Journalism Collaborative publishes news content with the goal of
            raising awareness about caregiving issues and introducing the community to replicable ideas that have been vetted by a team of
            journalists.
          </p>
          <p className="p-content">If you have story ideas, the collaborative would like to hear from you. Please email Karen Magnuson,
            project director, at karen@solutionsjournalism.org. 
          </p>
          <Image  src="/MagnusonMug2019.JPG" alt="Karen Magnuson" width={194} height={291}></Image>
          <p className="p-content">
            You’re also welcome to comment on our coverage on <a href="https://www.facebook.com/NYMIsojo" target="_blank" tag="nymisojo.com">Facebook</a> and <a href="https://twitter.com/NYMIsojo" target="_blank" tag="nymisojo.com">Twitter</a>.
          </p>
        </section>
        <section>
          <h1 id="community-engagement">Community Engagement</h1>
          <p className="p-content">The New York and Michigan Solutions Journalism Collaborative is dedicated to community outreach 
          and engagement to accurately define problems and uncover responses with the greatest potential to affect positive change. 
          It conducts research primarily through interviews with caregivers, panel discussions with stakeholders and community forums for all.</p>
        </section>
        <section>
          <h1 id="community-forums">Community Forums</h1>
          <Image  src="/dc.jpg" alt="Democrat and chronicle panel" width={291} height={200}></Image>
          <p className="p-content">A community forum titled “Caregiving in Communities of Color” was hosted at the Rochester, N.Y., 
          Democrat and Chronicle in January 2020. It featured a 16-person panel of caregivers and caregiving experts. Executive 
          Editor Michael Kilian wrote a column outlining four primary facts that emerged to help guide our coverage.
          A virtual forum was hosted by the Democrat and Chronicle the following June to explore challenges of caregiving exacerbated 
          by the pandemic.
          “Much has changed in caregiving, of course, as it has in every other walk of life since the coronavirus outbreak began. 
          The panelists gave testimony on the even-higher hurdles raised in the COVID-19 era by isolation, by misinformation, 
          by stress and by lack of access to the Internet and transportation,” Kilian said.
          “And then nearly 75 minutes in, the dots connected. In so many words, the discussion pointed to how the needs of Black 
          and Latino caregivers reflect the racial inequities that have prompted tens of thousands of Americans to take to the streets in protest 
          since the death of George Floyd in Minneapolis on Memorial Day.” Read more about the forum<a href="https://www.democratandchronicle.com/story/news/2020/07/05/d-c-and-solutions-journalism-network-focus-caregiving-rochester/5372768002/?fbclid=IwAR1FlSMxKYdT-VA6mqkgLLgNGAn4HKHNDNBcFaRdfI5SpqdqFaKg81Qysbg" target="_blank" tag="nymisojo.com">here</a>. here.</p>
          
        </section>
        <section>
          <h1 id="coming-up">Coming Up</h1>
          <p className="p-content">We are planning to hold more community forums.  Please watch this space for details.</p>

        </section>

      </main>
    </ Layout>
  )
}

export default contact