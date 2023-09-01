import React ,{ useState } from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'

// import css module
import Style from './review.module.css'

// import components
import Comment from './Comment'


const Review = () => {

  const [modal,setModal] = useState(false);


  return (
      <motion.div 
      initial={{
        opacity:0 ,
        y:100
      }}
      whileInView={{
        opacity:1 ,
        y:0
      }}
      transition={{
        duration:1.3,
      }}
      viewport={{once:true}}
      className={Style.container} >
        <h3 style={{float:"right"}} >نظرات</h3>
    <div className={Style.review} >
      <motion.button
      whileHover={{scale:1.03}}
      className={Style.btn}
      onClick={() => setModal(true)}
      >نظر شما +</motion.button>
      <Modal
      style={{
        overlay:{
          backgroundColor:'rgba(0,0,0,0.3)'
        },
        content:{
          top:'120px',
          left:'20%',
          display:'flex',
          justifyContent:'space-between',
          width:'850px',
          height:'400px'
        }
      }} 
      className={Style.modal} isOpen={modal} onRequestClose={() => setModal(false)} >
        <div><button
        onClick={() => setModal(false)}
        >close</button></div>
        <h3>slm</h3>
        <p>modal body</p>
      </Modal>
      <div className={Style.Comments}>
      <Comment username={"عزیزمحمدی"} section={"دانشجو"} />
      <Comment username={"حامد نظری"} section={"استاد"}/>
      <Comment username={"علیرضا احمدی"} section={"دانشجو"}/>        
      </div>
    </div>
    </motion.div>
  )
}

export default Review