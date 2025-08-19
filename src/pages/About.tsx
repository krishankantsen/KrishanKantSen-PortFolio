import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Brain, Trophy, Heart } from 'lucide-react';

const About = () => {
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

  const skills = [
    { category: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', icon: Database, items: ['Node.js', 'NestJS', 'GraphQL', 'Express'] },
    { category: 'Cloud & DevOps', icon: Cloud, items: ['AWS', 'Docker', 'Kubernetes', 'Apache Kafka'] },
    { category: 'AI & Agents', icon: Brain, items: ['LangChain', 'RAG Systems', 'Multi-Agent', 'LlamaIndex'] }
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building scalable applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">My Journey</h2>
            <p className="text-slate-600 leading-relaxed">
              I'm a passionate Full Stack Developer with a Master's in Computer Applications from 
              Banaras Hindu University. My journey in technology has been driven by curiosity and 
              a desire to solve complex problems through innovative solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Currently working as a Full Stack Developer at Adaptware Solutions, I specialize in 
              building scalable web applications using modern technologies like React, Node.js, 
              and cloud-native architectures. My experience spans from developing school management 
              systems to creating intelligent agentic platforms.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              My expertise includes working with AI agents, RAG systems, and multi-agent architectures, 
              which I've integrated into production applications to drive automation and intelligent workflows.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Facts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">2+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">8.36</div>
                <div className="text-slate-600">MCA CGPA</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Trophy className="text-teal-600 mx-auto mb-2" size={24} />
                <div className="text-slate-600">Azure Certified</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(({ category, icon: Icon, items }) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-slate-800">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-slate-600 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Beyond Code</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
              <Heart className="text-red-500" size={20} />
              <span className="text-slate-700">Cricket Enthusiast</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
              <Brain className="text-purple-500" size={20} />
              <span className="text-slate-700">AI Research</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;