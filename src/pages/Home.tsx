import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Home = () => {
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
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-teal-600 font-medium text-lg mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                Krishan Kant Sen
              </h1>
              <div className="text-2xl md:text-3xl text-slate-600 mb-4">
                <AnimatedText text="Full Stack Developer" />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              Passionate Full Stack Developer with expertise in modern web technologies, 
              specializing in React, Node.js, and cloud-native applications. I build scalable, 
              user-centric solutions that drive business growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all duration-200"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              <a
                href="https://github.com/krishankantsen"
                className="text-slate-600 hover:text-teal-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/krishankantsen"
                className="text-slate-600 hover:text-teal-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:krishankantsen.bhumca22@gmail.com"
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Hero Image/Animation */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">👨‍💻</div>
                  <p className="text-xl font-medium">Crafting Digital Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Info Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
            <MapPin className="text-teal-600" size={20} />
            <span className="text-slate-700">Dinara, Shivpuri, M.P.</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
            <Phone className="text-teal-600" size={20} />
            <span className="text-slate-700">8878724328</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
            <Mail className="text-teal-600" size={20} />
            <span className="text-slate-700">krishankantsen.bhumca22@gmail.com</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;