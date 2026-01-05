import Questions from './Questions'
import { motion } from 'motion/react'

const AskQuestions = () => {
  return (
   <div className="flex flex-col w-full gap-10 lg:flex-row relative lg:py-48  text-white ">
        <div className="w-full h-full absolute top-0 right-0 bg-black -z-30">

        </div>
        <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:0.5}} className="lg:w-1/2 flex flex-col gap-4">
            <span className="text-sm text-gray-500">FAQ</span>
            <h2 className="text-3xl font-semibold">Frequently Asked <br /><span className="text-gray-500">Questions</span></h2>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim excepturi saepe nihil?</p>
        </motion.div>

        <motion.div initial={{x:100}} whileInView={{x:0}} transition={{duration:0.5}} className="lg:w-1/2 relative  ">
            <Questions ques={"1. Who is this platform for?"} ans={"This platform is for beginners, students, and anyone who wants to learn web development in a practical and simple way. No prior experience is required."}/>
            <Questions ques={"2. Do I need any programming knowledge to start?"} ans={"No. We start from the basics and explain everything step by step, so beginners can easily follow along."}/>
            <Questions ques={"3. What will I learn here?"} ans={"You will learn HTML, CSS, JavaScript, React, and other modern web development tools through real-world projects and examples."}/>
            <Questions ques={"4. Is this learning practical or theoretical?"} ans={"Our approach is 100% practical. You will build projects while learning, not just watch theory."}/>
           <Questions ques={" 5.Is there any refund policy?"} ans={"Yes. We offer a refund within a specific period if you are not satisfied. Please check our refund policy page for details."}/>
            <div className="absolute w-full h-full bg-gray-200 rounded-xl top-0 right-0 -z-10">

            </div>
        </motion.div>
    </div>
  )
}

export default AskQuestions