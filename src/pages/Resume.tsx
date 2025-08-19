import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Code, Download } from 'lucide-react';

const Resume = () => {
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

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Adaptware Solutions',
      period: 'April 2025 – Present',
      location: 'Remote',
      achievements: [
        'Developed modular school management system using NestJS, GraphQL, and PostgreSQL with Prisma ORM',
        'Built responsive, accessible UIs with React, MUI, and Zod with dynamic form workflows',
        'Contributed to scalable monorepo architecture with Nx and implemented auth systems',
        'Optimized data-heavy GraphQL queries and ensured code quality via unit/integration testing'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Xenonstack',
      period: 'Feb 2024 – Mar 2025',
      location: 'Remote',
      achievements: [
        'Progressed from trainee to full-time engineer delivering client-facing full-stack applications',
        'Engineered advanced agentic systems with RAG, multi-agent architectures using LangChain, SmolAgent',
        'Built scalable backend services and real-time data pipelines with Apache Kafka, Apache Spark',
        'Developed cloud-native applications using Docker, Kubernetes, and AWS services'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Banaras Hindu University, Varanasi',
      period: 'Nov. 2022 – July 2024',
      grade: 'CGPA: 8.36/10.0'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Jiwaji University, Gwalior',
      period: 'Sep. 2018 – July 2021',
      grade: 'Percentage: 71.60%'
    }
  ];

  const skills = {
    'Languages': ['JavaScript', 'TypeScript', 'HTML/CSS', 'Go'],
    'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'MUI'],
    'Backend': ['Node.js', 'Express', 'NestJS', 'GraphQL'],
    'Databases': ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Prisma ORM'],
    'Cloud & DevOps': ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes'],
    'AI & Data': ['LangChain', 'RAG Systems', 'Apache Kafka', 'Apache Spark']
  };

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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Resume</h1>
          <p className="text-xl text-slate-600 mb-8">My professional journey and qualifications</p>
          <motion.a
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" size={20} />
            Download PDF
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center mb-8">
                <Briefcase className="text-teal-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-slate-800">Work Experience</h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                        <p className="text-teal-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-slate-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center mb-8">
                <GraduationCap className="text-teal-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-slate-800">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{edu.degree}</h3>
                    <p className="text-teal-600 font-medium mb-2">{edu.institution}</p>
                    <div className="flex justify-between text-slate-600 text-sm">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="font-medium">{edu.grade}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Code className="text-teal-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-slate-800">Skills</h2>
              </div>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div
                    key={category}
                    className="bg-white p-4 rounded-lg shadow-md"
                    variants={itemVariants}
                  >
                    <h3 className="font-semibold text-slate-800 mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Award className="text-teal-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-slate-800">Certifications</h2>
              </div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-slate-800 mb-1">Azure Data Engineer Associate</h3>
                <p className="text-teal-600 text-sm">Microsoft Azure</p>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;