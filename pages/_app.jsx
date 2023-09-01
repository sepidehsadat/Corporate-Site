import { useRouter } from 'next/router'
import '../styles/globals.css'
import { motion,AnimatePresence } from 'framer-motion'
import CustomCoursor from '../src/components/common/customCursor/customCoursor';
import Header from '../src/components/Header';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <AnimatePresence>
          <CustomCoursor/>
          <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration:0.8
          }}
          variants={{
            initialState: {
              opacity:0,
              clipPath: "polygon(0 0,100% 0, 100% 100%,0% 100%)"
            },
            animateState: {
              opacity:1,
              clipPath: "polygon(0 0,100% 0, 100% 100%,0% 100%)"              
            },
            exitState: {
              clipPath: "polygon(50% 0,50% 0, 50% 100%,50% 100%)"
            }
          }}  
          
          >
            <Header />
            <Component {...pageProps} />              
          </motion.div> 
          
          </AnimatePresence>
}
export default MyApp
