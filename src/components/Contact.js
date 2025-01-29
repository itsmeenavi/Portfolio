import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import contactImage from '../assets/contact-me.png';

// Reusable Input Component
const InputField = ({
  type,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  focused,
  error,
  label,
  isTextArea = false,
}) => {
  const inputClasses = `
    w-full p-4 rounded-lg bg-rich-black text-off-white
    border-2 transition-all duration-300
    ${focused ? 'border-teal' : 'border-transparent'}
    ${error ? 'border-red-500' : ''}
    focus:outline-none focus:ring-2 focus:ring-teal
  `;

  return (
    <div className="relative mb-6">
      <label
        className={`absolute left-4 transition-all duration-300 ${
          focused || value
            ? '-top-3 text-sm text-teal bg-rich-black px-2'
            : 'top-4 text-gray-400'
        }`}
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          name={name}
          rows="5"
          className={inputClasses}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={inputClasses}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Validation logic
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.trim().length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) error = 'Please enter a valid email';
        break;
      case 'subject':
        if (value.trim().length < 3) error = 'Subject must be at least 3 characters';
        break;
      case 'message':
        if (value.trim().length < 10) error = 'Message must be at least 10 characters';
        break;
      default:
        break;
    }
    return error;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If the user has already submitted once, we validate onChange for *only this field*
    if (hasSubmitted) {
      const error = validateField(name, value);
      setErrors((prevErrors) => {
        if (error) {
          return { ...prevErrors, [name]: error };
        } else {
          // remove the error for this field if it’s now valid
          const { [name]: _, ...rest } = prevErrors;
          return rest;
        }
      });
    }
  };

  // Manage floating label focus
  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };
  const handleBlur = (field) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  // Validate all fields on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Let the code know user has attempted submission
    setHasSubmitted(true);

    // Validate all fields at once
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed to send
    setStatus('loading');
    try {
      await emailjs.send(
        'service_0nvh3h4',
        'template_r1n9a6r',
        {
          to_name: 'My Name',
          from_name: formData.name,
          message: formData.message,
          reply_to: formData.email,
          subject: formData.subject,
        },
        '41M3Bbo3aIfm44zj-'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-charcoal-gray to-rich-black text-off-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image with Animation */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={contactImage}
                alt="Contact Me"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                focused={focused.name}
                error={errors.name}
                label="Name"
              />

              <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                focused={focused.email}
                error={errors.email}
                label="Email"
              />

              <InputField
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                focused={focused.subject}
                error={errors.subject}
                label="Subject"
              />

              <InputField
                isTextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                focused={focused.message}
                error={errors.message}
                label="Message"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`
                  w-full p-4 rounded-lg font-bold text-lg
                  transition-all duration-300
                  flex items-center justify-center gap-2
                  ${
                    status === 'loading'
                      ? 'bg-gray-500 cursor-wait'
                      : 'bg-teal hover:bg-teal-dark'
                  }
                `}
              >
                {status === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
                {status === 'success' && <CheckCircle className="w-5 h-5" />}
                {status === 'error' && <AlertCircle className="w-5 h-5" />}

                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Error Sending'
                  : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
