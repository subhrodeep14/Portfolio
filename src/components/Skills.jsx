import CardForSkills from "./CardForSkills";
import {icon} from "../icons/icon"
import {motion} from "framer-motion"
function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS','Express.js','MongoDb','Postgres','Prisma','Next.js'];
  
    return (
      <section id="skills" className="h-screen bg-zinc-900 text-white">
        <div className="container mx-auto text-center">
          <div className=" w-1/3 mx-auto">
          <h2 className="text-5xl font-bold  ">My <span className="text-blue-500 underline underline-offset-4">Skills</span> </h2>
          <p className="font-semibold text-zinc-500 mb-10 mt-5">Crafting full stack web apps using M.E.R.N stack</p>
          </div>
          <div
          
          className="mt-3 flex flex-wrap  justify-center gap-10 ">
            <motion.div
             initial={{opacity:0,x: -100}}
             whileInView={{opacity:1,x: 0}}
         
             transition={{duration: 1.5}}
             viewport={{once: true}} className="flex flex-wrap justify-center  gap-7 h-56 ">
            <CardForSkills text="Html" image={icon.html}/>
            <CardForSkills text="Css" image={icon.css}/>
            <CardForSkills text="Javascript" image={icon.javascript}/>
            <CardForSkills text="Nodejs" image={icon.nodejs}/>
            <CardForSkills text="Express" image={icon.express}/>
            <CardForSkills text="Mongodb" image={icon.mongodb}/>

            </motion.div>
            <motion.div 
             initial={{opacity:0,x: 100}}
             whileInView={{opacity:1,x: 0}}
         
             transition={{duration: 1.5}}
             viewport={{once: true}} className="flex flex-wrap justify-center gap-7 h-56 ">
            
            <CardForSkills text="React" image={icon.react}/>
            <CardForSkills text="Tailwind" image={icon.tailwind}/>
            <CardForSkills text="Postgresql" image={icon.postgresql}/>
            <CardForSkills text="Prisma" image={icon.prisma}/>
            <CardForSkills text="Nextjs" image={icon.nextjs}/>
            <CardForSkills text="Postman" image={icon.postman}/>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  