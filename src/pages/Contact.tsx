import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // You can add actual form submission logic here
    alert('Message sent successfully!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'krishankantsen.bhumca22@gmail.com',
      link: 'mailto:krishankantsen.bhumca22@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8878724328',
      link: 'tel:+918878724328'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dinara, Shivpuri, M.P. 473665',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/krishankantsen',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/krishankantsen',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      name: 'Portfolio',
      url: '#',
      color: 'hover:text-teal-600'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h2>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              I'm currently working as a Full Stack Developer and I'm always open to 
              discussing new opportunities, freelance projects, or just having a chat 
              about technology and development.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, title, value, link }) => (
                <motion.a
                  key={title}
                  href={link}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-teal-100 rounded-lg mr-4">
                    <Icon className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{title}</h3>
                    <p className="text-slate-600">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Find Me Online</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, name, url, color }) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg shadow-md text-slate-600 ${color} transition-all duration-200`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-xl'
                  } text-white`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss your ideas and bring them to life with modern, scalable solutions.
          </p>
          <motion.a
            href="mailto:krishankantsen.bhumca22@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="mr-2" size={20} />
            Email Me Directly
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;