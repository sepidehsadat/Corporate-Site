import { useRouter } from 'next/router'
import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import CustomCoursor from '../src/components/common/customCursor/customCoursor';
import Footer from '../src/components/Footer/Footer';


function MyApp({ Component, pageProps })
{
  const router = useRouter();
  return (
    <>
      < Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
