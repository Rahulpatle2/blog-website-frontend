import { lazy, Suspense, useContext } from 'react'
import BlogContext from '../context/blogContext'
import Blog from '../components/Blog/Blog';
import { motion } from 'motion/react';
const AskQuestions = lazy(() => import('../components/AskQuestions') ) ;
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';



const Home = () => {
  const {data} = useContext(BlogContext);
  const navigate = useNavigate()
  return (
    <div className='w-full lg:px-15 px-2 my-10 overflow-x-hidden'>
      {/* hero section */}
      <div>
        {/* heading */}
        <div className='text-white text-[10vw] lg:leading-[20vh] w-2/3 font-bold'>
          <motion.h1 initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} whileInView={{x:0}} transition={{duration:1}}>Learn web development the practical way</motion.h1>
          <button onClick={() => navigate('/signin')} className='text-lg lg:hidden outline-1 rounded-md px-3 py-1 font-medium hover:outline-0 hover:text-black hover:bg-white cursor-pointer'>SignIn</button>
        </div>

        {/* image */}
        <div className='w-full mt-5 lg:hidden  border-white overflow-hidden'>
          <img loading='lazy' src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg" alt=""  />
        </div>
      </div>

      {/* about section */}
      <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} className='text-white lg:flex lg:flex-col lg:w-full lg:items-baseline-last  mt-10'>
        <p className='text-xl lg:text-4xl font-semibold py-3'>About Us</p>
        <h2 className='text-lg lg:text-3xl lg:w-96 text-gray-300'>Practical learning for real developers</h2>
        <p className='text-gray-100 lg:text-xl lg:w-96'>Learn web development by building real projects, understanding core concepts, and writing clean, usable code. No unnecessary theory—just practical skills you can apply immediately.</p>
      </motion.div>

      {/* cards */}
      <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} className='lg:mt-56 mt-20'>
         <h3 className='text-2xl my-4 text-white'>Blogs To Read</h3>
          {data.length > 0 ? (
        <div className='grid  lg:w-full p-5 lg:p-0 w-full mt-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10'>
          {data.slice(0,4).map((d) => (
            <Blog key={d._id} data={d} />
          ))}
        </div>
      ) : (
        "No Blog Found"
      )}
      </motion.div>

     <div className='pt-10'>
      <Suspense fallback={<Loading/>}>
         <AskQuestions/>
      </Suspense>
     </div>
    </div>
  )
}

export default Home