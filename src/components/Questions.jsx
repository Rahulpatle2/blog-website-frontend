import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { motion } from 'motion/react'


const Questions = ({ ques, ans }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="  border-gray-200 border-2  rounded-xl bg-black   px-2 py-3">
      <div className="flex items-center gap-5 justify-between">
        <p>{ques}</p>
        <div onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-arrow-down"></i>)}
        </div>
      </div>
      <AnimatePresence>

        {isVisible && (<motion.div initial={{y:-50}} animate={{y:0}} transition={{duration:0.5}} className=" bg-black w-full py-4 px-2">{ans}</motion.div>)}
      </AnimatePresence>



    </div>
  )
}

export default Questions