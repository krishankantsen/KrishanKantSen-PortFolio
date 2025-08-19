import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, Database, Cloud, Brain } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Refro: Referral Portal',
      description: 'A comprehensive job referral platform connecting job seekers with recruiters through an intuitive interface.',
      longDescription: 'Built a full-stack job referral platform using Next.js, GraphQL, and Prisma ORM, enabling seamless interaction between job seekers and recruiters. The platform features user authentication, job posting, referral tracking, and real-time notifications.',
      technologies: ['Next.js', 'GraphQL', 'Prisma ORM', 'Docker', 'Kubernetes'],
      icon: Code,
      color: 'from-blue-500 to-cyan-600',
      date: 'August 2023',
      status: 'Live',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'User authentication and role-based access',
        'Job posting and referral system',
        'Real-time notifications',
        'Scalable containerized deployment'
      ]
    },
    {
      title: 'Agentic Intelligence Platform',
      description: 'An advanced AI platform featuring RAG systems, multi-agent architectures, and tool-calling agents.',
      longDescription: 'Developed an intelligent platform with RAG (Retrieval-Augmented Generation) systems, multi-agent architectures, and tool-calling agents using LangChain, SmolAgent, and LlamaIndex. The platform enables real-time automation and decision-making through orchestrated agent workflows.',
      technologies: ['LangChain', 'SmolAgent', 'LlamaIndex', 'Python', 'FastAPI'],
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      date: 'November 2024',
      status: 'Development',
     
      features: [
        'RAG-based question answering',
        'Multi-agent orchestration',
        'Tool-calling capabilities',
        'Real-time automation workflows'
      ]
    },
    {
      title: 'School Management System',
      description: 'A modular school management system covering attendance, transport, staff, and fee workflows.',
      longDescription: 'Developed a comprehensive modular school management system using NestJS, GraphQL, and PostgreSQL with Prisma ORM. The system covers attendance tracking, transport management, staff administration, and fee collection workflows with role-based access control.',
      technologies: ['NestJS', 'GraphQL', 'PostgreSQL', 'Prisma', 'React', 'MUI'],
      icon: Database,
      color: 'from-green-500 to-teal-600',
      date: 'April 2025',
      status: 'In Production',
     
      features: [
        'Attendance tracking system',
        'Transport management',
        'Staff administration',
        'Fee collection workflows',
        'Role-based access control'
      ]
    },
    {
      title: 'Cloud-Native Data Pipeline',
      description: 'Scalable data processing pipeline using Apache Kafka, Spark, and AWS services.',
      longDescription: 'Built a scalable backend service and real-time data pipeline using Apache Kafka for message streaming, Apache Spark for data processing, and optimized data storage across multiple databases including PostgreSQL, DynamoDB, and Amazon S3.',
      technologies: ['Apache Kafka', 'Apache Spark', 'AWS', 'PostgreSQL', 'DynamoDB'],
      icon: Cloud,
      color: 'from-orange-500 to-red-600',
      date: 'March 2024',
      status: 'Live',
      
      features: [
        'Real-time message streaming',
        'Distributed data processing',
        'Multi-database optimization',
        'Cloud-native architecture',
        'Scalable microservices'
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">My Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} mr-4`}>
                      <project.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                      <div className="flex items-center text-slate-500 text-sm mt-1">
                        <Calendar size={14} className="mr-1" />
                        {project.date} • {project.status}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.liveUrl &&                    <motion.a
                      href={project.liveUrl}
                      className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="mr-2" size={18} />
                      View Live
                    </motion.a>}
                    {project.githubUrl &&<motion.a
                      href={project.githubUrl}
                      className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="mr-2" size={18} />
                      Code
                    </motion.a>}
                  </div>
                </div>

                {/* Project Visual */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 lg:p-12 flex items-center justify-center">
                  <div className={`w-full h-64 bg-gradient-to-r ${project.color} rounded-xl shadow-2xl flex items-center justify-center`}>
                    <project.icon className="text-white" size={80} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Interested in Working Together?</h2>
          <p className="text-slate-600 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;