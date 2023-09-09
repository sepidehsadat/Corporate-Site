import { useRouter } from 'next/router'
import '../styles/globals.css'
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header';


function MyApp({ Component, pageProps })
{
  const router = useRouter();
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
