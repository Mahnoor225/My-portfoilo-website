"use client";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Formspree endpoint
    const res = await fetch("https://formspree.io/f/xjkawezy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully! ✅");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" }); // 🔄 Reset
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section className="bg-[#1F1F24] text-gray-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left Side - Form */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-lime-400 mb-8">Let’s connect</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-4 rounded-md bg-[#272730] border border-gray-700 text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-4 rounded-md bg-[#272730] border border-gray-700 text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            {/* Email & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-4 rounded-md bg-[#272730] border border-gray-700 text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-4 rounded-md bg-[#272730] border border-gray-700 text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              required
              className="w-full p-4 rounded-md bg-[#272730] border border-gray-700 text-gray-300 
              focus:outline-none focus:ring-2 focus:ring-lime-400"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center gap-2 text-white font-semibold hover:text-lime-400 transition"
            >
              Send Message <span>↗</span>
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-6 mt-3 lg:mt-18">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="p-3 lg:p-4 bg-[#272730] rounded-lg border border-[#3B413D] text-[#A8FF53] text-xl">
              <FaPhone />
            </div>
            <div>
              <p className="text-gray-400">Phone Number</p>
              <p className="font-medium text-sm">+92-3704915368</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="p-3 lg:p-4 bg-[#272730] text-[#A8FF53] rounded-lg border border-[#3B413D] text-xl">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <p className="font-medium text-sm">softwareengineer718@gmail.com</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <div className="p-3 lg:p-4 bg-[#272730] text-[#A8FF53] rounded-lg border border-[#3B413D] text-xl">
              <FaLinkedin />
            </div>
            <a href="https://www.linkedin.com/in/mahnoor-mehboob-18120b2b2/" target="_blank" rel="noopener noreferrer">
             <div>
              <p className="text-gray-400">LinkedIn</p>
               <p className="font-medium text-sm">linkedin.com</p>
            </div>
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="p-3 lg:p-4 bg-[#272730] text-[#A8FF53] border border-[#3B413D] rounded-lg text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-gray-400">Address</p>
              <p className="font-medium text-sm"> Shahbad Colony,Ferozepur Road, Lahore</p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
