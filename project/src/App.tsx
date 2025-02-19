import React, { useState } from 'react';
import { Code2, Smartphone, Palette, Layout, ChevronRight, Star, Users, MessageSquare, X, ArrowRight, Database, Cloud, Server, Cpu } from 'lucide-react';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showInquiry, setShowInquiry] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const services = [
    { icon: <Code2 className="w-8 h-8" />, title: 'Web Development', description: 'Custom websites built with modern technologies' },
    { icon: <Smartphone className="w-8 h-8" />, title: 'App Development', description: 'Native and cross-platform mobile applications' },
    { icon: <Palette className="w-8 h-8" />, title: 'UI/UX Design', description: 'User-centered design solutions' },
    { icon: <Layout className="w-8 h-8" />, title: 'WordPress Development', description: 'Custom WordPress themes and plugins' },
  ];

  const techStack = {
    frontend: ['React', 'Vue.js', 'Next.js', 'Nuxt.js'],
    backend: ['Node.js', 'PHP', 'Nest.js'],
    infrastructure: ['AWS', 'Redis', 'Kafka', 'GCC']
  };

  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Lead Frontend Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      expertise: 'React, Vue.js, Next.js'
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Backend Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      expertise: 'Node.js, PHP, AWS'
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      expertise: 'AWS, Kafka, Redis'
    },
    {
      name: 'Emily Parker',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      expertise: 'Figma, Adobe XD'
    }
  ];

  const projects = [
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', title: 'E-Commerce Platform', category: 'Web Development' },
    { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', title: 'Fitness App', category: 'App Development' },
    { image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80', title: 'Dashboard Design', category: 'UI/UX Design' },
    { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', title: 'Social Media Platform', category: 'Web Development' },
    { image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80', title: 'Restaurant App', category: 'App Development' },
    { image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80', title: 'Travel Website', category: 'Web Development' },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-purple-950 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-purple-900/10 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-glow">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Transform Your Digital Presence
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-12 text-purple-200/80">
            We help businesses grow through innovative digital solutions
          </p>
          <button 
            onClick={() => setShowInquiry(true)} 
            className="group bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] flex items-center mx-auto"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-gradient-to-br from-purple-900 to-purple-950 p-8 rounded-2xl shadow-[0_0_50px_rgba(147,51,234,0.3)] max-w-sm mx-4 animate-scale-up">
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
              Special Offer! 🚀
            </h3>
            <p className="text-xl mb-6 text-purple-200">Get your professional website started at just $200</p>
            <button 
              onClick={() => {
                setShowPopup(false);
                setShowInquiry(true);
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all text-lg shadow-lg hover:shadow-purple-500/25"
            >
              Start Now
            </button>
          </div>
        </div>
      )}

      {/* Inquiry Form */}
      {showInquiry && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50" onClick={() => setShowInquiry(false)}></div>
          <div className="relative bg-gradient-to-br from-purple-900 to-purple-950 p-8 rounded-2xl shadow-[0_0_50px_rgba(147,51,234,0.3)] max-w-md mx-4 animate-scale-up w-full">
            <button 
              onClick={() => setShowInquiry(false)} 
              className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
              Let's Discuss Your Project
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-200">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/30 border border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-300/50 text-purple-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-200">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/30 border border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-300/50 text-purple-100"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-200">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg bg-purple-800/30 border border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-purple-100">
                  <option className="bg-purple-900">Web Development</option>
                  <option className="bg-purple-900">App Development</option>
                  <option className="bg-purple-900">UI/UX Design</option>
                  <option className="bg-purple-900">WordPress Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-200">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/30 border border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-300/50 text-purple-100 h-32"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-900/30 transition-all transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] border border-purple-500/10">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-100">{service.title}</h3>
                <p className="text-purple-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            About Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-purple-100">Transforming Ideas into Digital Reality</h3>
              <p className="text-lg text-purple-300 leading-relaxed">
                With over a decade of experience in digital transformation, we've helped countless businesses achieve their online goals. Our team of expert developers and designers works tirelessly to create innovative solutions that drive growth and success.
              </p>
              <p className="text-lg text-purple-300 leading-relaxed">
                We pride ourselves on staying ahead of the technology curve, implementing cutting-edge solutions while maintaining robust and scalable systems that stand the test of time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10">
                <h4 className="text-4xl font-bold text-purple-100 mb-2">10+</h4>
                <p className="text-purple-300">Years Experience</p>
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10">
                <h4 className="text-4xl font-bold text-purple-100 mb-2">200+</h4>
                <p className="text-purple-300">Projects Completed</p>
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10">
                <h4 className="text-4xl font-bold text-purple-100 mb-2">50+</h4>
                <p className="text-purple-300">Team Members</p>
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10">
                <h4 className="text-4xl font-bold text-purple-100 mb-2">15+</h4>
                <p className="text-purple-300">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Our Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-900/30 transition-all transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] border border-purple-500/10">
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-6">
                <Code2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-100">Frontend</h3>
              <div className="space-y-3">
                {techStack.frontend.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="group bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-900/30 transition-all transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] border border-purple-500/10">
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-6">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-100">Backend</h3>
              <div className="space-y-3">
                {techStack.backend.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="group bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-900/30 transition-all transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] border border-purple-500/10">
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-6">
                <Cloud className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-100">Infrastructure</h3>
              <div className="space-y-3">
                {techStack.infrastructure.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl hover:bg-purple-900/30 transition-all transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] border border-purple-500/10 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-100 mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-purple-300 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8 z-20">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-purple-400">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowProjects(true)}
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            >
              See More Projects 
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Modal */}
      {showProjects && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50" onClick={() => setShowProjects(false)}></div>
          <div className="relative bg-gradient-to-br from-purple-900 to-purple-950 p-8 rounded-2xl shadow-[0_0_50px_rgba(147,51,234,0.3)] max-w-6xl mx-4 animate-scale-up w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowProjects(false)} 
              className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
              Our Portfolio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/0 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8 z-20">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-purple-400">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="group bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-900/30 transition-all transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] border border-purple-500/10">
                <div className="flex text-purple-400 group-hover:text-purple-300 transition-colors mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-purple-200 mb-6 text-lg">
                  "Exceptional service and outstanding results. They transformed our vision into reality."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-100" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-100">John Smith</h4>
                    <p className="text-purple-400 text-sm">CEO, Tech Solutions</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="bg-purple-950/50 backdrop-blur-sm py-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
                Your Agency
              </h3>
              <p className="text-purple-300">Transforming businesses through digital excellence</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-100">Services</h4>
              <ul className="space-y-4 text-purple-300">
                <li className="hover:text-purple-200 transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-purple-200 transition-colors cursor-pointer">App Development</li>
                <li className="hover:text-purple-200 transition-colors cursor-pointer">UI/UX Design</li>
                <li className="hover:text-purple-200 transition-colors cursor-pointer">WordPress Development</li>
              </ul>
            </div>
             <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-100">Contact</h4>
              <ul className="space-y-4 text-purple-300">
                <li className="hover:text-purple-200 transition-colors cursor-pointer">contact@youragency.com</li>
                <li className="hover:text-purple-200 transition-colors cursor-pointer">+1 (555) 123-4567</li>
                <li className="hover:text-purple-200 transition-colors cursor-pointer">123 Tech Street</li>
                <li className="hover:text-purple-200 transition-colors cursor-pointer">Silicon Valley, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-100">Connect</h4>
              <div className="flex space-x-6">
                <MessageSquare className="w-6 h-6 text-purple-400 hover:text-purple-200 transition-colors cursor-pointer" />
                <Users className="w-6 h-6 text-purple-400 hover:text-purple-200 transition-colors cursor-pointer" />
                <Code2 className="w-6 h-6 text-purple-400 hover:text-purple-200 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-purple-800/50 text-center text-purple-400">
            <p>&copy; 2024 Your Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;