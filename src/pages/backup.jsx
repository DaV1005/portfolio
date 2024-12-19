'use client'
import pet from '../assets/petPic.JPG?height=200&width=400';
import pokemon from '../assets/pokePic.JPG?height=200&width=400';
import expense from "../assets/expensePic.JPG?height=200&width=400";
import openSource from "../assets/openSourcePic.JPG?height=200&width=400";
import david from "../assets/david.jpg";
import inventory from "../assets/inventory.JPG";

import { RotatingSkillsSphere } from '../components/SkillsSphere'
import ParticleBackground from '../components/ParticleBackground';




import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Book, BookText, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
// import Image from 'next/image'


const SkillCard = ({ icon: Icon, title, skills }) => (
  <div className="bg-gradient-to-br from-blue-800 to-teal-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <Icon className="w-12 h-12 text-teal-400 mb-4" />
    <h3 className="text-2xl font-semibold mb-4 text-teal-300">{title}</h3>
    <ul className="list-disc list-inside text-gray-300">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
)

const ProjectCard = ({ title, description, technologies, features, website, image }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-md border border-teal-500 group h-full flex flex-col">
    <img src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-2xl font-semibold mb-4 text-teal-400 group-hover:text-teal-300 transition-colors duration-300">{title}</h3>
    <p className="mb-4 text-purple-200 flex-grow">{description}</p>
    <p className="mb-2 text-sm text-gray-400">Technologies: {technologies}</p>
    <ul className="list-disc list-inside mb-4 text-gray-300">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <a href={website} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 inline-flex items-center transition-colors duration-300 mt-auto">
      View Project <ExternalLink className="ml-1 w-4 h-4" />
    </a>
  </div>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [currentProject, setCurrentProject] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Inventory Management System",
      description: "Developed a full-stack inventory management system to streamline stock tracking and reporting, leveraging AWS services for scalability and reliability.",
      technologies: " React, Node.js, AWS Amplify, AWS EC2, AWS RDS (Postgres)",
      features: [
        "Built and deployed a responsive frontend using React and AWS Amplify.",
        "Designed RESTful APIs for real-time inventory management hosted on AWS EC2.",
        "Configured AWS RDS for secure and efficient database management."
      ],
      website: "https://master.d2kiomxq0p73tg.amplifyapp.com/",
      image: inventory
    },
    {
      title: "Pet Matching Web Application",
      description: "A web app that helps users find their perfect pet match.",
      technologies: "React, API, Node.js, Express.js, MongoDB, JavaScript",
      features: [
        "Integrated the Petfinder API for dynamic pet data retrieval",
        "Utilized React Hooks and Context API for efficient state management",
        "Implemented Express.js and MongoDB for backend operations"
      ],
      website: "https://github.com/DaV1005/pet-Adoption",
      image: pet
    },
    {
      title: "Expenses Management System",
      description: "A comprehensive system for tracking and managing expenses.",
      technologies: "React, Node.js, Express.js, MongoDB, JWT, Axios",
      features: [
        "Implemented JWT-based authentication for secure user access",
        "Utilized React Hooks and Axios for state management and API communication",
        "Designed and deployed RESTful APIs using Node.js and Express.js",
        "Implemented CRUD operations for efficient expense management"
      ],
      website: "https://github.com/DaV1005/Expense_Management",
      image: expense
    },
    {
      title: "Open Source Hub",
      description: "Open Source Hub is a web platform that connects developers with impactful open-source projects.",
      technologies: "React, TypeScript, Express, GitHub API, Tailwind  ",
      features: [
        "Leverages API integration to filter results based on user-defined criteria such as popularity, recency, or specific technologies.",
        "Delivers a fully responsive and mobile-friendly interface, ensuring usability across multiple device resolutions.",
        "Utilizes GitHub's REST API for fetching and aggregating project data, ensuring up-to-date information.",
        "Developed with Node.js and Express for a lightweight, RESTful backend service."
      ],
      website: "https://github.com/DaV1005/open-source-hub",
      image: openSource
    },
    {
      title: "Pokemon-Themed RPG Game",
      description: "An immersive RPG game based on the Pokemon universe.",
      technologies: "Java, Object-Oriented Programming, File I/O",
      features: [
        "Developed using Java and OOP principles",
        "Implemented the Decorator Pattern for dynamic ability addition",
        "Built systems for managing attacks and health",
        "Utilized File I/O for loading external game data"
      ],
      website: "https://github.com/DaV1005/pokemon_textbased",
      image: pokemon
    },
    
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % (projects.length - 2))
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + (projects.length - 2)) % (projects.length - 2))
  }

  return (
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-gray-100 min-h-screen relative">
        
        {/* Header */}
        <header className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-10 transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">
              David Viers
            </h1>
            <nav className="hidden md:flex space-x-6">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`hover:text-teal-400 transition-colors duration-300 ${
                    activeSection === section ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-300'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
            <button onClick={toggleMenu} className="md:hidden text-teal-400 hover:text-teal-300 transition-colors duration-300">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-900 bg-opacity-90 p-4">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block py-2 hover:text-teal-400 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
          )}
        </header>


        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in-down">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500">
                David Viers
              </span>
            </h1>
            <p className="text-2xl mb-8 text-purple-200 animate-fade-in-up">Software Developer</p>
            <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in">
              Hey, I&apos;m David! A Web Developer Crafting Cool, User-Friendly Projects with React, Node.js, and More
            </p>
            <a href="#about" className="mt-8 inline-block animate-bounce">
              <ChevronDown className="w-8 h-8 text-teal-400" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900 bg-opacity-50 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <img src={david} alt="David Viers" className=" w-30 h-30 aspect-square object-none object-bottom  border-4 border-teal-400" />
              <div className="max-w-2xl">
                <p className="text-lg mb-4 text-gray-300">
                  I'm a Bachelor of Science in Computer Science graduate with hands-on experience in software development and web development.
                  My passion lies in creating efficient, scalable, and user-friendly applications that solve real-world problems.
                </p>
                <p className="text-lg mb-4 text-gray-300">
                  With a solid grasp of various programming languages and frameworks, 
                  I’m always excited to dive into new tech and apply it to creative projects. I love working with teams and tackling tough challenges that help me grow as a developer.
                </p>
                <p className="text-lg text-gray-300">
                  When I'm not coding, you’ll catch me spending time with my two dogs or exploring new tech. 
                  I also make sure to balance it all with some outdoor activities for a healthy work-life vibe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="container mx-auto px-4 ">         
            <h2 className="text-4xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Technical Skills</h2>
            <div>
              <RotatingSkillsSphere />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard
                icon={Code}
                title="Programming Languages"
                skills={['Java', 'Python', 'JavaScript', 'TypeScript']}
              />
              <SkillCard
                icon={Book}
                title="Web Development"
                skills={['HTML/CSS', 'React', 'Node.js', 'Express.js', 'RESTful APIs']}
              />
              <SkillCard
                icon={Github}
                title="Tools & Technologies"
                skills={['Git', 'MongoDB', 'Docker', 'AWS', 'Agile/Scrum']}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-900 bg-opacity-50 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Featured Projects</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProject * 33.33}%)` }}>
                  {projects.map((project, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 px-4">
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Education and Certifications Section */}
        <section id="education" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-800 to-teal-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Book className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-teal-300">Education</h3>
                <p className="text-xl mb-2 text-purple-200">B.Sc. Computer Science</p>
                <p className="mb-2 text-gray-300">California State University Long Beach</p>
                <p className="text-gray-400">2021-2024</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-800 to-blue-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <BookText className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-teal-300">Certifications</h3>
                <p className="text-xl mb-2 text-purple-200">J.P. Morgan Software Engineering Virtual Experience</p>
                <p className="mb-2 text-gray-300">Forage</p>
                <p className="text-gray-400">October 2024</p>
                <ul className="list-disc list-inside mt-4 text-gray-300">
                  <li>Set up local dev environment</li>
                  <li>Fixed broken repository files</li>
                  <li>Used Perspective library to generate live data feed graphs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 bg-opacity-50 relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Get In Touch</h2>
            <div className="flex justify-center space-x-8">
              <a href="mailto:viersd05@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 transform hover:scale-110">
                <Mail className="w-10 h-10" />
              </a>
              <a href="https://www.linkedin.com/in/david-viers-2844a32a1" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="w-10 h-10" />
              </a>
              <a href="https://github.com/DaV1005" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 transform hover:scale-110">
                <Github className="w-10 h-10" />
              </a>
            </div>
            <p className="mt-8 text-xl text-purple-200">Westminster, CA 92683 | (714) 766-9379</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 bg-opacity-80 py-6 text-center">
          <p className="text-gray-400">&copy; 2024 David Viers. All rights reserved.</p>
        </footer>
      </div>
  )
}