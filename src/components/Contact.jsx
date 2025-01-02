import React from 'react'
import { toast } from 'react-toastify';



function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "db53e77b-28b5-4da3-94a8-0c2394f03f15");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.error);
      setResult("");
    }
  };
    return (
      <section id="contact" className="  bg-zinc-900 h-screen text-gray-300">
        <div className="container mx-auto text-center py-16">
          <h2 className="text-5xl font-bold"><span className="text-blue-500 underline underline-offset-4 mr-1">Contact</span>Me </h2>
          <form onSubmit={onSubmit} className="mt-16 bg-zinc-800 text-black max-w-lg mx-auto border rounded-lg  p-6">
            <input
              type="text"
              name='name'
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <input
              type="email"
              name='email'
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <textarea
              placeholder="Your Message...."
              name='message'
              className="w-full p-2  mb-4 border rounded-lg"
              rows="5"
            ></textarea>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
              {result?result: "Send Message"}
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  