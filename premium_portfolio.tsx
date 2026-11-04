import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Download, Code, Brain, Zap, Github, Linkedin, 
  Mail, Phone, ExternalLink, ChevronRight, Terminal, Database, 
  LineChart, Server, GraduationCap, MapPin
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Scroll for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090D] text-[#A1A1AA] font-sans selection:bg-[#438BFF]/30 selection:text-white">
      {/* Global CSS for Smooth Scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        .glass-card {
          background: rgba(17, 19, 26, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glowing-text {
          background: linear-gradient(to right, #438BFF, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}} />

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#08090D]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#438BFF] to-[#8B5CF6] flex items-center justify-center text-sm">FA</div>
            FAHAD ABDULLAH
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <a href="#cv" className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(67,139,255,0.3)]">
              <Download size={16} /> CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#11131A] border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
            <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} />
            <a href="#cv" className="px-5 py-3 rounded bg-gradient-to-r from-[#438BFF] to-[#8B5CF6] text-white text-center flex items-center justify-center gap-2">
              <Download size={18} /> Download CV
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#438BFF]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#8B5CF6]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <p className="text-[#438BFF] font-medium tracking-widest uppercase mb-4 text-sm md:text-base">Hello, World! I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight">
            FAHAD <span className="glowing-text">ABDULLAH</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium mb-8">
            Aspiring Data Scientist | C++ Programmer | Software Developer
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
            "Transforming Ideas into Code, Data into Insights, and Curiosity into Innovation."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#438BFF] to-[#8B5CF6] text-white font-medium hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2">
              Explore My Projects <ChevronRight size={18} />
            </a>
            <a href="#cv" className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Download size={18} /> Download My CV
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-24 bg-[#11131A]/50 relative">
        <div className="container mx-auto px-6">
          <SectionHeader title="Beyond the Code" subtitle="About Me" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass-card p-8 rounded-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#438BFF]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <p className="text-lg leading-relaxed text-gray-300 mb-6 relative z-10">
                I am Fahad Abdullah, a technology enthusiast with an academic background in Pre-Engineering and a growing interest in Data Science and software development. My academic journey has helped me develop strong foundations in mathematics, physics, logical reasoning, and analytical thinking.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 relative z-10">
                Currently pursuing Data Science studies at Posiast, I enjoy programming in C++, building software projects, and applying object-oriented programming concepts to practical applications. Outside of technology, I enjoy traveling, photography, hiking, football, and cricket.
              </p>
            </div>

            <div className="grid gap-6">
              <AboutCard icon={<Brain className="text-[#438BFF]" />} title="Analytical Thinker" desc="Strong foundations in mathematics and logical reasoning to solve complex problems." />
              <AboutCard icon={<Zap className="text-[#8B5CF6]" />} title="Technology Enthusiast" desc="Passionate about software, game development, and the latest tech trends." />
              <AboutCard icon={<Code className="text-[#438BFF]" />} title="Continuous Learner" desc="Always exploring new methodologies, algorithms, and technical concepts." />
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section id="education" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader title="Academic Journey" subtitle="Education" center />
          
          <div className="relative border-l-2 border-[#438BFF]/30 ml-3 md:ml-0 md:pl-0 mt-12 space-y-12">
            <TimelineItem 
              active
              date="Currently Studying" 
              title="Data Science" 
              institution="Posiast"
              desc="Currently developing knowledge and skills in Data Science, programming, analytical thinking, and data-driven problem-solving."
            />
            <TimelineItem 
              date="2022–2023" 
              title="HSSC Pre-Engineering" 
              institution="BISE Abbottabad, Pakistan"
              grade="Grade: A1 (80%)"
              desc="Developed strong foundations in mathematics, physics, and logical reasoning. Marks: 883 / 1100."
            />
            <TimelineItem 
              date="2020–2021" 
              title="SSC Matriculation" 
              institution="BISE Abbottabad, Pakistan"
              grade="Grade: A1 (97%)"
              desc="Studied Physics, Chemistry, and Mathematics. Outstanding academic performance. Marks: 1076 / 1100."
            />
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section id="skills" className="py-24 bg-[#11131A]/50">
        <div className="container mx-auto px-6">
          <SectionHeader title="Technical Arsenal" subtitle="Skills" center />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <SkillCategory icon={<Terminal />} title="Programming" skills={["C++", "Python (Learning)", "Object-Oriented Programming", "File Handling", "Functions & Arrays", "Problem Solving"]} />
            <SkillCategory icon={<Database />} title="Data Science" skills={["Data Science Fundamentals", "Mathematical Foundations", "Probability & Statistics", "Data Analysis (Learning)", "Analytical Thinking"]} />
            <SkillCategory icon={<Server />} title="Computer Science" skills={["Data Structures", "Database Fundamentals", "Software Development", "Game Dev Fundamentals", "Algorithmic Thinking"]} />
            <SkillCategory icon={<LineChart />} title="Mathematics" skills={["Calculus", "Algebra", "Differential Equations", "Mathematical Reasoning"]} />
            <SkillCategory icon={<Zap />} title="General Skills" skills={["Office Automation", "Lab Equipment Familiarity", "Research & Documentation"]} />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Transforming Ideas Into Code" subtitle="Featured Projects" />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <ProjectCard 
              num="01"
              title="Snake Game" 
              tech={["C++", "Raylib", "File Handling", "Game Dev"]}
              desc="A classic Snake Game featuring player movement, collision detection, high-score saving, increasing difficulty, and interactive game mechanics."
            />
            <ProjectCard 
              num="02"
              title="Academic Burnout Prediction System" 
              tech={["C++", "OOP", "File Handling"]}
              desc="Evaluates academic workload (assignments, quizzes, exams) to categorize student burnout levels into Low, Moderate, and Critical."
            />
            <ProjectCard 
              num="03"
              title="Library Management System" 
              tech={["C++", "Classes & Objects", "Encapsulation"]}
              desc="Demonstrates object-oriented programming through library-related management operations including inheritance and polymorphism."
            />
            <ProjectCard 
              num="04"
              title="Banking and ATM Management" 
              tech={["C++", "OOP", "Programming Logic"]}
              desc="Simulates banking operations, including account management, balance checking, and secure transaction-related functionality."
            />
          </div>

          <div className="mt-12 glass-card p-8 rounded-2xl text-center">
            <h3 className="text-xl text-white font-bold mb-4">Other Coding Projects</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Exploring additional concepts through practice projects including a Hospital Management System, Budget Management System, and various Data Structure implementations.</p>
            <button className="px-6 py-3 border border-[#438BFF]/50 text-[#438BFF] rounded-full hover:bg-[#438BFF]/10 transition-colors">
              View GitHub Profile
            </button>
          </div>
        </div>
      </section>

      {/* DATA SCIENCE JOURNEY */}
      <section id="journey" className="py-24 bg-[#11131A]/50">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader title="Exploring the World of Data" subtitle="Data Science Journey" center />
          <p className="text-gray-400 max-w-3xl mx-auto mt-4 mb-16 text-lg">
            Data Science is an exciting field combining mathematics, programming, and analytical thinking. My journey is focused on understanding how data can solve real-world problems and create innovative solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <JourneyStep num="1" title="Programming Fundamentals" active />
            <ChevronRight className="hidden md:block text-[#438BFF] self-center" size={32} />
            <JourneyStep num="2" title="Statistics & Math" active />
            <ChevronRight className="hidden md:block text-[#438BFF] self-center" size={32} />
            <JourneyStep num="3" title="Data Analysis" />
            <ChevronRight className="hidden md:block text-[#438BFF] self-center" size={32} />
            <JourneyStep num="4" title="Practical Projects" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#438BFF]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Let's Connect and Build Something Great" subtitle="Contact" center />
          
          <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <p className="text-gray-400 text-lg">
                I am always open to learning opportunities, meaningful collaborations, and connecting with people passionate about technology.
              </p>
              <div className="space-y-4">
                <ContactInfo icon={<Mail />} text="fabdullah0912368@gmail.com" />
                <ContactInfo icon={<Phone />} text="+92 343 4193249" />
                <ContactInfo icon={<MapPin />} text="Pakistan" />
              </div>
              <div className="flex space-x-4 pt-4">
                <SocialLink icon={<Github />} href="#" />
                <SocialLink icon={<Linkedin />} href="#" />
                <SocialLink icon={<Mail />} href="mailto:fabdullah0912368@gmail.com" />
              </div>
            </div>

            <div className="md:col-span-3 glass-card p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-[#08090D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#438BFF] transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-[#08090D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#438BFF] transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input type="text" className="w-full bg-[#08090D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#438BFF] transition-colors" placeholder="Collaboration / Opportunity" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-[#08090D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#438BFF] transition-colors resize-none" placeholder="Hello Fahad, I would like to..."></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-lg bg-gradient-to-r from-[#438BFF] to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#08090D] border-t border-white/5 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-2">FAHAD ABDULLAH</h4>
            <p className="text-sm text-gray-500">Learning. Exploring. Building. Growing.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mb-6 md:mb-0">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Fahad Abdullah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// --- Sub-components for cleaner structure ---

const NavLinks = ({ mobile, setMobileMenuOpen }) => {
  const links = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];
  return (
    <>
      {links.map(link => (
        <a 
          key={link} 
          href={`#${link.toLowerCase()}`}
          onClick={() => mobile && setMobileMenuOpen(false)}
          className={`text-sm font-medium hover:text-[#438BFF] transition-colors ${mobile ? 'block py-2 text-lg text-gray-300' : 'text-gray-400'}`}
        >
          {link}
        </a>
      ))}
    </>
  );
};

const SectionHeader = ({ title, subtitle, center }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <span className="text-[#438BFF] font-medium tracking-widest uppercase text-sm mb-2 block">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>
  </div>
);

const AboutCard = ({ icon, title, desc }) => (
  <div className="glass-card p-6 rounded-xl flex gap-4 group hover:-translate-y-1 transition-transform duration-300 hover:border-[#438BFF]/30">
    <div className="p-3 bg-white/5 rounded-lg h-fit group-hover:bg-[#438BFF]/10 transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TimelineItem = ({ active, date, title, institution, grade, desc }) => (
  <div className="relative md:pl-12 pl-8 group">
    {/* Dot */}
    <div className={`absolute left-0 md:left-[9px] -translate-x-[50%] md:translate-x-0 top-1 w-4 h-4 rounded-full border-4 border-[#08090D] ${active ? 'bg-[#438BFF] shadow-[0_0_10px_#438BFF]' : 'bg-gray-600'} group-hover:scale-125 transition-transform`}></div>
    
    <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-[#438BFF]/30 transition-colors">
      <span className={`text-sm font-bold tracking-wider uppercase mb-2 block ${active ? 'text-[#438BFF]' : 'text-[#8B5CF6]'}`}>{date}</span>
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <GraduationCap size={16} />
        <span className="font-medium">{institution}</span>
      </div>
      {grade && <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-white text-sm mb-4 border border-white/10">{grade}</div>}
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const SkillCategory = ({ icon, title, skills }) => (
  <div className="glass-card p-6 rounded-2xl hover:border-white/20 transition-colors">
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
      <div className="text-[#438BFF]">{icon}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="px-3 py-1.5 bg-[#08090D] border border-white/5 rounded-md text-sm text-gray-300 hover:text-white hover:border-[#438BFF]/50 transition-colors cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ num, title, tech, desc }) => (
  <div className="glass-card rounded-2xl overflow-hidden group hover:border-[#438BFF]/40 transition-all duration-300 hover:-translate-y-2">
    <div className="h-48 bg-[#08090D] relative overflow-hidden flex items-center justify-center border-b border-white/5 group-hover:bg-[#11131A] transition-colors">
      <div className="absolute inset-0 bg-gradient-to-t from-[#11131A] to-transparent z-10"></div>
      <Code size={64} className="text-gray-800 group-hover:text-[#438BFF]/20 transition-colors" />
      <span className="absolute top-4 right-4 text-4xl font-extrabold text-white/5 z-20">{num}</span>
    </div>
    <div className="p-8 relative z-20">
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#438BFF] transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">{desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((t, i) => (
          <span key={i} className="text-xs font-medium text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <button className="flex-1 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors flex justify-center items-center gap-2">
           View Details
        </button>
        <button className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
          <Github size={18} />
        </button>
      </div>
    </div>
  </div>
);

const JourneyStep = ({ num, title, active }) => (
  <div className={`glass-card p-6 rounded-2xl min-w-[200px] flex-1 max-w-[250px] relative overflow-hidden group ${active ? 'border-[#438BFF]/30' : ''}`}>
    {active && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#438BFF] to-[#8B5CF6]"></div>}
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 ${active ? 'bg-[#438BFF]/20 text-[#438BFF]' : 'bg-white/5 text-gray-500'}`}>
      {num}
    </div>
    <h4 className={`font-bold ${active ? 'text-white' : 'text-gray-400'}`}>{title}</h4>
  </div>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-4 text-gray-300">
    <div className="p-3 bg-white/5 rounded-lg text-[#438BFF]">
      {icon}
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

const SocialLink = ({ icon, href }) => (
  <a href={href} className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-white hover:text-[#438BFF] hover:border-[#438BFF]/50 hover:-translate-y-1 transition-all">
    {icon}
  </a>
);

export default App;