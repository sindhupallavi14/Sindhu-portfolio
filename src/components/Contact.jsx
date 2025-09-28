import React,{useState} from "react";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";



export default function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5200/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Thanks for reaching out! I got your message.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };


  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-40  text-white"
    >
      {/* Left Side */}
      <div className="flex-1 text-left space-y-6 md:space-y-8 mb-10 md:mb-0">
         <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Let’s Catch Up!
        </h1>
       
        <p className="italic text-gray-300 max-w-lg">
          I’d love to connect with you! Whether you have a project in mind, a
          question to ask, or just want to say hi, feel free to reach out using
          the details below or by filling out the form.
        </p>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-pink-400" />
            <a
            href="mailto:sindhuramanadula14@example.com"
            className="hover:text-pink-400 transition-colors"
            aria-label="Email"
          >sindhuramanadula14@gmail.com</a>
           
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-pink-400" />
            <span className="text-gray-300">+91 7382598021</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 pt-4">
          <a
            href="https://www.linkedin.com/in/sindhu-pallavi-ramanadula-0b630925a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/sindhupallavi14"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/_ur_pallavi_/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Instagram />
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 w-full max-w-md">
        <form className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 rounded-lg font-semibold text-white transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
