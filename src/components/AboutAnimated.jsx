import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaMobile, FaCode, FaRocket } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

function About() {
  const [titleRef, titleVisible] = useScrollAnimation({ delay: 200 })
  const [descRef, descVisible] = useScrollAnimation({ delay: 400 })
  const [skillsContainerRef, visibleSkills] = useStaggeredAnimation(10, 150)

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500', bgColor: 'bg-blue-50 hover:bg-blue-100' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', bgColor: 'bg-green-50 hover:bg-green-100' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', bgColor: 'bg-yellow-50 hover:bg-yellow-100' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', bgColor: 'bg-blue-50 hover:bg-blue-100' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', bgColor: 'bg-cyan-50 hover:bg-cyan-100' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', bgColor: 'bg-green-50 hover:bg-green-100' },
    { name: 'Bases de données', icon: FaDatabase, color: 'text-orange-500', bgColor: 'bg-orange-50 hover:bg-orange-100' },
    { name: 'Développement Mobile', icon: FaMobile, color: 'text-purple-500', bgColor: 'bg-purple-50 hover:bg-purple-100' },
    { name: 'Clean Code', icon: FaCode, color: 'text-gray-700', bgColor: 'bg-gray-50 hover:bg-gray-100' },
    { name: 'Performance', icon: FaRocket, color: 'text-red-500', bgColor: 'bg-red-50 hover:bg-red-100' }
  ]

  const competencies = [
    {
      title: "Développement Frontend",
      description: "Création d'interfaces utilisateur modernes et interactives avec React, Next.js et des frameworks CSS avancés.",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Développement Backend",
      description: "Conception d'APIs robustes et scalables avec Node.js, Express et des bases de données performantes.",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android avec React Native et Flutter.",
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"]
    },
    {
      title: "DevOps & Déploiement",
      description: "Automatisation du déploiement et gestion de l'infrastructure cloud pour des applications scalables.",
      skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"]
    }
  ]

  return (
    <section id="about" className="relative min-h-screen py-16 lg:py-24 bg-gradient-to-br from-light to-light/50 overflow-hidden">
      
      {/* Particules de fond */}
      <div className="absolute inset-0 particle-bg opacity-30">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ease-out ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 lg:mb-6">
            À propos de <span className="text-primary animate-pulse-glow">moi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple mx-auto rounded-full"></div>
        </div>

        {/* Description personnelle */}
        <div 
          ref={descRef}
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ease-out ${
            descVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary-600 leading-relaxed mb-6">
              Développeur passionné avec plus de <span className="text-primary font-semibold">5 ans d'expérience</span> 
              dans la création de solutions digitales innovantes. 
            </p>
            <p className="text-base sm:text-lg text-secondary-500 leading-relaxed">
              Spécialisé dans le développement full-stack moderne, je transforme vos idées en applications 
              web et mobiles performantes, scalables et axées sur l'expérience utilisateur.
            </p>
          </div>
        </div>

        {/* Grille de compétences techniques */}
        <div 
          ref={skillsContainerRef}
          className="mb-16 lg:mb-24"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-dark mb-8 lg:mb-12">
            Technologies & <span className="text-primary">Compétences</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              const isVisible = visibleSkills.has(index)
              
              return (
                <div
                  key={skill.name}
                  className={`group relative p-4 lg:p-6 rounded-2xl border border-gray-100 
                            transition-all duration-500 ease-out hover-lift cursor-pointer ${skill.bgColor}
                            ${isVisible 
                              ? 'opacity-100 transform translate-y-0 scale-100' 
                              : 'opacity-0 transform translate-y-8 scale-95'
                            }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className={`text-3xl lg:text-4xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="mx-auto animate-float" style={{ animationDelay: `${index * 0.2}s` }} />
                    </div>
                    <h4 className="font-semibold text-dark text-sm lg:text-base group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                  
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 
                                 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Domaines d'expertise */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-dark mb-8 lg:mb-12">
            Domaines d'<span className="text-primary">expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {competencies.map((competency, index) => {
              const [compRef, compVisible] = useScrollAnimation({ delay: index * 200 })
              
              return (
                <div
                  key={competency.title}
                  ref={compRef}
                  className={`group relative p-6 lg:p-8 bg-white rounded-3xl shadow-lg border border-gray-100 
                            hover-lift transition-all duration-500 ease-out
                            ${compVisible 
                              ? 'opacity-100 transform translate-y-0' 
                              : 'opacity-0 transform translate-y-8'
                            }`}
                >
                  {/* Effet de gradient animé */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple/5 
                                 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-xl lg:text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                      {competency.title}
                    </h4>
                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {competency.description}
                    </p>
                    
                    {/* Tags de compétences */}
                    <div className="flex flex-wrap gap-2">
                      {competency.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium 
                                   group-hover:bg-primary group-hover:text-dark transition-all duration-300"
                          style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Indicateur de coin */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 
                                 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="group inline-block">
            <p className="text-lg sm:text-xl text-secondary-600 mb-6">
              Prêt à donner vie à votre projet ?
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-600 
                       text-dark font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300 
                       transform hover:scale-105 hover:-translate-y-1 group-hover:animate-pulse-glow"
            >
              <span>Discutons de votre projet</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
