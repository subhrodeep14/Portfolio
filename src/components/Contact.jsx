function Contact() {
    return (
      <section id="contact" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <form className="mt-8 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 mb-4 border rounded-lg"
              rows="5"
            ></textarea>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  