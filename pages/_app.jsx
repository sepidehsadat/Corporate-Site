import { useRouter } from 'next/router'
import '../styles/globals.css'
import Footer from '../src/components/Footer/Footer';


function MyApp({ Component, pageProps })
{
  const router = useRouter();
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
