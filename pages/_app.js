import '../styles/globals.scss';
import Footer from '../components/Footer'
import HeaderNav from '../components/HeaderNav'

function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <div id="app">
    <HeaderNav/>
    <Component {...pageProps} /> 
    </div>
    
    <div id="footer-clear" />
    <Footer />
    </>
  )
}

export default MyApp
