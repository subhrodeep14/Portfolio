import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="min-h-screen bg-zinc-900 text-yellow-50  ">
      <Navbar />
      <div className="flex justify-center items-center align-middle mt-40">
        <div>
          <h1 className="text-7xl font-bold">Hi, I'm <span className="text-blue-500">Subhrodeep</span> </h1>
          <p className="text-lg mt-4">I develop open-source full-stack apps/tools and occasionally take on freelance projects.</p>
          <a href="#contact" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Contact Me
          </a>
          <button class="px-10 py-3 ml-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            MY CV
          </button>


        </div>

      </div>
    </div>
  );
}

export default Hero;
