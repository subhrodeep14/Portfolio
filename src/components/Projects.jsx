import Cards from "./CardForProject";
import { assets } from "../assets/assets.js";


const project1 = ['React', 'R', 'Node.js', 'Express'];
const project2 = ['React', 'R', 'Node.js','mongoDB'];

function Projects() {


  return (
    <div id="projects" className="py-16 min-h-screen bg-zinc-900 text-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold pt-5 ">My <span className="text-blue-500 underline underline-offset-4">Projects</span> </h2>
        <div className="flex justify-center mt-14 flex-wrap gap-8 pt-5">
            <Cards image={assets.real} description={'A real estate website that helps you find the best property for you'} techs={project1} text={'Real Estate'} pageLink={"https://real-estate-nine-blush.vercel.app/"} gitLink={'https://github.com/subhrodeep14/Real-Estate'}/>
            <Cards image={assets.real}techs={project2} description={'A real estate website that helps you find the best property for you'}  text={'Real Estate 2'} pageLink={"https://real-estate-nine-blush.vercel.app/"} gitLink={'https://github.com/subhrodeep14/Real-Estate'}/>
            <Cards image={assets.real}techs={project1} description={'A real estate website that helps you find the best property for you'} text={'Real estate 3'} pageLink={"https://real-estate-nine-blush.vercel.app/"} gitLink={'https://github.com/subhrodeep14/Real-Estate'}/>
        </div>

      </div>


    </div>
  );
}

export default Projects;
