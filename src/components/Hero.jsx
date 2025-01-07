
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="h-screen  text-gray-300  ">
      <motion.div 
      initial={{opacity:0,y: -100}}
      whileInView={{opacity:1,y: 0}}
  
      transition={{duration: 1.5}}
      viewport={{once: true}}
      
      
      className="flex justify-center items-center align-middle mt-52">
        <div>
          <h1 className="text-6xl font-bold">Hi, I'm <span className="text-blue-500 font-extrabold text-8xl">Subhrodeep</span> </h1>
          <p className="text-lg mt-4 text-zinc-400">I develop open-source full-stack apps/tools and take on <span className="font-bold underline underline-offset-4"> freelance projects.</span><br />
          I’m a passionate<span className="font-bold underline underline-offset-4">  pre-final year undergrad</span> with a deep love for coding and technology. </p>
      
          <a href='#contact' className="mt-6 inline-block bg-gray-100 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
            Contact Me
          </a>
          <button class="px-10 py-3 ml-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Download CV
          </button>


        </div>
        <div className="ml-20 w-1/6 rounded-full overflow-hidden object-contain shadow-lg shadow-blue-400">
          <img src={assets.profile} alt="" />
        </div>

      </motion.div>
    </div>
  );
}

export default Hero;
