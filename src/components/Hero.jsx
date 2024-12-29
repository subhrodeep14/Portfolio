import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="h-screen bg-zinc-900 text-gray-300  ">
      <div className="flex justify-center items-center align-middle mt-40">
        <div>
          <h1 className="text-6xl font-bold">Hi, I'm <span className="text-blue-500 font-extrabold text-8xl">Subhrodeep</span> </h1>
          <p className="text-lg mt-4 text-zinc-400">I develop open-source full-stack apps/tools and take on <span className="font-bold underline underline-offset-4"> freelance projects.</span></p>
          <Link to='/contact' className="mt-6 inline-block bg-gray-200 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-white">
            Contact Me
          </Link>
          <button class="px-10 py-3 ml-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Download CV
          </button>


        </div>

      </div>
    </div>
  );
}

export default Hero;
