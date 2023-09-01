import React from 'react'
import { motion } from 'framer-motion'

// import css module
import Style from './tozihat.module.css'

const Tozihat = () => {
return (
    <motion.div 
    initial={{
        opacity:0 ,
        y:60
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
        <div className={Style.title} >
            :<h3>توضیحات</h3>            
        </div>
        <div className={Style.tozihat}><p>نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و 
چندسکویی برای زبان جاوااسکریپت است.نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) 
یک محیط اجراییِ سمت سرورِ متن‌باز و چندسکویی برای زبان جاوااسکریپت است.نود جی‌اس یا 
نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و چندسکویی برای 
زبان جاوااسکریپت است.
نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و 
چندسکویی برای زبان جاوااسکریپت است.نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) 
یک محیط اجراییِ سمت سرورِ متن‌باز و چندسکویی برای زبان جاوااسکریپت است.
نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و 
چندسکویی برای زبان جاوااسکریپت است.نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و 
چندسکویی برای زبان جاوااسکریپت است.</p></div>
    </motion.div>
)
}

export default Tozihat