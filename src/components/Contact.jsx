function Contact() {
    return (
      <section id="contact" className="  bg-zinc-900 h-screen text-gray-300">
        <div className="container mx-auto text-center py-16">
          <h2 className="text-5xl font-bold"><span className="text-blue-500 underline underline-offset-4 mr-1">Contact</span>Me </h2>
          <form className="mt-16 bg-zinc-800 text-black max-w-lg mx-auto border rounded-lg  p-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <textarea
              placeholder="Your Message...."
              className="w-full p-2  mb-4 border rounded-lg"
              rows="5"
            ></textarea>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  