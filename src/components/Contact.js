// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import contactImage from '../assets/contact-me.png'; // Import the image

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

    emailjs.send(
      'service_0nvh3h4',
      'template_r1n9a6r',
      {
        to_name: 'My Name',        // or any recipient name you want
        from_name: formData.name,  // matches {{from_name}} in template
        message: formData.message, // matches {{message}} in template
        reply_to: formData.email,  // if you want a reply-to field
        subject: formData.subject, // if your template uses {{subject}}
      },
      '41M3Bbo3aIfm44zj-'
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
      <div className="max-w-6xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Left Side - Image */}
          <div className="lg:col-span-3 flex justify-center items-center">
            <img src={contactImage} alt="Contact Me" className="w-full h-auto" />
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Title */}
            <h2 className="text-teal mb-6 text-4xl font-bold">Contact Me</h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block mb-2 text-lg">
                  Name
                </label>
                <input
                  id="name"
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
                <label htmlFor="email" className="block mb-2 text-lg">
                  Email Address
                </label>
                <input
                  id="email"
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
                <label htmlFor="subject" className="block mb-2 text-lg">
                  Subject
                </label>
                <input
                  id="subject"
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
                <label htmlFor="message" className="block mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 rounded bg-rich-black text-off-white focus:outline-none focus:ring-2 focus:ring-teal resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal text-rich-black px-6 py-3 rounded font-bold hover:bg-teal-dark transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
