import CardForSkills from "./CardForSkills";
import {icon} from "../icons/icon"
function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS','Express.js','MongoDb','Postgres','Prisma','Next.js'];
  
    return (
      <section id="skills" className="h-screen bg-zinc-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold pt-5 ">My <span className="text-blue-500 underline underline-offset-4">Skills</span> </h2>
          <p className="font-semibold text-zinc-500 mb-10 mt-5">Crafting full stack web apps using M.E.R.N stack</p>
          <div className="mt-3 flex flex-wrap justify-center gap-10 ">
            <div className="flex flex-wrap justify-center gap-7 ">
            <CardForSkills text="Html" image={icon.html}/>
            <CardForSkills text="Css" image={icon.css}/>
            <CardForSkills text="Javascript" image={icon.javascript}/>
            <CardForSkills text="Nodejs" image={icon.nodejs}/>
            <CardForSkills text="Express" image={icon.express}/>
            <CardForSkills text="Mongodb" image={icon.mongodb}/>

            </div>
            <div className="flex flex-wrap justify-center gap-7">
            
            <CardForSkills text="React" image={icon.react}/>
            <CardForSkills text="Tailwind" image={icon.tailwind}/>
            <CardForSkills text="Postgresql" image={icon.postgresql}/>
            <CardForSkills text="Prisma" image={icon.prisma}/>
            <CardForSkills text="Nextjs" image={icon.nextjs}/>
            <CardForSkills text="Postman" image={icon.postman}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  