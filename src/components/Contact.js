// components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS

function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // **1. Form Validation**

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simple email format check
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // **2. Send Email via EmailJS**

    emailjs
      .send(
        'service_rjizytq',      // Replace with your EmailJS service ID
        'template_r1n9a6r',     // Replace with your EmailJS template ID
        formData,
        '41M3Bbo3aIfm44zj-'     // Replace with your EmailJS public key (formerly user ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );
  };

  return (
    <section id="contact" className="bg-charcoal-gray text-off-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-teal mb-4 text-3xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block mb-2 text-lg">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded bg-rich-black text-off-white focus:outline-none focus:ring-2 focus:ring-teal"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-lg">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded bg-rich-black text-off-white focus:outline-none focus:ring-2 focus:ring-teal"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Subject Input */}
          <div>
            <label className="block mb-2 text-lg">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 rounded bg-rich-black text-off-white focus:outline-none focus:ring-2 focus:ring-teal"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          {/* Message Textarea */}
          <div>
            <label className="block mb-2 text-lg">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-3 rounded bg-rich-black text-off-white focus:outline-none focus:ring-2 focus:ring-teal"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal text-rich-black px-6 py-3 rounded font-bold hover:bg-teal-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
 