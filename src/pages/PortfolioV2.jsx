import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Book, DollarSign , BookText} from 'lucide-react'

const AnimatedBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('animated-bg')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.fill()
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas id="animated-bg" className="fixed top-0 left-0 w-full h-full -z-10" />
}

const SkillCard = ({ icon: Icon, title, skills }) => (
  <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <Icon className="w-12 h-12 text-pink-400 mb-4" />
    <h3 className="text-2xl font-semibold mb-4 text-pink-300">{title}</h3>
    <ul className="list-disc list-inside text-gray-300">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
)

const ProjectCard = ({ title, description, technologies, features , website}) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-md transform hover:scale-105 transition-all duration-300 border border-purple-500 group">
    <h3 className="text-2xl font-semibold mb-4 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">{title}</h3>
    <p className="mb-4 text-purple-200">{description}</p>
    <p className="mb-2 text-sm text-gray-400">Technologies: {technologies}</p>
    <ul className="list-disc list-inside mb-4 text-gray-300">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <a href= {website} className="text-pink-400 hover:text-pink-300 inline-flex items-center transition-colors duration-300">
      View Project <ExternalLink className="ml-1 w-4 h-4" />
    </a>
  </div>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'education', 'contact']
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

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-gray-100 min-h-screen relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-10 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            David Viers
          </h1>
          <nav className="hidden md:flex space-x-6">
            {['home', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover:text-pink-400 transition-colors duration-300 ${
                  activeSection === section ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-300'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
          <button onClick={toggleMenu} className="md:hidden text-pink-400 hover:text-pink-300 transition-colors duration-300">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900 bg-opacity-90 p-4">
            {['home', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block py-2 hover:text-pink-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-down">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              David Viers
            </span>
          </h1>
          <p className="text-2xl mb-8 text-purple-200 animate-fade-in-up">Software Developer</p>
          <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in">
            Bachelor of Science in Computer Science graduate with hands-on experience in software development and web development. 
            Seeking an opportunity to apply technical skills in a challenging environment that values continuous learning and innovation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-48" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="rgba(76, 29, 149, 0.1)" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,128C672,107,768,149,864,181.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900 bg-opacity-50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              icon={Code}
              title="Programming Languages"
              skills={['Java', 'Python', 'JavaScript']}
            />
            <SkillCard
              icon={Book}
              title="Web Development"
              skills={['HTML/CSS', 'React', 'Node.js', 'REST API']}
            />
            <SkillCard
              icon={Github}
              title="Version Control"
              skills={['Git']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Pet Matching Web Application"
              description="A web app that helps users find their perfect pet match."
              technologies="React, API, Node.js, Express.js, MongoDB, JavaScript"
              features={[
                "Integrated the Petfinder API for dynamic pet data retrieval",
                "Utilized React Hooks and Context API for efficient state management",
                "Implemented Express.js and MongoDB for backend operations"
              ]}
              website= "https://github.com/DaV1005/pet-Adoption"
              
            />
            <ProjectCard
              title="Pokemon-Themed RPG Game"
              description="An immersive RPG game based on the Pokemon universe."
              technologies="Java, Object-Oriented Programming, File I/O"
              features={[
                "Developed using Java and OOP principles",
                "Implemented the Decorator Pattern for dynamic ability addition",
                "Built systems for managing attacks and health",
                "Utilized File I/O for loading external game data"
              ]}
              website= "https://github.com/DaV1005/pokemon_textbased"
            />
            <ProjectCard
              title="Expenses Management System"
              description="A comprehensive system for tracking and managing expenses."
              technologies="React, Node.js, Express.js, MongoDB, JWT, Axios"
              features={[
                "Implemented JWT-based authentication for secure user access",
                "Utilized React Hooks and Axios for state management and API communication",
                "Designed and deployed RESTful APIs using Node.js and Express.js",
                "Implemented CRUD operations for efficient expense management"
              ]}
              website = "https://github.com/DaV1005/Expense_Management"
            />
          </div>
        </div>
      </section>

      {/* Education and Certifications Section */}
      <section id="education" className="py-20 bg-gray-900 bg-opacity-50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Book className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-pink-300">Education</h3>
              <p className="text-xl mb-2 text-purple-200">B.Sc. Computer Science</p>
              <p className="mb-2 text-gray-300">California State University Long Beach</p>
              <p className="text-gray-400">2021-2024</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-800 to-blue-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <BookText className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-pink-300">Certifications</h3>
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
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:viersd05@gmail.com" className="text-pink-400 hover:text-pink-300 transition-colors duration-300 transform hover:scale-110">
              <Mail className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/david-viers-2844a32a1" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="w-10 h-10" />
            </a>
            <a href="https://github.com/DaV1005" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors duration-300 transform hover:scale-110">
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