import Navbar from "./Navbar";

function Hero() {
    return (
      <div className="min-h-screen bg-zinc-800 text-yellow-50  ">
        <Navbar/>
        <h1 className="text-4xl font-bold">Hi, I'm Subhrodeep</h1>
        <p className="text-lg mt-4">Full-Stack Developer | React | Tailwind CSS</p>
        <a href="#contact" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Contact Me
        </a>
  

      </div>
    );
  }
  
  export default Hero;
  