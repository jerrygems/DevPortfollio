import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="h-1 bg-green-500 mb-8"></div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Message Me</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="mb-6">
              Always available for freelance work if the right project comes
              along. Feel free to contact me!
            </p>
            <div className="flex items-center mb-4">
              <i className="fas fa-user text-green-500 mr-2"></i>
              <span>Sahil Singh</span>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-map-marker-alt text-green-500 mr-2"></i>
              <span>Jaipur (RAJ), INDIA.</span>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-phone text-green-500 mr-2"></i>
              <span>+91 9413558876</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-green-500 mr-2"></i>
              <span>sinnucompact@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
